<script setup>
    import SiteLayout from '@/Layouts/SiteLayout.vue';
    import { useForm } from "@inertiajs/inertia-vue3";

    const props = defineProps(['conversa', 'mensagens'])

    const form = useForm({
        'mensagem': '',
    })

    function submit() {
        form.post(route('site.conversa.enviar', props.conversa.equipamento.id))
    }
</script>

<template>
    <SiteLayout>
        <div class="container">
            <h1>Conversa - {{ conversa.equipamento.titulo }}</h1>
            <div class="d-flex flex-column">
                <span v-for="mensagem in mensagens" :key="mensagem.id">
                    {{ mensagem.id }} -> {{ mensagem.mensagem }}
                </span>
            </div>
            <form @submit.prevent="submit">
                <textarea class="form-control" v-model="form.mensagem"></textarea>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    </SiteLayout>
</template>
