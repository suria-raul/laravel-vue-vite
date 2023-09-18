import PostsIndex from './Pages/Post/Index.vue'
import CreatePost from './Pages/Post/Create.vue'
import EditPost from './Pages/Post/Edit.vue'

export const routes = [
    {
        path: '/posts',
        name: 'PostsIndex',
        component: PostsIndex,
    },
    {
        path: '/post/create',
        name: 'CreatePost',
        component: CreatePost,
    },
    {
        path: '/post/edit/:postId',
        name: 'EditPost',
        component: EditPost,
    }
]
