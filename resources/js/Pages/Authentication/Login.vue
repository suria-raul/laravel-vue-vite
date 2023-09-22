<script>
import axios from "axios"

export default {
    data() {
        return {
            errors: {
                type: Object
            },
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async handleLogin() {
            await axios.post('/api/login', this.form)
                .then((response) => {
                    this.$toast.success(response.data)
                })
                .catch((error) => {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors
                            break
                        case 401:
                            this.$toast.error(error.response.data)
                            break
                        default:
                            this.$toast.error(error.message)
                            console.log(error)
                            break
                    }
                })
        }
    }
}
</script>

<template>
    <div class="mx-auto w-4/12 mt-10 bg-blue-200 p-4 rounded-lg">
        <div class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-2 flex flex-col">
            <h1 class="text-gray-600 py-5 font-bold text-3xl">
                Login
            </h1>
            <form method="post" @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label
                        class="block text-grey-darker text-sm font-bold mb-2"
                        for="username"
                    >
                        Email Address
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="username"
                        type="email"
                        v-model="form.email"
                    />
                    <div class="text-red-600" v-if="errors && errors.email">
                        {{ errors.email[0] }}
                    </div>
                </div>
                <div class="mb-4">
                    <label
                        class="block text-grey-darker text-sm font-bold mb-2"
                        for="password"
                    >
                        Password
                    </label>
                    <input
                        class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                        id="password"
                        type="password"
                        v-model="form.password"
                    />
                    <div class="text-red-600" v-if="errors && errors.password">
                        {{ errors.password[0] }}
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
