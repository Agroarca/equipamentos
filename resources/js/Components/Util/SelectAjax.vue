<script  setup lang="ts">
import axios from 'axios'
import { debounce } from 'lodash'
import { ref } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const search = debounce(onSearch, 500)
const href = route('site.modelos.pesquisar')
const options = ref([])
function onSearch(search, loading) {
    axios.get(href, {
        params: {
            termo: search,
        },
    }).then((response) => {
        loading(false)
        options.value = response.data
    })
}

</script>

<template>
    <v-select label="texto" :options="options" @search="search" />
</template>
