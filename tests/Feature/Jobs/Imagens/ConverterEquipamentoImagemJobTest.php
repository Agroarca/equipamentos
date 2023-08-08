<?php

namespace Tests\Feature\Jobs\Imagens;

use App\Jobs\Imagens\ConverterEquipamentoImagemJob;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use App\Services\Equipamentos\Cadastro\EquipamentoService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Support\Str;

class ConverterEquipamentoImagemJobTest extends TestCase
{
    use RefreshDatabase;

    public function testConverterEquipamentoImagemJob(): void
    {
        Storage::fake();
        $equipService = app(EquipamentoService::class);
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs($equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName());

        $job = new ConverterEquipamentoImagemJob($equipamentoImagem);
        $job->handle();

        $nomeOriginal = Str::of($equipamentoImagem->nome_arquivo);
        $nome = $nomeOriginal->beforeLast('.');

        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'id' => $equipamentoImagem->id,
            'nome_arquivo_secundario' => "$nome.webp",
        ]);

        Storage::assertExists(
            $equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . "$nome.webp"
        );
    }
}
