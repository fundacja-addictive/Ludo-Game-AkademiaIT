<template>
    <button class="dice" v-on:click="diceClick">
        <div v-for="section in 9" :key="section">
            <p v-if="doDisplay(section)">*</p>
        </div>
    </button>
</template>

<script>
import socket from '../socket.js';


export default {
    data: function () {
        return {
            number: 0,
        };
    },
    methods: {
        draw: function () {
            this.number = Math.floor(Math.random() * 6 + 1);
            this.$emit('draw', this.number);
        },
        doDisplay: function (section) {
            var faces = {
                0: [],
                1: [5],
                2: [3, 7],
                3: [3, 5, 7],
                4: [1, 3, 7, 9],
                5: [1, 3, 5, 7, 9],
                6: [1, 3, 4, 6, 7, 9],
            }

            if (faces[this.number].includes(section))
                return true;
            else
                return false;
        },
        diceClick: function () {
            socket.emit('diceClick');
        },
    },
}
</script>
<style>
    .dice {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        max-width: 100px;
        min-width: 20vw;
        border: 1px solid black;
        border-radius: 5%;
        aspect-ratio: 1;
    }
</style>