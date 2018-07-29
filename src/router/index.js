import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Index from '@/components/index'
import Advantage from '@/components/advantage'
import Service from '@/components/service'
import About from '@/components/about'
import CaseDetail0 from '@/components/case/case-detail0'
import CaseDetail1 from '@/components/case/case-detail1'
import CaseDetail2 from '@/components/case/case-detail2'
import CaseDetail3 from '@/components/case/case-detail3'
import CaseDetail4 from '@/components/case/case-detail4'
import CaseDetail5 from '@/components/case/case-detail5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'index',
          component: Index
        },
        {
          path: '/advantage',
          name: 'advantage',
          component: Advantage
        },
        {
          path: '/service',
          name: 'service',
          component: Service
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    },
    {
      path: '/caseDetail0',
      name: 'caseDetail0',
      component: CaseDetail0
    },
    {
      path: '/caseDetail1',
      name: 'caseDetail1',
      component: CaseDetail1
    },
    {
      path: '/caseDetail2',
      name: 'caseDetail2',
      component: CaseDetail2
    },
    {
      path: '/caseDetail3',
      name: 'caseDetail3',
      component: CaseDetail3
    },
    {
      path: '/caseDetail4',
      name: 'caseDetail4',
      component: CaseDetail4
    },
    {
      path: '/caseDetail5',
      name: 'caseDetail5',
      component: CaseDetail5
    }
  ]
})
