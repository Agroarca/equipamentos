<?php

namespace Database\Seeders;

use App\Models\Equipamentos\Categoria;
use App\Models\Equipamentos\Equipamento;
use App\Models\Equipamentos\Modelo;
use App\Models\Usuario;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Benchmark;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FakeEquipamentoSeeder extends Seeder
{
    private $total = 1000000;
    private $porChunk = 10000;

    public function run()
    {
        //Benchmark::dd(fn () => $this->chunk());
    }

    private function chunk()
    {
        $chunks = $this->total / $this->porChunk;

        for ($i = 0; $i < $chunks; $i++) {
            $this->insert();
        }
    }

    private function insert()
    {
        $modelo = Modelo::first();
        $categoria = Categoria::first();
        $usuario = Usuario::first();

        $equipamentos = [];

        for ($i = 1; $i < $this->porChunk; $i++) {
            array_push($equipamentos, [
                'titulo' => "Equipamento para teste $i",
                'valor' => $i * 10000,
                'ano' => 2020,
                'modelo_id' => $modelo->id,
                'categoria_id' => $categoria->id,
                'usuario_id' => $usuario->id,
            ]);
        }

        Equipamento::insert($equipamentos);
    }
}
