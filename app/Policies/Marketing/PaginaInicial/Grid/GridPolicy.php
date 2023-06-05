<?php

namespace App\Policies\Marketing\PaginaInicial\Grid;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class GridPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.grid.grid:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.grid.grid:criar');
    }

    public function ordem(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.grid.grid:ordem');
    }
}
