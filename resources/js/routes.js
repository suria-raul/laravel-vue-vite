import PostIndex from './Pages/Post/Index.vue'
import PostCreate from './Pages/Post/Create.vue'

export const routes = [
    {
        path: '/posts',
        name: 'PostsIndex',
        component: PostIndex,
    },
    {
        path: '/post/create',
        name: 'PostCreate',
        component: PostCreate,
    }
]
