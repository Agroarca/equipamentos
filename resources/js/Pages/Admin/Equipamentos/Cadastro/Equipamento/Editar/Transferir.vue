<script setup lang="ts">

import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Modal from '@/Componentes/Layout/Bootstrap/Modal.vue'

const props = defineProps({
    equipamento: Object,
})

const form = useForm({
    usuario_id: '',
})

let modal = ref(null)
let nome = ref('')

function abrirModalConfirmacao() {
    if (form.usuario_id === '') {
        return
    }
    modal.value.show()
}

function transferirEquipamento() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/transferir/salvar`, {
        onSuccess: () => {
            modal.value.hide()
        },
    })
}

function escolherOpcao(e) {
    nome.value = e.texto
}
</script>

<template>
    <AdminLayout :titulo="`Transferir ${equipamento.titulo}`">
        <div class="equipamento">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3 d-flex">
                        <SelectAjax
                            v-model="form.usuario_id"
                            placeholder="Selecione um usuario"
                            href="/admin/equipamentos/usuarios/pesquisar"
                            class="w-100"
                            @optionSelected="escolherOpcao" />
                        <button type="button" class="btn btn-primary ms-2" @click="abrirModalConfirmacao">
                            Transferir
                        </button>
                    </div>
                </div>
            </div>
            <Modal ref="modal">
                <p>Você confirma transferir o equipamento {{ equipamento.titulo }} para o usuário {{ nome }}?</p>
                <template #footer>
                    <button type="submit" class="btn btn-primary" @click="transferirEquipamento">
                        <i class="fa-solid fa-circle-check pe-1" /> Confirmar
                    </button>
                </template>
            </Modal>
        </div>
    </AdminLayout>
</template>
