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
        //trigger the results tab and reset selectedMission on mission complete
        function progressBar(progress, self, monsters, currentMonster, monstersDefeated){
            console.log(progress)
            setTimeout(()=>{
                progress+=1
                if(timeSinceEncounter>15){
                    if(Math.random()<0.8){

                //Do something about the setTimeouts running simultaneously
                        currentMonster=monsters[Math.floor(Math.random()*monsters.length)]
                        function triggerCombat(){
                            console.log(currentMonster)
                            setTimeout(()=>{
                                currentMonster.stats.hp -= charInfo.totalStats.attack
                                console.log(currentMonster.stats.hp)
                                let trudmg = currentMonster.stats.attack-charInfo.totalStats.defense
                                if(trudmg<0){ trudmg=0 }
                                charInfo.totalStats.hp -= trudmg
                                if(charInfo.totalStats.hp<=0){
                                    alert("game over")
                                    return
                                }
                                /* get charInfo.totalStats
                                monster hp -= player attack
                                player health -= monster attack-player defense
                                if the player is at 0 health, alert game over*/
                                if(currentMonster.stats.hp<=0){
                                    monstersDefeated.push(currentMonster)
                                    charInfo.levelGained +=currentMonster.levels
                                    let randomGear=Math.floor(Math.random()*(currentMonster.gear.length))
                                    charInfo.newGear.push(currentMonster.gear[randomGear].name)
                                    currentMonster=null
                                    console.log("victory!")
                                    return
                                }
                                else{
                                    triggerCombat()
                                }
                            }, 1000)
                        }
                        triggerCombat()

                        timeSinceEncounter=0;
                    }
                }
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
        <div class="border"><ul>Player
            <li>health:{{ charInfo.totalStats.hp }}</li>
            <li>attack:{{ charInfo.totalStats.attack }}</li>
            <li>defense:{{ charInfo.totalStats.defense }}</li>
        </ul></div>
        <div class="border" v-if="this.currentMonster!=null">
            <ul>
                <li>health:{{ this.currentMonster.stats.hp }}</li>
                <li>attack:{{ this.currentMonster.stats.attack }}</li>
            </ul>
        </div>
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