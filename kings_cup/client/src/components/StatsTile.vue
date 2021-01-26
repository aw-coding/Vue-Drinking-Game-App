<template>
<div >
  <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
    id='chart' />
  <GChart
    type="PieChart"
    :data="pieChartData"
    :options="chartOptions"
    id='chart' />
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
    props: ['chartData', 'players'],
    data(){
      return{
      pieChartData: [['Task', 'Hours per Day'],
          ]
      ,
      chartOptions: {
        chart: {
          title: 'Kings Cup',
          subtitle: 'Getting wrung in 2021',
        },
        colors: [],
      }
    }
    },
    mounted(){
      this.players.forEach(player =>{
        this.chartOptions.colors.push(player.colour)
        this.pieChartData.push([player.name, player.drinks])
      })
      
    }
}
</script>


<style>
#chart{
  width: 100%;
  height: 400px;
}

</style>