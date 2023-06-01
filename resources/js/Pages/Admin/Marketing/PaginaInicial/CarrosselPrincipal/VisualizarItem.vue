<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    item: Object,
})
</script>

<template>
    <AdminLayout titulo="Visualizar Item">
        <div class="card card-default">
            <div class="card-body">
                <div class="mb-3">
                    <label for="descricao">Descrição</label>
                    <input id="descricao" type="text" class="form-control" name="descricao" :value="item.descricao" disabled />
                </div>
                <div class="mb-3">
                    <label for="link">Link</label>
                    <input id="link" type="text" class="form-control" name="link" :value="item.link" disabled />
                </div>
                <div class="mb-3">
                    <label for="img_desktop">Imagem Desktop</label>
                    <img id="img_desktop" :src="item.url_desktop" alt="" class="d-block mw-100" />
                </div>
                <div class="mb-3">
                    <label for="img_mobile">Imagem Mobile</label>
                    <img id="img_mobile" :src="item.url_mobile" alt="" class="d-block mw-100" />
                </div>
            </div>
        </div>
    </adminlayout>
</template>
