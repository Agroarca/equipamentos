<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import axios from 'axios'
import { ref } from 'vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'

function escolherCategoria(id) {
    router.visit(`/equipamento/cadastro/${id}`)
}

const props = defineProps({
    categorias: Array,
})

const data = ref({
    categoria: {},
    categorias: props.categorias,
    categoriasMae: [],
})

function atualizarCategorias(categoriaId?) {
    window.loader.show()
    const url = categoriaId ? `/categorias/pesquisar/${categoriaId}` : '/categorias/pesquisar'

    axios.get(url).then((response) => {
        data.value.categoria = response.data.categoria
        data.value.categorias = response.data.categorias
        data.value.categoriasMae = response.data.categoriasMae
    }).finally(() => {
        window.loader.hide()
    })
}

</script>

<template>
    <SiteLayout titulo="Cadastrar Equipamento">
        <div class="container-600 cadastrar-equipamento">
            <div>
                <div class="titulo text-center mb-4">
                    <h3>
                        <span v-if="data.categoria?.nome">Selecione uma subcategoria ou anuncie em <strong>{{ data.categoria.nome }}</strong></span>
                        <span v-else>Selecione uma categoria</span>
                    </h3>
                </div>

                <div v-if="data.categoriasMae.length > 0" class="mb-3">
                    <nav aria-label="breadcrumb">
                        <ul class="breadcrumb">
                            <li v-for="categoria in data.categoriasMae" :key="categoria.id" class="breadcrumb-item">
                                <button type="button" class="breadcrumb-item btn btn-link" @click="atualizarCategorias(categoria.id)">
                                    {{ categoria.nome }}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="d-flex flex-column gap-3">
                    <button v-for="categoria in data.categorias" :key="categoria.id" type="button" class="btn btn-secondary justify-content-center" @click="atualizarCategorias(categoria.id)">
                        {{ categoria.nome }}
                    </button>

                    <div v-if="data.categoria?.id" class="d-flex flex-row gap-3">
                        <button type="button" class="btn btn-secondary" @click="atualizarCategorias(data.categoria.categoria_mae_id)">
                            Voltar
                        </button>
                        <button type="button" class="btn btn-primary flex-fill text-center justify-content-center" @click="escolherCategoria(data.categoria.id)">
                            Anunciar em {{ data.categoria.nome }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </SiteLayout>
</template>
