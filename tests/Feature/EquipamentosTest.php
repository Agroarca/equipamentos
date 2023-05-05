<?php

namespace Tests\Feature;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Illuminate\Support\Str;
use Tests\TestCase;

class EquipamentosTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarMeusEquipamentos(): void
    {
        $response = $this->actingAs($this->getUsuario())
            ->get('/perfil/equipamentos');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Perfil/Equipamentos'));
    }

    public function testPodeAcessarMeusEquipamentosComEquipamentos(): void
    {
        $usuario = $this->getUsuario();
        Equipamento::factory()->count(2)->create([
            'usuario_id' => $usuario->id,
        ]);

        $response = $this->actingAs($usuario)
            ->get('/perfil/equipamentos');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Perfil/Equipamentos')
            ->has('equipamentos.data', 2));
    }

    public function testNaoPodeAcessarMeusEquipamentosComEquipamentosDeOutroUsuario(): void
    {
        $usuario = $this->getUsuario();
        $outroUsuario = $this->getUsuario();
        Equipamento::factory()->count(2)->create([
            'usuario_id' => $outroUsuario->id,
        ]);

        $response = $this->actingAs($usuario)
            ->get('/perfil/equipamentos');

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Perfil/Equipamentos')
            ->has('equipamentos.data', 0));
    }

    public function testPodeAcessarEquipamento(): void
    {
        $equipamento = Equipamento::factory()->statusAprovado()->create();
        $response = $this->get("/equipamento/{$equipamento->id}");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Inicio')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testNaoPodeAcessarEquipamentoNaoAprovado(): void
    {
        $equipamento = Equipamento::factory()->create();
        $response = $this->get("/equipamento/{$equipamento->id}");

        $response->assertStatus(404);
    }

    public function testPodeAcessarEquipamentoReprovado(): void
    {
        $usuario = $this->getUsuario();
        $equipamento = Equipamento::factory()->statusReprovado()->create([
            'motivo_reprovado' => Str::random(25),
            'usuario_id' => $usuario->id,
        ]);

        $response = $this->actingAs($usuario)->get("equipamento/reprovado/{$equipamento->id}");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Site/Equipamento/Reprovado')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testNaoPodeAcessarEquipamentoReprovadoNaoReprovado(): void
    {
        $usuario = $this->getUsuario();
        $equipamento = Equipamento::factory()->create([
            'usuario_id' => $usuario->id,
        ]);
        $response = $this->actingAs($usuario)->get("equipamento/reprovado/{$equipamento->id}");

        $response->assertStatus(404);
    }

    public function testNaoPodeAcessarEquipamentoReprovadoDeOutraPessoa(): void
    {
        $usuario = $this->getUsuario();
        $outroUsuario = $this->getUsuario();
        $equipamento = Equipamento::factory()->statusReprovado()->create([
            'usuario_id' => $outroUsuario->id,
        ]);
        $response = $this->actingAs($usuario)
            ->get("equipamento/reprovado/{$equipamento->id}");

        $response->assertStatus(404);
    }
}
