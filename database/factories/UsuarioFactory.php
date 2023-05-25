<?php

namespace Database\Factories;

use App\Enums\Usuario\TipoPessoa;
use App\Enums\Usuario\TipoUsuario;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsuarioFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nome' => fake()->name(),
            'email' => fake()->safeEmail(),
            'cpf' => '22018399055',
            'celular' => '5491111112',
            'email_verified_at' => now(),
            'password' => Hash::make('Password123'),
            'remember_token' => Str::random(10),
            'tipo_pessoa' => TipoPessoa::Fisica,
        ];
    }

    public function pessoaJuridica(): mixed
    {
        return $this->state(fn (array $attributes) => [
            'tipo_pessoa' => TipoPessoa::Juridica,
            'cnpj' => '12345678901234',
        ]);
    }

    public function naoVerificado(): mixed
    {
        return $this->state(fn (array $attributes) => ['email_verified_at' => null]);
    }

    public function admin(): mixed
    {
        return $this->state(fn (array $attributes) => [
            'tipo_usuario' => TipoUsuario::Admin,
        ]);
    }
}
