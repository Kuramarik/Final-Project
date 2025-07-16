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
   props:['self'],
   data(){
    return{
        length:this.self.length,
        progress:0,
    }
   },
   methods: {
    triggerEncounter(){
        console.log("enemy encounter")
    },
    startMission(){
        console.log(this.length)
        let timeSinceEncounter =0;
        for(let i=0; i<this.length; i++){
            this.triggerEncounter()
        }
        /*while(this.progress<this.length){
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
    <!-- Mission progress bar that aligns with length -->
     <button @click="startMission()">Start Mission</button>
     <p><<span v-for="i in this.progress">-</span>
     <span v-for="i in this.length-this.progress">&nbsp;</span>></p>
</template>

<style></style>