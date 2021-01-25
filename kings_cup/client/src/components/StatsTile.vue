<template>
<div>
  <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
</div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import {GChart} from 'vue-google-charts'
export default {
    name: 'stats-tile',

    components: {
        GChart
    },
    data(){
      return{
      players: [],
      chartData: [
        ['Turn'],
         
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017', 
        }
      }
    }
    },
    mounted(){
      eventBus.$on('player-created', player => this.chartData[0].push(player.name))

      eventBus.$on('new-turn', players => this.players = players)
      
    }
}
</script>


<style>

</style>