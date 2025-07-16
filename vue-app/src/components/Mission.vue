<script>
import monsterJson from '../assets/monsters.json'

export default{
   props:['self'],
   data(){
    return{
        progress:0,
        monsters:monsterJson,
        monstersDefeated:[],
        currentMonster:null
        /* monsters defeated list */
    }
   },
   methods: {
    triggerEncounter(){
        this.currentMonster=this.monsters[Math.floor(Math.random()*this.monsters.length)]
        console.log(this.currentMonster)
        /* add a monster to the defeated list*/
    },
    startMission(){
        console.log(this.self.length)
        let timeSinceEncounter =0;
        for(let i=0; i<this.self.length; i++){
            this.triggerEncounter()
        }
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
     <button @click="startMission()">Start Mission</button>
     <p><<span v-for="i in this.progress">-</span>
     <span v-for="i in this.self.length-this.progress">&nbsp;</span>></p>
</template>

<style></style>