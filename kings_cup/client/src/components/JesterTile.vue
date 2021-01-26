<template>
    <div>
        <div id='jester-container'>
            <img src="https://image.shutterstock.com/image-vector/joker-playing-card-head-retro-260nw-1467820259.jpg" alt="Jester">
           <div id='joke'> <p>{{joke.setup}}</p>
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
            fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
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
        background: rgba(0, 0, 0, 0.686);
        margin: 5px;
        font-family: 'MedievalSharp', cursive;
        font-size: 30px;
        text-align: center;
        height: 210px;
        padding: 20px;
        border: 2px solid #B88846;
    }
    #jester-container > img{
        border-radius: 50%;
        border-width: 10px;
        border-style:dashed;
        border-color: rgb(209, 159, 31);
        height: 200px;
    }
    #joke{
        color: wheat;

    }



</style>