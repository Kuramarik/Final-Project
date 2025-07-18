<script>
import {charInfo} from './charInfo.js'

export default{
    data() {
        return {
            charInfo,
            armor:{},
            weapon:{},
            charm:{}
        }
    },
    methods: {
        modifyStats(icon, stat){
            if(icon=='+'){
                charInfo.baseStats[stat]++
                charInfo.totalStats[stat]++
                charInfo.allocLevel--
            }
            else if(icon=='-'){
                charInfo.baseStats[stat]--
                charInfo.totalStats[stat]--
                charInfo.allocLevel++
            }
        }
    }
}
</script>

<template>
    <div class="flex">
        <div class="border">
            <ul>Character Stats - Level {{charInfo.level}}. You have {{ charInfo.allocLevel }} points
                <li>attack:<br>
                    <button v-if="charInfo.baseStats.attack>1" @click="modifyStats('-', 'attack')">-</button>{{ charInfo.baseStats.attack }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'attack')">+</button>
                </li>
                <li>defense:<br>
                    <button v-if="charInfo.baseStats.defense>1" @click="modifyStats('-', 'defense')">-</button>{{ charInfo.baseStats.defense }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'defense')">+</button>
                </li>
                <li>health:<br>
                    <button v-if="charInfo.baseStats.hp>10" @click="modifyStats('-', 'hp')">-</button>{{ charInfo.baseStats.hp }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'hp')">+</button>
                </li>
            </ul>
        </div>
        <div class="border">
            <ul>Inventory:
                <li v-for="item of charInfo.inventory">{{ item }}</li>
            </ul>
        </div>
     </div>
     <!-- Display inventory as an array
      Make the armor, weapon, and charm slots with remove buttons and put equip buttons over the inventory when the slots are empty -->
</template>

<style></style>