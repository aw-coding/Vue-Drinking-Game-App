<template>
<div id="player-form">
  <h2>New Player</h2>
  <form>
    <label for="Name"></label>
    <input v-model='playerName' required type='text' placeholder='name' >
    <button v-on:click='addPlayer'>Add Player</button>

      <select v-model='playerColour' name="colours" id="player-colour">
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='purple'>Purple</option>
        <option value='orange'>Orange</option>
        <option value='pink'>Pink</option>
        <option value='black'>Black</option>
        <option value='white'>White</option>
        <option value='grey'>Grey</option>
      </select>
    </form>

  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
    name: 'add-player-tile',

    data () {
      return {
        playerName: '',
        playerColour: ''
      }
    },
    methods:{
      addPlayer: function (event) {
        event.preventDefault()
        if (this.playerName && this.playerColour) {
        const newPlayer = {}
        newPlayer.isTurn = "false"
        newPlayer.name = this.playerName
        newPlayer.colour = this.playerColour
        eventBus.$emit('player-created', newPlayer)
        this.playerName = ''}
      }
    }

  



}
</script>

<style>
#player-form{
  background: rgb(38, 38, 38);
  text-align: center;
  padding: 10px;
  border-radius: 10px;  
}

</style>