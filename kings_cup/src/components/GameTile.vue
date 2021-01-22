<template>
  
</template>

<script>
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
            .then(data => this.deck = data)
        }
    },
    mounted () {
        this.getData()
    }



}
</script>

<style>

</style>