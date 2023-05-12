<?php

namespace App\Classes\Administracao\Permissoes;

class Permissao
{
    public function __construct(
        public string $nome,
        public string $chave,
        public bool $valor = false
    ) {
    }
}
