<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    menuLink: Object,
})
</script>

<template>
    <AdminLayout titulo="Novo link">
        <div class="card card-default">
            <div class="card-body">
                <div class="mb-3">
                    <label for="nome">Nome</label>
                    <input id="nome" :value="menuLink.nome" class="form-control" type="integer" disabled>
                </div>
                <div class="mb-3">
                    <label for="link">Link</label>
                    <input id="link" :value="menuLink.link" class="form-control" type="text" disabled>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
