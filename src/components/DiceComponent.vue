<template>
    <div>
        Number: {{ randomNumber }}
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            randomNumber: null,
        };
    },
    methods: {
        draw: function () {
            this.randomNumber = Math.floor(Math.random() * 6 + 1);
            this.$emit('draw', this.randomNumber);
        }
    },
    mounted: function () {
        // this.draw();
    }
}
</script>
<style>
    
</style>