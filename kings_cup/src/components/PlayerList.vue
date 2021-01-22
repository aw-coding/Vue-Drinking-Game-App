<template lang='html'>
  <div>
      <li v-for="player in players">{{player}}</li>
  </div>
</template>

<script>
export default {
    name: 'player-list',
    methods: {

    },
    data () {
        return {
            players: ['simon', 'ewan', 'andrew'],
        }
    }
    


}
</script>

<style></style>

</style>