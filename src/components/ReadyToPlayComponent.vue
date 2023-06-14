<template lang="html">
    <div>
        <button v-if="!wasSent" v-on:click="ready()">Ready to play</button>
    </div>
</template>
<script>
import socket from '../socket.js';
export default {
    data: function () {
        return {
            wasSent: false,
        };
    },
    props: {
        player: Object,
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