<template>
  <div>
    <div id="header">
      <img src="https://image.shutterstock.com/image-vector/golden-crown-royal-king-cartoon-600w-126722057.jpg" alt="Jester"> 
      <h1>Big Deck Energy Presents: King's Cup</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: "header-tile"

}
</script>

<style>

#header{
  display: grid;
  grid-template-columns: 20% 80;
  grid-template-rows: 10% 90%;
  background: rgba(0, 0, 0, 0.686);
  margin: 5px;
  font-family: 'MedievalSharp', cursive;
  font-size: 26px;
  text-align: center;
  height: 230px;
  padding: 20px;
}

#header > img{
  border-radius: 50%;
  border-width: 10px;
  border-style:dashed;
  border-color: rgb(255, 227, 67);
  height: 200px;
  width: 200px;
}

</style>