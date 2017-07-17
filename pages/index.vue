<style scoped>
    @import "../assets/.dist/index.css";

</style>
<template>
    <main>
        <todo-list title='first' v-bind:origin="[1,12,13,14,15]" ></todo-list>
        <todo-list title='second' v-bind:origin="[2,22,23,24,25]"></todo-list>
        <todo-list title='third' v-bind:origin="[3,32,33,34,35]"></todo-list>

    </main>
</template>

<script>

    import TodoList from '~/components/list.vue'
    export default {
        head: {
            title: 'About Page',
            meta: [
                { hid: 'description', name: 'description', content: 'About page description' }
            ]
        },
        components: {
            TodoList
        }
    }
</script>
