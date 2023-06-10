<template>
    <div class="home-container">
        <slot-component v-for="slot in 4" :key="slot" :color="player.color"></slot-component>
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
    }
}
</script>
<style lang="css">
    .home-container {
        display: flex;
        flex-wrap: wrap;
    }
</style>