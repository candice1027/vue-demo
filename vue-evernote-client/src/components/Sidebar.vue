<template>
    <div id="sidebar">
        <avatar></avatar>
        <div class="icons">
            <router-link to="/note" title="笔记">
                <i class="iconfont icon-note"></i>
            </router-link>
            <router-link to="/notebooks" title="笔记本">
                <i class="iconfont icon-notebook"></i>
            </router-link>
            <router-link to="/trash" title="回收站">
                <i class="iconfont icon-trash"></i>
            </router-link>
            <div class="logout" @click="logout">
                <i class="iconfont icon-logout"></i>
            </div>
        </div>
    </div>
    
</template>

<script>
import avatar from "@/components/Avatar"
import auth from '@/apis/auth'
import bus from '@/helpers/bus'
export default {
    components: {
        avatar
    },
    methods:{
       logout() {
           auth.logout().then(() => {
               this.$router.push({path: 'login'});
               bus.$emit('userinfo',{username: '未登录'})
           }).catch(err => {

           })
        //    request('/auth/logout').then((data)=> {
        //        console.log(data)
        //    })
        }
    }
}
</script>
<style lang="less" scoped>
#sidebar {
   position: relative;
   width: 56px;
   text-align: center;
   background-color: #2c333c;
  .icons {
    margin-top: 15px;
    a {
      padding: 6px 0;
      display: block;
    }
    .router-link-active {
      background-color: #5e6266;
    }
  }
  .logout {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
  .iconfont {
    color: #fff;
  }
 }
</style>


