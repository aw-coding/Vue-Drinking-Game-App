<template>
    <div>
        <div id="nav">
        <button v-on:click="changePage('new-player')" >Add Players</button>
        <button v-on:click="changePage('play-area')">Play Area</button>
        <button v-on:click="changePage('rules-tile')">Rules</button>
        <button v-on:click="changePage('stats-tile')">Stats</button>

        </div>
        <div id="game-tile">
        <player-list></player-list>
        <add-player-tile v-if="currentPage==='new-player'"></add-player-tile>
        <play-area v-if="currentPage==='play-area'" :numberOfPlayers="numberOfPlayers" :deck="deck" :currentPlayer="currentPlayer"></play-area>
        <rules-tile v-if="currentPage==='rules-tile'"></rules-tile>
        <stats-tile :players="players" :chartData="chartData" v-if="currentPage==='stats-tile'"></stats-tile>

        </div>
        

    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import AddPlayerTile from '@/components/AddPlayerTile.vue'
import PlayArea from '@/components/PlayArea.vue'
import PlayerList from '@/components/PlayerList.vue'
import RulesTile from '@/components/RulesTile.vue'
import StatsTile from '@/components/StatsTile.vue'


export default {
    name: 'game-tile',
    data () {
        return {
            deck: null,
            currentPage: '',
            numberOfPlayers: 0,
            currentPlayer: 0,
            turnNumber: 0,
            players: [],
            chartData: [
                ['Turn']],
            chartColours: []
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
        eventBus.$on('player-created', player => this.chartData[0].push(player.name))
        // eventBus.$on('player-created', player => this.chartColours.push(player))

        eventBus.$on('new-turn', players => {
            this.players = players
            this.turnNumber += 1
            const turnData = []
            turnData.push(this.turnNumber)
            this.players.forEach(player => turnData.push(player.drinks))
            this.chartData.push(turnData)

            
        })


    },    
    components: {
        'add-player-tile': AddPlayerTile,
        'play-area': PlayArea,
        'player-list': PlayerList,
        'rules-tile': RulesTile,
        'stats-tile': StatsTile

    }

}
</script>

<style>
#game-tile{
    display: grid;
    grid-template-columns: 300px auto;
    
}
#nav > button{
    background: rgba(14, 14, 14, 0.769);
    color: rgb(255, 255, 255);
    padding: 10px;
    border: 2px solid grey;
    margin: 10px;
    border-radius: 5px;
}


</style>