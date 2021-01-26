<template>
    <div id="player-tile" :class="[player.isTurn, player.colour]">
        <img id="delete" v-on:click='deletePlayer' src="https://images.all-free-download.com/images/graphicthumb/round_red_close_button_5095.jpg" alt="">
        <h3>{{player.name}}</h3>
        <img id="avatar" :src="player.avatar" alt="">
       
        <div id="drink-buttons">  
        <button v-on:click='addDrink'>+</button>
        <!-- <p>{{this.player.drinks}}</p> -->
        <p>{{this.player.roundDrinks}}</p>

        <button v-on:click='removeDrink'>-</button>
        </div> 
        
  </div>
</template>

<script>

import { eventBus } from '@/main.js'
export default {
    name: 'player-tile',
    props: ['player'],

    methods: {
        deletePlayer: function () {
            eventBus.$emit('player-deleted', this.player)
        },
        addDrink: function () {
            this.player.drinks += 1
            this.player.roundDrinks += 1
        },
        removeDrink: function() {
            this.player.drinks -= 1
            this.player.roundDrinks -= 1

        }

    }, 
    mounted() {
        eventBus.$on('next-players-turn', payload => this.player.roundDrinks = 0)

    }

}
</script>

<style>
#player-tile{ 
    margin: 10px;  
    text-align: center;
    border-radius: 5px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    

    
}
#player-tile > h3{
    margin: 0px;
}
#avatar{
    width: 70px;
    border-radius: 50%;
    border: 2px solid black;
}

#drink-buttons >p{
    margin: 0;
}

.false{
    border: 2px solid black;
}

.true{
    border: 5px ridge rgb(211, 211, 211);
    margin: -5px;
    
}
#delete{
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
.red{
    background-image: linear-gradient(red, rgb(0, 0, 0));
    
    
}
.blue{
    background-image: linear-gradient(blue, black);
}
.yellow{
    background-image: linear-gradient(yellow, rgba(2, 2, 2, 0.584));
}
.green{
    background-image: linear-gradient(green, black);
}
.purple{
    background-image: linear-gradient(purple, black);
}
.orange{
    background-image: linear-gradient(orange, rgba(0, 0, 0, 0.249));
}
.pink{
    background-image: linear-gradient(rgb(250, 152, 169), rgba(48, 20, 20, 0.947));
}
.black{
    background-image: linear-gradient(rgba(58, 58, 58, 0.283), black);
}
.white{
    background-image: linear-gradient(White, rgba(33, 33, 33, 0.701));
}
.grey{
    background-image: linear-gradient(grey, rgba(0, 0, 0, 0.358));
}

</style>