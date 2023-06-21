<template lang="html">
    <div>
        <div>
            <p>Imię: {{ playerName }}</p>
            <button v-on:click="changeName()">Zmień</button>
        </div>
        <hr>
        <div>
            <button class="start-game" v-on:click="$router.push('game')">Zagraj!</button>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';

export default {
    data: function () {
        return {
            // player: {
            //     name: null,
            // }
            playerName: null,
        }
    },
    mounted: function () {
        this.playerName = localStorage.getItem('playerName');
    },
    methods: {
        changeName: function () {
            var x = Swal.fire({
                title: 'Podaj imię',
                text: 'Proszę wprowadzić swoje imię poniżej',
                input: 'text',
            })
            .then((result) => {
                this.playerName = result.value;
            });

            console.log(x);

        },
    },
    watch: {
        // player: {
        //     deep: true,
        //     handler: function (newValue, oldValue) {
        //         console.log(newValue, oldValue);
        //     }
        // },
        playerName: function (newValue) {
            localStorage.setItem('playerName', newValue);
        }
    }
}
</script>
<style lang="css">
    .start-game {
        margin: auto;
        text-align: center;
    }
</style>