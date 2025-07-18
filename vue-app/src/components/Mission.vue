<script>
import monsterJson from '../assets/monsters.json'
import Character from './Character.vue'
import {charInfo} from './charInfo.js'

export default{
    emits:['mission-started'],
    props:['self'],
    components:{
    Hero:Character
   },
   data(){
    return{
        monsters:monsterJson,
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
        function progressBar(progress, self, monsters, monstersDefeated){
            setTimeout(()=>{
                if(charInfo.currentMonster==null){
                    progress+=1
                    timeSinceEncounter++;
                }
                console.log(progress)
                if(timeSinceEncounter>5){
                    if(Math.random()<0.3){
                        // Figure out how to reset the currentMonster's stats after defeating them so they don't spawn in already defeated
                        charInfo.currentMonster=monsters[Math.floor(Math.random()*monsters.length)]
                        function triggerCombat(){
                            setTimeout(()=>{
                                charInfo.currentMonster.stats.hp -= charInfo.totalStats.attack
                                let trudmg = charInfo.currentMonster.stats.attack-charInfo.totalStats.defense
                                if(trudmg<0){ trudmg=0 }
                                charInfo.totalStats.hp -= trudmg
                                if(charInfo.totalStats.hp<=0){
                                    alert("game over")
                                    window.location.reload()
                                    return
                                }
                                if(charInfo.currentMonster.stats.hp<=0){
                                    monstersDefeated.push(charInfo.currentMonster)
                                    charInfo.levelGained +=charInfo.currentMonster.levels
                                    let randomGear=Math.floor(Math.random()*(charInfo.currentMonster.gear.length))
                                    charInfo.newGear.push(charInfo.currentMonster.gear[randomGear])
                                    charInfo.currentMonster=null
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
                if(progress<self.length){
                    progressBar(progress, self, monsters, monstersDefeated)
                }else{
                    if(charInfo.currentMonster==null){
                        charInfo.finished=true
                    }
                    else{
                        progressBar(progress, self, monsters, monstersDefeated)
                    }
                }
            }, 1000)
            return
        }
        progressBar(this.progress, this.self, this.monsters, this.monstersDefeated)
    },
   }
}
</script>

<template>
     <button @click="startMission()" v-if="!inProgress">Start Mission</button>
     <p>
        <!-- <<span v-for="i of this.progress">-</span>
        <span v-for="j of this.self.length-this.progress">&nbsp;</span>> -->

        <!-- Why is progress staying at zero when it's shown to be updating? -->
        {{ this.progress }}/{{ this.self.length }}
    </p>
    <div class="flex">
        <div class="border"><ul>Player
            <li>health:{{ charInfo.totalStats.hp }}</li>
            <li>attack:{{ charInfo.totalStats.attack }}</li>
            <li>defense:{{ charInfo.totalStats.defense }}</li>
        </ul></div>
        <div class="border" v-if="charInfo.currentMonster!=null">{{ charInfo.currentMonster.name }}
            <ul>
                <li>health:{{ charInfo.currentMonster.stats.hp }}</li>
                <li>attack:{{ charInfo.currentMonster.stats.attack }}</li>
            </ul>
        </div>
    </div>
     <br>
     <strong>monsters defeated:</strong>
     <p>[<span v-for="monster in this.monstersDefeated">&nbsp;{{ monster.name }}&nbsp;</span>]</p>
</template>

<style>
</style>