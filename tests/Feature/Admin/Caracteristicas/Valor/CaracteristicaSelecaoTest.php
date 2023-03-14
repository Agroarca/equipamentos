<?php

namespace Tests\Feature\Admin\Caracteristicas\Valor;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Caracteristicas\Valor\CaracteristicaOpcao;
use App\Models\Caracteristicas\Valor\CaracteristicaSelecao;
use App\Models\Caracteristicas\Valor\CaracteristicaValor;
use App\Models\Equipamentos\Equipamento;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CaracteristicaSelecaoTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeSalvarOpcao()
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
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

    public function testNaoPodeSalvarOpcaoInvalida()
    {
        $caracteristicaOpcao = CaracteristicaOpcao::factory()->create();
        $caracteristica = $caracteristicaOpcao->caracteristica;
        $equipamento = Equipamento::factory()->create([
            'categoria_id' => $caracteristica->categoria_id,
        ]);

        $response = $this->actingAs($this->usuario)
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
