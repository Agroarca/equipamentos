<?php

namespace App\Console\Commands;

use App\Enums\Usuario\TipoUsuario;
use Illuminate\Console\Command;

class UsuarioAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'usuario:admin {--id=} {--cpf=} {--email=} ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        $id = $this->option('id');
        $cpf = $this->option('cpf');
        $email = $this->option('email');

        if (!$id && !$cpf && !$email) {
            $this->error('É necessário fornecer pelo menos uma das opções: --id, --cpf ou --email');
            return;
        }

        $usuario = \App\Models\Usuario::query()
            ->when($id, fn ($query) => $query->where('id', $id))
            ->when($cpf, fn ($query) => $query->where('cpf', $cpf))
            ->when($email, fn ($query) => $query->where('email', $email))
            ->first();

        if (!$usuario) {
            $this->error('Usuário não encontrado');
            return;
        }

        $usuario->tipo_usuario = TipoUsuario::Admin->value;
        $usuario->save();

        $this->info('Usuário atualizado com sucesso');
    }
}
