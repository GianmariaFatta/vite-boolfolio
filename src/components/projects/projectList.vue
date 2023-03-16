<script>
import ProjectCard from './Projectcard.vue';
export default {
    name: 'Projectlist',
    components: { ProjectCard },
    props: { projects: Array }
}
</script>


<template>
    <section id="projects-list" class="my-4">

        <div v-if="projects.length" class="mt-3">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h4 v-else class="text-center">Non ci sono post</h4>
    </section>
</template>
<style></style>