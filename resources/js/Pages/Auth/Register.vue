<script setup>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import FormError from "../../Components/FormError.vue";
import { Mask } from "@/Components/InputMask";
import { onMounted } from "@vue/runtime-core";

const form = useForm({
    nome: '',
    email: '',
    cpf_cnpj: '',
    celular: '',
    password: '',
    password_confirmation: ''
})

onMounted(() => {
    Mask.email('#email')
})

function submit() {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <SiteLayout>
        <Head title="Register" />

        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Registrar</h2>
                </div>
                <div class="mb-3">
                    <label for="nome">Nome</label>
                    <input class="form-control" type="text" id="nome" v-model="form.nome" required autocomplete="nome">
                    <FormError :error="form.errors.nome" />
                </div>

                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <input class="form-control" type="email" id="email" v-model="form.email" required autocomplete="email">
                    <FormError :error="form.errors.email" />
                </div>

                <div class="mb-3">
                    <label for="cpf_cnpj">CPF ou CNPJ</label>
                    <input class="form-control" type="text" id="cpf_cnpj" v-model="form.cpf_cnpj" required autocomplete="cpf_cnpj">
                    <FormError :error="form.errors.cpf_cnpj" />
                </div>

                <div class="mb-3">
                    <label for="celular">Celular</label>
                    <input class="form-control" type="text" id="celular" v-model="form.celular" required autocomplete="celular">
                    <FormError :error="form.errors.celular" />
                </div>

                <div class="mb-3">
                    <label for="password">Senha</label>
                    <input class="form-control" type="password" id="password" v-model="form.password" required autocomplete="new-password">
                    <FormError :error="form.errors.password" />
                </div>

                <div class="mb-3">
                    <label for="password_confirmation">Confirmar Senha</label>
                    <input class="form-control" type="password" id="password_confirmation" v-model="form.password_confirmation" required autocomplete="new-password">
                    <FormError :error="form.errors.password_confirmation" />
                </div>

                <div class="mb-3">
                    <button class="btn btn-primary" type="submit">Registrar</button>
                </div>
                <div class="mb-2">
                    <Link class="btn btn-link" :href="route('login')">Já possui conta?</Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
