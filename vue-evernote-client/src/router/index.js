import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NoteBooks from '@/components/NoteBookList'
import Note from '@/components/NoteDetail'
import Trash from '@/components/TrashDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/notebooks',
      component: NoteBooks
    },
    {
      path: '/note/:noteId',
      component: Note
    },
    {
      path: '/trash/:noteId',
      component: Trash
    }
  ]
})
