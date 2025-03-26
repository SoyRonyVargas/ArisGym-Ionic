import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import Detallecomida from '@/views/Detallecomida.vue';
import DetalleFuerza from '@/views/DetalleFuerza.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'fuerza',
        component: () => import('@/views/FuerzaPage.vue'),
      },
      {
        path: 'cardio',
        component: () => import('@/views/CardioPage.vue'),
      },
      {
        path: 'estiramiento',
        component: () => import('@/views/EstiramientoPage.vue'),
      },
      {
        path: 'detallescomida/:id',
        component: Detallecomida
      },
      {
        path: 'detallesfuerza/:id', // Ruta dinámica para DetalleFuerza
        component: DetalleFuerza
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
