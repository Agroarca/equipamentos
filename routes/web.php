<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

$app_url = config("app.url");
if (app()->environment('prod') && !empty($app_url)) {
    URL::forceRootUrl($app_url);
    $schema = explode(':', $app_url)[0];
    URL::forceScheme($schema);
}

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

Route::get('/', function () {
    return Inertia::render('Inicio');
})->name("inicio");

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Inicio');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
