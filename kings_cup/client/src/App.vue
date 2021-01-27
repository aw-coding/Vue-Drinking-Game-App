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
  margin-top: 10px;
  color:whitesmoke;
  border: 25px solid #B88846;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;

}
body {
  background-image: url(https://img.freepik.com/free-vector/seamless-gold-pattern-with-king-crowns-dark-black-background-illustration_136321-817.jpg?size=626&ext=jpg);
  /* background-image: url(https://i.pinimg.com/originals/9f/c4/f5/9fc4f5915e50d5fe25d2e46004c78b7a.jpg); */
}
</style>
