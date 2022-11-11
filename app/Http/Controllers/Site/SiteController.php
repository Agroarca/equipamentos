<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\Equipamentos\Equipamento;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function equipamento($id)
    {
        $equipamento = Equipamento::with([
            'caracteristicas',
            'categoria',
            'modelo',
            'imagens'
        ])->findOrFail($id);

        return Inertia::render('Site/Equipamento/Inicio', compact('equipamento'));
    }
}
