<template lang='html'>
  <div>
      <player-tile v-for="player in players" :player='player'></player-tile></player-tile>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import PlayerTile from '@/components/PlayerTile.vue'

export default {
    name: 'player-list',
    methods: {

    },
    data () {
        return {
            players: [],
        }
    },
    methods: {

    },
    mounted () {
        
        eventBus.$on('player-created', newPlayer => this.players.push(newPlayer))
        eventBus.$on('player-deleted', playerToDelete => this.players.splice(playerToDelete, 1))
        
    },
    components: {
        'player-tile': PlayerTile

    }
    


}
</script>

<style>

</style>