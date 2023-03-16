
// IMPORTIAMO LE FUNZIONI DI VUE ROUTER
import {createRouter, createWebHistory} from 'vue-router';

// IMPORTIAMO LE PAGINE DA USARE
import Homepage from '../pages/Homepage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

// DEFINIAMO LE ROTTE E IL ROUTER
const router = createRouter({
history: createWebHistory(),
linkActiveClass:'active',
linkExactActiveClass:'active',
routes: [
    {path:'/' , name:'home' , component:Homepage},
    {path:'/projects/:slug' , name:'project-detail' ,component:ProjectDetailPage},

    // da lasciare sempre per ultima
    {path:'/:patMatch(.*)*',name:'not-found' , component: NotFoundPage},
    // TO DO - Creare pag 404

]
});

export{router}


