<template>
  <header-component :players="players" :player="player"></header-component>
  <ready-to-play-component :player="player"></ready-to-play-component>
  <board-component :player="player" :players="players"></board-component>
  <!-- {{ displayDraw }} -->
  <!-- <button v-on:click="$refs.dice.draw()"></button> -->
  <dice-component v-on:draw="draw" ref="dice"></dice-component>
</template>

<script>
import BoardComponent from './components/board/BoardComponent.vue';
import DiceComponent from './components/DiceComponent.vue';
import ReadyToPlayComponent from './components/ReadyToPlayComponent.vue';
import HeaderComponent from './components/header/HeaderComponent.vue';

import socket from './socket.js';

import { v4 } from 'uuid';

export default {
  name: 'MainApp',
  components: {
    BoardComponent: BoardComponent,
    DiceComponent: DiceComponent,
    ReadyToPlayComponent,
    HeaderComponent,
  },
  data: function () {
    return {
      players: [
        {
            id: 1,
            online: false,
            uuid: null,
            name: null,
            color: "red",
            pawns: [],
        },
        {
            id: 2,
            online: false,
            uuid: null,
            name: null,
            color: "green",
            pawns: [],
        },
        {
            id: 3,
            online: false,
            uuid: null,
            name: null,
            color: "blue",
            pawns: [],
        },
        {
            id: 4,
            online: false,
            uuid: null,
            name: null,
            color: "yellow",
            pawns: [],
        },
      ],
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
    this.player.name = localStorage.getItem('playerName');

    socket.emit('onBoard', this.player);
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
