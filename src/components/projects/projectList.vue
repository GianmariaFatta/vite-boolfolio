<script>
export default {
    name: 'Projectlists',
    props: { projects: Array },
}
</script>


<template>
    <section id="projects-list" class="my-4">
        <ul v-if="projects.length" class="mt-3">
            <li v-for="project in projects" :key='project.id'>{{ project.title }}</li>
        </ul>
        <h4 v-else class="text-center">Non ci sono post</h4>
    </section>
</template>
<style></style>