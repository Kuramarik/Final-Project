<script>
import monsterJson from '../assets/monsters.json'
import Character from './Character.vue'
import {charInfo} from './charInfo.js'

export default{
   props:['self'],
   components:{
    Hero:Character
   },
   data(){
    return{
        monsters:monsterJson,
        currentMonster:null,
        progress:0,
        monstersDefeated:[],
        charInfo,
        inProgress:false
    }
   },
   methods: {
    startMission(){
        let timeSinceEncounter =0;
        this.inProgress=true
        this.$emit('mission-started', this.self)
        /*for(let i=0; i<this.self.length; i++){
            this.triggerEncounter()
        }*/
        //trigger the results tab and reset selectedMission on mission complete
        console.log(this.self)
        function progressBar(progress, self, monsters, currentMonster, monstersDefeated){
            setTimeout(()=>{
                progress+=1
                // if(timeSinceEncounter>1){
                //     if(Math.random()<1){

                        currentMonster=monsters[Math.floor(Math.random()*monsters.length)]
                        /* some code for combat with currentMonster that can be implemented later */
                        monstersDefeated.push(currentMonster)
                        charInfo.levelGained +=currentMonster.levels
                        let randomGear=Math.floor(Math.random()*(currentMonster.gear.length))
                        console.log(randomGear)
                        charInfo.newGear.push(currentMonster.gear[randomGear].name)
                        currentMonster=null

                //         timeSinceEncounter=0;
                //     }
                // }
                timeSinceEncounter++;
                if(progress<self.length){
                    progressBar(progress, self, monsters, currentMonster, monstersDefeated)
                }else{
                    charInfo.finished=true
                }
            }, 1000)
            return
        }
        progressBar(this.progress, this.self, this.monsters, this.currentMonster, this.monstersDefeated)
    },
   }
}
</script>

<template>
     <button @click="startMission()" v-if="!inProgress">Start Mission</button>
     <p>
        <!-- <<span v-for="i of this.progress">-</span>
        <span v-for="j of this.self.length-this.progress">&nbsp;</span>> -->
        {{ this.progress }}/{{ this.self.length }}
    </p>
    <div class="flex">
        <div class="border"></div>
        <div class="border" v-if="currentMonster"></div>
    </div>
     <br>
     <strong>monsters defeated:</strong>
     <p>[<span v-for="monster in this.monstersDefeated">&nbsp;{{ monster.name }}&nbsp;</span>]</p>
</template>

<style>
.flex{
    display: flex;
    justify-content: space-around;
}
.border{
    flex-grow: 1;
    padding:10px;
    border:2px solid black;
}
</style>