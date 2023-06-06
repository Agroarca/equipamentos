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
    form.post('/reset-password', {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <SiteLayout titulo="Atualizar Senha" noindex>
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input id="email" v-model="form.email" class="form-control" type="email" disabled autocomplete="email">
                <FormError :error="form.errors.email" />
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <Senha v-model="form.password" inputId="password" inputName="password" />
                <FormError :error="form.errors.password" />
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">
                    Atualizar Senha
                </button>
            </div>
        </form>
    </SiteLayout>
</template>
