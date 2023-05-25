<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Enums\Equipamentos\Cadastro\StatusEquipamento;
use App\Models\Equipamentos\Cadastro\Equipamento;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class EquipamentoAprovacaoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarEditarAprovacao(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:aprovarReprovar');
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/aprovacao");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/Aprovacao')
            ->has('equipamento')
            ->where('equipamento.id', $equipamento->id));
    }

    public function testNaoPodeAcessarEditarAprovacaoAposAprovarEquipamento(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:aprovarReprovar');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Aprovado,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/aprovacao");

        $response->assertStatus(403);
    }

    public function testNaoPodeAcessarEditarAprovacaoAposReprovarEquipamento(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:aprovarReprovar');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Reprovado,
        ]);

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamento->id/editar/aprovacao");

        $response->assertStatus(403);
    }

    public function testPodeAprovarEquipamento(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:aprovarReprovar');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Aprovado->value,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Aprovado->value,
        ]);
    }

    public function testNaoPodeAprovarEquipamentoComMotivo(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:aprovarReprovar');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Aprovado->value,
                'motivo_reprovado' => 'Motivo de teste',
            ]);

        $response->assertInvalid('motivo_reprovado');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Aprovado->value,
        ]);
    }

    public function testPodeReprovarEquipamento(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:aprovarReprovar');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Reprovado->value,
                'motivo_reprovado' => 'Motivo de teste',
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Reprovado->value,
        ]);
    }

    public function testNaoPodeReprovarEquipamentoSemMotivo(): void
    {
        $usuario = $this->getAdminComPermissao('administracao.permissoes.equipamento:aprovarReprovar');
        $equipamento = Equipamento::factory()->create([
            'status' => StatusEquipamento::Criado,
        ]);

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/status/atualizar", [
                'status' => StatusEquipamento::Reprovado->value,
            ]);

        $response->assertInvalid('motivo_reprovado');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'status' => StatusEquipamento::Reprovado->value,
        ]);
    }
}
