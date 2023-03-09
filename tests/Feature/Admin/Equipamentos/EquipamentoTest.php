<?php

namespace Tests\Feature\Equipamentos\Admin;

use App\Models\Equipamentos\Equipamento;
use App\Models\Usuario;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class EquipamentoTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    private function getAdminUser()
    {
        if (is_null($this->usuario)) {
            $this->usuario = Usuario::factory()->admin()->create();
        }

        return $this->usuario;
    }

    public function testPodeAcessar(): void
    {
        $response = $this->actingAs($this->getAdminUser())
            ->get('/admin/equipamentos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Equipamento/Inicio'));
    }

    public function testPodeAcessarCriar()
    {
        $response = $this->actingAs($this->getAdminUser())
            ->get('/admin/equipamentos/criar');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Equipamento/Criar'));
    }

    public function testPodeCriarNovo()
    {
        $equipamento = Equipamento::factory()->make();

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'titulo' => $equipamento->titulo,
            'valor' => $equipamento->valor,
            'ano' => $equipamento->ano,
            'descricao' => $equipamento->descricao,
            'modelo_id' => $equipamento->modelo_id,
            'categoria_id' => $equipamento->categoria_id,
        ]);
    }

    public function testNaoPodeCriarMinimo()
    {
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(9);
        $equipamento->ano = 1899;

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testNaoPodeCriarMaximo()
    {
        $equipamento = Equipamento::factory()->make();
        $equipamento->titulo = Str::random(150);
        $equipamento->ano = Carbon::now()->year + 2;

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/equipamentos/salvar', [
                'titulo' => $equipamento->titulo,
                'valor' => $equipamento->valor,
                'ano' => $equipamento->ano,
                'descricao' => $equipamento->descricao,
                'modelo_id' => $equipamento->modelo_id,
                'categoria_id' => $equipamento->categoria_id,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testPodeAcessarEditar()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->get("/admin/equipamentos/$equipamento->id/editar");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Equipamento/Editar'));
    }

    public function _testPodeEditar()
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(50);
        $novoAno = 2005;

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'titulo' => $novoTitulo,
            'valor' => $equipamento->valor,
            'ano' => $novoAno,
            'descricao' => $equipamento->descricao,
        ]);
    }

    public function testNaoPodeEditarMinimo()
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(5);
        $novoAno = 1899;

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
                'ano' => $novoAno,
                'id' => $equipamento->id,
                'valor' => $equipamento->valor,
                'descricao' => $equipamento->descricao,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testNaoPodeEditarMaximo()
    {
        $equipamento = Equipamento::factory()->create();
        $novoTitulo = Str::random(150);
        $novoAno = Carbon::now()->year + 2;

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/equipamentos/$equipamento->id/atualizar", [
                'titulo' => $novoTitulo,
                'ano' => $novoAno,
                'id' => $equipamento->id,
                'valor' => $equipamento->valor,
                'descricao' => $equipamento->descricao,
            ]);

        $response->assertInvalid(['titulo', 'ano']);
    }

    public function testPodeExcluir()
    {
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->get("/admin/equipamentos/$equipamento->id/excluir");

        $response->assertRedirectToRoute('admin.equipamentos');
        $this->assertDatabaseMissing(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id
        ]);
    }
}
