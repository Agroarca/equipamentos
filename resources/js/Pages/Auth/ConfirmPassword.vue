<script setup>
import { useForm, Head } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '../../Components/FormError.vue'

const form = useForm({
    password: '',
})

function submit() {
    form.post(route('password.confirm'), {
        onFinish: () => form.reset(),
    })
}
</script>

<template>
    <SiteLayout>
        <Head title="Recuperar Senha" />

        <div class="alert alert-warn">
            Essa é uma área restrita!
            Confirme sua senha antes de acessar
        </div>

        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="password">Senha</label>
                <input id="password" v-model="form.password" class="form-control" type="password" required
                       autocomplete="current-password">
                <FormError :error="form.errors.password" />
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">
                    Confirmar
                </button>
            </div>
        </form>
    </SiteLayout>
</template>
