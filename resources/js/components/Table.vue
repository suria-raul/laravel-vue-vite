<script>
import TableRow from "./TableRow.vue";

export default {
    name: "Table",
    components: {TableRow},
    props: ['posts'],
    methods: {
        random() {
            console.log(Math.random())
        }
    }
}
</script>

<template>
    <table class="table table-bordered table-hover">
        <thead>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <TableRow :posts="posts" :random="random" />
        </tbody>
    </table>
</template>
