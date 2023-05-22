<?php

namespace Database\Factories\Administracao\Permissoes;

use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Usuario;
use Illuminate\Database\Eloquent\Factories\Factory;

class GrupoUsuarioFactory extends Factory
{
    public function definition(): array
    {
        return [
            'grupo_id' => Grupo::factory(),
            'usuario_id' => Usuario::factory(),
        ];
    }
}
