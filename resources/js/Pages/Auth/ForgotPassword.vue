<script setup lang="ts">
import { useForm, Head, Link } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '../../Components/FormError.vue'

const form = useForm({
    email: '',
})

function submit() {
    form.post('/forgot-password')
}
</script>

<template>
    <SiteLayout>
        <Head title="Recuperar Senha" />

        <div class="container-600 auth">
            <div class="alert alert-info">
                Esqueceu sua senha?
                Não se preocupe, informe seu e-mail e enviaremos um e-mail de recuperação
            </div>

            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <input id="email" v-model="form.email" class="form-control" type="email" required>
                    <FormError :error="form.errors.email" />
                </div>

                <div class="mb-3">
                    <button class="btn btn-primary" type="submit">
                        Enviar
                    </button>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/login">
                        Entrar na Conta
                    </Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
