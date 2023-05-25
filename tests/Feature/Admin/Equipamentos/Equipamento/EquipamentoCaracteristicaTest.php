<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaInteiro;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class EquipamentoCaracteristicaTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarEditarCaracteristicas(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $this->ignorarTodasPermissoes();
        $equipamento = Equipamento::factory()->create();
        $caracteristicas = Caracteristica::factory()->count(6)->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('caracteristicas', count($caracteristicas)));
    }

    public function testPodeAcessarEditarCaracteristicaValor(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarCaracteristicas');
        $equipamento = Equipamento::factory()->create();
        $caracteristica = Caracteristica::factory()->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro,
        ]);

        $caracEquip = CaracteristicaEquipamento::create([
            'equipamento_id' => $equipamento->id,
            'caracteristica_id' => $caracteristica->id,
        ]);

        $caracInt = CaracteristicaInteiro::create([
            'valor' => 10,
            'caracteristica_equipamento_id' => $caracEquip->id,
        ]);

        $caracEquip->valor()->associate($caracInt);
        $caracEquip->save();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/caracteristicas");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Caracteristicas')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('caracteristicas', 1)
            ->where('caracteristicas.0.id', $caracteristica->id)
            ->where('caracteristicas.0.valor', $caracInt->valor));
    }
}
