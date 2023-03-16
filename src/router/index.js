
// IMPORTIAMO LE FUNZIONI DI VUE ROUTER
import {createRouter, createWebHistory} from 'vue-router';

// IMPORTIAMO LE PAGINE DA USARE
import Homepage from '../pages/Homepage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

// DEFINIAMO LE ROTTE E IL ROUTER
const router = createRouter({
history: createWebHistory(),
linkActiveClass:'active',
linkExactActiveClass:'active',
routes: [
    {path:'/' , name:'home' , component:Homepage},

    // da lasciare sempre per ultima
    {path:'/:patMatch(.*)*', component: NotFoundPage},
    // TO DO - Creare pag 404

]
});

export{router}


