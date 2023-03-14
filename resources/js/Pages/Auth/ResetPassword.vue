<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '../../Components/FormError.vue'

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
    password_confirmation: '',
})

function submit() {
    form.post('/reset-password', {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <SiteLayout titulo="Atualizar Senha">
        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input id="email" v-model="form.email" class="form-control" type="email" required autocomplete="email">
                <FormError :error="form.errors.email" />
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <input id="password" v-model="form.password" class="form-control" type="password" required
                       autocomplete="new-password">
                <FormError :error="form.errors.password" />
            </div>

            <div class="form-group">
                <label for="password_confirmation">Confirmar Senha</label>
                <input id="password_confirmation" v-model="form.password_confirmation" class="form-control"
                       type="password" required autocomplete="new-password">
                <FormError :error="form.errors.password_confirmation" />
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">
                    Atualizar Senha
                </button>
            </div>
        </form>
    </SiteLayout>
</template>
