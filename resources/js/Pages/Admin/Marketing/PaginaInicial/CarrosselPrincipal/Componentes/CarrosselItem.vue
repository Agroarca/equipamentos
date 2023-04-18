<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    versao: Object,
    item: Object,
})
</script>

<template>
    <div class="carrossel-item">
        <div class="mb-3">
            <label for="ordem">Ordem</label>
            <input type="number" class="form-control" name="ordem" :value="item.ordem" disabled />
        </div>
        <div class="mb-3">
            <label for="link">Link</label>
            <input type="text" class="form-control" name="link" :value="item.link" disabled />
        </div>
        <div class="mb-3">
            <label for="img_desktop">Imagem Desktop</label>
            <img :src="item.url_desktop" alt="" class="d-block mw-100" />
        </div>
        <div class="mb-3">
            <label for="img_mobile">Imagem Mobile</label>
            <img :src="item.url_mobile" alt="" class="d-block mw-100" />
        </div>
        <div class="mb-3">
            <Link class="btn btn-danger" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/${item.id}/excluir`">
                <i class="fas fa-eraser pe-1" />
                Excluir Item
            </Link>
        </div>
    </div>
</template>
