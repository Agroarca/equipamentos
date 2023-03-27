<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import Editor from '@/Components/Editor/Editor.vue'
import FormError from '@/Components/FormError.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Navegacao from '../Componentes/Navegacao.vue'

const props = defineProps({
    equipamento: Object,
    statusEquipamento: Array,
})
const form = useForm({
    motivo_reprovado: props.equipamento.motivo_reprovado,
    status: null,
})

const STATUS_APROVADO = 2
const STATUS_REPROVADO = 5

function AtualizarStatus() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/status/atualizar`)
}

</script>

<template>
    <AdminLayout titulo="Editar Equipamento">
        <Navegacao class="mb-4 d-flex flex-roll justify-content-center" :equipamento="equipamento" paginaAtual="aprovacao" />
        <div class="card card-default">
            <div class="card-header">
                <h5 class="card-title">
                    Aprovação do equipamento
                </h5>
            </div>

            <div class="card-body p-0">
                <div class=" p-3">
                    <label for="status">Ação:</label>
                    <select id="status" v-model="form.status" name="status" class="form-control mt-2">
                        <option :value="STATUS_APROVADO">
                            Aprovar
                        </option>
                        <option :value="STATUS_REPROVADO">
                            Reprovar
                        </option>
                    </select>
                    <FormError :error="form.errors.status" />
                </div>
                <div v-if="form.status == STATUS_REPROVADO">
                    <h5 class="px-3 pt-3">
                        Motivo da reprovação:
                    </h5>
                    <div class="alert alert-warning mb-0">
                        O motivo da reprovação será informado ao vendedor.
                    </div>
                    <hr class="m-0">
                    <Editor v-model="form.motivo_reprovado" class="aprovacao" />
                    <FormError :error="form.errors.motivo_reprovado" />
                </div>
            </div>

            <div class="card-footer">
                <button type="button"
                        class="btn btn-secondary"
                        :class="{ disabled: !form.status, 'btn-success': form.status == STATUS_APROVADO, 'btn-danger': form.status == STATUS_REPROVADO }"
                        @click="AtualizarStatus">
                    {{ statusEquipamento[form.status] ?? 'Selecione uma ação' }}
                </button>
            </div>
        </div>
    </AdminLayout>
</template>
