<template>
    <div id="king-rules">
    <h1>King's Decrees</h1>
        <form>
            <label for="rule-name">Make a rule: </label>
            <input type="text" id="rule-name" name="rule-name" placeholder="Add a new decree"><br><br>
            <input type="submit" value="Submit">
        </form>

    </div>
</template>

<script>
export default {
    name: 'king-rules',
    data() {
        rules: []
    }

}
</script>

<style>

#king-rules {
    background: rgb(38, 38, 38);
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    margin: 10px;
}

</style>