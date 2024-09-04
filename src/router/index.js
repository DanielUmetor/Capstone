import HomeView from '@/pages/HomeView.vue';
import ProductsView from '@/pages/ProductsView.vue';
import AdminView from '@/pages/AdminView.vue';
import AboutView from '@/pages/AboutView.vue';
import ContactView from '@/pages/ContactView.vue';


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView // Add this line
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})