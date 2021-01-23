<template>
    <div>
        <div id="nav">
        <button v-on:click="changePage('new-player')" >Add New Player</button>
        <button v-on:click="changePage('play-area')">Play Area</button>
        </div>
        <div id="game-tile">
        <player-list></player-list>
        <add-player-tile v-if="currentPage==='new-player'"></add-player-tile>
        <play-area v-if="currentPage==='play-area'" :numberOfPlayers="numberOfPlayers" :deck="deck"></play-area>
        </div>
        

    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import AddPlayerTile from '@/components/AddPlayerTile.vue'
import PlayArea from '@/components/PlayArea.vue'
import PlayerList from '@/components/PlayerList.vue'

export default {
    name: 'game-tile',
    data () {
        return {
            deck: null,
            currentPage: '',
            numberOfPlayers: 0
        }
    },
    methods: {
        getData: function () {
            fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
            .then(res => res.json())
            .then(data => this.deck = data.cards)
        },

        changePage: function (page) {
            this.currentPage = page
        },    
    },
    mounted(){
        this.getData()
        eventBus.$on('player-created', payload => this.numberOfPlayers += 1)
        eventBus.$on('player-deleted', payload => this.numberOfPlayers -= 1)

    },    
    components: {
        'add-player-tile': AddPlayerTile,
        'play-area': PlayArea,
        'player-list': PlayerList

    }

}
</script>

<style>
#game-tile{
    display: grid;
    grid-template-columns: 20% 80%;
    
}
#nav > button{
    background: black;
    color: white;
    padding: 10px;
    border: 2px solid grey
}


</style>