<template>
  <div>
    <Main></Main>
  </div>
</template>

<script>
import Main from './views/Main.vue';

export default {
  components: { Main }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  background: rgb(255, 221, 29);
  width: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Inconsolata', monospace;
  font-family: 'Inter', sans-serif;
}
</style>