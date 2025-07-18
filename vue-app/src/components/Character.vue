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
            <div class="flex">
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
                <!-- Why is "none equipped" not showing? -->
                <ul>Equipment:
                    <li>Weapon - <span v-if="this.weapon!={}">{{ this.weapon.name }}</span><span v-else>none equipped</span></li>
                    <li>Armor - <span v-if="this.armor!={}">{{ this.armor.name }}</span><span v-else>none equipped</span></li>
                    <li>Charm - <span v-if="this.charm!={}">{{ this.charm.name }}</span><span v-else>none equipped</span></li>
                </ul>
            </div>
        </div>
        <div class="border">
            <ul>Inventory:
                <li v-for="item of charInfo.inventory">{{ item.name }} <button>{{ item.type }}</button></li>
            </ul>
        </div>
    </div>
     <!-- Make the armor, weapon, and charm slots with remove buttons and put equip buttons over the inventory when the slots are empty -->
</template>

<style></style>