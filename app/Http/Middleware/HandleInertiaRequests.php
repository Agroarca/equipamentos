<?php

namespace App\Http\Middleware;

use App\Services\Admin\MenuService;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request)
    {
        return parent::version($request);
    }

    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => config('app.url'),
                ]);
            },
            'admin' => [
                'menus' => MenuService::getAuthMenus(),
            ],
        ]);
    }
}
