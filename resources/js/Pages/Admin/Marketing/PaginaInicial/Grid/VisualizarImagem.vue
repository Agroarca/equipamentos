<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    gridImagem: Object,
})
</script>

<template>
    <AdminLayout titulo="Visualizar item">
        <div class="card card-default">
            <div class="card-body">
                <div class="mb-3">
                    <label for="descricao">Descrição</label>
                    <input id="descricao" type="text" class="form-control" name="descricao" :value="gridImagem.descricao" disabled />
                </div>
                <div class="mb-3">
                    <label for="link">Link</label>
                    <input id="link" type="text" class="form-control" name="link" :value="gridImagem.link" disabled />
                </div>
                <div class="mb-3">
                    <label for="img_desktop">Imagem desktop</label>
                    <img id="img_desktop" :src="gridImagem.url_desktop" alt="" class="d-block mw-100" />
                </div>
                <div class="mb-3">
                    <label for="img_mobile">Imagem mobile</label>
                    <img v-if="gridImagem.url_mobile" id="img_mobile" :src="gridImagem.url_mobile" alt="" class="d-block mw-100" />
                    <div v-else class="alert alert-info">
                        Imagem mobile não cadastrada
                    </div>
                </div>
            </div>
        </div>
    </adminlayout>
</template>
