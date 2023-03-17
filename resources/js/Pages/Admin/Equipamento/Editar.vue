<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { computed, ref, onMounted } from 'vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Components/FormError.vue'
import Caracteristicas from './Caracteristicas/Inicio.vue'
import Imagens from './Imagens/Inicio.vue'
import Descricao from './Descricao/Descricao.vue'
import Mask from '@/Components/Util/InputMask'

const props = defineProps({
    equipamento: Object,
    caracteristicas: Object,
})

const elValor = ref(null)
let valor

onMounted(() => {
    valor = Mask.preco(elValor.value)
})

const form = useForm({
    id: props.equipamento.id,
    titulo: props.equipamento.titulo,
    valor: props.equipamento.valor,
    ano: props.equipamento.ano,
    marca: props.equipamento.modelo.marca.nome,
    modelo: props.equipamento.modelo.nome,
    categoria: props.equipamento.categoria.nome,
})

function submit() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar Equipamento">
        <div class="equipamento">
            <form @submit.prevent="submit">
                <div class="card card-default">
                    <div class="card-body">
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
                            <input id="ano" v-model="form.marca" class="form-control" type="text" disabled>
                            <FormError :error="form.errors.marca" />
                        </div>
                        <div class="mb-3">
                            <label for="marca_id">Modelo</label>
                            <input id="ano" v-model="form.modelo" class="form-control" type="text" disabled>
                            <FormError :error="form.errors.modelo" />
                        </div>
                        <div class="mb-3">
                            <label for="categoria">Categoria</label>
                            <input id="ano" v-model="form.categoria" class="form-control" type="text" disabled>
                            <FormError :error="form.errors.categoria" />
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">
                            Salvar
                        </button>
                    </div>
                </div>
            </form>

            <Descricao :equipamento="equipamento" class="mt-5" />

            <Caracteristicas :caracteristicas="caracteristicas" :equipamento="equipamento" class="mt-5" />

            <Imagens :equipamento="equipamento" class="mt-5" />
        </div>
    </AdminLayout>
</template>
