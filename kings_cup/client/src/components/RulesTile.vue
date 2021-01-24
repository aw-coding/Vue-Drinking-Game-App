<template lang="html">
<div id="rules-tile">
    <ul>
        <li v-for="(rule, index) in rules" >
        <h3>{{rule.value}}</h3>     
        <h4>{{rule.name}}</h4>  
        <p>{{rule.text}}</p>    
    
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
        }
    },
    mounted() {
        fetch('http://localhost:3000/api/rules')
        .then(res => res.json())
        .then(rules => this.rules = rules)
    }



}
</script>

<style>

#rules-tile{
    overflow-y: scroll;
    height: 700px;
    
}

</style>