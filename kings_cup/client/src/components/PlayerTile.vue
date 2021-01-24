<template>
    <div id="player-tile" :class="[player.isTurn, player.colour]">
        <h3>{{player.name}}</h3>
        <img id="avatar" :src="player.avatar" alt="">
        <!-- <button v-on:click='deletePlayer'>Delete Player</button> -->
        <img id="delete" v-on:click='deletePlayer' src="https://images.all-free-download.com/images/graphicthumb/round_red_close_button_5095.jpg" alt="">
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
        }

    }

}
</script>

<style>
#player-tile{
    
    text-align: center;
    border-radius: 10px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
#avatar{
    width: 70px;
    border-radius: 50%;
}

.true{
    border: 5px solid white;
    
}
#delete{
    width: 15px;
    border-radius: 50%;
}
.red{
    background-color: red;
    
}
.blue{
    background-color: blue;
}
.yellow{
    background-color: yellow;
}
.green{
    background-color: green;
}
.purple{
    background-color: purple;
}
.orange{
    background-color: orange;
}
.pink{
    background-color: pink;
}
.black{
    background-color: black;
}
.white{
    background-color: whitesmoke;
}
.grey{
    background-color: grey;
}

</style>