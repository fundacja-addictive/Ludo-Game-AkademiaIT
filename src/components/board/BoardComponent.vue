<template>
    <div class="board-container">
        <base-component v-for="player in players" :player="player" v-bind:key="player.id" :style="getBaseStyle(player.id)"></base-component>
        <home-component v-for="player in players" :player="player" :key="player.id" :style="getHomeStyle(player.id)"></home-component>
        <field-component v-for="field in 40" :field="field" :key="field" :fieldId="field" :style="'grid-column: ' + getColumn(field) + ' / span 1; grid-row: ' + getRow(field) + '/ span 1;'"></field-component>
    </div>
</template>

<script>
import BaseComponent from './BaseComponent.vue';
import HomeComponent from './HomeComponent.vue';
import FieldComponent from './FieldComponent.vue';

import _ from 'lodash';

export default {
    components: {
        BaseComponent,
        HomeComponent: HomeComponent,
        FieldComponent,
    },
    data: function () {
        return {
            players: [
                {
                    id: 1,
                    color: "red",
                },
                {
                    id: 2,
                    color: "green",
                },
                {
                    id: 3,
                    color: "blue",
                },
                {
                    id: 4,
                    color: "yellow",
                },
            ]
        };
    },
    methods: {
        getColumn: function (fieldId) {
            if (_.inRange(fieldId, 6, 8+1) || _.inRange(fieldId, 32, 34+1))
                return 5;
            if (_.inRange(fieldId, 12, 14+1) || _.inRange(fieldId, 26, 28+1))
                return 7;
            if (_.inRange(fieldId, 9, 11+1))
                return fieldId - 4;
            if (_.inRange(fieldId, 15, 18+1))
                return fieldId - 8;
            if (_.inRange(fieldId, 19, 21+1))
                return 11;
            if (_.inRange(fieldId, 22, 25+1))
                return 11 - fieldId % 21;
            if (_.inRange(fieldId, 29, 31+1))
                return 11 - fieldId % 25;
            if (_.inRange(fieldId, 35, 38+1))
                return 11 - fieldId % 29;
            if (_.inRange(fieldId, 39, 40+1))
                return 1;
            
            return fieldId;
        },
        getRow: function (fieldId) {
            if (_.inRange(fieldId, 1, 5+1) || _.inRange(fieldId, 15, 19+1))
                return 5;
            if (_.inRange(fieldId, 21, 25+1) || _.inRange(fieldId, 35, 39+1))
                return 7;
            if (_.inRange(fieldId, 6, 8+1))
                return 11 - fieldId - 1;
            if (_.inRange(fieldId, 9, 11+1))
                return 1;
            if (_.inRange(fieldId, 12, 14+1))
                return fieldId - 11 + 1;
            if (fieldId == 20 || fieldId == 40)
                return 6;
            if (_.inRange(fieldId, 26, 28+1))
                return 11 + fieldId % 24 - 5;
            if (_.inRange(fieldId, 29, 31+1))
                return 11;
            if (_.inRange(fieldId, 32, 34+1))
                return 11 - fieldId % 31;

            return fieldId;
        },
        getBaseStyle: function (playerId) {
            var row, col;
            switch (playerId) {
                case 1:
                    row = 2;
                    col = 2;
                    break;
                case 2:
                    row = 2;
                    col = -4;
                    break;
                case 3:
                    row = -4;
                    col = -4;
                    break;
                case 4:
                    row = -4;
                    col = 2;
                    break;
            }

            return 'grid-row: ' + row + ' / span 2; grid-column: ' + col + ' / span 2;'
        },
        getHomeStyle: function (playerId) {
            switch (playerId) {
                case 1:
                    return 'grid-row: 6 / span 1; grid-column: 2 / span 4;'
                case 2:
                    return 'grid-row: 2 / span 4; grid-column: 6 / span 1;'
                case 3:
                    return 'grid-row: 6 / span 1; grid-column: 7 / span 4;'
                case 4:
                    return 'grid-row: 7 / span 4; grid-column: 6 / span 1;'
            }
        },
    }
}
</script>

<style>
.board-container {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(11, 1fr);
    width: min-content;
    margin-left: auto;
    margin-right: auto;
}
</style>