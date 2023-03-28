<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaOpcao;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaSelecao;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaValor;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CaracteristicaSelecaoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeSalvarOpcao(): void
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => $caracteristicaOpcao->id,
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

        $this->assertDatabaseHas(app(CaracteristicaSelecao::class)->getTable(), [
            'id' => $caracEquip->valor_id,
            'caracteristicas_opcoes_id' => $caracteristicaOpcao->id,
        ]);
    }

    public function testNaoPodeSalvarOpcaoInvalida(): void
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/equipamentos/$equipamento->id/caracteristicas/salvar", [
                "carac-$caracteristica->id" => ($caracteristicaOpcao->id + 1),
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
