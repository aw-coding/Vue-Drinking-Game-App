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
      chartData: [
        ['Turn'],[0]
        
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
    }
}
</script>


<style>

</style>