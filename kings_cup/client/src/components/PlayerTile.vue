<template>
    <div id="player-tile" :class="player.isTurn">
        <h3>{{player.name}}</h3>
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
    background: rgb(87, 87, 87);
    text-align: center;
    border-radius: 10px;
}

.true{
    border: 5px solid white;
    
}
#delete{
    width: 15px;
    border-radius: 50%;
}

</style>