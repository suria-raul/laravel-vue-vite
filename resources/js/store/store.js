import {createStore} from "vuex"
import axios from "axios"

const store = createStore({
    state() {
        return {
            posts: Array,
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
            await axios.get('/api/posts').then((response) => {
                commit('setPosts', response.data.data)
            })
        }
    },
})

export default store
