import { createApp } from 'vue';
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import ArithmeticProggresion from './components/ArithmeticProggresion.vue';
import GeometricProggresion from './components/GeometricProggresion.vue';
import ErrorPage from './components/ErrorPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/Arithmetic-Proggresion',
    name: 'ArithmeticProggresion',
    component: ArithmeticProggresion,
  },
  {
    path: '/Geometric-Proggresion',
    name: 'GeometricProggresion',
    component: GeometricProggresion,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not-Found',
    component: ErrorPage,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
