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
                    'title' => 'Marcas',
                    'icon' => '',
                    'url' => '/admin/marcas',
                ],
                [
                    'title' => 'Modelos',
                    'icon' => '',
                    'url' => '/admin/modelos',
                ],
            ];
        }

        return $menus;
    }
}
