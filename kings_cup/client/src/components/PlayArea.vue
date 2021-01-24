<template>
    <div id="play-area">
        <h1></h1>
        <img v-on:click='drawCard' src="https://filletfamilyblog.files.wordpress.com/2013/02/d0490860-0-large.jpg" alt="" id="draw-button">
        <img :src='currentCard.image' id="card">
        <h2> {{currentRule.name}}</h2>
        <p> {{currentRule.text}}</p>
        <p>Cards Remaining: {{this.deck.length}}</p>
        <button v-on:click='getNewDeck'>Get a New Deck</button>

    </div>
  
</template>
<script>
import { eventBus } from '@/main.js'
export default {
    name: 'play-area',
    data () {
        return {
            currentCard: '',
            rules: null,
            currentRule: '',
            turnCounter: 0
        }
    },
    props: ['numberOfPlayers', 'deck'],
    methods: {
        // getData: function () {
        //     fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
        //     .then(res => res.json())
        //     .then(data => this.deck = data.cards)
        // },
        
        
        drawCard: function () {
            const randomNumber = Math.floor(Math.random()* this.deck.length)
            this.currentCard = this.deck[randomNumber]
            this.deck.splice(randomNumber, 1)
            const rule = this.rules.filter(rule => this.currentCard.value === rule.value)
            this.currentRule = rule[0]
            eventBus.$emit('next-players-turn', this.turnCounter)
            this.turnCounter += 1
            if(this.turnCounter === this.numberOfPlayers){
                this.turnCounter = 0
            }
            
        },
        getNewDeck: function () {
            eventBus.$emit('need-new-deck', this.deck)
        }

    },

    mounted () {
            fetch('http://localhost:3000/api/rules')
            .then(res => res.json())
            .then(rules => this.rules = rules)

            
    }
}
</script>

<style>
#play-area{
    background: rgb(38, 38, 38);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
}
#draw-button{
    width: 102px;
    border-radius: 5px;
    margin-right: 10px;
    
}
#card{
    width: 100px
}

</style>