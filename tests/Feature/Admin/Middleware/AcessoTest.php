<?php

namespace Tests\Feature\Admin\Middleware;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AcessoTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessarDashboard(): void
    {
        $response = $this->actingAs($this->getAdmin())
                ->get('/admin/dashboard');

        $response->assertStatus(200);
    }

    public function testNaoPodeAcessarDashboardUsuarioComum(): void
    {
        $response = $this->actingAs($this->getUsuario())
                ->get('/admin/dashboard');

        $response->assertStatus(403);
    }
}
