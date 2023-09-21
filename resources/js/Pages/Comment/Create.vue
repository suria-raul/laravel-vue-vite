<script>
import axios from "axios"

export default {
    data() {
        return {
            comment: {
                type: Object
            }
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
                    console.log(error.response.data)
                    this.$toast.error(error.response.data.message)
                })
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="saveComment()">
            <input type="text" name="comment" v-model="comment.comment">
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<style scoped>

</style>
