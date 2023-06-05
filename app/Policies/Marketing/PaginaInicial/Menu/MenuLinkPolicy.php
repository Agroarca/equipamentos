<?php

namespace App\Policies\Marketing\PaginaInicial\Menu;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class MenuLinkPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.menu.menu-link:criar');
    }

    public function editar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.menu.menu-link:editar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.menu.menu-link:excluir');
    }

    public function ordem(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.menu.menu-link:ordem');
    }
}
