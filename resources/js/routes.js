import PageNotFound from './Pages/Errors/PageNotFound.vue'
import Login from './Pages/Authentication/Login.vue'
import Register from "./Pages/Authentication/Register.vue"
import PostsIndex from './Pages/Post/Index.vue'
import CreatePost from './Pages/Post/Create.vue'
import EditPost from './Pages/Post/Edit.vue'
import CommentsIndex from './Pages/Comment/Index.vue'
import CreateComment from './Pages/Comment/Create.vue'

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
    },
    {
        path: '/comments',
        name: 'CommentsIndex',
        component: CommentsIndex,
    },
    {
        path: '/comment/create',
        name: 'CreateComment',
        component: CreateComment
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]
