import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import Layout from '@/layout'
Vue.use(VueRouter);

const routes = [
  {
    path: "/", 
    component: Layout,
    redirect:"/index",

    children:[
      {
        path: "index",
        name: "dashboard",
        component: Dashboard, 
        meta:{
          title:'仪表盘'
        },
      } 
    ]
  },
  {
    path:"user",
    component:Layout,
    redirect:"/user/index",
    meta:{
      title:'用户'
    },
    children:[
      {
        path: "/user/index",
        name: "user",
        component: ()=>import ('../views/User'), 
        meta:{
          title:'查询'
        },
      } 
    ]
  },
  {
    path:"/login",
    name:"login",
    component:()=>import ('../views/Login.vue')
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
