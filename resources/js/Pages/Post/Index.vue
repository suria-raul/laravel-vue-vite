<script>
import axios from "axios"
import Table from "../../components/Table.vue"

export default {
    components: {Table},
    data() {
        return {
            posts: Array
        }
    },
    mounted() {
        this.getPosts()
    },
    methods: {
        async getPosts() {
            await axios.get('/api/posts')
                .then((response) => {
                    this.posts = response.data
                    // console.log(this.posts)
                })
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h1>Posts</h1>
                <router-link to="/post/create">
                    Create
                </router-link>
            </div>
        </div>
        <div class="card-body">
            <Table :posts="posts" />
        </div>
    </div>
</template>

<style scoped>

</style>
