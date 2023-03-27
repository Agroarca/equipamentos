<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { computed, ref, onMounted } from 'vue'
import FormError from '@/Components/FormError.vue'
import SelectAjax from '@/Components/Util/SelectAjax.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Navegacao from './Navegacao.vue'
import Mask from '@/Components/Util/InputMask'

const props = defineProps({
    categorias: Object,
    equipamento: Object,
})

const placeholderModelo = computed(() => (form.marca ? 'Selecione um Modelo' : 'Selecione uma Marca'))

const form = useForm({
    id: props.equipamento?.id,
    titulo: props.equipamento?.titulo,
    valor: props.equipamento?.valor,
    ano: props.equipamento?.ano,
    modelo_id: props.equipamento?.modelo?.id,
    marca_id: props.equipamento?.modelo?.marca?.id,
    categoria_id: props.equipamento?.categoria_id,
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
        <div class="container">
            <Navegacao class="mb-3" :passoAtual="1" :passoCadastro="equipamento?.passo_cadastro ?? 1" :equipamento="equipamento" />
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
                    <SelectAjax v-if="!equipamento?.modelo?.marca" v-model="form.marca_id" placeholder="Selecione uma marca" href="/admin/marcas/pesquisar" />
                    <input v-else id="ano" :value="equipamento.modelo.marca.nome" class="form-control" type="text" disabled>
                    <FormError :error="form.errors.modelo_id" />
                </div>
                <div class="mb-3">
                    <label for="marca_id">Modelo</label>
                    <SelectAjax v-if="!equipamento?.modelo" v-model="form.modelo_id" :disabled="!form.marca_id" :placeholder="placeholderModelo" :href="`/admin/modelos/pesquisar/${form.marca_id}`" />
                    <input v-else id="ano" :value="equipamento.modelo.marca.nome" class="form-control" type="text" disabled>
                    <FormError :error="form.errors.modelo_id" />
                </div>
                <div class="mb-3">
                    <label for="categoria_id">Categoria</label>
                    <select id="categoria_id" v-model="form.categoria_id" class="form-select" required>
                        <option v-for="(categoria, index) in categorias" :key="index" :value="index">
                            {{ categoria }}
                        </option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">
                    Continuar
                </button>
            </form>
        </div>
    </SiteLayout>
</template>
