import { createRouter, createWebHistory } from 'vue-router'
import AgendaRegister from '@/pages/agenda/AgendaRegister.vue'
import AgendaLayout from '@/pages/agenda/AgendaLayout.vue'
import AgendaList from '@/pages/agenda/AgendaList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/agenda',
      name: 'agenda',
      component: AgendaLayout,
      children: [
        { path: '', component: AgendaList },
        { path: 'register', component: AgendaRegister },
      ],
    },
  ],
})

export default router
