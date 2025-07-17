<script>
import {reactive} from 'vue'
import {charInfo} from './charInfo.js'

export default{
    data() {
        return {
            charInfo,
            
        }
    },
    methods: {
        modifyStats(icon, stat){
            if(icon=='+'){
                charInfo.baseStats[stat]++
                charInfo.allocLevel--
            }
            else if(icon=='-'){
                charInfo.baseStats[stat]--
                charInfo.allocLevel++
            }
        }
    }
}
</script>

<template>
     <ul>Character Stats - Level {{charInfo.level}}. You have {{ charInfo.allocLevel }} points
        <li>attack:<br>
            <button v-if="charInfo.baseStats.attack>1" @click="modifyStats('-', 'attack')">-</button>{{ charInfo.baseStats.attack }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'attack')">+</button>
        </li>
        <li>magic:<br>
            <button v-if="charInfo.baseStats.magic>1" @click="modifyStats('-', 'magic')">-</button>{{ charInfo.baseStats.magic }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'magic')">+</button>
        </li>
        <li>defense:<br>
            <button v-if="charInfo.baseStats.defense>1" @click="modifyStats('-', 'defense')">-</button>{{ charInfo.baseStats.defense }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'defense')">+</button>
        </li>
        <li>health:<br>
            <button v-if="charInfo.baseStats.hp>10" @click="modifyStats('-', 'hp')">-</button>{{ charInfo.baseStats.hp }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'hp')">+</button>
        </li>
     </ul>
</template>

<style></style>