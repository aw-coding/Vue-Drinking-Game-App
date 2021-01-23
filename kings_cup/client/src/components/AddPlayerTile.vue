<template>
<div>
  <h1>New Player Form</h1>
  <form>
    <label for="Name"></label>
    <input v-model='playerName' required type='text' placeholder='name' >
    <button v-on:click='addPlayer'>Add Player</button>

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
      }
    },
    methods:{
      addPlayer: function (event) {
        event.preventDefault()
        if (this.playerName) {
        const newPlayer = {}
        newPlayer.isTurn = "false"
        newPlayer.name = this.playerName
        eventBus.$emit('player-created', newPlayer)
        this.playerName = ''}
      }
    }

  



}
</script>

<style>

</style>