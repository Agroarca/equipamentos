<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Editor from '@/Componentes/Layout/Editor/Editor.vue'

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
                <h5 class="p-3">
                    Motivo da reprovação:
                </h5>
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
</template>
