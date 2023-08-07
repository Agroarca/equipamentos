<?php

// phpcs:disable SlevomatCodingStandard.TypeHints.PropertyTypeHint.MissingAnyTypeHint

namespace App\Console\Commands\Usuario;

use App\Enums\Usuario\TipoUsuario;
use App\Models\Administracao\Permissoes\Grupo;
use App\Models\Usuario;
use App\Services\Administracao\Permissoes\PermissoesService;
use Illuminate\Console\Command;

class UsuarioAdmin extends Command
{
    protected $signature = 'usuario:admin {--id=} {--cpf=} {--email=} ';

    protected $description = 'Command description';

    public function handle(): void
    {
        $id = $this->option('id');
        $cpf = $this->option('cpf');
        $email = $this->option('email');

        if (!$id && !$cpf && !$email) {
            $this->error('É necessário fornecer pelo menos uma das opções: --id, --cpf ou --email');
            return;
        }

        $usuario = Usuario::query()
            ->when($id, fn ($query) => $query->where('id', $id))
            ->when($cpf, fn ($query) => $query->where('cpf', $cpf))
            ->when($email, fn ($query) => $query->where('email', $email))
            ->first();

        if (!$usuario) {
            $this->error('Usuário não encontrado');
            return;
        }

        $usuario->tipo_usuario = TipoUsuario::Admin;
        $usuario->save();

        $grupo = Grupo::where('nome', 'Administração')->first();
        if ($grupo) {
            app(PermissoesService::class)->adicionarUsuarioGrupo($usuario->id, $grupo);
            $this->info('Usuário atualizado e adicionado ao grupo Administração com sucesso');
        } else {
            $this->info('Usuário atualizado com sucesso');
        }
    }
}
