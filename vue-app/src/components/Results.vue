<script>
import {charInfo} from './charInfo.js'

export default{
    data(){
        return{
            charInfo
        }
    },
    watch: {
        'charInfo.finished'(newValue){
            if(newValue){
                charInfo.level+=charInfo.levelGained
                charInfo.allocLevel+=charInfo.levelGained
                charInfo.inventory = charInfo.inventory.concat(charInfo.newGear)
            }
        }
    }
}
</script>

<template>
    <div v-if="charInfo.finished">
        <p>you gained {{ charInfo.levelGained }} levels</p>
        <ul>New Gear!
            <li v-for="piece of charInfo.newGear">{{ piece }}</li>
        </ul>
    </div>
<!-- You gained X levels
 Give a list of monstersDefeated, different after each mission
 Display the description of the mission -->
</template>

<style></style>