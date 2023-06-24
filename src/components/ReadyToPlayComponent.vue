<template lang="html">
    <div>
        <button :disabled="notEnoughPlayers" v-if="!wasSent" v-on:click="ready()">Ready to play</button>
    </div>
</template>
<script>
import socket from '../socket.js';
export default {
    data: function () {
        return {
            wasSent: false,
            notEnoughPlayers: true,
        };
    },
    props: {
        player: Object,
    },
    mounted () {
        socket.io.on('enoughPlayers', () => this.notEnoughPlayers = false);
    },
    methods: {
        ready: function () {
            socket.io.emit('readyToPlay', this.player);
            this.wasSent = true;
        }
    }
}
</script>
<style lang="css" scoped>
    button {
    }
</style>