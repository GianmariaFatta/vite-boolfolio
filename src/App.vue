<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'App',
    components: { AppHeader },
    data: () => ({
        projects: []
    }),
    methods: {
        fetchProjects() {
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data;
            });

        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>


<template>
    <AppHeader />
    <main class="container">
        <ul v-if="projects.length" class="mt-3">
            <li v-for="project in projects" :key='project.id'>{{ project.title }}</li>
        </ul>
        <h4 v-else class="text-center">Non ci sono post</h4>
    </main>
</template>


