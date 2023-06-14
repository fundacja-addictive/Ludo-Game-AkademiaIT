<template lang="html">
    <div :class="'slot ' + color">
        <pawn-component v-if="pawn" :pawn="pawn" :color="pawn.color"></pawn-component>
    </div>
</template>
<script>
import PawnComponent from './PawnComponent.vue';

export default {
    components: {
        PawnComponent
    },
    props: {
        color: String,
        fieldId: null,
        pawn: null,
    }
}
</script>
<style lang="css" scoped>
    .slot {
        width: 30px;
        height: 30px;
        border: 1px grey solid;
        margin: 1px;
        display: flex;
    }

    .red {
        background-color: rgba(255, 0, 0, 0.357);
    }
    .green {
        background-color: rgba(0, 255, 0, 0.357);
    }
    .blue {
        background-color: rgba(0, 0, 255, 0.357);
    }
    .yellow {
        background-color: rgba(255, 230, 0, 0.357);
    }
</style>