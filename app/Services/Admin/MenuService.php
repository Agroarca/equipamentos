<?php

//phpcs:disable SlevomatCodingStandard.Functions.FunctionLength.FunctionLength

namespace App\Services\Admin;

use Illuminate\Support\Facades\Auth;

class MenuService
{
    /**
     * Retorna os menus do admin
     */
    public static function getAuthMenus(): array
    {
        if (!Auth::check()) {
            return [];
        }
        return [
            [
                'title' => 'Início',
                'icon' => '',
                'url' => '/',
            ],
            [
                'title' => 'Dashboard',
                'icon' => '',
                'url' => '/admin/dashboard',
            ],
            [
                'title' => 'Categorias',
                'icon' => '',
                'url' => '/admin/categorias/',
            ],
            [
                'title' => 'Equipamentos',
                'icon' => '',
                'url' => '/admin/equipamentos',
            ],
            [
                'title' => 'Lista de Produtos',
                'icon' => '',
                'url' => '/admin/lista',
            ],
            [
                'title' => 'Marcas',
                'icon' => '',
                'url' => '/admin/marcas',
            ],
            [
                'title' => 'Modelos',
                'icon' => '',
                'url' => '/admin/modelos',
            ],
            [
                'title' => 'Pagina Inicial',
                'icon' => '',
                'url' => '/admin/marketing/pagina/inicial',
            ],
        ];
    }
}
