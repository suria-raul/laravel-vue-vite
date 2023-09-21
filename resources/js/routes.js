import PageNotFound from "./Pages/Errors/PageNotFound.vue"
import PostsIndex from './Pages/Post/Index.vue'
import CreatePost from './Pages/Post/Create.vue'
import EditPost from './Pages/Post/Edit.vue'
import CommentsIndex from './Pages/Comment/Index.vue'
import CreateComment from './Pages/Comment/Create.vue'

export const routes = [
    {
        path: '/posts',
        name: 'posts',
        component: PostsIndex,
    },
    {
        path: '/post/create',
        name: 'create-post',
        component: CreatePost,
    },
    {
        path: '/post/edit/:postId',
        name: 'edit-post',
        component: EditPost,
    },
    {
        path: '/comments',
        name: 'comments',
        component: CommentsIndex,
    },
    {
        path: '/comment/create',
        name: 'create-comment',
        component: CreateComment
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: PageNotFound
    }
]
