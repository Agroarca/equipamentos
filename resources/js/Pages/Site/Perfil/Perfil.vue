<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import Mask from '@/Componentes/Helper/InputMask'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import PerfilLayout from './Componentes/PerfilLayout.vue'

const props = defineProps({
    user: Object,
})

const form = useForm({
    nome: props.user.nome,
    email: props.user.email,
    cpf_cnpj: props.user.cpf ?? props.user.cnpj,
    celular: props.user.celular,
    password: '',
    password_confirmation: '',
})

const elCpfCnpj = ref(null)
const elCelular = ref(null)

onMounted(() => {
    Mask.cpf_cnpj(elCpfCnpj.value)
    Mask.telefone(elCelular.value)
})

function submit() {
    form.transform((data) => ({
        ...data,
        celular: data.celular.replaceAll(/\D/g, ''),
        cpf_cnpj: data.cpf_cnpj.replaceAll(/\D/g, ''),
    })).post('/perfil/atualizar', {
        onFinish: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <PerfilLayout titulo="Meus Dados" pagina="perfil">
        <form class="perfil" @submit.prevent="submit">
            <div class="mb-3">
                <h1>Meus Dados</h1>
            </div>

            <div class="mb-3">
                <label for="nome">Nome</label>
                <input id="nome" v-model="form.nome" class="form-control" type="text" autocomplete="nome" required>
                <FormError :error="form.errors.nome" />
            </div>

            <div class="mb-3">
                <label for="email">E-mail</label>
                <input id="email" v-model="form.email" class="form-control" type="email" autocomplete="email" required>
                <FormError :error="form.errors.email" />
            </div>

            <div class="mb-3">
                <label for="cpf_cnpj">CPF ou CNPJ</label>
                <input id="cpf_cnpj" ref="elCpfCnpj" v-model="form.cpf_cnpj" class="form-control" type="text" autocomplete="cpf_cnpj" required>
                <FormError :error="form.errors.cpf_cnpj" />
                <FormError :error="form.errors.cpf" />
                <FormError :error="form.errors.cnpj" />
            </div>

            <div class="mb-3">
                <label for="celular">Celular</label>
                <input id="celular" ref="elCelular" v-model="form.celular" class="form-control" type="text" autocomplete="celular" required>
                <FormError :error="form.errors.celular" />
            </div>

            <div class="mb-3">
                <label for="password">Senha</label>
                <input id="password" v-model="form.password" class="form-control" type="password" autocomplete="new-password">
                <FormError :error="form.errors.password" />
            </div>

            <div class="mb-3">
                <label for="password_confirmation">Confirmar Senha</label>
                <input id="password_confirmation" v-model="form.password_confirmation" class="form-control" type="password" autocomplete="new-password">
                <FormError :error="form.errors.password_confirmation" />
            </div>

            <div class="mb-3">
                <button class="btn btn-primary" type="submit">
                    Atualizar
                </button>
            </div>
        </form>
    </PerfilLayout>
</template>
