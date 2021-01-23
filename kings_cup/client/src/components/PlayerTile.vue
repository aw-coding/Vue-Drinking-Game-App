<template>
    <div id="player-tile" :class="player.isTurn">
        <h3>{{player.name}}</h3>
        <button v-on:click='deletePlayer'>Delete Player</button>
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
    background: orange;
}

.true{
    border: 20px solid green;
}

</style>