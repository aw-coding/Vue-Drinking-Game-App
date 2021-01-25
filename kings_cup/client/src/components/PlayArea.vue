<template>
    <div id="play-area">
        <h1></h1>
        <img v-on:click='drawCard' src="https://filletfamilyblog.files.wordpress.com/2013/02/d0490860-0-large.jpg" alt="" id="draw-button">
        <img :src='currentCard.image' id="card">
        <h2> {{currentRule.name}}</h2>
        <p> {{currentRule.text}}</p>
        <button v-on:click='getNewDeck'>Get a New Deck</button>
        <p>{{this.kingCounter}} King's Decrees have been made!</p>
        <div class="decree">
        <input v-if='kingCounter > 0' type='text'>
        </div>
        <input v-if='kingCounter > 1' >
        <input v-if='kingCounter > 2' >
        <input v-if='kingCounter > 3' >




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
            kingCounter: 0, //the game should end when this reaches 4 
        }
    },
    props: ['numberOfPlayers', 'deck', 'currentPlayer'],
    methods: {
        drawCard: function () {
            if (this.deck.length == 0 ) {
                this.getNewDeck() //this.deck not being used,only here as a second argument is needed 
            }
            const randomNumber = Math.floor(Math.random()* this.deck.length)
            this.currentCard = this.deck[randomNumber]
            this.checkIfKing()
            // if (this.kingCounter == 3 && this.currentCard.value =='KING') {
            //     this.finalKing()
            // }
            this.deck.splice(randomNumber, 1)
            const rule = this.rules.filter(rule => this.currentCard.value === rule.value)
            this.currentRule = rule[0]
            eventBus.$emit('next-players-turn', this.currentPlayer)
            
            
        },
        getNewDeck: function () {
            eventBus.$emit('need-new-deck', this.deck),
            this.kingCounter = 0
        },
        checkIfKing: function () {
            if (this.currentCard.value == 'KING') {
            this.kingCounter += 1
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
.decree{
    background-image: url ('data:image/jpeg;base64,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');
}

</style>