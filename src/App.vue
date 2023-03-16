<script>
import Homepage from './pages/Homepage.vue';
import AppHeader from './components/AppHeader.vue';


export default {
    name: 'App',
    components: { AppHeader, Homepage },
}
</script>


<template>
    <AppHeader />
    <Homepage />
</template>


