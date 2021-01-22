<template>
    <div>
        <button v-on:click="changePage('new-player')" >Add New Player</button>
        <button v-on:click="changePage('play-area')">Play Area</button>
        <add-player-tile v-if="currentPage==='new-player'"></add-player-tile>
        <play-area v-if="currentPage==='play-area'"></play-area>
        

    </div>
  
</template>

<script>
import AddPlayerTile from '@/components/AddPlayerTile.vue'
import PlayArea from '@/components/PlayArea.vue'

export default {
    name: 'game-tile',
    data () {
        return {
            deck: null,
            currentPage: '',
        }
    },
    methods: {

        changePage: function (page) {
            this.currentPage = page
        },    
    },    


    components: {
        'add-player-tile': AddPlayerTile,
        'play-area': PlayArea
    }

}
</script>

<style>

</style>