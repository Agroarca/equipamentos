<script setup lang="ts">
import { useForm, Link } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '../../Components/FormError.vue'

const form = useForm({
    email: '',
    password: '',
    remember: false,
})

function submit() {
    form.post('/login', {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <SiteLayout titulo="Entrar">
        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Entrar</h2>
                </div>

                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <input id="email" v-model="form.email" class="form-control" type="email" required autocomplete="email">
                    <FormError :error="form.errors.email" />
                </div>

                <div class="mb-3">
                    <label for="password">Senha</label>
                    <input id="password" v-model="form.password" class="form-control" type="password" required
                           autocomplete="current-password">
                    <FormError :error="form.errors.password" />
                </div>

                <div class="form-check mb-3">
                    <input id="remember" class="form-check-input" type="checkbox" :checked="form.remember">
                    <label class="form-check-label" for="remember">Manter conectado?</label>
                </div>

                <div class="mb-3 d-flex justify-content-between">
                    <button class="btn btn-primary" type="submit">
                        Entrar
                    </button>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/forgot-password">
                        Esqueceu sua Senha?
                    </Link>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/register">
                        Não possui conta?
                    </Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
