<template>
    <div>
        <h1>{{player}}</h1>
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

</style>