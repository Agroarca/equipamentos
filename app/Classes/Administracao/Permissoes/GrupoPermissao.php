<?php

namespace App\Classes\Administracao\Permissoes;

use App\Models\Administracao\Permissoes\Grupo;

class GrupoPermissao
{
    /**
     * @var array<GrupoPermissao>
     */
    public array $grupos = [];

    /**
     * @var array<Permissao>
     */
    public array $permissoes = [];

    private function __construct(
        public string $nome,
        public string $chave,
        private Grupo $grupo
    ) {
    }

    public function permissao(string $nome, string $chave): self
    {
        $chave = "$this->chave:$chave";
        $valor = $this->grupo->permissoes->contains('chave', $chave);

        $this->permissoes[] = new Permissao($nome, $chave, $valor);

        return $this;
    }

    public function grupo(string $nome, string $chave, callable $callback): self
    {
        $grupo = new self($nome, "$this->chave.$chave", $this->grupo);

        $callback($grupo);

        $this->grupos[] = $grupo;

        return $this;
    }

    public static function create(string $nome, string $chave, Grupo $grupo): self
    {
        return new self($nome, $chave, $grupo);
    }
}
