<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3'
import { values } from 'lodash'
import { computed } from 'vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'

const form = useForm({
    email_cpf_cnpj: '',
})

function submit() {
    form.post('/acessar')
}

const error = computed(() => values(usePage().props?.errors)[0])
</script>

<template>
    <SiteLayout titulo="Entrar ou registrar conta" noindex>
        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Entrar ou registrar conta</h2>
                </div>

                <div v-if="usePage().props?.mensagem" class="alert alert-success mb-3">
                    <span>{{ usePage().props?.mensagem }}</span>
                </div>

                <div class="mb-3">
                    <label for="email_cpf_cnpj">Digite seu E-mail, CPF ou CNPJ</label>
                    <input id="email_cpf_cnpj" v-model="form.email_cpf_cnpj" type="text" class="form-control">
                    <FormError :error="error" />
                </div>

                <div class="mb-3">
                    <button type="submit" class="btn btn-primary">
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
