<script>
import axios from 'axios';
import projectList from '../components/projects/projectList.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'HomePage',
    components: { projectList },
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
    <main class="container">
        <projectList :projects="projects" />
    </main>
</template>


<style></style>