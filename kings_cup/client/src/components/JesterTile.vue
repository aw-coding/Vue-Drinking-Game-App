<template>
    <div>
        <div id='jester-container'>
            <img src="https://image.shutterstock.com/image-vector/joker-playing-card-head-retro-260nw-1467820259.jpg" alt="Jester">
           <div> <p>{{joke.setup}}</p>
                  <p>{{joke.delivery}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
export default {
    data() {
        return {
            joke: []
        }
    },
    mounted(){

        eventBus.$on('next-players-turn', playerTurn => {
            fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
            .then(res => res.json())
            .then(joke => this.joke = joke);
            
            })
    },
    methods: {
    }


}

</script>

<style>
    #jester-container{
        display: grid;
        grid-template-columns: 20% 80;
        grid-template-rows: 10% 90%;
        background: purple;
        font-family: 'MedievalSharp', cursive;
        font-size: 26px;
        text-align: center;
    }
    #jester-container > img{
        border-radius: 50%;
        border-width: 10px;
        border-style:dashed;
        border-color: rgb(255, 227, 67);
    }



</style>