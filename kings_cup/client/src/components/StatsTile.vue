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
    props: ['chartData'],
    data(){
      return{
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017', 
        }
      }
    }
    },
    mounted(){
    }
}
</script>


<style>

</style>