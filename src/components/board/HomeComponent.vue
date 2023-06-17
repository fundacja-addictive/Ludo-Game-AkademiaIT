<template>
    <div class="home-container">
        <slot-component v-for="position in 4" :key="position" :color="player.color" :pawn="getPawn(position)"></slot-component>
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
        getPawn: function (position) {
            var pawn = this.player.pawns.find(pawn => pawn.location == "inHome" && pawn.position == position);

            if (pawn)
                return {
                    number: pawn.number,
                    color: this.player.color,
                };
            else
                return false;
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