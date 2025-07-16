<script>
import monsterJson from '../assets/monsters.json'
import Character from './Character.vue'

export default{
   props:['self'],
   components:{
    Hero:Character
   },
   data(){
    return{
        progress:0,
        monsters:monsterJson,
        monstersDefeated:[],
        levelGained:0,
        currentMonster:null,
        inProgress:false
    }
   },
   methods: {
    triggerEncounter(){
        this.currentMonster=this.monsters[Math.floor(Math.random()*this.monsters.length)]
        /* some code for combat that can be implemented later */
        this.monstersDefeated.push(this.currentMonster)
        this.levelGained +=this.currentMonster.levels
    },
    startMission(){
        let timeSinceEncounter =0;
        this.$emit('mission-started', self)
        for(let i=0; i<this.self.length; i++){
            this.triggerEncounter()
        }
        console.log(this.levelGained)
        console.log(this.monstersDefeated)
        //trigger the results tab and reset selectedMission on mission complete
        /*while(this.progress<this.self.length){
            setTimeout(()=>{
                this.progress+=1
                console.log(this.progress)
                if(timeSinceEncounter>5){
                    if(Math.random()<0.2){
                        console.log("hi")
                        this.triggerEncounter()
                        timeSinceEncounter=0;
                    }
                }
                timeSinceEncounter++;
            }, 1000)
        }*/
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