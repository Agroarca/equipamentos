<?php

namespace Tests\Feature\Admin\Equipamentos;

use App\Models\Equipamentos\Equipamento;
use App\Models\Equipamentos\EquipamentoImagem;
use App\Models\Usuario;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Support\Str;

class EquipamentoImagemTest extends TestCase
{
    use RefreshDatabase;

    private $usuario;

    public function setUp(): void
    {
        parent::setUp();
        $this->usuario = Usuario::factory()->admin()->create();
    }

    public function testPodeEnviarImagem(): void
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(25);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertExists(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertValid();
        $response->assertRedirectToRoute('admin.equipamentos.editarImagens', $equipamento->id);
        $this->assertDatabaseHas(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarDescricaoMinimo(): void
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(5);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertInvalid(['descricao']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarDescricaoMaximo(): void
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $descricao = Str::random(500);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertInvalid(['descricao']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarTamanhoMinimo(): void
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 400, 300);
        $descricao = Str::random(50);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertInvalid(['imagem']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testNaoPodeEnviarTamanhoInvalido(): void
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 300);
        $descricao = Str::random(50);
        $equipamento = Equipamento::factory()->create();

        $response = $this->actingAs($this->usuario)
            ->post("/admin/equipamentos/$equipamento->id/imagens/adicionar", [
                'descricao' => $descricao,
                'imagem' => $imagem
            ]);

        Storage::assertMissing(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertInvalid(['imagem']);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'descricao' => $descricao,
            'equipamento_id' => $equipamento->id,
        ]);
    }

    public function testPodeExcluirImagem(): void
    {
        Storage::fake();
        $imagem = UploadedFile::fake()->image('imagem.png', 800, 600);
        $equipamentoImagem = EquipamentoImagem::factory()->make();
        $equipamentoImagem->nome_arquivo = $imagem->hashName();
        $equipamentoImagem->save();

        $imagem->storeAs(config('equipamentos.path_imagens') . '/' . $imagem->hashName());

        $response = $this->actingAs($this->usuario)
            ->get("/admin/equipamentos/$equipamentoImagem->equipamento_id/imagens/$equipamentoImagem->id/deletar");

        Storage::assertMissing(config('equipamentos.path_imagens') . '/' . $imagem->hashName());
        $response->assertRedirectToRoute('admin.equipamentos.editarImagens', $equipamentoImagem->equipamento_id);
        $this->assertDatabaseMissing(app(EquipamentoImagem::class)->getTable(), [
            'id' => $equipamentoImagem->id
        ]);
    }
}
