<template>
    <div class="home-container">
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
            var pawn = this.player.pawns.find(p => p.location == "inHome" && p.position == position);

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
    },
}
</script>
<style lang="css">
    .home-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>