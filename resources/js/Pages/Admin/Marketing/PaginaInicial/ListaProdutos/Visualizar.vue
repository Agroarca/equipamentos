<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    lista: Object,
})
</script>

<template>
    <AdminLayout titulo="Visualizar item">
        <div class="card card-default">
            <div class="card-body">
                <div class="mb-3">
                    <label for="titulo">Título</label>
                    <input id="titulo" type="text" class="form-control" name="titulo" :value="lista.componente.titulo" disabled />
                </div>
                <div class="mb-3">
                    <label for="subtitulo">Subtítulo</label>
                    <input id="subtitulo" type="text" class="form-control" name="subtitulo" :value="lista.componente.subtitulo" disabled />
                </div>
                <div class="mb-3">
                    <label for="lista_produtos">Lista de produtos</label>
                    <input id="lista_produtos" type="text" class="form-control" name="lista_produtos" :value="lista.lista_produtos.nome" disabled />
                </div>
            </div>
        </div>
    </adminlayout>
</template>
