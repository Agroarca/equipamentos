<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaDecimal;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaValor;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaDecimalTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeSalvarDecimal()
    {
        $valor = 10.2;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarInteiro()
    {
        $valor = 10;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarString()
    {
        $valor = Str::random(10);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
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

    public function testPodeSalvarDecimalMinMax()
    {
        $valor = 100.3;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'minimo' => 10.5,
            'maximo' => 1000.8,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarDecimalMin()
    {
        $valor = 100.3;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'minimo' => 10.5,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarDecimalMax()
    {
        $valor = 100.3;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'maximo' => 1000.2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarDecimalMenorMin()
    {
        $valor = 10.2;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'minimo' => 10.3,
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

    public function testNaoPodeSalvarDecimalMenorMinSemMax()
    {
        $valor = 5.5;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'minimo' => 10.8,
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

    public function testNaoPodeSalvarDecimalMaiorMax()
    {
        $valor = 1000.4;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'minimo' => 10.2,
            'maximo' => 1000.3,
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

    public function testNaoPodeSalvarDecimalMaiorMaxSemMin()
    {
        $valor = 5000;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
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

    public function testPodeSalvarDecimalQuantidade()
    {
        $valor = 10.22;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'quantidade' => 2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarDecimalMenorQuantidade()
    {
        $valor = 10.2;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'quantidade' => 2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarInteiroQuantidade()
    {
        $valor = 10;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'quantidade' => 2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $valor,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $caracEquip = CaracteristicaEquipamento::firstWhere([
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarDecimalMaiorQuantidade()
    {
        $valor = 500.999;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal->value,
            'quantidade' => 2,
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
}
