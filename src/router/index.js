import Vue from 'vue'
import Router from 'vue-router'

import Table from '@/components/Table'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table
    },
    {
      path: '/details/:id',
      name: 'Details',
      props: true,
      component: Details
    }
  ]
})
