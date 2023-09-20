<script>
import axios from "axios"

export default {
    data() {
        return {
            post: Object
        }
    },
    methods: {
        async savePost() {
            await axios.post('/api/posts', this.post)
                .then(() => {
                    this.post = {}
                    // redirect to /posts
                    this.$router.push({name: 'PostsIndex'})
                })
                .catch((error) => {
                    console.log(error)
                    alert(error)
                })
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between align-items-center">
                <h1>Create Post</h1>
                <router-link to="/posts">
                    Back
                </router-link>
            </div>
        </div>
        <div class="card-body">
            <form @submit.prevent="savePost()">
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
