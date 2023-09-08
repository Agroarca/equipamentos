<?php

namespace App\Services\Notificacoes;

use App\Enums\Administracao\Notificacoes\TipoNotificacaoEnum;
use App\Models\Administracao\Notificacoes\NotificacaoAdmin;
use App\Models\Usuario;

class NotificacaoAdminService
{
    /**
     * Retorna as preferências de notificação do usuário.
     */
    public function getPreferenciasNotificacaoUsuario(Usuario $usuario): array
    {
        $usuario->load(['notificacoesAdmin']);


        return collect(TipoNotificacaoEnum::toArray())->map(fn ($key, $value) => [
            'id' => $value,
            'nome' => TipoNotificacaoEnum::arrayNomes()[$value],
            'ativo' => $usuario->notificacoesAdmin->contains('tipo', $value),
        ])->toArray();
    }

    /**
     * Salva as preferências de notificação do usuário.
     */
    public function salvarPreferenciasNotificacaoUsuario(Usuario $usuario, array $preferencias): void
    {
        foreach (TipoNotificacaoEnum::toArray() as $key => $value) {
            if (array_key_exists("preferencia-$value", $preferencias)) {
                NotificacaoAdmin::firstOrCreate([
                    'usuario_id' => $usuario->id,
                    'tipo' => $key,
                ]);
            } else {
                NotificacaoAdmin::where([
                    'usuario_id' => $usuario->id,
                    'tipo' => $key,
                ])->delete();
            }
        }
    }
}
