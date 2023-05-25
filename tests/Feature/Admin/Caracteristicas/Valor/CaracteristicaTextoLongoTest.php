<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaTextoLongo;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaValor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaTextoLongoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeSalvarString(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(10);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoLongoMinMax(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
            'minimo' => 10,
            'maximo' => 1000,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoLongoMin(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
            'minimo' => 10,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoLongoMax(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
            'maximo' => 1000,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarTextoLongoMenorMin(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(5);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
            'minimo' => 10,
            'maximo' => 1000,
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

    public function testNaoPodeSalvarTextoLongoMenorMinSemMax(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(5);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
            'minimo' => 10,
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

    public function testNaoPodeSalvarTextoLongoMaiorMax(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(5000);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
            'minimo' => 10,
            'maximo' => 1000,
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

    public function testNaoPodeSalvarTextoLongoMaiorMaxSemMin(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = Str::random(5000);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
            'maximo' => 1000,
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

    public function testPodeSalvarTextoMuitoLongo(): void
    {
        $this->ignorarTodasPermissoes();
        $valor = fake()->paragraph(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoLongo,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoLongo::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }
}
