<?php

namespace Tests\Feature\Admin\Equipamentos;

use Tests\TestCase;

class EquipamentoImagemTest extends TestCase
{
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
