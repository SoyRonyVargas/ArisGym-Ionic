import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import Detallecomida from '@/views/Detallecomida.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';

const isAuthenticated = () => !!localStorage.getItem('user');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: isAuthenticated() ? '/tabs/tab1' : '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  
  //{
   // path: '/',
  //  redirect: '/tabs/tab1'
  //},
  {
    path: '/tabs/',
    component: TabsPage,
    meta: { requiresAuth: true }, // 🔒 Protección de rutas
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
component : Detallecomida

      }
    ]
  },

 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login'); // Si no está autenticado, va al login
  } else {
    next();
  }
});

export default router
