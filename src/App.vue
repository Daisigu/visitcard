<template>
  <div class="app" @click.self="setFilesInactive()">
    <Loading></Loading>
    <Main></Main>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Main from './views/Main.vue';
import Loading from '@/components/loading.vue';

export default {
  methods: {
    ...mapActions([
      'setFilesInactive'
    ])
  },
  components: { Main, Loading }
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
  font-family: 'Nova', monospace;
}

body {
  background: #64e075;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;

}

.app {
  width: 100%;
  height: 100%;
}
</style>