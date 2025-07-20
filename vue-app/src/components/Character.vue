<script>
import {charInfo} from './charInfo.js'

export default{
    data() {
        return {
            charInfo,
            weapon:null,
            armor:null,
            charm:null
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
        },
        equip(type, gear){
            if(type=='weapon'){
                this.weapon=gear
                charInfo.totalStats.attack+=gear.effect
            }
            else if(type=='armor'){
                this.armor=gear
                charInfo.totalStats.defense+=gear.effect
            }
            else if(type=='charm'){
                this.charm=gear
                charInfo.totalStats[gear.stat]+=gear.effect
            }
        },
        unequip(type){
            if(type=='weapon'){
                charInfo.inventory.push(this.weapon)
                charInfo.totalStats.attack-=this.weapon.effect
                this.weapon=null
            }
            else if(type=='armor'){
                charInfo.inventory.push(this.armor)
                charInfo.totalStats.defense-=this.armor.effect
                this.armor=null
            }
            else if(type=='charm'){
                charInfo.inventory.push(this.charm)
                charInfo.totalStats[this.charm.stat]-=this.charm.effect
                this.charm=null
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
                    <li class="attack">attack:<br>
                        <button v-if="charInfo.baseStats.attack>1" @click="modifyStats('-', 'attack')">-</button>{{ charInfo.baseStats.attack }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'attack')">+</button>
                    </li>
                    <li class="defense">defense:<br>
                        <button v-if="charInfo.baseStats.defense>1" @click="modifyStats('-', 'defense')">-</button>{{ charInfo.baseStats.defense }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'defense')">+</button>
                    </li>
                    <li class="health">health:<br>
                        <button v-if="charInfo.baseStats.hp>10" @click="modifyStats('-', 'hp')">-</button>{{ charInfo.baseStats.hp }}<button v-if="charInfo.allocLevel>0" @click="modifyStats('+', 'hp')">+</button>
                    </li>
                </ul>
                <ul>Equipment:
                    <li class="attack">Weapon - <span v-if="this.weapon">{{ this.weapon.name }}<br>
                    attack+{{ this.weapon.effect }}<button @click="unequip('weapon')">unequip</button></span><span v-else>none equipped</span></li>

                    <li class="defense">Armor - <span v-if="this.armor">{{ this.armor.name }}<br>
                    defense+{{ this.armor.effect }}<button @click="unequip('armor')">unequip</button></span><span v-else>none equipped</span></li>
                    <li>Charm - <span v-if="this.charm">{{ this.charm.name }}<br>
                    {{this.charm.stat}} + {{ this.charm.effect }}<button @click="unequip('charm')">unequip</button></span><span v-else>none equipped</span></li>
                </ul>
            </div>
        </div>
        <div class="border">
            <ul>Inventory:
                <li v-for="item of charInfo.inventory">{{ item.name }},
                    <span v-if="item.type=='weapon'" class="attack">attack+{{ item.effect }}</span>
                    <span v-else-if="item.type=='armor'" class="defense">defense+{{ item.effect }}</span>
                    <!-- Find a good way to display the correct stat colors for charms and consumables -->
                    <span v-else-if="item.type=='charm'">{{item.stat}} + {{ item.effect }}</span>
                    <span v-else-if="item.type=='consumable'">{{item.stat}} + {{ item.effect }}</span>
                    &nbsp;<button @click="equip(item.type, item); charInfo.inventory=charInfo.inventory.filter((keep)=>keep!=item)" v-if="this[item.type]==null">
                        {{ item.type }}</button></li>
                    <!-- (keep, index)=>{index!=charInfo.inventory.findIndex((value)=>{value==item})} -->
            </ul>
        </div>
    </div>
</template>

<style></style>