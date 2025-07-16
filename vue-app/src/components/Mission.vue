<script>
export default{
   props:['self'],
   data(){
    return{
        length:this.self.length,
        progress:0,
        /* currentMonster */
    }
   },
   methods: {
    triggerEncounter(){
        console.log("enemy encounter")
        /* set currentMonster 
        while loop through the combat*/
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
     <button @click="startMission()">Start Mission</button>
     <p><<span v-for="i in this.progress">-</span>
     <span v-for="i in this.length-this.progress">&nbsp;</span>></p>
</template>

<style></style>