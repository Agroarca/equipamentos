<?php

namespace Tests\Feature\Autenticacao;

use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistroTest extends TestCase
{
    use RefreshDatabase;

    public function testPodeAcessar()
    {
        $response = $this->get('/register');
        $response->assertStatus(200);
    }

    public function testPodeRegistrarCpfFormatado()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test@example.com',
            'cpf_cnpj' => '243.287.440-46',
            'celular' => '(54) 9111-1111',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

    public function testPodeRegistrarCpf()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test2@example.com',
            'cpf_cnpj' => '22018399055',
            'celular' => '5491111112',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }


    public function testPodeRegistrarCnpjFormatado()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test3@example.com',
            'cpf_cnpj' => '52.385.899/0001-01',
            'celular' => '(54) 9111-11111',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

    public function testPodeRegistrarCnpj()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test4@example.com',
            'cpf_cnpj' => '50134660000133',
            'celular' => '54 3111 1111',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    }

    public function testnaoPodeRegistrarCpfInvalido()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test5@example.com',
            'cpf_cnpj' => '243.287.440-47',
            'celular' => '(54) 9111-1111',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertInvalid(['cpf']);
    }

    public function testnaoPodeRegistrarCnpjInvalido()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test6@example.com',
            'cpf_cnpj' => '52.386.899/0001-01',
            'celular' => '(54) 9111-1111',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertInvalid(['cnpj']);
    }

    public function testnaoPodeRegistrarTamanhoInvalido()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test6@example.com',
            'cpf_cnpj' => '501346600001',
            'celular' => '5491111-11111',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertInvalid(['cpf_cnpj', 'celular']);
    }

    public function testnaoPodeRegistrarTamanhoInvalido2()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test6@example.com',
            'cpf_cnpj' => '22018399055',
            'celular' => '5491111-11',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertInvalid(['celular']);
    }
    public function testnaoPodeRegistrarTamanhoInvalido3()
    {
        $response = $this->post('/register', [
            'nome' => 'Usuario Teste',
            'email' => 'test6@example.com',
            'cpf_cnpj' => '22018399055',
            'celular' => '543111-111',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertInvalid(['celular']);
    }
}
