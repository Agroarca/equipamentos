<script setup lang="ts">
import { useForm, Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Senha from '@/Componentes/Site/Senha.vue'

const props = defineProps({
    email_cpf_cnpj: String,
})

const form = useForm({
    email_cpf_cnpj: props.email_cpf_cnpj,
    password: '',
    manter_conectado: false,
})

const error = computed(() => getErroEmailCpfCnpj())

function submit() {
    form.post('/entrar', {
        onFinish: () => form.reset('password'),
    })
}

function getErroEmailCpfCnpj() {
    return form.errors.email_cpf_cnpj
        ?? form.errors.email
        ?? form.errors.cpf
        ?? form.errors.cnpj
}
</script>

<template>
    <SiteLayout titulo="Entrar" noindex>
        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Entrar na conta</h2>
                </div>

                <div v-if="typeof usePage().props?.mensagem === 'string'" class="alert alert-success mb-3">
                    <span>{{ usePage().props?.mensagem }}</span>
                </div>

                <div v-if="typeof usePage().props?.mensagem === 'object'" class="alert mb-3" :class="usePage().props?.mensagem?.classeAlert">
                    <span>{{ usePage().props?.mensagem?.texto }}</span>
                </div>

                <div class="mb-3">
                    <label for="email_cpf_cnpj">E-mail, CPF ou CNPJ</label>
                    <input id="email_cpf_cnpj" v-model="form.email_cpf_cnpj" class="form-control" type="email_cpf_cnpj" required autocomplete="email">
                    <FormError :error="error" />
                </div>

                <div class="mb-3">
                    <label for="password">Senha</label>
                    <Senha v-model="form.password" inputId="password" inputName="password" />
                    <FormError :error="form.errors.password" />
                </div>

                <div class="form-check mb-3">
                    <input id="manter_conectado" v-model="form.manter_conectado" class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="manter_conectado">Manter conectado?</label>
                </div>

                <div class="mb-3 d-flex justify-content-between">
                    <button class="btn btn-primary" type="submit">
                        Entrar
                    </button>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/senha/recuperar">
                        Esqueceu sua senha?
                    </Link>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/registrar">
                        Não possui conta?
                    </Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
