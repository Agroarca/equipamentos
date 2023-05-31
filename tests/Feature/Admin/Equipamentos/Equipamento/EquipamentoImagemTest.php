<?php

namespace Tests\Feature\Admin\Equipamentos\Equipamento;

use App\Models\Equipamentos\Cadastro\Equipamento;
use App\Models\Equipamentos\Cadastro\EquipamentoImagem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use App\Services\Equipamentos\Cadastro\EquipamentoService;
use Tests\TestCase;
use Illuminate\Support\Str;

class EquipamentoImagemTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeEnviarImagem(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento.imagem:adicionar');
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(25);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertExists($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarImagens', $equipamento->id);
        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarImagemSemPermissao(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdmin();
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(25);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertStatus(403);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarDescricaoMinimo(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento.imagem:adicionar');
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(5);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertInvalid(['descricao']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarDescricaoMaximo(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento.imagem:adicionar');
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(500);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertInvalid(['descricao']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarTamanhoMinimo(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento.imagem:adicionar');
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 400, 300);
        $descricao = Str::random(50);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertInvalid(['imagem']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarTamanhoInvalido(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento.imagem:adicionar');
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 300);
        $descricao = Str::random(50);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing($equipService->getStoragePathImagem($equipamento->id) . $imagem->hashName());
        $response->assertInvalid(['imagem']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeExcluirImagem(): void
    {
        $equipService = app(EquipamentoService::class);
        $usuario = $this->getAdminComPermissao('equipamentos.cadastro.equipamento.imagem:deletar');
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs($equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName());

        $response = $this->actingAs($usuario)
            ->get("/admin/equipamentos/$equipamentoImagem->equipamento_id/imagens/$equipamentoImagem->id/deletar");

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
            ->get("/admin/equipamentos/$equipamentoImagem->equipamento_id/imagens/$equipamentoImagem->id/deletar");

        Storage::assertExists(
            $equipService->getStoragePathImagem($equipamentoImagem->equipamento_id) . $imagem->hashName()
        );
        $response->assertStatus(403);
        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'id' => $equipamentoImagem->id,
        ]);
    }
}
