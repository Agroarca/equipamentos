<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import { inject, ref } from 'vue'

const isLista = inject('isLista')

const termo = ref('')
const checkTipoPesquisa = ref(false)

function pesquisar() {
    if (!termo.value.trim()) {
        return
    }

    if (!checkTipoPesquisa.value.checked) {
        router.visit(`/pesquisa/${termo.value}`)
        return
    }

    const url = new URL(window.location.href)
    url.searchParams.set('pesquisa', termo.value)
    router.visit(url)
}
</script>

<template>
    <div class="header-item search-container input-group order-5 order-md-2">
        <form class="d-flex w-100" @submit.prevent="pesquisar()">
            <div class="input-group form-check">
                <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                <input v-model="termo" required placeholder="Pesquisar produtos..." type="text" class="search form-control">
                <span v-if="isLista" class="input-group-text">

                    <input id="CheckPesquisa" ref="checkTipoPesquisa" class="form-check-input check-pesquisa" type="checkbox" value="">
                    <label class="form-check-label" for="CheckPesquisa">
                        Apenas nessa pagina
                    </label>
                </span>
            </div>
            <button type="submit">
                <i class="fa fa-search" />
            </button>
        </form>
    </div>
</template>
