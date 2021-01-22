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
        getData: function () {
            fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
            .then(res => res.json())
            .then(data => this.deck = data.cards)
        },
        changePage: function (page) {
            this.currentPage = page
        }    
        },
    mounted () {
        this.getData()
        
    },
    components: {
        'add-player-tile': AddPlayerTile,
        'play-area': PlayArea
    }
        
    

    



}
</script>

<style>

</style>