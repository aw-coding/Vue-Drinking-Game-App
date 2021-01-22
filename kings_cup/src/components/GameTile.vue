<template>
    <div>
        <add-player-tile></add-player-tile>
        <play-area></play-area>

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
        }
    },
    methods: {
        getData: function () {
            fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
            .then(res => res.json())
            .then(data => this.deck = data.cards)
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