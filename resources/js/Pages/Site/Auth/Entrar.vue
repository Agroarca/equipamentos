<script setup lang="ts">
import { useForm, Link, usePage } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Senha from '@/Componentes/Site/Senha.vue'

const form = useForm({
    email: '',
    password: '',
    manter_conectado: false,
})

function submit() {
    form.post('/entrar', {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <SiteLayout titulo="Entrar" noindex>
        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Entrar</h2>
                </div>

                <div v-if="usePage().props?.mensagem" class="alert alert-success mb-3">
                    <span>{{ usePage().props?.mensagem }}</span>
                </div>

                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <input id="email" v-model="form.email" class="form-control" type="email" required autocomplete="email">
                    <FormError :error="form.errors.email" />
                </div>

                <div class="mb-3">
                    <label for="password">Senha</label>
                    <Senha v-model="form.password" inputId="password" inputName="password" />
                    <FormError :error="form.errors.password" />
                </div>

                <div class="form-check mb-3">
                    <input id="manter_conectado" v-model="form.manter_conectado" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="manter_conectado">Manter conectado?</label>
                </div>

                <div class="mb-3 d-flex justify-content-between">
                    <button class="btn btn-primary" type="submit">
                        Entrar
                    </button>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/senha/recuperar">
                        Esqueceu sua senha?
                    </Link>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/registrar">
                        Não possui conta?
                    </Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
