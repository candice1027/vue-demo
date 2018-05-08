<template>
    <div id="note">
        <h1>{{msg}}</h1>
        <ul>
            <li>
                <router-link to="/note/1">笔记本1</router-link>
            </li>
            <li>
                <router-link to="/note/2">笔记本2</router-link>
            </li>
            <li>
                <router-link to="trash/1">回收站的笔记本1</router-link>
            </li>
        </ul>
    </div>
  
</template>
<script>
import auth from '@/apis/auth'

    export default {
        name: 'NoteBookList',
        data () {
            return {
                msg: '笔记本列表'
            }
        },
        created() {
            auth.getInfo().then(res => {
                console.log('333')
                console.log(res)
                if (!res.isLogin) {
                    this.$router.push( {path : '/login'})
                }
            })
            
        }
    
    }
</script>

<style scoped> 
    h1 {
        color:green;
    }

</style>


