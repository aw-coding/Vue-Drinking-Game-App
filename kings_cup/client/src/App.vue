<template>
  <div id="app">
    <header-tile> </header-tile>
    <game-tile></game-tile>
    <jester-tile></jester-tile>
  </div>
</template>

<script>
import HeaderTile from './components/HeaderTile.vue'
import GameTile from './components/GameTile.vue'
import JesterTile from './components/JesterTile.vue'

export default {
  name: 'App',
  components: {
    'header-tile' : HeaderTile,
    'game-tile' : GameTile,
    'jester-tile': JesterTile
  
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
  background-image: url(https://img.freepik.com/free-vector/seamless-gold-pattern-with-king-crowns-dark-black-background-illustration_136321-817.jpg?size=626&ext=jpg);
  /* background-image: url(https://i.pinimg.com/originals/9f/c4/f5/9fc4f5915e50d5fe25d2e46004c78b7a.jpg); */
}
</style>
