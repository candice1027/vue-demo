import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NoteBooks from '@/components/NoteBookList'
import Note from '@/components/NoteDetail'
import Trash from '@/components/TrashDetail'
import Hello from '@/components/helloword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/notebooks',
      component: NoteBooks
    },
    {
      path: '/note',
      component: Note
    },
    {
      path: '/trash',
      component: Trash
    }
  ]
})
