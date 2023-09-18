<script>
import axios from "axios"

export default {
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
        },
        async deletePost(id) {
            await axios.delete(`/api/posts/${id}`)
                .then((response) => {
                    let deleteMessage = response.data
                    this.$toast.success(deleteMessage);
                    this.getPosts()
                })
                .catch((error) => {
                    console.log(error.message)
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
            <table class="table table-bordered table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(post, key) in posts" :key="key">
                    <td>{{ key += 1 }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.description }}</td>
                    <td>
                        <router-link :to="{ name: 'EditPost', params: { postId: post.id } }">
                            Edit
                        </router-link>
                        <br/>
                        <button type="button" @click="deletePost(post.id)">
                            Delete
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>
