<script>
export default{
    /*data {
    length variable
    monstersDefeated list, add one each encounter
    }
    methods:{
    startMission, begin a timer based on the length variable of the mission.
    triggerEncounter, called randomly during the timer of startMission
    }*/
   data(){
    return{
        length:30,
        progress:0,
        monstersDefeated:[]
    }
   },
   methods: {
    startMission(){
        let timeSinceEncounter =0;
        while(this.progress<this.length){
            setTimeout(()=>{
                this.progress++
                console.log(this.progress)
            }, 1000)
            if(timeSinceEncounter>5){
                if(Math.random()<0.2){
                    this.triggerEncounter()
                    timeSinceEncounter=0;
                }
            }
            timeSinceEncounter++;
        }
    },
    triggerEncounter(){
        console.log("enemy encounter")
    }
   }
}
</script>

<template>
    <!-- Mission progress bar that aligns with length -->
     <button @click="startMission()"></button>
     <p><<span v-for="i in this.progress">-</span>
     <span v-for="i in this.length-this.progress">&nbsp;</span>></p>
</template>

<style></style>