<script>
import PopOver from "./PopOver.vue"

export default {
    components: {
        PopOver
    },
    data() {
        return {
            show: false,
            dataOne: '',
            dataTwo: ''
        }
    },
    methods: {
        theHover(dataOne, dataTwo, show) {
            this.dataOne = dataOne
            this.dataTwo = dataTwo
            this.show = show
        }
    }
}
</script>
<template>
    <h1>
        Laravel Vue Vite!
    </h1>
    <PopOver :show="show" :data-one="dataOne" :data-two="dataTwo"></PopOver>
    <div class="container mx-auto">
        <span
            @mouseover="theHover('Hovered Yeah!', 'Second Data!', true)"
            @mouseleave="theHover('', '', false)"
        >
            Randomicity
        </span>
        <router-view />
    </div>
</template>
