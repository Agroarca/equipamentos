<?php

namespace App\Policies\Marketing\PaginaInicial\Banners;

use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;

class BannerPolicy
{
    public function __construct(
        private PermissoesService $permissoesService
    ) {
    }

    public function ver(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.banners.banner:ver');
    }

    public function criar(Usuario $usuario): bool
    {
        return $this->permissoesService->temPermissao($usuario, 'marketing.pagina-inicial.banners.banner:criar');
    }
}
