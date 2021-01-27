<template>
<div>


        <h3>{{rule.value}}</h3>     
        <input v-model='rule.name'>  
        <textarea v-model='rule.text' type="textbox" rows="4" cols="60"></textarea>
        <button v-on:click='updateRule'>Change Rule</button>  

</div>  
</template>

<script>
import RuleService from '@/services/RuleService'

export default {
    name: 'house-rule-tile',

    props: ['rule'],

        methods: {
        updateRule: function () {

            const newRule = {
                _id: this.rule._id,
                name: this.rule.name,
                text: this.rule.text,
                value: this.rule.value
            };
            console.log(newRule)

            RuleService.updateRule(newRule);


        },

    }
}
</script>

<style>

</style>