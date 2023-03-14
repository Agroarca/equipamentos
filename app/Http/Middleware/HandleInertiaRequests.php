<?php

namespace App\Http\Middleware;

use App\Services\Admin\MenuService;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function share(Request $request)
    {

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => [
                    'id' => $request->user()?->id,
                    'name' => $request->user()?->name,
                ],
            ],
            'admin' => [
                'menus' => MenuService::getAuthMenus(),
            ],
        ]);
    }
}
