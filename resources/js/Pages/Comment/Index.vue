<script>
import axios from "axios"

export default {
    data() {
        return {
            comments: Object,
        }
    },
    mounted() {
        this.getComments()
    },
    methods: {
        async getComments(page = 1) {
            await axios.get(`/api/comments?page=${page}`)
                .then((response) => {
                    this.comments = response.data
                })
        }
    }
}
</script>

<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(comment, key) in comments.data" :key="key">
                    <td>{{ key += 1 }}</td>
                    <td>{{ comment.comment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
