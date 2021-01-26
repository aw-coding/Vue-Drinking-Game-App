<template>
    <div id='jester-container'>
        <h2> JESTER TILE </h2>
        <p>{{joke.setup}}</p>
        <p>{{joke.delivery}}</p>
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
        background: purple;
        height: 200px;
    }



</style>