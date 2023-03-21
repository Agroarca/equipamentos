<?php

namespace Tests\Feature\Bugs;

use App\Enums\Caracteristicas\TipoCaracteristica;
use App\Models\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Equipamento;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class I117 extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeAcessarEditar()
    {
        $equipamento = Equipamento::factory()->create();
        $caracteristicas = Caracteristica::factory()->count(6)->create([
            'categoria_id' => $equipamento->categoria_id,
            'tipo' => TipoCaracteristica::Inteiro->value,
        ]);

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamento/Editar')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id)
            ->has('equipamento.categoria')
            ->has('equipamento.modelo')
            ->has('equipamento.modelo.marca')
            ->has('caracteristicas', count($caracteristicas)));
    }
}
