<?php

namespace App\Policies\Marketing\PaginaInicial\Carrossel;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class CarrosselItemPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao(
            $usuario,
            'marketing.pagina-inicial.carrossel.carrossel-item:ver'
        );
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao(
            $usuario,
            'marketing.pagina-inicial.carrossel.carrossel-item:criar'
        );
    }

    public function excluir(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao(
            $usuario,
            'marketing.pagina-inicial.carrossel.carrossel-item:excluir'
        );
    }

    public function ordem(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao(
            $usuario,
            'marketing.pagina-inicial.carrossel.carrossel-item:ordem'
        );
    }
}
