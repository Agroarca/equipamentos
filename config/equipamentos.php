<?php

return [
    'path_imagens' => 'public/equipamentos',
    'public_path_imagens' => 'storage/equipamentos/',
    'mensagens_por_pagina' => 20,
    'mensagens_tempo_excluir_secs' => 21600, // 6 horas

    'notificacoes' => [
        'ws_canal_conversa' => 'notificacoes.',
        'ws_canal_notificacao' => 'notificacoes.',
        'notificacao_websocket_delay_secs' => 0,
        'notificacao_push_delay_secs' => 60,
    ],

    'filtros' => [
        'quantidade_categorias' => 5,
        'quantidade_marcas' => 5,
        'quantidade_modelos' => 5,
    ]
];
