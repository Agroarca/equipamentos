<?php

namespace Database\Factories\Administracao\Permissoes;

use App\Models\Administracao\Permissoes\Grupo;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PermissaoGrupoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'chave' => Str::random(25),
            'grupo_id' => Grupo::factory(),
        ];
    }
}
