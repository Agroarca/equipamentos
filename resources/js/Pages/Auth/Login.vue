<script setup>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { useForm, Head, Link } from "@inertiajs/vue3";
import FormError from "../../Components/FormError.vue";

const form = useForm({
    email: '',
    password: '',
    remember: false
})

function submit() {
    form.post(route('login'), {
        onFinish: () => form.reset('password')
    })
}
</script>

<template>
    <SiteLayout>
        <Head title="Entrar" />

        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Entrar</h2>
                </div>
                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <input class="form-control" type="email" id="email" v-model="form.email" required autocomplete="email">
                    <FormError :error="form.errors.email" />
                </div>

                <div class="mb-3">
                    <label for="password">Senha</label>
                    <input class="form-control" type="password" id="password" v-model="form.password" required
                        autocomplete="current-password">
                    <FormError :error="form.errors.password" />
                </div>

                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="remember" :checked="form.remember">
                    <label class="form-check-label" for="remember">Manter conectado?</label>
                </div>

                <div class="mb-3 d-flex justify-content-between">
                    <button class="btn btn-primary" type="submit">Entrar</button>
                </div>
                <div class="mb-2">
                    <Link class="btn btn-link" :href="route('password.request')">Esqueceu sua Senha?</Link>
                </div>
                <div class="mb-2">
                    <Link class="btn btn-link" :href="route('register')">Não possui conta?</Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
