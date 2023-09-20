import {createStore} from "vuex"
import axios from "axios"
import {createToaster} from "@meforma/vue-toaster"

const toaster = createToaster({
    position: 'top'
})

const store = createStore({
    state() {
        return {
            posts: Object,
            post: Object
        }
    },
    mutations: {
        setPosts(state, data) {
            state.posts = data
        },
        setPost(state, data) {
            state.post = data
        }
    },
    getters: {
        getPosts(state) {
            return state.posts
        },
        getPost(state) {
            return state.post
        }
    },
    actions: {
        async getPosts({commit}, page) {
            await axios.get(`/api/posts?page=${page}`)
                .then((response) => {
                    commit('setPosts', response.data)
                })
        },
        async deletePost({dispatch}, id) {
            await axios.delete(`/api/posts/${id}`)
                .then((response) => {
                    let deleteMessage = response.data
                    toaster.success(deleteMessage)
                    dispatch('getPosts')
                })
                .catch((error) => {
                    toaster.error(error.message)
                })
        },
        async getPost({state}) {
            console.log(this.$route)
            // await axios.get(`/api/posts/${this.$route.params.postId}`)
            //     .then((response) => {
            //         state.post = response.data.data
            //     })
        },
        async updatePost({state}) {
            await axios.patch(`/api/posts/${this.$route.params.postId}`, state.getPost)
                .then(() => {
                    this.$router.push({name: 'PostsIndex'})
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
})

export default store
