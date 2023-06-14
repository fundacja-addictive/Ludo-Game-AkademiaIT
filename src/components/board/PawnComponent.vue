<template>
    <div :class="cssClasses" v-on:click="onClick">
        {{ pawn.number }}
    </div>
</template>
<script>
import socket from '../../socket.js';

export default {
    props: {
        color: String,
        pawn: Object,
    },
    computed: {
        cssClasses: function () {
            return "pawn " + this.color;
        },
    },
    methods: {
        onClick: function () {
            socket.emit('pawnClick', this.pawn);
        },
    }
}
</script>
<style lang="css">
    .pawn {
        border: 1px solid black;
        border-radius: 50%;
        width: 80%;
        height: 80%;
        margin: auto;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }

    .yellow {
        background-color: yellow;
    }
</style>