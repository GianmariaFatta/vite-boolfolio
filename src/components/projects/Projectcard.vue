<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }
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
        <div class="card-footer">
            <span>{{ project.updated_at }}</span>
        </div>
    </div>
</template>


<style></style>