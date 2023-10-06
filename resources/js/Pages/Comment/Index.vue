<script>
import {mapActions} from "vuex"

export default {
    mounted() {
        this.getComments()
    },
    methods: {
        ...mapActions([
            'getComments'
        ])
    },
    computed: {
        comments() {
            return this.$store.getters.getComments
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
