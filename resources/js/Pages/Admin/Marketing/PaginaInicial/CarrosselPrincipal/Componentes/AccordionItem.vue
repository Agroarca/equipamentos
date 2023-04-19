<script setup lang="ts">
import { Collapse } from 'bootstrap'
import { onMounted, ref } from 'vue'
import CarrosselItem from './CarrosselItem.vue'

const collapseItem = ref(null)
const collapseButton = ref(null)
const collapse = ref(null)

const props = defineProps({
    versao: Object,
    item: Object,
})

onMounted(() => {
    collapse.value = new Collapse(collapseItem.value, { toggle: false })
    collapse.value.hide()
})

function accordionToggle(e) {
    if (collapseButton.value.classList.contains('collapsed')) {
        collapseButton.value.classList.remove('collapsed')
        collapse.value.show()
    } else {
        collapseButton.value.classList.add('collapsed')
        collapse.value.hide()
    }
}

</script>

<template>
    <div class="accordion-item">
        <h2 :id="`carrossel-principal-${item.id}-header`" class="accordion-header">
            <button ref="collapseButton"
                    class="accordion-button collapsed"
                    type="button"
                    aria-expanded="false"
                    :aria-controls="`#carrossel-principal-${item.id}-content`"
                    @click.prevent="accordionToggle">
                ({{ item.ordem }}) {{ item.descricao }}
            </button>
        </h2>
        <div :id="`#carrossel-principal-${item.id}-content`"
             ref="collapseItem"
             class="accordion-collapse collapse"
             :data-item-id="item.id"
             :aria-labelledby="`carrossel-principal-${item.id}-header`">
            <div class="accordion-body">
                <CarrosselItem :versao="versao" :item="item" />
            </div>
        </div>
    </div>
</template>
