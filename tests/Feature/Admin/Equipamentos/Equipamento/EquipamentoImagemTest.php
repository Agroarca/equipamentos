<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Jobs\Imagens\ConverterEquipamentoImagemJob;
use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Services\Equipamentos\Cadastro\EquipamentoService;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;

class EquipamentoImagemTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeEnviarImagem(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento-imagem:adicionar');
        Storage::fake();
        Queue::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'imagem' => $imagem,
            ]);

        Storage::assertExists($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarImagens', $equipamento->id);
        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'equipamento_id' => $equipamento->id,
        ]);
        Queue::assertPushed(ConverterEquipamentoImagemJob::class);
    }

    public function testNaoPodeEnviarImagemSemPermissao(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdmin();
        Storage::fake();
        Queue::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'imagem' => $imagem,
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'equipamento_id' => $equipamento->id,
        ]);
        Queue::assertNotPushed(ConverterEquipamentoImagemJob::class);
    }

    public function testNaoPodeEnviarTamanhoMinimo(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento-imagem:adicionar');
        Storage::fake();
        Queue::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 400, 300);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'imagem' => $imagem,
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertInvalid(['imagem']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'equipamento_id' => $equipamento->id,
        ]);
        Queue::assertNotPushed(ConverterEquipamentoImagemJob::class);
    }

    public function testNaoPodeEnviarTamanhoInvalido(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento-imagem:adicionar');
        Storage::fake();
        Queue::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 300);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'imagem' => $imagem,
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertInvalid(['imagem']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'equipamento_id' => $equipamento->id,
        ]);
        Queue::assertNotPushed(ConverterEquipamentoImagemJob::class);
    }

    public function testPodeExcluirImagem(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento-imagem:excluir');
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs($equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName());

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamentoImagem->equipamento_id/imagens/$equipamentoImagem->id/excluir");

        Storage::assertMissing(
            $equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName()
        );
        $response->assertRedirectToRoute('admin.equipamentos.editarImagens', $equipamentoImagem->equipamento_id);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'id' => $equipamentoImagem->id,
        ]);
    }

    public function testNaoPodeExcluirImagemSemPermissao(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdmin();
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs($equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName());

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamentoImagem->equipamento_id/imagens/$equipamentoImagem->id/excluir");

        Storage::assertExists(
            $equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName()
        );
        $response->assertStatus(403);
        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'id' => $equipamentoImagem->id,
        ]);
    }
}
