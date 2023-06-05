<?php

namespace App\Policies\Marketing\PaginaInicial\Grid;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class GridImagemPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.grid.grid-imagem:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.grid.grid-imagem:criar');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.grid.grid-imagem:excluir');
    }
}
