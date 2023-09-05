<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Senha from '@/Componentes/Site/Senha.vue'

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
})

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
})

function submit() {
    form.post('/senha/redefinir/', {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <SiteLayout titulo="Atualizar senha" noindex>
        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Atualizar Senha</h2>
                </div>
                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <input id="email" v-model="form.email" class="form-control" type="email" disabled autocomplete="email">
                    <FormError :error="form.errors.email" />
                </div>
                <div class="mb-3">
                    <label for="password">Senha</label>
                    <Senha v-model="form.password" inputId="password" inputName="password" required />
                    <FormError :error="form.errors.password" />
                </div>
                <div class="mb-3 pt-2">
                    <button class="btn btn-primary" type="submit">
                        Atualizar senha
                    </button>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
