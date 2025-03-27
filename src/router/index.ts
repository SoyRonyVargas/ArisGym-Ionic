import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Detallecomida from '@/views/Detallecomida.vue';
import DetalleFuerza from '@/views/DetalleFuerza.vue';
import FuerzaPage from '@/views/FuerzaPage.vue';
import CardioPage from '@/views/CardioPage.vue';
import EstiramientoPage from '@/views/EstiramientoPage.vue';
import { Preferences } from '@capacitor/preferences';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login' // Redirigir al login inicialmente
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
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
        component: () => import('@/views/Tab1Page.vue'),
        meta: { requiresAuth: true } // Requiere autenticación
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),
        meta: { requiresAuth: true } // Requiere autenticación
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
        meta: { requiresAuth: true } // Requiere autenticación
      },
      {
        path: 'fuerza',
        component: FuerzaPage,
        meta: { requiresAuth: true } // Requiere autenticación
      },
      {
        path: 'cardio',
        component: CardioPage,
        meta: { requiresAuth: true } // Requiere autenticación
      },
      {
        path: 'estiramiento',
        component: EstiramientoPage,
        meta: { requiresAuth: true } // Requiere autenticación
      },
      {
        path: 'detallescomida/:id',
        component: Detallecomida,
        meta: { requiresAuth: true } // Requiere autenticación
      },
      {
        path: 'detallesfuerza/:id',
        component: DetalleFuerza,
        meta: { requiresAuth: true } // Requiere autenticación
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Guard de navegación global para proteger rutas
router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await checkAuthStatus();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login'); // Redirige al login si no está autenticado
    } else {
      next(); // Permite el acceso si está autenticado
    }
  } else {
    next(); // Permite el acceso si no requiere autenticación
  }
});

// Función para verificar el estado de autenticación
async function checkAuthStatus() {
  const { value: isLoggedIn } = await Preferences.get({ key: 'isLoggedIn' });
  const { value: loginTime } = await Preferences.get({ key: 'loginTime' });

  if (isLoggedIn === 'true' && loginTime) {
    const currentTime = Date.now();
    const sessionDuration = 10 * 60 * 1000; // 10 minutos
    return currentTime - parseInt(loginTime) < sessionDuration;
  }
  return false;
}

export default router;