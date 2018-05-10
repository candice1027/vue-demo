<template>
  <div class="note-detail" id="detail">
      <!-- <h1>{{ $route.query.notebookId }}</h1> -->
      <noteSideBar></noteSideBar>
      <div class="text-main"></div>
  </div>
</template>

<script>
import noteSideBar from '@/components/noteSideBar'
import auth from '@/apis/auth'
    export default {
        name: 'NoteDetail',
        components:{
            noteSideBar
        },
        data() {
            return {
                currNote: {
                    title: '第一个笔记',
                    content: '这里是内容',
                    createdAtFriendly: '3天前',
                    updateAtFriendly: '2天前',
                    statusText: '未更新'

                }
            }
        },
        created() {
            auth.getInfo().then( res => {
                if (!res.isLogin) {
                    this.$router.push({ path: '/login'})
                }
            })
        }
    }
</script>

<style scoped>
.text-main {background-color: #fff;}
</style>


