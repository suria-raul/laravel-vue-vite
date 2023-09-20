<script>
import axios from "axios"

export default {
    data() {
        return {
            comment: Object
        }
    },
    methods: {
        async saveComment() {
            await axios.post('/api/comments', this.comment)
                .then((response) => {
                    this.comment = {}
                    this.$toast.success(response.data)
                    this.$router.push({name: 'CommentsIndex'})
                })
                .catch((error) => {
                    this.$toast.error(error.message)
                })
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="saveComment">
            <input type="text" name="comment" v-model="comment.comment">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<style scoped>

</style>
