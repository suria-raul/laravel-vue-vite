<script>

import {mapActions} from "vuex"
import {TailwindPagination} from "laravel-vue-pagination"
import axios from "axios";

export default {
    components: {
        TailwindPagination
    },
    data() {
        return {
            postsz: {}
        }
    },
    mounted() {
        this.getPosts()
        this.getPostsz()
    },
    methods: {
        ...mapActions([
            'getPosts',
            'deletePost',
        ]),
        async getPostsz(page = 1) {
            await axios.get(`/api/posts?page=${page}`)
                .then((response) => {
                    this.postsz = response.data
                })
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
                <tr v-for="(post, key) in postsz.data" :key="key">
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
            <TailwindPagination :data="postsz" @pagination-change-page="getPostsz"/>
        </div>
    </div>
</template>

<style scoped>

</style>
