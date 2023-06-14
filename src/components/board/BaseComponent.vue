<template>
    <div class="base-container">
        <slot-component v-for="slot in 4" :key="slot" :color="player.color" :pawn="getPawn(slot)"></slot-component>
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
        getPawn: function (slot) {
            return {
                number: this.player.id + '.' + slot,
                color: this.player.color,
            };
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