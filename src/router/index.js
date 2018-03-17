import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/Header'
import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'
import Seller from '@/components/seller/Seller'

Vue.use(Router);

export default new Router({
  linkActiveClass:'active', // 点击后变色
  routes: [
    {
      path:'*',
      redirect:'/header',
    },
    {
      path: '/header',
      name: 'Header',
      component: Header,
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
    ,
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
  ],
})
