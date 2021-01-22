<template>
    <div>
        <add-player-tile></add-player-tile>

    </div>
  
</template>

<script>
import AddPlayerTile from '@/components/AddPlayerTile.vue'

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
        'add-player-tile': AddPlayerTile
    }
        
    

    



}
</script>

<style>

</style>