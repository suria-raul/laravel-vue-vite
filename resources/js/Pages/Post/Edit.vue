<script>
import axios from "axios"

export default {
    data() {
        return {
            post: {}
        }
    },
    mounted() {
        this.getPost()
    },
    methods: {
        async getPost() {
            await axios.get(`/api/posts/${this.$route.params.postId}`)
                .then((response) => {
                    this.post = response.data
                })
        },
        async updatePost() {
            await axios.patch(`/api/posts/${this.$route.params.postId}`, this.post)
                .then(() => {
                    this.$router.push({name: 'PostsIndex'})
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h1>Edit Posts</h1>
                <router-link to="/posts" class="btn btn-secondary">
                    Back
                </router-link>
            </div>
        </div>
        <div class="card-body">
            <form @submit.prevent="updatePost()">
                <div class="form-group">
                    <label for="title">Title;</label>
                    <input type="text" name="title" id="title" class="form-control" v-model="post.title"/>
                </div>
                <div class="form-group">
                    <label for="description">Description;</label>
                    <input type="text" name="description" id="description" v-model="post.description"
                           class="form-control"/>
                </div>
                <input type="submit" class="btn btn-secondary mt-2" value="Save">
            </form>
        </div>
    </div>
</template>
