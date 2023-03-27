<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Caracteristicas\Valor\CaracteristicaInteiro;
use App\Models\Caracteristicas\Valor\CaracteristicaOpcao;
use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Equipamento;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testRecebeCaracteristicaAcessarEquipamento()
    {
        $categoria = Categoria::factory()->create();
        $caracteristica = Caracteristica::factory()->create([
            'categoria_id' => $categoria->id,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Editar/Cadastro')
            ->has('caracteristicas', 1, fn (AssertableInertia $page) => $page
                ->where('id', $caracteristica->id)
                ->etc()));
    }

    public function testRecebeTodasCaracteristicasAcessarEquipamento()
    {
        $categoria = Categoria::factory()->create();
        $caracteristicas = Caracteristica::factory()->count(3)->create([
            'categoria_id' => $categoria->id,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Editar/Cadastro')
            ->has('caracteristicas', 3));
    }

    public function testRecebeCaracteristicaOpcaoAcessarEquipamento()
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristicaOpcao->caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamento/Editar/Cadastro')
                ->has('caracteristicas', 1)
                ->where('caracteristicas.0.id', $caracteristicaOpcao->caracteristica_id)
                ->has('caracteristicas.0.opcoes', 1)
                ->where('caracteristicas.0.opcoes.0.id', $caracteristicaOpcao->id)
        );
    }

    public function testPodeSalvarDiversasCarac()
    {
        $categoria = Categoria::factory()->create();
        $caracteristicaInteiro = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
            'categoria_id' => $categoria->id,
        ]);
        $caracteristicaDecimal = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'categoria_id' => $categoria->id,
        ]);
        $caracteristicaTextoCurto = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto->value,
            'categoria_id' => $categoria->id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristicaInteiro->id" => 10,
                "carac-$caracteristicaDecimal->id" => 20.5,
                "carac-$caracteristicaTextoCurto->id" => Str::random(20),
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarCaracteristicas', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaInteiro->id,
            'equipamento_id' => $equipamento->id,
        ]);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaDecimal->id,
            'equipamento_id' => $equipamento->id,
        ]);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaTextoCurto->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeEnviarSemNaoObrigatorias()
    {
        $valor = 10;
        $categoria = Categoria::factory()->create();
        $caracteristicaInteiro = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
            'categoria_id' => $categoria->id,
            'obrigatorio' => true,
        ]);
        $caracteristicaDecimal = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'categoria_id' => $categoria->id,
            'obrigatorio' => false,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristicaInteiro->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarCaracteristicas', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaInteiro->id,
            'equipamento_id' => $equipamento->id,
        ]);
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaDecimal->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarSemObrigatorias()
    {
        $categoria = Categoria::factory()->create();
        $caracteristicaInteiro = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
            'categoria_id' => $categoria->id,
            'obrigatorio' => true,
        ]);
        $caracteristicaDecimal = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'categoria_id' => $categoria->id,
            'obrigatorio' => true,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristicaInteiro->id" => 10,
            ]);

        $response->assertInvalid("carac-$caracteristicaDecimal->id");
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaInteiro->id,
            'equipamento_id' => $equipamento->id,
        ]);
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristicaDecimal->id,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeSalvarNovamente()
    {
        $valor = 10;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarCaracteristicas', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaInteiro::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);

        $valor = 15;
        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarCaracteristicas', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaInteiro::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testRecebeCaracteristicaCategoriaMae()
    {
        $categoria = Categoria::factory()->comCategoriaMae()->create();

        $caracteristica = Caracteristica::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $caracteristicaMae = Caracteristica::factory()->create([
            'categoria_id' => $categoria->categoria_mae_id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Editar/Cadastro')
            ->has('caracteristicas', 2));
    }
}
