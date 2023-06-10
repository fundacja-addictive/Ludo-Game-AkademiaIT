<template>
  <board-component></board-component>
  <!-- {{ displayDraw }} -->
  <!-- <button v-on:click="$refs.dice.draw()"></button> -->
  <dice-component v-on:draw="draw" ref="dice"></dice-component>
</template>

<script>
import BoardComponent from './components/board/BoardComponent.vue';
import DiceComponent from './components/DiceComponent.vue';

export default {
  name: 'App',
  components: {
    BoardComponent: BoardComponent,
    DiceComponent: DiceComponent,
  },
  data: function () {
    return {
      displayDraw: "Nie wylosowano liczby",
    }
  },
  methods: {
    draw: function (value) {
      this.displayDraw = "Wylosowano liczbę " + value;
    }
  }
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
