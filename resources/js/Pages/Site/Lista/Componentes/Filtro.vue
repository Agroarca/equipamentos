<script setup lang="ts">
import Slider from '@vueform/slider'
import { reactive } from 'vue'

let min = 0
let max = 500000
const minMax = reactive({ min: 2000, max: 500000 })

let step = 100

function slide(value: any) {
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
                    <Slider
                        class="m-2"
                        :value="[2000, 500000]"
                        :min="min"
                        :max="max"
                        :step="step"
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

<style>

:root {
  --slider-tooltip-bg: none;
  --slider-tooltip-color: black;
  --slider-handle-bg: #009934;
  --slider-connect-bg: #009934;
  --slider-handle-shadow: none;
  --slider-handle-height: 20px;
  --slider-handle-width: 20px;
  --slider-handle-shadow-active: none;
  --slider-bg : gray;
}
</style>
