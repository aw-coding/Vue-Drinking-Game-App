<template>
    <div id="play-area">
        <h1>Play Area</h1>
        <button>New Game</button>
        <button v-on:click='drawCard'>Get a card</button><br>
        <h2> {{currentRule.name}}</h2>
        <p> {{currentRule.text}}</p>
        <img :src='currentCard.image'>

    </div>
  
</template>
<script>
import { eventBus } from '@/main.js'
export default {
    name: 'play-area',
    data () {
        return {
            deck: null,
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
    background: blue;
}

</style>