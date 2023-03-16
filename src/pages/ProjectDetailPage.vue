<script>
import axios from 'axios';
import Projectcard from '../components/projects/Projectcard.vue';
const apiBaseUrl = 'http://localhost:8000/api/';
export default {
    name: 'ProjectDetailPage',
    components: { Projectcard },
    data: () => ({
        project: null,
    }),
    methods: {
        getProject() {
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.slug;
            axios.get(endpoint).then(res => {
                this.project = res.data
            }).catch(err => {
                this.$router.push({ name: 'not-found' });
            })
        }
    }, created() {
        this.getProject();
    }
};
</script>


<template>
    <Projectcard :project="project" :isDetail="true" />
</template>


