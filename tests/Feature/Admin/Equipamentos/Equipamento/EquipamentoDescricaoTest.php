<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class EquipamentoDescricaoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarEditarDescricao(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarDescricao');
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/descricao");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Descricao')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testAtualizarDescricao(): void
    {
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento:editarDescricao');
        $equipamento = Equipamento::factory()->create();
        $novaDescricao = fake()->paragraph(3);

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/atualizardescricao", ['descricao' => $novaDescricao]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarDescricao', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'descricao' => $novaDescricao,
        ]);
    }
}
