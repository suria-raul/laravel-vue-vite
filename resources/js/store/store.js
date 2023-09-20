import {createStore} from "vuex"
import axios from "axios"
import {createToaster} from "@meforma/vue-toaster"

const toaster = createToaster({
    position: 'top'
})

const store = createStore({
    state() {
        return {
            posts: Array
        }
    },
    mutations: {
        setPosts(state, data) {
            state.posts = data
        }
    },
    getters: {
        getPosts(state) {
            return state.posts
        }
    },
    actions: {
        async getPosts({commit}) {
            await axios.get('/api/posts')
                .then((response) => {
                    commit('setPosts', response.data.data)
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
