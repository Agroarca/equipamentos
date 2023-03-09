<?php

namespace Tests\Feature\Equipamentos\Admin;

use App\Models\Equipamentos\Marca;
use App\Models\Equipamentos\Modelo;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class ModeloTest extends TestCase
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
            ->get('/admin/modelos');


        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Modelo/Inicio'));
    }

    public function testPodeAcessarCriar()
    {
        $response = $this->actingAs($this->getAdminUser())
            ->get('/admin/modelos/criar');
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Modelo/Criar'));
    }

    public function testPodeCriarNovo()
    {
        $nome = Str::random(25);
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.modelos');
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'nome' => $nome,
            'marca_id' => $marca->id
        ]);
    }

    public function testNaoPodeCriarMinimoCaracteres()
    {
        $nome = 'aa';
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeCriarMaximoCaracteres()
    {
        $nome = Str::random(150);
        $marca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->post('/admin/modelos/salvar', [
                'nome' => $nome,
                'marca_id' => $marca->id
            ]);

        $response->assertInvalid('nome');
    }

    public function testPodeAcessarEditar()
    {
        $modelo = Modelo::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->get("/admin/modelos/$modelo->id/editar");
        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page->component('Admin/Modelo/Editar'));
    }

    public function testPodeEditar()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(25);
        $novaMarca = Marca::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome,
                'marca_id' => $novaMarca->id
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.modelos');
        $this->assertDatabaseHas(app(Modelo::class)->getTable(), [
            'id' => $modelo->id,
            'nome' => $novoNome,
            'marca_id' => $novaMarca->id
        ]);
    }

    public function testNaoPodeEditarMinimoCaracteres()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = 'aa';

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
    }

    public function testNaoPodeEditarMaximoCaracteres()
    {
        $modelo = Modelo::factory()->create();
        $novoNome = Str::random(150);

        $response = $this->actingAs($this->getAdminUser())
            ->post("/admin/modelos/$modelo->id/atualizar", [
                'nome' => $novoNome
            ]);

        $response->assertInvalid('nome');
    }

    public function testPodeExcluir()
    {
        $modelo = Modelo::factory()->create();

        $response = $this->actingAs($this->getAdminUser())
            ->get("/admin/modelos/$modelo->id/excluir");

        $response->assertRedirectToRoute('admin.modelos');
        $this->assertDatabaseMissing(app(Modelo::class)->getTable(), [
            'id' => $modelo->id
        ]);
    }
}
