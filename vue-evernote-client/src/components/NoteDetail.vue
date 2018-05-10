<template>
  <div class="note-detail" id="detail">
      <noteSideBar></noteSideBar>
      <div class="text-main">
          <div class="note-bar">
              <div class="note-status">
                  <span>创建日期：5小时前</span>
                  <span>更新日期：5小时前</span>
                  <span>已保存</span>
              </div>
              <div class="note-btn">
                  <i class="iconfont icon-delete"></i>
                  <i class="iconfont icon-eye"></i>
                  <i class="iconfont icon-edit"></i> 
              </div>
          </div>
          <div class="note-title">
              <input type="text" :value="currNote.title" placeholder="输入标题">
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

<style lang="less" scoped>
@import url(//at.alicdn.com/t/font_661819_ea491u4a8xgvi.css);

.note-detail {
    display: flex;
    flex: 1;
    align-items: stretch;
    background-color: #fff;
}
.text-main{
    flex: 1;
    flex-direction:column;
}
.note-bar {
    display: flex;
    padding: 5px 10px;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
}
.note-status { 
    font-size: 13px; 
    span {
        margin-right: 8px;
        color: #999;
    }
}
.note-btn{
    i{ margin-right: 4px;fill:#eee}
}

</style>


