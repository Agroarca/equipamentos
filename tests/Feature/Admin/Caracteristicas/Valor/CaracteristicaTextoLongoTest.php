<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Caracteristicas\Valor\CaracteristicaTextoLongo;
use App\Models\Caracteristicas\Valor\CaracteristicaValor;
use App\Models\Equipamentos\Equipamento;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaTextoLongoTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeSalvarString()
    {
        $valor = Str::random(10);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoLongoMinMax()
    {
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'minimo' => 10,
            'maximo' => 1000,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoLongoMin()
    {
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'minimo' => 10,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoLongoMax()
    {
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'maximo' => 1000,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarTextoLongoMenorMin()
    {
        $valor = Str::random(5);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'minimo' => 10,
            'maximo' => 1000,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertInvalid(["carac-$caracteristica->id"]);
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        foreach (CaracteristicaValor::$tipo as $valor) {
            $this->assertDatabaseCount(app($valor)->getTable(), 0);
        }
    }

    public function testNaoPodeSalvarTextoLongoMenorMinSemMax()
    {
        $valor = Str::random(5);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'minimo' => 10,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertInvalid(["carac-$caracteristica->id"]);
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        foreach (CaracteristicaValor::$tipo as $valor) {
            $this->assertDatabaseCount(app($valor)->getTable(), 0);
        }
    }

    public function testNaoPodeSalvarTextoLongoMaiorMax()
    {
        $valor = Str::random(5000);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'minimo' => 10,
            'maximo' => 1000,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertInvalid(["carac-$caracteristica->id"]);
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        foreach (CaracteristicaValor::$tipo as $valor) {
            $this->assertDatabaseCount(app($valor)->getTable(), 0);
        }
    }

    public function testNaoPodeSalvarTextoLongoMaiorMaxSemMin()
    {
        $valor = Str::random(5000);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
            'maximo' => 1000,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertInvalid(["carac-$caracteristica->id"]);
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        foreach (CaracteristicaValor::$tipo as $valor) {
            $this->assertDatabaseCount(app($valor)->getTable(), 0);
        }
    }

    public function testPodeSalvarTextoMuitoLongo()
    {
        $valor = fake()->paragraph(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo->value,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }
}
