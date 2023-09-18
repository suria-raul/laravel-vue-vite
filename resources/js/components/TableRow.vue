<script>
export default {
    props: ['posts', 'random'],
    mounted() {
        this.random()
    }
}
</script>

<template>
    <tr v-for="(post, key) in posts" :key="key">
        <td>{{ key += 1 }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.description }}</td>
        <td>
            <router-link :to="{
                name: 'EditPost',
                params: { postId: post.id }
            }">
                Edit
            </router-link>
            <br/>
            Delete
        </td>
    </tr>
</template>

<style scoped>

</style>
