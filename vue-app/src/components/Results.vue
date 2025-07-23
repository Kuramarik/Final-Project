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
                if(charInfo.missionList.length==0){
                    if(charInfo.name!=null){
                        alert("Congratulations "+charInfo.name+"! You won!")
                    }
                    else{
                        alert("Congratulations! You won!")
                    }
                }
            }
        }
    }
}
</script>

<template>
    <div v-if="charInfo.finished" class="border">
        <p>you gained {{ charInfo.levelGained }} levels</p>
        <ul>New Gear!
            <li v-for="piece of charInfo.newGear">{{ piece.name }}</li>
        </ul>
    </div>
<!-- Display the description of the mission -->
</template>

<style></style>