<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Senha from '@/Componentes/Site/Senha.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const form = useForm({
    password: '',
})

function submit() {
    form.post('/confirm-password', {
        onFinish: () => form.reset(),
    })
}
</script>

<template>
    <SiteLayout titulo="Recuperar senha" noindex>
        <div class="alert alert-warn">
            Essa é uma área restrita!
            Confirme sua senha antes de acessar
        </div>
        <form @submit.prevent="submit">
            <label for="password">Senha</label>
            <Senha v-model="form.password" inputId="password" inputName="password" :error="form.errors.password" required />
            <FormError :error="form.errors.password" />
            <div class="form-group">
                <button class="btn btn-primary" type="submit">
                    Confirmar
                </button>
            </div>
        </form>
    </SiteLayout>
</template>
