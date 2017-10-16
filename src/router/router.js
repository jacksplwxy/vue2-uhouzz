import Vue from 'vue'
import VueRouter from 'vue-router'
//import Index from '../pages/index.vue'
//import Home from '../pages/home.vue'
//import Nav_lxgy from '../component/nav_lxgy.vue'
//import Nav_hwzf from '../component/nav_hwzf.vue'
//import Nav_hwfc from '../component/nav_hwfc.vue'
//import Nav_dzfw from '../component/nav_dzfw.vue'
//import Nav_hwym from '../component/nav_hwym.vue'

Vue.use(VueRouter);

/*路由分为直接挂载在App.vue上渲染和挂载在页面上渲染（children）两类*/
//写成resolve=>形式是为了实现懒加载
const routes = [
  {
    path: '/',
    component: resolve => require(['../pages/index.vue'], resolve),
    children: [
      { path: '', component: resolve => require(['../component/nav_lxgy.vue'], resolve) },  //''表示默认加载temp1
      { path: 'temp1', component: resolve => require(['../component/nav_lxgy.vue'], resolve) },
      { path: 'temp2', component: resolve => require(['../component/nav_hwzf.vue'], resolve) },
      { path: 'temp3', component: resolve => require(['../component/nav_hwfc.vue'], resolve) },
      { path: 'temp4', component: resolve => require(['../component/nav_dzfw.vue'], resolve) },
      { path: 'temp5', component: resolve => require(['../component/nav_hwym.vue'], resolve) },
    ]
  },
  {
    path: '/temp3/detail/:country',   //带参数country路由
    component: resolve => require(['../pages/hwfcDetail.vue'], resolve),
    children: [
      { path: '', component: resolve => require(['../component/hwfcDetail_price.vue'], resolve) },  //''表示默认加载price
      { path: 'price', component: resolve => require(['../component/hwfcDetail_price.vue'], resolve) },
      { path: 'case', component: resolve => require(['../component/hwfcDetail_case.vue'], resolve) },
      { path: 'strategy', component: resolve => require(['../component/hwfcDetail_strategy.vue'], resolve) },
    ]
  },
  { path: '/home', component: resolve => require(['../pages/home.vue'], resolve) }
]
const router = new VueRouter({
  routes
})
export default router; 