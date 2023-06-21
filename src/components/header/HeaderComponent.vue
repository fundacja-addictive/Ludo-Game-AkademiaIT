<template>
    <div class="header">
        <div v-for="p in players" :key="p.id" :class="getClasses(p)">
            <p>{{ p.name }}</p>
            <span v-if="p.uuid == player.uuid">Ja</span>
        </div>
    </div>
</template>
<script>
import socket from '../../socket.js'

export default {
    data: function () {
        return {
            playerTurnUuid: null,
        };
    },   
    props: {
        players: Array,
        player: Object,
    },
    methods: {
        isPlayerTurn: function (player) {
            return player.uuid == this.playerTurnUuid;
        },
        getClasses: function (player) {
            var classes = "player-tag";

            classes += " " + player.color;

            if (this.isPlayerTurn(player))
                classes += " turn";
            
            return classes;
        },
    },
    mounted: function () {
        socket.io.on("playerTurn", (data) => {
            this.playerTurnUuid = data.uuid;
        });
    },
    computed: {

    }
}
</script>
<style lang="css">
    .header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .player-tag {
        display: flex;
        justify-content: space-around;
        width: 100%;
        min-height: 2em;
        border: 1px solid lightgrey;
        opacity: 0.8;
    }

    .red {
        background-color: rgba(255, 0, 0, 0.333);
    }
    .green {
        background-color: rgba(0, 255, 0, 0.333);
    }
    .blue {
        background-color: rgba(0, 0, 255, 0.333);
    }
    .yellow {
        background-color: rgba(255, 213, 0, 0.333);
    }

    .turn {
        border-color: black;
        opacity: 1;
    }
</style>