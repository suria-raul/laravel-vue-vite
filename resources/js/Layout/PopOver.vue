<script>
export default {
    props: ['dataOne', 'dataTwo', 'show']
}
</script>

<template>
    <div id="custom-container" :class="(show) ? 'active' : ''">
        <p>{{ dataOne }}</p>
        <p>{{ dataTwo }}</p>
    </div>
</template>

<style scoped>
    #custom-container {
        position: absolute;
        right: 0;
        bottom: 0;
        display: none;
    }

    #custom-container.active {
        display: block;
    }
</style>
