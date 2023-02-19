import { createRouter, createWebHashHistory } from "vue-router";
import CategoriesPage from '@/views/CategoriesPage';
import MainPage from '@/views/MainPage';


export default createRouter ({
  history: createWebHashHistory(),
  routes:[
    {path: '/', component: MainPage},
    {path: '/Categories', component: CategoriesPage},
  ]
})
