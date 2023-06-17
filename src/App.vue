<template>
  <ready-to-play-component :player="player"></ready-to-play-component>
  <board-component :player="player"></board-component>
  <!-- {{ displayDraw }} -->
  <!-- <button v-on:click="$refs.dice.draw()"></button> -->
  <dice-component v-on:draw="draw" ref="dice"></dice-component>
</template>

<script>
import BoardComponent from './components/board/BoardComponent.vue';
import DiceComponent from './components/DiceComponent.vue';
import ReadyToPlayComponent from './components/ReadyToPlayComponent.vue';

import socket from './socket.js';

import { v4 } from 'uuid';

export default {
  name: 'App',
  components: {
    BoardComponent: BoardComponent,
    DiceComponent: DiceComponent,
    ReadyToPlayComponent
  },
  data: function () {
    return {
      player: {
        uuid: null,
        name: null,
      },
      displayDraw: "Nie wylosowano liczby",
    }
  },
  methods: {
    draw: function (value) {
      this.displayDraw = "Wylosowano liczbę " + value;
    }
  },
  mounted: function () {
    this.player.uuid = v4();

    socket.emit('hello', {
      text: 'world',
    });

    socket.io.on('hello', (data) => {
      console.log('hello', data);
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
