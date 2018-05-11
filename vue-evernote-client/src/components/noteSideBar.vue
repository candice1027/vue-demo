<template>
<div class="main">
    <div class="top-tab">
        <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
                {{currNoteBook.title}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span> 
            <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item v-for="noteBook in noteBooks" :command="noteBook.id" :key="noteBook.id">{{noteBook.title}}</el-dropdown-item>
                <el-dropdown-item command="trash">回收站</el-dropdown-item>
            </el-dropdown-menu> 
        </el-dropdown>
        <span class="add-note">添加笔记</span>
    </div>  
    <div class="menu">
        <div>更新时间</div>
        <div>标题</div>
    </div> 
    <div class="note-list">
        <ul>
            <li v-for="note in notes" :key="note.id">
                <router-link :to="`/note?noteId=${note.id}&noteBookId=${currNoteBook.id}`" class="note-item">
                    <div>{{note.createdAtFriendly}}</div><div>{{note.title}}</div>
                </router-link>
            </li>
        </ul>
    </div>
</div>
  
</template>

<script>
import NoteBooks from '@/apis/notebooks'
import Note from '@/apis/note'
export default {
    data() {
       return {
            noteBooks: [],
            notes:[],
            currNoteBook:{}
        }
    },
    props: ['currNote'],
    created(){
         //Note.addNoteBook({notebookId: 95},{title: '这是hello的第一个笔记',content: '符合设计的开发很多事'})
        //获取所有笔记本
        NoteBooks.getAll().then((res) => {
            this.noteBooks = res.data; 
            this.currNoteBook =  this.noteBooks.find(notebook => notebook.id == this.$route.query.notebookId) || res.data[0] || [];    
            return Note.getAll({'notebookId': this.currNoteBook.id})
        }).then(res => {
            this.notes = res.data; 
            this.$emit('update:notes',this.notes);//触发告知父组件NoteDetail笔记列表已更新，且列表数据也传过去了
        })   
    },
    methods: {
        handleCommand(note) {
            if (note == 'trash') {
                return this.$router.push({path: '/trash'})
            }
           this.currNoteBook = this.noteBooks.find(notebook => {
                return notebook.id === note
            }) 
            Note.getAll({'notebookId': note}).then(res => {
                this.notes = res.data; 
                this.$emit('update:notes',this.notes);//触发告知父组件NoteDetail笔记列表已更新，且列表数据也传过去了
            });  
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/css/noteSideBar.less'; //或者@import url(../assets/css/noteSideBar.less)注意这里没有单引号
</style>


