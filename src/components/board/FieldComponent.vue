<template>
    <div>
        <slot-component :color="color" :fieldId="fieldId" :pawn="pawn"></slot-component>
    </div>
</template>
<script>
import SlotComponent from './SlotComponent.vue';

export default {
    components: {
        SlotComponent
    },
    props: {
        fieldId: Number,
        pawn: null,
    },
    computed: {
        color: function () {
            switch (this.fieldId) {
                case 1:
                    return "red";
                case 11:
                    return "green";
                case 21:
                    return "blue";
                case 31:
                    return "yellow";
                default:
                    return "";
            }
        },
    }
}
</script>
<style lang="css">
    
</style>