import {createStore} from "vuex"
import axios from "axios"
import {createToaster} from "@meforma/vue-toaster"

const toaster = createToaster({
    position: 'top'
})

const store = createStore({
    state() {
        return {
            posts: {
                type: Object
            },
            comments: {
                type: Object
            }
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setComments(state, comments) {
            state.comments = comments
        }
    },
    getters: {
        getPosts(state) {
            return state.posts
        },
        getComments(state) {
            return state.comments
        }
    },
    actions: {
        async getPosts({commit}, page = 1) {
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
        async getComments({commit}, page = 1) {
            await axios.get(`/api/comments?page=${page}`)
                .then((response) => {
                    commit('setComments', response.data)
                })
        }
    },
})

export default store
