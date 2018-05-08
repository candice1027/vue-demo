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
//import Router from '@/router/index'

    export default {
        name: 'NoteBookList',
        data () {
            return {
                msg: '笔记本列表'
            }
        },
        created() {
            
            //console.log(Router === this.$router) 返回的是true
            window.detail = this;
            auth.getInfo().then(res => {
                if (!res.isLogin) {
                    this.$router.push( {path : '/login'})//这个地方也可以直接把router引进来import Router from '@/router/index' 然后将this.$router.push( {path : '/login'}) 改成Router.push( {path : '/login'}) 两者是没有区别的
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


