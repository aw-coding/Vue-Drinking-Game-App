<template>
    <div>
        <div id="header">
      <img id='logo' src="https://image.shutterstock.com/image-vector/golden-crown-royal-king-cartoon-600w-126722057.jpg" alt="Crown"> 
      <div class='title'>
      <p>Big Deck Energy Presents:</p>
      <h1>King's Cup</h1>
      </div>
        <div id="nav">
        <button v-on:click="changePage('new-player')" >Add Players</button>
        <button v-on:click="changePage('play-area')">Play Area</button>
        <button v-on:click="changePage('rules-tile')">Rules</button>
        <button v-on:click="changePage('stats-tile')">Stats</button>
        <button v-on:click="changeRules()">Change Rules</button>
   


        </div>
    </div>
    
        <div id="game-tile">
        <player-list></player-list>
        <add-player-tile v-if="currentPage==='new-player'"></add-player-tile>
        <play-area v-if="currentPage==='play-area'" :numberOfPlayers="numberOfPlayers" :deck="deck" :currentPlayer="currentPlayer" :useRegularRules='useRegularRules'></play-area>
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
            useRegularRules: true,    
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
        changeRules: function () {
            if(this.useRegularRules === true) {
            this.useRegularRules = false}
            else { this.useRegularRules = true}
        }
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
    background: rgb(14, 14, 14);
    color: wheat;
    border: 2px solid rgb(209, 159, 31);
    margin: 10px;
    border-radius: 5px;
    margin-right: 50px;
    height: 30px;
}
#nav {
    display: flex;
    grid-area: c;
    justify-content: space-evenly;
    margin-right: 20%;


    
}

#logo {
    grid-area: a;
}


#header{
  display: grid;
  grid-template-areas: 
  "a b"
  "a c";
  grid-template-columns: 300px auto;
  background: rgba(0, 0, 0, 0.686);
  margin: 5px;
  font-family: 'MedievalSharp', cursive;
  font-size: 26px;
  height: 160px;
  border: 2px solid #B88846;
}

.title{
    color: rgb(209, 159, 31);
    text-align: center;
    margin-right: 20%;
    grid-area: b;
}
.title > h1{
    margin: 0px
}
.title > p{
    margin: 0px;
    margin-top: 10px;
}

#header > img{
  border-radius: 50%;
  border-width: 10px;
  border-style:dashed;
  border-color: rgb(209, 159, 31);
  height: 120px;
  width: 120px;
  margin: 10px;
  margin-left: 60px
}

</style>