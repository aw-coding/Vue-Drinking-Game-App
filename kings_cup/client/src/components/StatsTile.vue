<template>
<div >
  <GChart
    type="LineChart"
    :data="chartData"
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
    props: ['chartData'],
    data(){
      return{
      chartOptions: {
        chart: {
          title: 'Kings Cup',
          subtitle: 'Getting wrung in 2021', 
          
          

        },
      }
    }
    },
    mounted(){
    }
}
</script>


<style>
#chart{
  width: 100%;
  height: 400px;
}

</style>