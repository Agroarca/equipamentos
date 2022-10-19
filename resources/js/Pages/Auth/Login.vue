<script setup>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
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

        <div class="container">
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input class="form-control" type="email" id="email" v-model="form.email" required autocomplete="email">
                    <FormError :error="form.errors.email" />
                </div>

                <div class="form-group">
                    <label for="password">Senha</label>
                    <input class="form-control" type="password" id="password" v-model="form.password" required
                        autocomplete="current-password">
                    <FormError :error="form.errors.password" />
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember" :checked="form.remember">
                    <label class="form-check-label" for="remember">Manter conectado?</label>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary" type="submit">Entrar</button>
                    <Link :href="route('password.request')">Esqueceu sua Senha?</Link>
                    <Link :href="route('register')">Não possui conta?</Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
