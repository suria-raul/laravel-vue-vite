<script>
import axios from "axios"

export default {
    data() {
        return {
            errors: {},
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        async register() {
            await axios.post('/api/register', this.form)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
}
</script>

<template>
    <div class="flex items-center justify-center">
        <form @submit.prevent="register" class="grid grid-cols-1 grid-rows-4 gap-6 w-1/2">
            <label for="name">
                <input type="text" name="name" v-model="form.name" class="border-black"
                       placeholder="Enter your name here...">
                <small v-show="errors.name" class="text-red-700">{{ errors.name }}</small>
            </label>
            <label for="email">
                <input type="email" name="email" v-model="form.email" class="border-black"
                       placeholder="Enter your email here...">
                <small v-show="errors.email" class="text-red-700">{{ errors.email }}</small>
            </label>
            <label for="password">
                <input type="password" name="password" v-model="form.password" class="border-black"
                       placeholder="Enter your password here...">
                <small v-show="errors.password" class="text-red-700">{{ errors.password }}</small>
            </label>
            <label for="password_confirmation">
                <input type="password" name="password_confirmation" v-model="form.password_confirmation"
                       class="border-black" placeholder="Confirm your password">
                <small v-show="errors.password_confirmation" class="text-red-700">{{
                        errors.password_confirmation
                    }}</small>
            </label>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<style scoped>

</style>
