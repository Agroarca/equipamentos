<?php

namespace App\Policies\Marketing\PaginaInicial\ListaProdutos;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class ListaPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.lista-produtos.lista:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.lista-produtos.lista:criar');
    }
}
