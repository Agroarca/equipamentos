<?php

namespace Tests\Feature\Admin\Administracao\Permissoes;

use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Administracao\Permissoes\GrupoUsuario;
use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class GrupoUsuarioTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar(): void
    {
        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.grupo_usuario:ver'))
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/usuarios");

        $response->assertStatus(200);
    }

    public function testPodeAcessarComDados(): void
    {
        $grupo = Grupo::factory()->create();
        $usuarios = Usuario::factory()->count(4)->create();

        $service = app(PermissoesService::class);
        foreach ($usuarios as $usuario) {
            $service->adicionarUsuarioGrupo($usuario->id, $grupo);
        }

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.grupo_usuario:ver'))
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/usuarios");

        $response->assertStatus(200);
        $response->assertInertia(fn (AssertableInertia $page) => $page
            ->component('Admin/Administracao/Permissoes/GrupoUsuario/Inicio')
            ->where('grupo.id', $grupo->id)
            ->has('usuarios')
            ->has('usuarios.data', 4));
    }

    public function testPodeAdicionarUsuario(): void
    {
        $grupo = Grupo::factory()->create();
        $usuario = Usuario::factory()->create();

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.grupo_usuario:adicionar'))
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/usuarios/adicionar", [
                'usuario_id' => $usuario->id,
            ]);

        $response->assertRedirectToRoute('admin.administracao.permissoes.grupo.usuarios', $grupo->id);
        $this->assertDatabaseHas(app(GrupoUsuario::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'usuario_id' => $usuario->id,
        ]);
    }

    public function testPodePesquisarEAdicionarUsuario()
    {
        $grupo = Grupo::factory()->create();
        $usuario = Usuario::factory()->create();

        $responsePesquisa = $this->actingAs($this->getAdmin())
            ->get("/admin/pesquisar/usuario/admin?termo=" . $usuario->nome);

        $responsePesquisa->assertStatus(200);
        $responsePesquisa->assertJson([
            [
                'id' => $usuario->id,
                'texto' => $usuario->nome,
            ],
        ]);

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.grupo_usuario:adicionar'))
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/usuarios/adicionar", [
                'usuario_id' => $usuario->id,
            ]);

        $response->assertRedirectToRoute('admin.administracao.permissoes.grupo.usuarios', $grupo->id);
        $this->assertDatabaseHas(app(GrupoUsuario::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'usuario_id' => $usuario->id,
        ]);
    }

    public function testPodeExcluirUsuario(): void
    {
        $grupo = Grupo::factory()->create();
        $usuario = Usuario::factory()->create();
        app(PermissoesService::class)->adicionarUsuarioGrupo($usuario->id, $grupo);

        $response = $this->actingAs($this->getAdminComPermissao('administracao.permissoes.grupo_usuario:excluir'))
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/usuarios/$usuario->id/excluir");

        $response->assertRedirectToRoute('admin.administracao.permissoes.grupo.usuarios', $grupo->id);
        $this->assertDatabaseMissing(app(GrupoUsuario::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'usuario_id' => $usuario->id,
        ]);
    }

    public function testNaoPodeAcessarSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/usuarios");

        $response->assertStatus(403);
    }

    public function testNaoPodeAdicionarUsuarioSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();
        $usuario = Usuario::factory()->create();

        $response = $this->actingAs($this->getAdmin())
            ->post("/admin/administracao/permissoes/grupo/$grupo->id/usuarios/adicionar", [
                'usuario_id' => $usuario->id,
            ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(GrupoUsuario::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'usuario_id' => $usuario->id,
        ]);
    }

    public function testNaoPodeExcluirUsuarioSemPermissao(): void
    {
        $grupo = Grupo::factory()->create();
        $usuario = Usuario::factory()->create();

        app(PermissoesService::class)->adicionarUsuarioGrupo($usuario->id, $grupo);

        $response = $this->actingAs($this->getAdmin())
            ->get("/admin/administracao/permissoes/grupo/$grupo->id/usuarios/$usuario->id/excluir");

        $response->assertStatus(403);
        $this->assertDatabaseHas(app(GrupoUsuario::class)->getTable(), [
            'grupo_id' => $grupo->id,
            'usuario_id' => $usuario->id,
        ]);
    }
}
