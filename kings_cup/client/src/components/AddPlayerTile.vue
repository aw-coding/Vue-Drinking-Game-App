<template>
<div id="form-container">
  <h2>New Player</h2>
  <form id="player-form">
    <label for="Name"></label>
    <input v-model='playerName' required type='text' placeholder='name'>

      <select v-model='playerColour' name="colours" id="player-colour">
        <option value="" selected disabled hidden>Colour</option>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='purple'>Purple</option>
        <option value='orange'>Orange</option>
        <option value='pink'>Pink</option>
        <option value='black'>Black</option>
        <option value='white'>White</option>
        <option value='grey'>Grey</option>
      </select>

    <select  id="avatar-select" name="avatar" v-model="playerAvatar" required>
      <option value="" selected disabled hidden>Avatar</option>
      <option value="https://avatarfiles.alphacoders.com/123/thumb-123713.jpg">Minion</option>
      <option value="https://avatarfiles.alphacoders.com/166/thumb-166320.jpg">Pikachu</option>
      <option value="https://avatarfiles.alphacoders.com/122/thumb-122641.jpg">Iron Man</option>
      <option value="https://avatarfiles.alphacoders.com/182/thumb-182355.jpg">Joker</option>
      <option value="https://avatarfiles.alphacoders.com/851/thumb-851.jpg">Yoda</option>
      <option value="https://avatarfiles.alphacoders.com/226/thumb-226760.jpg">Baby Groot</option>
      <option value="https://avatarfiles.alphacoders.com/161/thumb-161909.jpg">Micky Mouse</option>
      <option value="https://avatarfiles.alphacoders.com/118/thumb-118721.jpg">Beaker</option>
      <option value="https://avatarfiles.alphacoders.com/154/thumb-154205.gif">gif</option>
      <option value="https://avatarfiles.alphacoders.com/121/thumb-121989.png">Arnold</option>
      <option value="https://avatarfiles.alphacoders.com/848/84848.jpg">Wonder Woman</option>
      <option value="https://avatarfiles.alphacoders.com/842/84271.jpg">Darth Vader</option>
      <option value="https://avatarfiles.alphacoders.com/471/47181.jpg">Rey</option>
      <option value="https://avatarfiles.alphacoders.com/693/69307.png">Homer</option>
      <option value="https://avatarfiles.alphacoders.com/968/96893.jpg">Black Widow</option>
      <option value="https://avatarfiles.alphacoders.com/249/249498.jpg">Samoyed</option>
    </select>

    <button v-on:click='addPlayer'>Add Player</button>

    <img :src="playerAvatar" alt="">
    </form>

  </div>
</template>

<script>
import { eventBus } from '@/main.js'

export default {
    name: 'add-player-tile',

    data () {
      return {
        playerName: '',
        playerColour: '',
        playerAvatar: ''
      }
    },
    methods:{
      addPlayer: function (event) {
        event.preventDefault()
        if (this.playerName && this.playerColour) {
        const newPlayer = {}
        newPlayer.isTurn = "false"
        newPlayer.name = this.playerName
        newPlayer.colour = this.playerColour
        newPlayer.avatar = this.playerAvatar
        newPlayer.drinks = 0
        newPlayer.roundDrinks = 0
        eventBus.$emit('player-created', newPlayer)
        this.playerName = ''
        this.playerColour = ''
        this.playerAvatar = ''
        }
      }
    }

  



}
</script>

<style>
#form-container{
  background: rgba(0, 0, 0, 0.694);
  padding: 10px;
  border-radius: 10px;  
}
#player-form{
  display: flex;
  flex-direction: column;
  width: 150px;
  align-content: center;
}

</style>