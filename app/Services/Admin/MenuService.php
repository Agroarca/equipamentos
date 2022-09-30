<?php

namespace App\Services\Admin;

use Illuminate\Support\Facades\Auth;

class MenuService
{

    public static function getAuthMenus()
    {
        $menus = [];

        if (Auth::check()) {
            $menus = [
                [
                    'title' => 'Dashboard',
                    'icon' => '',
                    'route' => 'dashboard'
                ],
                [
                    'title' => 'Categorias',
                    'icon' => '',
                    'route' => 'admin.categorias'
                ],
                [
                    'title' => 'Equipamentos',
                    'icon' => '',
                    'route' => 'admin.equipamentos'
                ]
            ];
        }

        return $menus;
    }
}
