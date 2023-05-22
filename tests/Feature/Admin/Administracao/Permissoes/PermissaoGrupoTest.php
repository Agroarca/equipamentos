<?php

namespace Tests\Feature\Admin\Administracao\Permissoes;

use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Administracao\Permissoes\PermissaoGrupo;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class PermissaoGrupoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.permissao_grupo:ver'))
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/permissoes");

        $response->assertStatus(200);
    }

    public function testPodeAcessarComDados(): void
    {
        $grupo = Grupo::factory()->create();

        app(PermissoesService::class)->salvarPermissoesGrupo($grupo, [
            [
                'chave' => 'administracao.permissoes.grupo:ver',
                'valor' => true,
            ],
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.permissao_grupo:ver'))
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/permissoes");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Administracao/Permissoes/PermissaoGrupo/Inicio')
            ->where('grupo.id', $grupo->id)
            ->has('permissoes')
            ->where('permissoes.0.grupos.0.chave', 'administracao.permissoes')
            ->where('permissoes.0.grupos.0.grupos.0.chave', 'administracao.permissoes.grupo')
            ->where('permissoes.0.grupos.0.grupos.0.permissoes.0.chave', 'administracao.permissoes.grupo:ver')
            ->where('permissoes.0.grupos.0.grupos.0.permissoes.0.valor', true)
            ->where('permissoes.0.grupos.0.grupos.0.permissoes.1.chave', 'administracao.permissoes.grupo:criar')
            ->where('permissoes.0.grupos.0.grupos.0.permissoes.1.valor', false));
    }

    public function testPodeEditarPermissoes(): void
    {
        $grupo = Grupo::factory()->create();

        app(PermissoesService::class)->salvarPermissoesGrupo($grupo, [
            [
                'chave' => 'administracao.permissoes.grupo:ver',
                'valor' => true,
            ],
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.permissao_grupo:editar'))
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/permissoes/salvar", [
                'permissoes' => [
                    [
                        'chave' => 'administracao.permissoes.grupo:ver',
                        'valor' => false,
                    ],
                    [
                        'chave' => 'administracao.permissoes.grupo:editar',
                        'valor' => true,
                    ],
                ],
            ]);

        $response->assertValid();
        $response->assertRedirectToRoute('admin.administracao.permissoes.grupo.permissoes', $grupo->id);
        $this->assertDatabaseMissing(app(PermissaoGrupo::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'chave' => 'administracao.permissoes.grupo:ver',
        ]);
        $this->assertDatabaseHas(app(PermissaoGrupo::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'chave' => 'administracao.permissoes.grupo:editar',
        ]);
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/permissoes");

        $response->assertStatus(403);
    }

    public function testNaoPodeEditarSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/permissoes/salvar", [
                'permissoes' => [
                    [
                        'chave' => 'administracao.permissoes.grupo:editar',
                        'valor' => true,
                    ],
                ],
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(PermissaoGrupo::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'chave' => 'administracao.permissoes.grupo:editar',
        ]);
    }
}
