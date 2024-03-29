<script setup lang="ts">
import { useForm, Link, usePage } from '@inertiajs/vue3'
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Mask from '@/Componentes/Helper/InputMask'
import Senha from '@/Componentes/Site/Senha.vue'

const props = defineProps({
    email: String,
    cpf: String,
    cnpj: String,
})

const form = useForm({
    nome: '',
    email: props.email,
    cpf_cnpj: props.cpf ?? props.cnpj,
    celular: '',
    password: '',
})

const elCpfCnpj = ref(null)
const elCelular = ref(null)

onMounted(() => {
    Mask.cpf_cnpj(elCpfCnpj.value)
    Mask.telefone(elCelular.value)
})

function submit() {
    form.post('/registrar', {
        onFinish: () => form.reset('password'),
    })
}
</script>

<template>
    <SiteLayout titulo="Register" noindex>
        <div class="container-600 auth">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <h2>Registrar nova conta</h2>
                </div>

                <div v-if="typeof usePage().props?.mensagem === 'object'" class="alert mb-3" :class="usePage().props?.mensagem?.classeAlert">
                    <span>{{ usePage().props?.mensagem?.texto }}</span>
                </div>

                <div class="mb-3">
                    <label for="nome">Nome completo</label>
                    <input id="nome" v-model="form.nome" class="form-control" type="text" required autocomplete="nome">
                    <FormError :error="form.errors.nome" />
                </div>

                <div class="mb-3">
                    <label for="email">E-mail</label>
                    <input id="email" v-model="form.email" class="form-control" type="email" required autocomplete="email">
                    <FormError :error="form.errors.email" />
                </div>

                <div class="mb-3">
                    <label for="cpf_cnpj">CPF ou CNPJ</label>
                    <input id="cpf_cnpj" ref="elCpfCnpj" v-model="form.cpf_cnpj" class="form-control" type="text" required autocomplete="cpf_cnpj">
                    <FormError :error="form.errors.cpf_cnpj" />
                    <FormError :error="form.errors.cnpj" />
                    <FormError :error="form.errors.cpf" />
                </div>

                <div class="mb-3">
                    <label for="celular">Celular</label>
                    <input id="celular" ref="elCelular" v-model="form.celular" class="form-control" type="text" required autocomplete="celular">
                    <FormError :error="form.errors.celular" />
                </div>

                <div class="mb-3">
                    <label for="password">Senha</label>
                    <Senha v-model="form.password" inputId="password" inputName="password" :error="form.errors.password" required />
                    <FormError :error="form.errors.password" />
                </div>

                <div class="mb-3">
                    <button class="btn btn-primary" type="submit">
                        Registrar
                    </button>
                </div>

                <div class="mb-2">
                    <Link class="btn btn-link" href="/entrar">
                        Já possui conta?
                    </Link>
                </div>
            </form>
        </div>
    </SiteLayout>
</template>
