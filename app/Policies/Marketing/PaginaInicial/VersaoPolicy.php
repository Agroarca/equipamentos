<?php

namespace App\Policies\Marketing\PaginaInicial;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class VersaoPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:criar');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:editar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:excluir');
    }

    public function aprovar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:aprovar');
    }

    public function reprovar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:reprovar');
    }

    public function publicar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:publicar');
    }

    public function voltar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.versao:voltar');
    }
}
