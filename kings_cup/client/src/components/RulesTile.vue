<template>
<div>


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

</style>