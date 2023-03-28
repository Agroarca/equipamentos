<?php

namespace App\Classes;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class PaginationUrlWindow
{
    // phpcs:ignore SlevomatCodingStandard.Classes.RequireConstructorPropertyPromotion.RequiredConstructorPropertyPromotion
    protected LengthAwarePaginator $paginator;

    public function __construct(LengthAwarePaginator $paginator)
    {
        $this->paginator = $paginator;
    }

    public static function make(LengthAwarePaginator $paginator): array
    {
        return (new static($paginator))->get();
    }

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

    private function hasPages(): bool
    {
        return $this->paginator->lastPage() > 1;
    }
}
