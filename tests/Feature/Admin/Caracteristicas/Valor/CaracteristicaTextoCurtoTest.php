<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaTextoCurto;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaValor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Str;

class CaracteristicaTextoCurtoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeSalvarString(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(10);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoCurto::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoCurtoMinMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
            'minimo' => 10,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoCurto::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoCurtoMin(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
            'minimo' => 10,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoCurto::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testPodeSalvarTextoCurtoMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(100);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
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

        $this->assertDatabaseHas(app(CaracteristicaTextoCurto::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'valor' => $valor,
        ]);
    }

    public function testNaoPodeSalvarTextoCurtoMenorMin(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(5);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
            'minimo' => 10,
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

    public function testNaoPodeSalvarTextoCurtoMenorMinSemMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(5);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
            'minimo' => 10,
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

    public function testNaoPodeSalvarTextoCurtoMaiorMax(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(5000);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
            'minimo' => 10,
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

    public function testNaoPodeSalvarTextoCurtoMaiorMaxSemMin(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $valor = Str::random(5000);
        $caracteristica = Caracteristica::factory()->create([
            'tipo' => TipoCaracteristica::TextoCurto,
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
}
