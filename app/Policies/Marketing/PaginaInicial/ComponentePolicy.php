<?php

namespace App\Policies\Marketing\PaginaInicial;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class ComponentePolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ordem(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.componente:ordem');
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.componente:excluir');
    }
}
