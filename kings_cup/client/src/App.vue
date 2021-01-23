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
  text-align: center;
}
body {
  background-image: url("https://previews.123rf.com/images/patterndesign/patterndesign1609/patterndesign160900127/63228196-seamless-background-pattern-card-suits-seamless-pattern-vector-illustration.jpg");
}
</style>
