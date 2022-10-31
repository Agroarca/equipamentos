<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
if(App::environment('production')){
    URL::forceScheme('https');
    URL::forceRootUrl(config('app.url'))
}

Route::get('/', function () {
    return Inertia::render('Inicio');
})->name("inicio");

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Inicio');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
