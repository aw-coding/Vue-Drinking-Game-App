<template lang="html">
<div id="rules-tile">



    <label for='ruleset'> Choose Regular or House Rules:</label>
    <select v-model='rulesChoice' name='ruleset' id='ruleset'>
        <option value="regular-rules">Regular</option>
        <option value="house-rules">House</option>
    </select>

    <ul v-if="rulesChoice === 'regular-rules'">
        <li v-for="(rule, index) in rules"> 
        <h3>{{rule.value}}</h3>     
        <h4>{{rule.name}}</h4>  
        <p>{{rule.text}}</p>    
    
        </li>
    </ul>





    <div v-if="rulesChoice === 'house-rules'">
    <house-rule-tile v-for="rule in houseRules" :rule='rule'></house-rule-tile>
    </div>





</div>
</template>

<script>

import RuleService from '@/services/RuleService'
import HouseRuleTile from '@/components/HouseRuleTile.vue'

export default {
    name:'rules-tile',
    data() {
        return {
            rules: null,
            houseRules: null,
            rulesChoice: "regular-rules",

        }
    },
    mounted() {
        fetch('http://localhost:3000/api/rules')
        .then(res => res.json())
        .then(rules => this.rules = rules)
        
        
        

        fetch('http://localhost:3000/api/houserules')
        .then(res => res.json())
        .then(houseRules => this.houseRules = houseRules)
        


        
    },
    methods: {
        updateRule: function (rule) {
            const newRule = {
                name: this.newRuleName,
                text: this.newRuleText,
                value: this.newRuleValue
            };
            RuleService.updateRule(newRule)
            const index = this.houseRules.findIndex(rule => rule._id === newRule._id);
            this.houseRules.splice(index, 1, newRule)

        },


},
    components: {
        'house-rule-tile': HouseRuleTile
    }
}
</script>

<style>

#rules-tile{
    overflow-y: scroll;
    height: 700px;
    background: rgba(0, 0, 0, 0.666);
    border-radius: 5px;

    
}

</style>