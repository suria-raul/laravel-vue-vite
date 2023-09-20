<script>

import {mapActions} from "vuex"
import {TailwindPagination} from "laravel-vue-pagination"

export default {
    components: {
        TailwindPagination
    },
    mounted() {
        this.getPosts()
    },
    methods: {
        ...mapActions([
            'deletePost',
        ]),
        getPosts(page = 1) {
            this.$store.dispatch('getPosts', page)
        }
    },
    computed: {
        posts() {
            return this.$store.getters.getPosts
        }
    }
}
</script>

<template>
    <div class="">
        <div class="">
            <div class="bg-indigo-500 d-flex justify-content-between align-items-center">
                <h1>Posts</h1>
                <router-link to="/post/create">
                    Create
                </router-link>
            </div>
        </div>
        <div class="">
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
                <tr v-for="(post, key) in posts.data" :key="key">
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
            <TailwindPagination :data="posts" @pagination-change-page="getPosts"/>
        </div>
    </div>
</template>

<style scoped>

</style>
