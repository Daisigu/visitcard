<template>
  <div class="app" @click.self="setFilesUnactive()">
    <Main></Main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Main from './views/Main.vue';

export default {
  methods: {
    ...mapActions([
    'setFilesUnactive'
  ])
  },
  components: { Main }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.1/font/bootstrap-icons.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  background: #64e075;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Nova', monospace;
}

#app {
  width: 100%;
  height: 100%;
 
}
.app{
  width: 100%;
  height: 100%;
}

</style>