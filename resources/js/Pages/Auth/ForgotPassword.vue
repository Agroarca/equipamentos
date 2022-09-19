<script setup>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import FormError from "../../Components/FormError.vue";

const form = useForm({
    email: ''
})

function submit() {
    form.post(route('password.email'))
}
</script>

<template>
    <SiteLayout>
        <Head title="Recuperar Senha" />

        <div class="alert alert-info">
            Esqueceu sua senha?
            Não se preocupe, informe seu e-mail e enviaremos um e-mail de recuperação
        </div>

        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input class="form-control" type="email" id="email" v-model="form.email" required>
                <FormError :error="form.errors.email" />
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">Enviar e-mail de recuperação</button>
                <Link :href="route('password.request')">Entrar</Link>
            </div>
        </form>
    </SiteLayout>
</template>