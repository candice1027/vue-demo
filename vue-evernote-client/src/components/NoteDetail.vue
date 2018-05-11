<template>
  <div class="note-detail" id="detail">
      <!-- @update:notes = "val => notes = val"这里是将子组件noteSideBar
      传过来的笔记列表数据也就是val赋值给notes,这样父组件NoteDetail就可以拿到当前的笔记列表
      从而在点击某一个笔记的时候展示这个笔记的信息-->
      <noteSideBar  @update:notes = "val => notes = val"></noteSideBar>
      <div class="text-main">
          <div class="note-bar">
              <div class="note-status">
                  <span>创建日期：{{currNote.createdAtFriendly}}</span>
                  <span>更新日期：{{currNote.updatedAtFriendly}}</span>
                  <span>已保存</span>
              </div>
              <div class="note-btn">
                  <i class="iconfont icon-delete"></i>
                  <i class="iconfont icon-eye"></i>
                  <i class="iconfont icon-edit"></i> 
              </div>
          </div>
          <div class="note-title">
              <!-- v-model="currNote.title"这里的v-model可以实现双向绑定，当改变Input里面的值得时候，
              相应的就会改变currNote数组里面的值-->
              <input type="text" v-model="currNote.title" placeholder="输入标题">
          </div>
          <div class="editor">
            <textarea name="" :value="currNote.content" v-show="true" placeholder="输入内容，支持markdown语法"></textarea>
            <div class="preview markdown-body" v-show="false"></div>
          </div>
      </div>
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
                },
                notes:[]
            }
        },
        created() {
            auth.getInfo().then( res => {
                if (!res.isLogin) {
                    this.$router.push({ path: '/login'})
                }
            })
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`,更多了解看 vue-router的导航守卫章节
            // console.log('beforeupdate')
             console.log(to,from)
            // console.log('beforeupdateend')
            // console.log(this.notes)
            this.currNote = this.notes.find(note => note.id == to.query.noteId)
            console.log(this.currNote)
            console.log('ednd')
            next()
        },
    }
</script>

<style lang="less" scoped>
@import url(//at.alicdn.com/t/font_661819_ea491u4a8xgvi.css);
@import url(../assets/css/noteDetail.less);
</style>


