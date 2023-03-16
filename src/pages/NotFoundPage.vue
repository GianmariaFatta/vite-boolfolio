<script>

export default {
    name: 'NotFoundPage',
}
</script>


<template>
    <div class="d-flex vh-100 flex-column align-items-center justify-content-center">
        <h2>404 | Not Found</h2>
        <!-- <router-link to="/" class="btn btn-sm btn-secondary">indietro</router-link> -->
        <router-link class="btn btn-sm btn-secondary" :to="{
            name: 'home'
        }">indietro</router-link>
    </div>
</template>


