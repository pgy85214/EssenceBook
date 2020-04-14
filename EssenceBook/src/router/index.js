import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodBook from '@/components/GoodBook'
import ZSY from '@/components/zsy'
import Contact from '@/components/contact'
import Classification from '@/components/classification'
import Mypage from '@/components/mypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodbook',
      name: 'GoodBook',
      component: GoodBook
    },
    {
      path: '/zsy',
      name: 'ZSY',
      component: ZSY
    },
    {
      path: '/classification',
      name: 'Classification',
      component: Classification
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    }
  ]
})
