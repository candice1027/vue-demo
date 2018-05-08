<template>
  <div id="detail">
      <h1>{{msg}}: {{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
import auth from '@/apis/auth'
    export default {
        name: 'NoteDetail',
        data() {
            return {
                msg: 'This is notedetail'
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
    h1 {
        color: yellow;
    }

</style>


