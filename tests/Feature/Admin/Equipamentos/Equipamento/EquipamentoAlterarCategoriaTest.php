<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Enums\Equipamentos\Caracteristicas\TipoCaracteristica;
use App\Models\Equipamentos\Cadastro\Categoria;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Caracteristicas\Caracteristica;
use App\Models\Equipamentos\Caracteristicas\CaracteristicaEquipamento;
use App\Models\Equipamentos\Caracteristicas\Valor\CaracteristicaTextoCurto;
use App\Services\Equipamentos\EquipamentoCaracteristicaService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;
use Illuminate\Support\Str;

class EquipamentoAlterarCategoriaTest extends TestCase
{
    use RefreshDatabase;

    public function setupAlterarCategoria(): array
    {
        $caracEquipService = app(EquipamentoCaracteristicaService::class);

        $categoria = Categoria::factory()->create();
        $categoriaEquipamento = Categoria::factory()->create(['categoria_mae_id' => $categoria->id]);
        $novaCategoria = Categoria::factory()->create(['categoria_mae_id' => $categoria->id]);

        $equipamento = Equipamento::factory()->create(['categoria_id' => $categoriaEquipamento->id]);

        $caracCategoria = Caracteristica::factory()->create([
            'categoria_id' => $categoria->id,
            'tipo' => TipoCaracteristica::TextoCurto,
        ]);
        $caracNovaCategoria = Caracteristica::factory()->create([
            'categoria_id' => $novaCategoria->id,
            'tipo' => TipoCaracteristica::TextoCurto,
        ]);
        $caracCategoriaEquipamento = Caracteristica::factory()->create([
            'categoria_id' => $categoriaEquipamento->id,
            'tipo' => TipoCaracteristica::TextoCurto,
        ]);

        $caracEquipService->salvarCaracteristica($equipamento, $caracCategoriaEquipamento->id, Str::random(25));
        $caracEquipService->salvarCaracteristica($equipamento, $caracCategoria->id, Str::random(25));

        $caracEquipamento = CaracteristicaEquipamento::where('equipamento_id', $equipamento->id)
            ->where('caracteristica_id', $caracCategoriaEquipamento->id)
            ->first();

        $caracEquipamentoValor = $caracEquipamento->valor;

        return compact(
            'categoria',
            'categoriaEquipamento',
            'novaCategoria',
            'equipamento',
            'caracCategoria',
            'caracNovaCategoria',
            'caracCategoriaEquipamento',
            'caracEquipamento',
            'caracEquipamentoValor'
        );
    }

    public function testPodeEscolherCategoria(): void
    {
        $equipamento = Equipamento::factory()->create();
        Categoria::factory()->count(3)->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar'))
            ->get("/admin/equipamentos/$equipamento->id/categoria/escolher");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/EscolherCategoria')
                ->where('equipamento.id', $equipamento->id)
                ->where('categoria', null)
                ->has('categorias', 4)
        );
    }

    public function testPodeEscolherCategoriaFilha(): void
    {
        $equipamento = Equipamento::factory()->create();
        $categoria = Categoria::factory()->comCategoriaMae()->create();

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar'))
            ->get("/admin/equipamentos/$equipamento->id/categoria/escolher/$categoria->categoria_mae_id");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/EscolherCategoria')
                ->where('equipamento.id', $equipamento->id)
                ->where('categoria.id', $categoria->categoria_mae_id)
                ->has('categorias', 1)
        );
    }

    public function testPodeSelecionarCategoria(): void
    {
        $data = $this->setupAlterarCategoria();

        $novaCategoria = $data['novaCategoria'];
        $equipamento = $data['equipamento'];
        $caracCategoria = $data['caracCategoria'];
        $caracNovaCategoria = $data['caracNovaCategoria'];
        $caracCategoriaEquipamento = $data['caracCategoriaEquipamento'];

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar'))
            ->get("/admin/equipamentos/$equipamento->id/categoria/selecionar/$novaCategoria->id");

        $response->assertStatus(200);
        $response->assertInertia(
            fn (AssertableInertia $page) => $page
                ->component('Admin/Equipamentos/Cadastro/Equipamento/Editar/SelecionarCategoria')
                ->where('equipamento.id', $equipamento->id)
                ->where('categoria.id', $novaCategoria->id)
                ->has('caracteristicas.mantidas', 1)
                ->where('caracteristicas.mantidas.0.id', $caracCategoria->id)
                ->has('caracteristicas.novas', 1)
                ->where('caracteristicas.novas.0.id', $caracNovaCategoria->id)
                ->has('caracteristicas.removidas', 1)
                ->where('caracteristicas.removidas.0.id', $caracCategoriaEquipamento->id)
        );
    }

    public function testPodeAlterarCategoria(): void
    {
        $data = $this->setupAlterarCategoria();

        $novaCategoria = $data['novaCategoria'];
        $equipamento = $data['equipamento'];
        $caracNovaCategoria = $data['caracNovaCategoria'];
        $caracEquipamento = $data['caracEquipamento'];
        $caracEquipamentoValor = $data['caracEquipamentoValor'];

        $caracNovaCategoriaValor = Str::random(25);

        $response = $this->actingAs($this->getAdminComPermissao('equipamentos.cadastro.equipamento:editar'))
            ->post("/admin/equipamentos/$equipamento->id/categoria/alterar/$novaCategoria->id", [
                "carac-$caracNovaCategoria->id" => $caracNovaCategoriaValor,
            ]);

        $response->assertRedirectToRoute('admin.equipamentos.editar', $equipamento->id);

        // Foi alterada a categoria
        $this->assertDatabaseHas(app(Equipamento::class)->getTable(), [
            'id' => $equipamento->id,
            'categoria_id' => $novaCategoria->id,
        ]);

        // Foi removida a caracteristica da categoria antiga
        $this->assertDatabaseMissing(app(CaracteristicaEquipamento::class)->getTable(), [
            'id' => $caracEquipamento->id,
        ]);

        $this->assertDatabaseMissing(app(CaracteristicaTextoCurto::class)->getTable(), [
            'id' => $caracEquipamentoValor->id,
        ]);

        // Foi adicionada a caracteristica da nova categoria
        $this->assertDatabaseHas(app(CaracteristicaEquipamento::class)->getTable(), [
            'equipamento_id' => $equipamento->id,
            'caracteristica_id' => $caracNovaCategoria->id,
        ]);

        $caracEquipamento = CaracteristicaEquipamento::where('equipamento_id', $equipamento->id)
            ->where('caracteristica_id', $caracNovaCategoria->id)
            ->first();

        $this->assertNotNull($caracEquipamento);

        $this->assertDatabaseHas(app(CaracteristicaTextoCurto::class)->getTable(), [
            'id' => $caracEquipamento->valor_id,
            'valor' => $caracNovaCategoriaValor,
        ]);
    }
}
