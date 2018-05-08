<template>
    <div id="note">
        <header class="note-top">
			<a href="" class="new-note"><i class="iconfont icon-jiahao"></i>新建笔记本</a>
            <!-- <button class="new-note">+ 新建笔记本</button> -->
        </header>
        <main class="note-main">
			<p class="note-list-title">笔记本列表(3)</p>
			<ul class="note-list">
				<li>
					<a href="" class="note-item">
						<div class="note-name">
							<i class="iconfont icon-note"></i>
							<span>第一篇笔记</span>
						</div>
						<div class="note-detail">
							<span>2018/3/8</span>
							<span>删除</span>
							<span>编辑</span>
						</div>
					</a>
				</li>
			</ul>     
        </main>
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

<style lang="less" scoped> 
   @import url(../assets/css/noteBookList.less); 
</style>


