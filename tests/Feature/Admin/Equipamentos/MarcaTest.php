<?php

namespace Tests\Feature\Equipamentos\Admin;

use App\Models\Equipamentos\Marca;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class MarcaTest extends TestCase
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
            ->get('/admin/marcas');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Marca/Inicio'));
    }

    public function testPodeAcessarCriar()
    {
        $response = $this->actingAs($this->getAdminUser())
            ->get('/admin/marcas/criar');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Marca/Criar'));
    }

    public function testPodeCriarNova()
    {
        $nome = Str::random(25);

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/marcas/salvar', [
                'nome' => $nome
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'nome' => $nome
        ]);
    }

    public function testNaoPodeCriarMinimoCaracteres()
    {
        $nome = 'aa';

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/marcas/salvar', [
                'nome' => $nome
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarMaximoCaracteres()
    {
        $nome = Str::random(150);

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/marcas/salvar', [
                'nome' => $nome
            ]);

        $response->assertInvalid('nome');
    }

    public function testPodeAcessarEditar()
    {
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->get("/admin/marcas/$marca->id/editar");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Marca/Editar'));
    }

    public function testPodeEditar()
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(25);

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseHas(app(Marca::class)->getTable(), [
            'id' => $marca->id,
            'nome' => $novoNome
        ]);
    }

    public function testNaoPodeEditarMinimoCaracteres()
    {
        $marca = Marca::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeEditarMaximoCaracteres()
    {
        $marca = Marca::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/marcas/$marca->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
    }

    public function testPodeExcluir()
    {
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->get("/admin/marcas/$marca->id/excluir");

        $response->assertRedirectToRoute('admin.marcas');
        $this->assertDatabaseMissing(app(Marca::class)->getTable(), [
            'id' => $marca->id
        ]);
    }
}
