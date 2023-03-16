<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean }
};
</script>


<template>
    <div class="card my-3 ">
        <div class="card-header">
            <h2>{{ project.title }}</h2>
            <img class='w-25' :src=project.thumb alt="">
        </div>
        <div class="card-body">

            <p>{{ project.description }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between">
            <span>{{ project.updated_at }}</span>
            <router-link v-if="!isDetail" class="btn btn-sm btn-success"
                :to="{ name: 'project-detail', params: { slug: project.slug } }">Vedi</router-link>
        </div>
    </div>
</template>


<style></style>