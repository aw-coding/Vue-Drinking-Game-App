<template lang="html">
<div id="rules-tile">

    <!-- <button v-on:click='testAdd'>Add test rule to the database</button> -->
    <!-- <p>{{houseRules[0]}}</p> -->

    <!-- <button v-on:click='updateRule(houseRules[0])' >Change the Ace Rule</button> -->

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



    <!-- <ul v-if="rulesChoice === 'house-rules'">
        <li v-for="(rule, index) in houseRules" >
        <h3>{{rule.value}}</h3>
        <h4>{{rule.name}}</h4>     

        <input v-model='newRuleName'>
        <!-- <p>{{rule.text}}</p>    
        <textarea v-model='newRuleText' type="textbox" rows="4" cols="60"></textarea> -->
        <!-- <button v-on:click='updateRule'>Change Rule</button>  
    
        </li>
    </ul>  --> -->

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



    //     testAdd: function (rule) {
    //             return fetch('http://localhost:3000/api/houserules',{ 
    //             method: 'POST',
    //             body: JSON.stringify(rule),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //             .then(res => res.json())
    //     },
    // }



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