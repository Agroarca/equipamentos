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
     *
     * @var LengthAwarePaginator
     */
    protected $paginator;

    /**
     * Construtor
     *
     * @param LengthAwarePaginator $paginator Paginator padrão do Laravel.
     */
    public function __construct(LengthAwarePaginator $paginator)
    {
        $this->paginator = $paginator;
    }

    /**
     * Cria o array de paginação
     *
     * @param LengthAwarePaginator $paginator Paginator padrão do Laravel.
     *
     * @return array['first', 'slider', 'last']
     */
    public static function make(LengthAwarePaginator $paginator): array
    {
        return (new static($paginator))->get();
    }

    /**
     * Retorna o array de paginação
     *
     * @return array['first', 'slider', 'last']
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
     *
     * @return boolean
     */
    private function hasPages(): bool
    {
        return $this->paginator->lastPage() > 1;
    }
}
