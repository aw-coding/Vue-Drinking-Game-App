<template>
    <div id="play-area">
        <div>
        <div id="deck">
            <img v-on:click='drawCard' src="https://filletfamilyblog.files.wordpress.com/2013/02/d0490860-0-large.jpg" alt="" id="draw-button">
            <img id="joker" v-if="currentCard === ''" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/the-joker-card-bigalbaloo-stock.jpg" alt="">
            <img :src='currentCard.image' id="card">
            <p>Cards Remaining: {{deck.length}}</p>
        </div>
        <div id="rules">
            <h2> {{currentRule.name}}</h2>
            <p> {{currentRule.text}}</p>
        </div>
        </div> 
        <div id="reset">
            <button v-on:click='getNewDeck'>Reset Deck</button>
        <div id="decree-container">
        <textarea placeholder="Decree 1" rows="5" cols="25" class="decree" v-if="kingCounter > 0"></textarea >
        <textarea placeholder="Decree 2" rows="5" cols="25" class="decree" v-if="kingCounter > 1"></textarea>
        <textarea placeholder="Decree 3" rows="5" cols="25" class="decree" v-if="kingCounter > 2"></textarea>  
        </div>
        </div>
        
        
            
        
    </div>




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
            const randomNumber = Math.floor(Math.random()* this.deck.length)
            this.currentCard = this.deck[randomNumber]
            this.checkIfKing()
            this.deck.splice(randomNumber, 1)
            eventBus.$emit('next-players-turn', this.currentPlayer)
            const rule = this.rules.filter(rule => this.currentCard.value === rule.value)
            this.currentRule = rule[0]
        },
        getNewDeck: function () {
            eventBus.$emit('need-new-deck', this.deck),
            this.kingCounter = 0
            this.currentCard = ""
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
    background: rgba(0, 0, 0, 0.857);
    /* background-image: url(https://media.istockphoto.com/photos/overhead-view-of-brown-wooden-table-picture-id515309292?k=6&m=515309292&s=612x612&w=0&h=MHa8A5n1FAJqabhBH9hfhBQHr646Bw2MzBMs3uCtNX4=); */
    padding: 10px;
    border-radius: 5px;
    /* text-align: center; */
    display: grid;
    grid-template-columns: 80% 20%;
    font-size: 26px;
    font-family: 'MedievalSharp', cursive;
    }
#draw-button{
    width: 200px;
    border-radius: 5px;
    margin-right: 10px;
    
}
#card{
    width: 200px
}
/* https://stackoverflow.com/questions/8571280/textarea-with-flexible-background-image-that-resizes-with-text-input */
.decree{
    
    display: inline-block;
    /* background-image: url(../../src/assets/scroll.png); */
    background: transparent;
    background-image: url(../assets/scroll_2.png);
    background-size: 100% 100%;
    background-repeat:no-repeat;
    padding: 50px 30px 40px 30px;
    font-family: 'MedievalSharp', cursive;
    font-size: 16px;
    text-align: center;
    image-rendering : optimizeQuality;
    border: none;
    width: 170px;
}
    
#decree-container{
    display: flex;
    align-content: center;
    flex-direction: column;
    
}

#deck{
    text-align: center;
    color: wheat;
    
}
#joker{
    width: 200px;
    border-radius: 8px;
}
#rules{
    height: 200px;
    text-align: center;
    color: wheat;
}
#reset{
    text-align: right;
}

</style>