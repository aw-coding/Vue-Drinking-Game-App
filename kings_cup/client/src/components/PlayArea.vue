<template>
    <div>
        <h1>Play Area</h1>
        <button v-on:click='getData'>New Game</button>
        <button v-on:click='drawCard'>Get a card</button>
        <img :src='currentCard.image'> 

    </div>
  
</template>

<script>
export default {
    name: 'play-area',
    data () {
        return {
            deck: null,
            currentCard: ''
        }
    },
    methods: {
        getData: function () {
            fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
            .then(res => res.json())
            .then(data => this.deck = data.cards)
        },
        drawCard: function () {
            const randomNumber = Math.floor(Math.random()* this.deck.length)
            this.currentCard = this.deck[randomNumber]
            this.deck.splice(randomNumber, 1)
        }
    },

    mounted () {
        
        
    },
}
</script>

<style>

</style>