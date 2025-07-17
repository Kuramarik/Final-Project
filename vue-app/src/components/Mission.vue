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
    triggerEncounter(){
        this.currentMonster=this.monsters[Math.floor(Math.random()*this.monsters.length)]
        /* some code for combat with currentMonster that can be implemented later */
        this.monstersDefeated.push(this.currentMonster)
        charInfo.levelGained +=this.currentMonster.levels
        charInfo.newGear.push()
        //console.log(Hero.level)
    },
    startMission(){
        let timeSinceEncounter =0;
        this.inProgress=true
        this.$emit('mission-started', this.self)
        /*for(let i=0; i<this.self.length; i++){
            this.triggerEncounter()
        }*/
        //this.$emit('mission-ended', this.self)
        //trigger the results tab and reset selectedMission on mission complete
        while(this.progress<this.self.length){
            setTimeout(()=>{
                this.progress+=1
                console.log(this.progress)
                if(timeSinceEncounter>5){
                    if(Math.random()<0.2){
                        this.triggerEncounter()
                        timeSinceEncounter=0;
                    }
                }
                timeSinceEncounter++;
            }, 1000)
        }
       charInfo.finished=true
    },
   }
}
</script>

<template>
     <button @click="startMission()" v-if="!inProgress">Start Mission</button>
     <p><<span v-for="i in this.progress">-</span>
     <span v-for="i in this.self.length-this.progress">&nbsp;</span>></p>
     <br>
     <strong>monsters defeated:</strong>
     <p>[<span v-for="monster in this.monstersDefeated">&nbsp;{{ monster.name }}&nbsp;</span>]</p>
</template>

<style></style>