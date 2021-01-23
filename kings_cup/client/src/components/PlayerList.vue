<template lang='html'>
  <div id="player-list">
      <player-tile v-for="player in players" :player='player'></player-tile>
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
            this_players_turn: null,
            numberOfPlayers: null
            
        }
    },
    methods: {


    },
    computed:{
        numberOfPeoplePlaying: function(){
            this.numberOfPlayers = this.players.length
        }       
    },
    mounted () {        
        eventBus.$on('player-created', newPlayer => this.players.push(newPlayer))

        eventBus.$on('player-deleted', playerToDelete => this.players.splice(playerToDelete, 1))

        eventBus.$on('next-players-turn', playerTurn => {
            this.players.forEach(player => player.isTurn = false)
            this.players[playerTurn].isTurn = true
            
            })  
    },
    components: {
        'player-tile': PlayerTile,

    }
    


}
</script>

<style>
#player-list{
    background: red;
    padding: 10px;
}

</style>