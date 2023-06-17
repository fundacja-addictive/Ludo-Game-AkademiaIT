<template>
    <div class="base-container">
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
            var pawn = this.player.pawns.find(pawn => pawn.location == "inBase" && pawn.position == position);

            if (pawn)
                return {
                    number: this.player.id + '.' + position,
                    color: this.player.color,
                };
            else
                return false;
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