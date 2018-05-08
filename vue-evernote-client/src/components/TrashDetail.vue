<template>
  <div id="trash">
      <h1>{{msg}}: {{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
import auth from '@/apis/auth'
    export default {
        name: 'TrashNote',
        data() {
            return {
                msg: 'This is 回收站'
            }
        },
        created() {
            auth.getInfo().then( res => {
                if (!res.isLogin) {
                    this.$router.push( {path: '/login'})
                }
            })
        }
    }
</script>

<style scoped>
    h1 {
        color: greedn;
    }

</style>


