<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import projectList from './components/projects/projectList.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'App',
    components: { AppHeader, projectList },
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
        <projectList :projects="projects" />
    </main>
</template>


