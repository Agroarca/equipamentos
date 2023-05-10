<?php

namespace Tests\Feature\Site\Equipamento;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Log;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class EditarEquipamentoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarEditar(): void
    {
        $usuario = $this->getUsuario();
        $equipamento = Equipamento::factory()->statusAprovado()->create([
            'usuario_id' => $usuario->id,
        ]);

        $response = $this->actingAs($usuario)->get("/equipamento/cadastro/editar/{$equipamento->id}");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->compone   nt('Site/Equipamento/Cadastrar/Novo'));
    }

    public function testPodeEditaEquipamento(): void
    {
        $usuario = $this->getUsuario();
        $equipamento = Equipamento::factory()->statusAprovado()->create([
            'usuario_id' => $usuario->id,
        ]);

        $response = $this->actingAs($usuario)->put("/equipamento/cadastro/editar/{$equipamento->id}", [
            'nome' => 'Teste',
            'descricao' => 'Teste',
            'categoria' => 'Teste',
            'marca' => 'Teste',
            'modelo' => 'Teste',
            'preco' => '10.00',
        ]);

        $response->assertStatus(302);
        $response->assertRedirect('/equipamento/cadastro/editar/' . $equipamento->id);
        $response->assertSessionHas('success', 'Equipamento editado com sucesso!');
    }
}
