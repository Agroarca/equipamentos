<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref, onMounted } from 'vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Navegacao from '../Componentes/Navegacao.vue'
import Mask from '@/Componentes/Helper/InputMask'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    equipamento: Object,
    statusEquipamentos: Array,
})

const STATUS_CRIADO = 1

const elValor = ref(null)

onMounted(() => {
    Mask.preco(elValor.value)
})

const form = useForm({
    id: props.equipamento.id,
    titulo: props.equipamento.titulo,
    valor: props.equipamento.valor,
    ano: props.equipamento.ano,
    marca: props.equipamento.modelo.marca.nome,
    modelo: props.equipamento.modelo.nome,
    categoria: props.equipamento.categoria.nome,
    status: props.equipamento.status,
})

function submit() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar Equipamento">
        <div class="equipamento">
            <Navegacao class="mb-4 d-flex flex-roll justify-content-center" :equipamento="equipamento" paginaAtual="cadastro" />
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
                        <div class="mb-3">
                            <label for="categoria">Status</label>
                            <select id="status" v-model="form.status" class="form-select" required>
                                <option v-for="(status, index) in statusEquipamentos" :key="index" :value="index">
                                    {{ status }}
                                </option>
                            </select>
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
        </div>
    </AdminLayout>
</template>