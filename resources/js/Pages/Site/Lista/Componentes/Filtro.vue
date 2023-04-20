<script setup lang="ts">
import { reactive } from 'vue'
import SliderRanger from '@/Componentes/Layout/Forms/SliderRanger.vue'

const minMax = reactive({ min: 2000, max: 500000 })

function slide(value: Array<number>) {
    minMax.min = value[0]
    minMax.max = value[1]
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h2 class="mb-4">
                    Filtros
                </h2>
                <div class="mb-3">
                    <h5>
                        Valor
                    </h5>
                    <SliderRanger
                        class="m-2"
                        :value="[2000, 500000]"
                        :min="0"
                        :max="500000"
                        :step="50000"
                        :tooltips="false"
                        @slide="slide" />
                    <input class="form-control" :value="'R$ ' + minMax.min" type="text" name="min">
                    <input class="form-control" :value="'R$ ' + minMax.max" type="text" name="max">
                </div>
                <div class="mb-3">
                    <h5 class="titulo text-center m-3">
                        Todas Categorias
                    </h5>
                    <ul class="nested">
                        <li>
                            <label for="categoria1">categoria 1</label>
                        </li>
                        <li>
                            <label for="categoria1">categoria 1</label>
                        </li>
                        <li>
                            <label for="categoria1">categoria 1</label>
                        </li>
                    </ul>
                </div>
                <hr>
                <div>
                    <h5 class="titulo text-center m-3">
                        Marcas
                    </h5>
                    <ul>
                        <li>
                            <a>Marca 1</a>
                        </li>
                        <li>
                            <a>Marca 2</a>
                        </li>
                        <li>
                            <a>Marca 3</a>
                        </li>
                    </ul>
                </div>
                <hr>
                <div>
                    <h5 class="titulo text-center m-3">
                        Modelos
                    </h5>
                    <ul>
                        <li>
                            <a>Modelo 1</a>
                        </li>
                        <li>
                            <a>Modelo 2</a>
                        </li>
                        <li>
                            <a>Modelo 3</a>
                        </li>
                    </ul>
                </div>
                <div class="mb-3">
                    <h4>Ano</h4>
                    <input class="form-control" type="number">
                </div>
            </div>
        </div>
    </div>
</template>
