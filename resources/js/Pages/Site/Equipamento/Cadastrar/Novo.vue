<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { computed } from 'vue'
import FormError from '@/Components/FormError.vue'
import SelectAjax from '@/Components/Util/SelectAjax.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'

const props = defineProps({
    categorias: Object,
})

const placeholderModelo = computed(() => (form.marca_id ? 'Selecione um Modelo' : 'Selecione uma marca'))

const form = useForm({
    titulo: '',
    valor: '',
    ano: '',
    marca_id: '',
    modelo_id: '',
    categoria_id: '',
})

function submit() {
    form.post('/equipamento/salvar')
}

</script>

<template>
    <SiteLayout titulo="Cadastrar Equipamento">
        <div class="container">
            <form @submit.prevent="submit">
                <div class="mb-3">
                    <label for="titulo">Título</label>
                    <input id="titulo" v-model="form.titulo" class="form-control" type="text" required>
                    <FormError :error="form.errors.titulo" />
                </div>
                <div class="mb-3">
                    <label for="valor">Valor</label>
                    <input id="valor" v-model="form.valor" class="form-control" type="text" required>
                    <FormError :error="form.errors.valor" />
                </div>
                <div class="mb-3">
                    <label for="ano">Ano</label>
                    <input id="ano" v-model="form.ano" class="form-control" type="text" required>
                    <FormError :error="form.errors.ano" />
                </div>
                <div class="mb-3">
                    <label for="marca_id">Marca</label>
                    <SelectAjax v-model="form.marca_id" placeholder="Selecione uma marca" href="/admin/marcas/pesquisar" />
                    <FormError :error="form.errors.modelo_id" />
                </div>
                <div class="mb-3">
                    <label for="marca_id">Modelo</label>
                    <SelectAjax v-model="form.modelo_id" :disabled="!form.marca_id" :placeholder="placeholderModelo" :href="`/admin/modelos/pesquisar/${form.marca_id}`" />
                    <FormError :error="form.errors.modelo_id" />
                </div>
                <div class="mb-3">
                    <!-- Categoria... -->
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
