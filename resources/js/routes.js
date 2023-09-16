import PostIndex from './Pages/Post/Index.vue'
import PropsExample from "./components/TableRow.vue"

export const routes = [
    // {
    //     path: '/props-example',
    //     name: 'PropsExample',
    //     component: PropsExample
    // },
    {
        path: '/posts',
        name: 'PostsIndex',
        component: PostIndex,
    }
]
