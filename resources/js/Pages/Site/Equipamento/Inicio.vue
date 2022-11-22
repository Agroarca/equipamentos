<script setup>
    import SiteLayout from "@/Layouts/SiteLayout.vue"
    import Imagens from './Imagens.vue'

    const props = defineProps(['equipamento'])
</script>

<template>
    <SiteLayout>
        <div class="container equipamento">
            <div class="d-flex flex-column flex-md-row align-items-md-start">
                <Imagens :imagens="equipamento.imagens" class="col-md-8" />
                <div class="info d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0">
                    <span class="ano">Ano: {{ equipamento.ano }}</span>
                    <h1 class="titulo">{{ equipamento.titulo }}</h1>
                    <span class="valor">{{ equipamento.valor }}</span>
                    <button class="botao btn btn-primary">Estou Interessado!</button>
                </div>
            </div>
            <div class="descricao-header">
                <span>Características</span>
            </div>
            <div class="caracteristicas" v-if="equipamento.caracteristicas.length > 0">
                <div class="caracteristica" v-for="caracteristica in equipamento.caracteristicas" :key="caracteristica.id">
                    <span class="nome">{{ caracteristica.caracteristica.nome }}</span>
                    <span class="valor">{{ caracteristica.valor.valor }}</span>
                </div>
            </div>
            <div class="descricao-header">
                <span>Descrição</span>
            </div>
            <div class="descricao">
                Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet enim velit. Donec et lorem at neque faucibus facilisis eget id ante. Donec eget neque sed felis euismod fermentum. Donec quis orci sapien. Quisque sit amet mattis nunc, eu volutpat ante. Aenean feugiat sit amet mi non porttitor. Quisque vitae molestie nunc. Sed ante nibh, tincidunt quis consequat non, auctor eget velit. Ut ut feugiat urna, ut semper diam. Donec rhoncus lectus quis enim vehicula finibus. In laoreet, justo nec lobortis bibendum, metus velit ultrices mi, a gravida libero arcu quis eros. Pellentesque nec nisl et eros porta vestibulum. Etiam pellentesque est nec suscipit pulvinar. Sed vel dolor orci.
                Curabitur vel finibus enim. Praesent eleifend ex sed nisi commodo efficitur. Nunc at diam pretium, ullamcorper nibh id, lacinia purus. Vivamus gravida quis mauris vel accumsan. Proin hendrerit tempus odio vel scelerisque. Maecenas ullamcorper ligula a ultrices tincidunt. Nullam volutpat velit placerat, condimentum risus et, ornare felis.
                Curabitur sit amet felis dui. Mauris semper eu metus nec laoreet. Suspendisse potenti. Nam faucibus tortor sit amet mauris interdum, in pellentesque est mattis. In et enim fermentum, auctor orci eu, mollis ipsum. Maecenas sit amet euismod massa. Nullam semper ornare ipsum, a pulvinar leo facilisis non. Morbi vehicula, justo ac varius venenatis, arcu augue sodales turpis, eu maximus dolor augue a dui. Nam justo tortor, accumsan ac tortor nec, blandit rhoncus justo. Aliquam erat volutpat. Duis viverra dignissim mattis. Suspendisse potenti. Morbi congue tincidunt viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In nisi massa, condimentum eget justo ac, vestibulum tempus turpis.
                Curabitur congue dolor ante, vel pretium sem malesuada in. Nunc sit amet volutpat nibh. In finibus semper orci quis auctor. Nunc vitae placerat nibh. Sed eget massa varius, fermentum nulla eget, consectetur nisl. Pellentesque.
            </div>
        </div>
    </SiteLayout>
</template>
