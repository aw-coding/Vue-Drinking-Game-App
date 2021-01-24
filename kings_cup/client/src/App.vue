<template>
  <div id="app">
    <header-tile> </header-tile>
    <game-tile></game-tile>
  </div>
</template>

<script>
import HeaderTile from './components/HeaderTile.vue'
import GameTile from './components/GameTile.vue'

export default {
  name: 'App',
  components: {
    'header-tile' : HeaderTile,
    'game-tile' : GameTile
  
  }
}
</script>
    

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  color:whitesmoke;
}
body {
  background: rgb(14, 14, 14);
}
</style>
