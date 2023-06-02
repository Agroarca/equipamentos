<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Collapse } from 'bootstrap'
import axios from 'axios'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import GrupoPermissao from './Componentes/GrupoPermissao.vue'

const props = defineProps({
    grupo: Object,
    permissoes: Array,
})

let alteracoes = ref([])
let collapses = ref([])

onMounted(() => {
    [...document.querySelectorAll('.collapse')].map(
        (element) => collapses.value.push({
            id: element.id,
            collapse: new Collapse(element, {
                toggle: false,
            }),
            mostrando: false,
        }),
    )
})

function alterarPermissao(chave: string, valor: boolean) {
    if (valor === null) {
        alteracoes.value = alteracoes.value.filter((alteracao: object) => alteracao.chave !== chave)
        return
    }

    alteracoes.value.push({ chave, valor })
}

function collapse(id: string) {
    const categoria = collapses.value.find((coll: object) => coll.id === id)

    if (categoria.mostrando) {
        categoria.collapse.hide()
        categoria.mostrando = false
        return
    }

    categoria.collapse.show()
    categoria.mostrando = true
}

async function salvarPermissoes() {
    axios.post(`/admin/administracao/permissoes/grupo/${props.grupo.id}/permissoes/salvar`, {
        permissoes: alteracoes.value,
    }).then(() => {
        window.location.reload()
    })
}
</script>

<template>
    <AdminLayout :titulo="`Permissoes de ${grupo.nome}`">
        <div class="card card-default">
            <div class="card-header d-flex flex-row justify-content-between" @click="collapse('alteracoes')">
                <div class="title">
                    Alterações
                    <span v-if="alteracoes.length" class="badge bg-secondary">{{ alteracoes.length }}</span>
                </div>
                <div class="controls">
                    <i class="fa-solid fa-chevron-down" />
                </div>
            </div>
            <div id="alteracoes" class="card-body p-0 collapse">
                <table class="table table-stripped table-hover table-sm">
                    <thead>
                        <th>Novo Valor</th>
                        <th>Permissao</th>
                    </thead>
                    <tbody>
                        <tr v-for="alteracao in alteracoes" :key="alteracao.chave">
                            <td>{{ alteracao.valor ? "Sim" : "Não" }}</td>
                            <td>{{ alteracao.chave }}</td>
                        </tr>
                        <tr v-if="alteracoes.length === 0">
                            <td colspan="2" class="text-center">
                                Nenhuma alteração
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary me-2 d-flex flex-nowrap align-items-center" @click="salvarPermissoes">
                    <i class="fas fa-floppy-disk pe-1" /> Salvar Permissoes
                </button>
            </div>
        </div>
        <div v-for="grupoPerm in permissoes" :key="grupoPerm.chave" class="card card-default mt-3">
            <div class="card-header d-flex flex-row justify-content-between" @click="collapse(`card-${grupoPerm.chave}`)">
                <div class="title">
                    {{ grupoPerm.nome }}
                </div>
                <div class="controls">
                    <i class="fa-solid fa-chevron-down" />
                </div>
            </div>
            <div :id="`card-${grupoPerm.chave}`" class="card-body p-0 collapse">
                <div class="p-2">
                    <GrupoPermissao :grupo="grupoPerm" @alterarPermissao="alterarPermissao" />
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
