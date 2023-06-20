<script setup lang="ts">
import { useForm, Link } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    status: String,
})

const form = useForm({
    email: '',
})

function submit() {
    form.post('/senha/recuperar')
}
</script>

<template>
    <SiteLayout titulo="Recuperar senha" noindex>
        <div class="container-600 auth">
            <div v-if="status" class="alert alert-success">
                O e-mail de recuperação foi enviado com sucesso!
            </div>
            <div v-else>
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
                </form>
            </div>
            <div class="mb-2">
                <Link class="btn btn-link" href="/entrar">
                    Entrar na conta
                </Link>
            </div>
        </div>
    </SiteLayout>
</template>
