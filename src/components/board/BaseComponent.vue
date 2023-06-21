<template>
    <div class="base-container">
        <slot-component v-for="position in 4" :key="position" :color="player.color" :pawns="getPawns(position)"></slot-component>
    </div>
</template>
<script>
import SlotComponent from './SlotComponent.vue';

export default {
    components: {
        SlotComponent
    },
    props: {
        player: Object,
    },
    methods: {
        getPawns: function (position) {
            var pawn = this.player.pawns.find(pawn => pawn.location == "inBase" && pawn.position == position);

            if (pawn)
                return [
                    {
                        number: pawn.number,
                        color: this.player.color,
                        playerUuid: this.player.uuid,
                    }
                ];
            else
                return [];
        },
    }
}
</script>
<style lang="css">
    .base-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        width: fit-content;
        height: fit-content;
    }
</style>