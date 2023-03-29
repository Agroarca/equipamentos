<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaInteiro;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaOpcao;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaTest extends TestCase
{
    use RefreshDatabase;

    public function testRecebeCaracteristicaAcessarEquipamento(): void
    {
        $categoria = Categoria::factory()->create();
        $caracteristica = Caracteristica::factory()->create([
            'categoria_id' => $categoria->id,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
            ->has('caracteristicas', 1, fn (AssertableInertia $page) => $page
                ->where('id', $caracteristica->id)
                ->etc()));
    }

    public function testRecebeTodasCaracteristicasAcessarEquipamento(): void
    {
        $categoria = Categoria::factory()->create();
        Caracteristica::factory()->count(3)->create([
            'categoria_id' => $categoria->id,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
            ->has('caracteristicas', 3));
    }

    public function testRecebeCaracteristicaOpcaoAcessarEquipamento(): void
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristicaOpcao->caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
                ->has('caracteristicas', 1)
                ->where('caracteristicas.0.id', $caracteristicaOpcao->caracteristica_id)
                ->has('caracteristicas.0.opcoes', 1)
                ->where('caracteristicas.0.opcoes.0.id', $caracteristicaOpcao->id)
        );
    }

    public function testPodeSalvarDiversasCarac(): void
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

        $response = $this->actingAs($this->getAdmin())
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

    public function testPodeEnviarSemNaoObrigatorias(): void
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

        $response = $this->actingAs($this->getAdmin())
            ->post(
                "/admin/equipamentos/$equipamento->id/caracteristicas/salvar",
                ["carac-$caracteristicaInteiro->id" => $valor]
            );

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

    public function testNaoPodeEnviarSemObrigatorias(): void
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

        $response = $this->actingAs($this->getAdmin())
            ->post(
                "/admin/equipamentos/$equipamento->id/caracteristicas/salvar",
                ["carac-$caracteristicaInteiro->id" => 10]
            );

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

    public function testPodeSalvarNovamente(): void
    {
        $valor = 10;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Inteiro->value,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post(
                "/admin/equipamentos/$equipamento->id/caracteristicas/salvar",
                ["carac-$caracteristica->id" => $valor]
            );

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
        $response = $this->actingAs($this->getAdmin())
            ->post(
                "/admin/equipamentos/$equipamento->id/caracteristicas/salvar",
                ["carac-$caracteristica->id" => $valor]
            );

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

    public function testRecebeCaracteristicaCategoriaMae(): void
    {
        $categoria = Categoria::factory()->comCategoriaMae()->create();

        Caracteristica::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        Caracteristica::factory()->create([
            'categoria_id' => $categoria->categoria_mae_id,
        ]);

        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $categoria->id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
            ->has('caracteristicas', 2));
    }
}
