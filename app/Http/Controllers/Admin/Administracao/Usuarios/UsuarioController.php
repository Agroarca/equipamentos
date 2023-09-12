<?php

namespace App\Http\Controllers\Admin\Administracao\Usuarios;

use App\Enums\Usuario\TipoPessoa;
use App\Enums\Usuario\TipoUsuario;
use App\Http\Controllers\Controller;
use App\Models\Usuario;
use App\Services\Notificacoes\NotificacaoAdminService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UsuarioController extends Controller
{
    public function __construct(
        private NotificacaoAdminService $notAdmService
    ) {
    }

    public function inicio(): mixed
    {
        $usuarios = Usuario::paginate();
        $usuarios->setCollection($usuarios->getCollection()->makeVisible(['cpf', 'cnpj']));

        $tipoPessoaEnum = TipoPessoa::arrayNomes();
        return Inertia::render('Admin/Administracao/Usuarios/Inicio', compact('usuarios', 'tipoPessoaEnum'));
    }

    public function visualizar(Usuario $usuario): mixed
    {
        $usuario->makeVisible(['cpf', 'cnpj', 'celular']);
        $usuario->load('grupos');

        $tipoPessoaEnum = TipoPessoa::arrayNomes();
        $tipoUsuarioEnum = TipoUsuario::toArray();

        $preferenciasNotificacao = [];
        if ($usuario->tipo_usuario == TipoUsuario::Admin) {
            $preferenciasNotificacao = $this->notAdmService->getPreferenciasNotificacaoUsuario($usuario);
        }

        return Inertia::render('Admin/Administracao/Usuarios/Visualizar', [
            'usuario' => $usuario,
            'tipoPessoaEnum' => $tipoPessoaEnum,
            'tipoUsuarioEnum' => $tipoUsuarioEnum,
            'preferenciasNotificacao' => (array) $preferenciasNotificacao,
        ]);
    }

    public function salvarPreferencias(Request $request, Usuario $usuario)
    {
        $this->notAdmService->salvarPreferenciasNotificacaoUsuario($usuario, $request->all());
        return redirect()->route('admin.administracao.usuarios.visualizar', $usuario->id);
    }
}
