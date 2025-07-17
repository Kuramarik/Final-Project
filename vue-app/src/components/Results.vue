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
            }
        }
    }
}
/* Access level and allocLevel from Character.vue
    Take monstersDefeated and levelGained from Mission.vue as well as the mission itself
data{

} */
</script>

<template>
    <p v-if="charInfo.finished">you gained {{ charInfo.levelGained }} levels</p>
<!-- You gained X levels
 Give a list of monstersDefeated, different after each mission
 Display the description of the mission -->
</template>

<style></style>