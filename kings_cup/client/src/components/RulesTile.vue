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



    <ul v-if="rulesChoice === 'house-rules'">
        <li v-for="(rule, index) in houseRules" >
        <h3>{{rule.value}}</h3>
        <h4>{{rule.name}}</h4>     
        <input :value="rule.name" >
        <p>{{rule.text}}</p>    
        <textarea :value="rule.text" type="textbox" rows="4" cols="60"></textarea>  
    
        </li>
    </ul> 




</div>
</template>

<script>
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
        .then(rules => this.houseRules = rules)
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