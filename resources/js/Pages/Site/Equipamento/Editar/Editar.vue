<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref, onMounted } from 'vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Mask from '@/Componentes/Helper/InputMask'
import Navegacao from '../Cadastrar/Componentes/Navegacao.vue'

const props = defineProps({
    equipamento: Object,
})

const form = useForm({
    id: props.equipamento?.id,
    titulo: props.equipamento?.titulo,
    valor: props.equipamento?.valor,
    ano: props.equipamento?.ano,
})

const elValor = ref(null)

onMounted(() => {
    Mask.preco(elValor.value)
})

function submit() {
    form.post('/equipamento/salvar')
}

</script>

<template>
    <SiteLayout titulo="Cadastrar Equipamento">
        <div class="container-600 cadastrar-equipamento">
            <h2 class="titulo text-center mb-3">
                Cadastrar Novo Equipamento
            </h2>
            <Navegacao class="mb-3 d-flex justify-content-center" :passoAtual="1" :passoCadastro="equipamento?.passo_cadastro ?? 1" :equipamento="equipamento" />
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="titulo">Título</label>
                    <input id="titulo" v-model="form.titulo" class="form-control" type="text" required>
                    <FormError :error="form.errors.titulo" />
                </div>
                <div class="mb-3">
                    <label for="valor">Valor</label>
                    <input id="valor" ref="elValor" v-model="form.valor" class="form-control" type="text" required>
                    <FormError :error="form.errors.valor" />
                </div>
                <div class="mb-3">
                    <label for="ano">Ano</label>
                    <input id="ano" v-model="form.ano" class="form-control" type="text" required>
                    <FormError :error="form.errors.ano" />
                </div>
                <div class="mb-3">
                    <label for="marca_id">Marca</label>
                    <input id="ano" :value="equipamento.modelo.marca.nome" class="form-control" type="text" disabled>
                </div>
                <div class="mb-3">
                    <label for="marca_id">Modelo</label>
                    <input id="ano" :value="equipamento.modelo.nome" class="form-control" type="text" disabled>
                </div>
                <div class="mb-3">
                    <label for="categoria_id">Categoria</label>
                    <input id="ano" :value="equipamento.categoria.nome" class="form-control" type="text" disabled>
                </div>
                <button type="submit" class="btn btn-primary">
                    Continuar
                </button>
            </form>
        </div>
    </SiteLayout>
</template>
