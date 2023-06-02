<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    banner: Object,
})
</script>

<template>
    <AdminLayout titulo="Visualizar Item">
        <div class="card card-default">
            <div class="card-body">
                <div class="mb-3">
                    <label for="titulo">Título</label>
                    <input id="titulo" type="text" class="form-control" name="titulo" :value="banner.componente.titulo" disabled />
                </div>
                <div class="mb-3">
                    <label for="subtitulo">Subtítulo</label>
                    <input id="subtitulo" type="text" class="form-control" name="subtitulo" :value="banner.componente.subtitulo" disabled />
                </div>
                <div class="mb-3 form-check">
                    <label for="tela_cheia">Tela Cheia</label>
                    <input id="tela_cheia" type="checkbox" class="form-check-input" name="tela_cheia" :checked="banner.componente.tela_cheia" disabled />
                </div>
                <div class="mb-3">
                    <label for="descricao">Descrição</label>
                    <input id="descricao" type="text" class="form-control" name="descricao" :value="banner.descricao" disabled />
                </div>
                <div class="mb-3">
                    <label for="link">Link</label>
                    <input id="link" type="text" class="form-control" name="link" :value="banner.link" disabled />
                </div>
                <div class="mb-3">
                    <label for="img_desktop">Imagem Desktop</label>
                    <img id="img_desktop" :src="banner.url_desktop" alt="" class="d-block mw-100" />
                </div>
                <div class="mb-3">
                    <label for="img_mobile">Imagem Mobile</label>
                    <img v-if="banner.url_mobile" id="img_mobile" :src="banner.url_mobile" alt="" class="d-block mw-100" />
                    <div v-else class="alert alert-info">
                        Imagem Mobile não cadastrada
                    </div>
                </div>
            </div>
        </div>
    </adminlayout>
</template>
