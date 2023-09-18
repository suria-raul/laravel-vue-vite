import {createApp} from "vue"
import App from './App.vue'
import {routes} from "./routes.js";
import {createRouter, createWebHistory} from "vue-router"
import store from "./store/store.js"

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

app.use(router)
app.use(store)
app.mount('#app')
