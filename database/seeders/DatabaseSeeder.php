<?php

namespace Database\Seeders;

use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Cadastro\Cidade;
use App\Models\Cadastro\Estado;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        if (Grupo::count() == 0) {
            $this->call(PermissaoGrupoSeeder::class);
        }

        if (Estado::count() == 0) {
            $this->call(EstadosSeeder::class);
        }

        if (Cidade::count() == 0) {
            $this->call(CidadesSeeder::class);
        }
    }
}
