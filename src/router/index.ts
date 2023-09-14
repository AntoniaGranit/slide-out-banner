import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CostaAlmeríaView from '../views/CostaAlmeríaView.vue';
import CostaBlancaView from '../views/CostaBlancaView.vue';
import CostaCálidaView from '../views/CostaCálidaView.vue';
import CostadelSolView from '../views/CostadelSolView.vue';
import GranCanariaView from '../views/GranCanariaView.vue';
import IbizaView from '../views/IbizaView.vue';
import LanzaroteView from '../views/LanzaroteView.vue';
import MallorcaView from '../views/MallorcaView.vue';
import MenorcaView from '../views/MenorcaView.vue';
import TenerifeView from '../views/TenerifeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/costa-almería',
      name: 'CostaAlmeríaView',
      component: CostaAlmeríaView
    },
    {
      path: '/costa-blanca',
      name: 'CostaBlancaView',
      component: CostaBlancaView
    },
    {
      path: '/costa-cálida',
      name: 'CostaCálidaView',
      component: CostaCálidaView
    },
    {
      path: '/costa-del-sol',
      name: 'CostadelSolView',
      component: CostadelSolView
    },
    {
      path: '/gran-canaria',
      name: 'GranCanariaView',
      component: GranCanariaView
    },
    {
      path: '/ibiza',
      name: 'Ibizaview',
      component: IbizaView
    },
    {
      path: '/lanzarote',
      name: 'LanzaroteView',
      component: LanzaroteView
    },
    {
      path: '/mallorca',
      name: 'MallorcaView',
      component: MallorcaView
    },
    {
      path: '/menorca',
      name: 'MenorcaView',
      component: MenorcaView
    },
    {
      path: '/tenerife',
      name: 'TenerifeView',
      component: TenerifeView
    }
  ]
})

export default router
