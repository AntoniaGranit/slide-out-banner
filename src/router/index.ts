import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CostaCálidaView from '../views/CostaCálidaView.vue';
import CostaAlmeríaView from '../views/CostaAlmeríaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/costa-cálida',
      name: 'CostaCálidaView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CostaCálidaView
    },
    {
      path: '/costa-almería',
      name: 'CostaAlmeríaView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CostaAlmeríaView
    }
  ]
})

export default router
