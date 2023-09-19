import {createStore} from "vuex"
import axios from "axios"
import {createToaster} from "@meforma/vue-toaster"

const toaster = createToaster({
    position: 'top'
})

const store = createStore({
    state() {
        return {
            posts: Array,
            pagination: Object
        }
    },
    mutations: {
        setPosts(state, data) {
            state.posts = data
        },
        setPagination(state, links) {
            state.pagination = links
        }
    },
    getters: {
        getPosts(state) {
            return state.posts
        },
        getPagination(state) {
            return state.pagination
        }
    },
    actions: {
        async getPosts({commit}) {
            await axios.get('/api/posts')
                .then((response) => {
                    commit('setPosts', response.data.data)
                    commit('setPagination', response.data.links)
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
        }
    },
})

export default store
