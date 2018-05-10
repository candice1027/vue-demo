<template>
    <div id="note">
        <header class="note-top">
			<a href="javascript:;" class="new-note" @click.prevent="createNote" ><i class="iconfont icon-jiahao"></i>新建笔记本</a>
            <!-- <button class="new-note">+ 新建笔记本</button> -->
        </header>
        <main class="note-main">
			<p class="note-list-title">笔记本列表({{noteBooks.length}})</p>
			<ul class="note-list" >
				<li v-for="notebook in noteBooks" :key="notebook.id">
					<router-link :to="`/note?notebookId=${notebook.id}`" class="note-item" >
						<div class="note-name">
							<i class="iconfont icon-note"></i>
							<span>{{notebook.title}}({{notebook.noteCounts}})</span>
						</div>
						<div class="note-detail">
							<span>{{notebook.friendlyCreatedAt}}</span>
							<span @click.stop.prevent="deleteNote(notebook)">删除</span>
							<span @click.stop.prevent="editNote(notebook)">编辑</span>
						</div>
					</router-link>
				</li>
			</ul>     
        </main>
    </div> 
</template>
<script>
import auth from '@/apis/auth'
import Notebooks from '@/apis/notebooks'
//import Router from '@/router/index'
    export default {
        name: 'NoteBookList',
        data () {
            return {
                msg: '笔记本列表',
                noteBooks: [],
            }
        },
        created() {
            //console.log(Router === this.$router) 返回的是true
            
            auth.getInfo().then(res => {
                if (!res.isLogin) {
                    this.$router.push( {path : '/login'})//这个地方也可以直接把router引进来import Router from '@/router/index' 然后将this.$router.push( {path : '/login'}) 改成Router.push( {path : '/login'}) 两者是没有区别的
                } else {
                   this.updateNoteList()
                }
            })   
        },
        methods: {
            updateNoteList() {
                Notebooks.getAll().then( res => {  
                    console.log(res) 
                    this.noteBooks = res.data
                })
            },
            createNote() {         
                this.$prompt('请输入笔记名称', '创建笔记本', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^.{1,30}$/,
                    inputErrorMessage: '标题不能为空，且不能超过30个字符'
                }).then(({ value }) => {
                        return Notebooks.addNoteBook({title: value})
                    }).then((res) => {
                        this.$message.success(res.msg)
                         this.noteBooks.unshift(res.data)
                    })
            },
            deleteNote(note) {
                this.$confirm('确认删除该笔记?', '删除笔记', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    return Notebooks.deleteNotebook(note.id)
                }).then((res)=> {
                    this.noteBooks.splice(this.noteBooks.indexOf(note),1);//这里注意splice的用法，如果这里的note没有在noteBooks里面的话，indexOf(note)就会得到 -1,那么使用splice(-1,1)删除的就是数组的最后一项
                    this.$message.success('删除成功')
                }) 
            },
            editNote(note) { 
                let title = '';
                this.$prompt('请输入笔记名称', '修改笔记本', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^.{1,35}$/,
                    inputValue: note.title,
                    inputErrorMessage: '标题不能为空，且不能超过30个字符'
                }).then(({ value }) => {
                        title = value;
                        return Notebooks.updateNotebook(note.id,{title})
                    }).then((res) => {
                        this.$message.success(res.msg)
                        note.title = title;
                    }) 
            }
        }
    }
</script>

<style lang="less" scoped> 
   @import url(../assets/css/noteBookList.less); 
</style>


