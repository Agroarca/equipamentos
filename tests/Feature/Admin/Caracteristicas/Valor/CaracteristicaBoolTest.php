<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaBooleano;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaValor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaBoolTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeSalvarBoolTrue(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = true;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Booleano,
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

        $this->assertDatabaseHas(app(CaracteristicaBooleano::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarBoolFalse(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = true;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Booleano,
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

        $this->assertDatabaseHas(app(CaracteristicaBooleano::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarInt(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = 10;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Booleano,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post(
                "/admin/equipamentos/$equipamento->id/caracteristicas/salvar",
                ["carac-$caracteristica->id" => $valor]
            );

        $response->assertInvalid(["carac-$caracteristica->id"]);

        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        foreach (CaracteristicaValor::$tipo as $valor) {
            $this->assertDatabaseCount(app($valor)->getTable(), 0);
        }
    }

    public function testNaoPodeSalvarDecimal(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = 10.2;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Booleano,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post(
                "/admin/equipamentos/$equipamento->id/caracteristicas/salvar",
                ["carac-$caracteristica->id" => $valor]
            );

        $response->assertInvalid(["carac-$caracteristica->id"]);

        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'caracteristica_id' => $caracteristica->id,
            'equipamento_id' => $equipamento->id,
        ]);

        foreach (CaracteristicaValor::$tipo as $valor) {
            $this->assertDatabaseCount(app($valor)->getTable(), 0);
        }
    }

    public function testNaoPodeSalvarString(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(15);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Booleano,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post(
                "/admin/equipamentos/$equipamento->id/caracteristicas/salvar",
                ["carac-$caracteristica->id" => $valor]
            );

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
