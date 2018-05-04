<template>
  <div id="trash">
      <h1>{{msg}}: {{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'TrashNote',
        data() {
            return {
                msg: 'This is 回收站'
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: greedn;
    }

</style>


