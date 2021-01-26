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
    background-image: linear-gradient(rgb(255, 70, 70), rgb(0, 0, 0));
    
    
}
.blue{
    background-image: linear-gradient(rgb(81, 81, 240), black);
}
.yellow{
    background-image: linear-gradient(rgb(245, 245, 72), rgba(2, 2, 2, 0.995));
}
.green{
    background-image: linear-gradient(rgb(66, 181, 66), black);
}
.purple{
    background-image: linear-gradient(rgb(186, 65, 186), rgb(9, 4, 4));
}
.orange{
    background-image: linear-gradient(rgb(244, 124, 50), rgb(0, 0, 0));
}
.pink{
    background-image: linear-gradient(rgb(223, 118, 163), rgb(77, 17, 17));
}
.black{
    background-image: linear-gradient(rgba(11, 11, 11, 0.982), rgb(36, 36, 36));
}
.white{
    background-image: linear-gradient(White, rgba(33, 33, 33, 0.701));
}
.grey{
    background-image: linear-gradient(rgb(87, 87, 87), rgba(0, 0, 0, 0.947));
}

</style>