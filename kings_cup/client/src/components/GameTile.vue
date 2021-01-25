<template>
    <div>
        <div id="nav">
        <button v-on:click="changePage('new-player')" >Add Players</button>
        <button v-on:click="changePage('play-area')">Play Area</button>
        <button v-on:click="changePage('rules-tile')">Rules</button>

        </div>
        <div id="game-tile">
        <player-list></player-list>
        <add-player-tile v-if="currentPage==='new-player'"></add-player-tile>
        <play-area v-if="currentPage==='play-area'" :numberOfPlayers="numberOfPlayers" :deck="deck" :currentPlayer="currentPlayer"></play-area>
        <rules-tile v-if="currentPage==='rules-tile'"></rules-tile>

        </div>
        

    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import AddPlayerTile from '@/components/AddPlayerTile.vue'
import PlayArea from '@/components/PlayArea.vue'
import PlayerList from '@/components/PlayerList.vue'
import RulesTile from '@/components/RulesTile.vue'

export default {
    name: 'game-tile',
    data () {
        return {
            deck: null,
            currentPage: '',
            numberOfPlayers: 0,
            currentPlayer: 0
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
        eventBus.$on('need-new-deck', payload => this.getData())
        eventBus.$on('next-players-turn', payload => {
            this.currentPlayer += 1
            if (this.currentPlayer === this.numberOfPlayers){
                this.currentPlayer = 0
            }
        })


    },    
    components: {
        'add-player-tile': AddPlayerTile,
        'play-area': PlayArea,
        'player-list': PlayerList,
        'rules-tile': RulesTile,

    }

}
</script>

<style>
#game-tile{
    display: grid;
    grid-template-columns: 200px auto;
    
}
#nav > button{
    background: rgb(14, 14, 14);
    color: rgb(187, 187, 187);
    padding: 10px;
    border: 2px solid grey;
    margin: 10px;
    border-radius: 10px;
}


</style>