<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaDecimal;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaValor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaDecimalTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeSalvarDecimal(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 10.2;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarInteiro(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 10;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarString(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(10);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

    public function testPodeSalvarDecimalMinMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 100.3;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'minimo' => 10.5,
            'maximo' => 1000.8,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarDecimalMin(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 100.3;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'minimo' => 10.5,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarDecimalMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 100.3;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'maximo' => 1000.2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarDecimalMenorMin(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 10.2;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'minimo' => 10.3,
            'maximo' => 1000,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

    public function testNaoPodeSalvarDecimalMenorMinSemMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 5.5;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'minimo' => 10.8,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

    public function testNaoPodeSalvarDecimalMaiorMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 1000.4;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'minimo' => 10.2,
            'maximo' => 1000.3,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

    public function testNaoPodeSalvarDecimalMaiorMaxSemMin(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 5000;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'maximo' => 1000,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

    public function testPodeSalvarDecimalQuantidade(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 10.22;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'quantidade' => 2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarDecimalMenorQuantidade(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 10.2;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'quantidade' => 2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarInteiroQuantidade(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 10;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'quantidade' => 2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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

        $this->assertDatabaseHas(app(CaracteristicaDecimal::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarDecimalMaiorQuantidade(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = 500.999;
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::Decimal,
            'quantidade' => 2,
        ]);
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($usuario)
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
