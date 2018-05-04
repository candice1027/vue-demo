<template>
  <div id="detail">
      <h1>{{msg}}: {{ $route.params.noteId }}</h1>
  </div>
</template>

<script>
    export default {
        name: 'NoteDetail',
        data() {
            return {
                msg: 'This is notedetail'
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: yellow;
    }

</style>


