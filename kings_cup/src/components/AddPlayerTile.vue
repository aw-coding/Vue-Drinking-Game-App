<template>
<div>
  <h1>New Player Form</h1>
  <form>
    <label for="Name"></label>
    <input v-model='playerName' type='text' placeholder='name' >
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
        eventBus.$emit('player-created', this.playerName)
      }
    }

  



}
</script>

<style>

</style>