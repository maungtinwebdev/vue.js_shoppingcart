import {createRouter,createWebHistory} from 'vue-router'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import page1 from '../pages/page1'
import page2 from '../pages/page2'



const routes = [
    {
        path:'/',
        name:'Home',
        // eslint-disable-next-line no-undef
        component:Home
    },
    {
        path:'/Product',
        name:'Product',
        // eslint-disable-next-line no-undef
        component:Product
    },
    {
        path:'/Cart',
        name:'Cart',
        // eslint-disable-next-line no-undef
        component:Cart
    },
    {
        path:'/page1',
        name:'page1',
        component:page1
    },
    {
        path:'/page2',
        name:'page2',
        component:page2
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router