<template lang='html'>
  <div>
      <li v-for="player in players">{{player}}</li>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
    name: 'player-list',
    methods: {

    },
    data () {
        return {
            players: [],
        }
    },
    mounted () {
        
        eventBus.$on('player-created', newPlayer => this.players.push(newPlayer))
        
    }
    


}
</script>

<style></style>

</style>