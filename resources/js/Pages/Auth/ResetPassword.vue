<script setup>
import SiteLayout from "@/Layouts/SiteLayout.vue";
import { useForm, Head, Link } from "@inertiajs/vue3";
import FormError from "../../Components/FormError.vue";

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
})

function submit() {
    form.post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
}
</script>

<template>
    <SiteLayout>
        <Head title="Atualizar Senha" />

        <form @submit.prevent="submit">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input class="form-control" type="email" id="email" v-model="form.email" required autocomplete="email">
                <FormError :error="form.errors.email" />
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <input class="form-control" type="password" id="password" v-model="form.password" required
                    autocomplete="new-password">
                <FormError :error="form.errors.password" />
            </div>

            <div class="form-group">
                <label for="password_confirmation">Confirmar Senha</label>
                <input class="form-control" type="password" id="password_confirmation"
                    v-model="form.password_confirmation" required autocomplete="new-password">
                <FormError :error="form.errors.password_confirmation" />
            </div>

            <div class="form-group">
                <button class="btn btn-primary" type="submit">Atualizar Senha</button>
            </div>
        </form>
    </SiteLayout>
</template>
