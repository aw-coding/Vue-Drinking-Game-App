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
        </div>
        
        
            
        <div id="decree-container">
        <textarea placeholder="Decree 1" rows="5" cols="25" class="decree" v-if="kingCounter > 0"></textarea >
        <textarea placeholder="Decree 2" rows="5" cols="25" class="decree" v-if="kingCounter > 1"></textarea>
        <textarea placeholder="Decree 3" rows="5" cols="25" class="decree" v-if="kingCounter > 2"></textarea>  
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
    background: rgba(0, 0, 0, 0.694);
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
    background-image: url(data:image/jpeg;base64,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);
    background-size: 100% 100%;
    background-repeat:no-repeat;
    min-height: 150px;
    min-width: 50px;
    outline: 0;
    padding: 30px 30px 40px 20px;
    font-family: 'MedievalSharp', cursive;
    font-size: 26px;
    text-align: center;
    image-rendering : optimizeQuality;
    /* padding: -25px; */
}
    
#decree-container{
    display: flex;
    align-content: center;
    
}

#deck{
    text-align: center;
    
}
#joker{
    width: 200px;
    border-radius: 8px;
}
#rules{
    height: 200px;
    text-align: center
}
#reset{
    text-align: right;
}

</style>