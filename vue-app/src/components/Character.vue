<script>
import {reactive} from 'vue'

export default{
    data() {
        return {
            level:10,
            allocLevel:10,
            baseStats:{
                attack:1,
                magic:1,
                defense:1,
                hp:10
            }
        }
    },
    methods: {
        modifyStats(icon, stat){
            if(icon=='+'){
                this.baseStats[stat]++
                this.allocLevel--
            }
            else if(icon=='-'){
                this.baseStats[stat]--
                this.allocLevel++
            }
        }
    }
}
</script>

<template>
     <ul>Character Stats - Level {{this.level}}. You have {{ this.allocLevel }} points
        <li>attack:<br>
            <button v-if="this.baseStats.attack>1" @click="modifyStats('-', 'attack')">-</button>{{ this.baseStats.attack }}<button v-if="this.allocLevel>0" @click="modifyStats('+', 'attack')">+</button>
        </li>
        <li>magic:<br>
            <button v-if="this.baseStats.magic>1" @click="modifyStats('-', 'magic')">-</button>{{ this.baseStats.magic }}<button v-if="this.allocLevel>0" @click="modifyStats('+', 'magic')">+</button>
        </li>
        <li>defense:<br>
            <button v-if="this.baseStats.defense>1" @click="modifyStats('-', 'defense')">-</button>{{ this.baseStats.defense }}<button v-if="this.allocLevel>0" @click="modifyStats('+', 'defense')">+</button>
        </li>
        <li>health:<br>
            <button v-if="this.baseStats.hp>10" @click="modifyStats('-', 'hp')">-</button>{{ this.baseStats.hp }}<button v-if="this.allocLevel>0" @click="modifyStats('+', 'hp')">+</button>
        </li>
     </ul>
</template>

<style></style>