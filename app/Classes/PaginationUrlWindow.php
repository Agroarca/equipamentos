<?php

namespace App\Classes;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;

/**
 * Classe para sobrescrever o array de paginação do Laravel
 */
class PaginationUrlWindow
{
    /**
     * Paginator padrão do Laravel
     */
    protected LengthAwarePaginator $paginator;

    /**
     * Construtor
     */
    public function __construct(LengthAwarePaginator $paginator)
    {
        $this->paginator = $paginator;
    }

    /**
     * Cria o array de paginação
     *
     * @return array<string, array<int>>
     */
    public static function make(LengthAwarePaginator $paginator): array
    {
        return (new static($paginator))->get();
    }

    /**
     * Retorna o array de paginação
     *
     * @return array<string, array<int>>
     */
    public function get(): array
    {
        if (!$this->hasPages()) {
            return [
                'first' => null,
                'slider' => null,
                'last' => null,
            ];
        }


        $currentPage = $this->paginator->currentPage();
        $lastPage = $this->paginator->lastPage();
        $onEachSide = $this->paginator->onEachSide;
        $maxElements = ($onEachSide * 2);

        $firstIndex = max(1, min($currentPage - $onEachSide, $lastPage - $maxElements));
        $lastIndex = min(max(($currentPage + $onEachSide), 1 + $maxElements), $lastPage);

        return [
            'first' => $this->paginator->getUrlRange($firstIndex, $lastIndex),
            'slider' => null,
            'last' => null,
        ];
    }

    /**
     * Verifica se há mais de uma página
     */
    private function hasPages(): bool
    {
        return $this->paginator->lastPage() > 1;
    }
}
