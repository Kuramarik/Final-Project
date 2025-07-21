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
        function progressBar(self, monsters, monstersDefeated){
            setTimeout(()=>{
                if(charInfo.currentMonster==null){
                    charInfo.progress+=1
                    timeSinceEncounter++;
                }
                if(timeSinceEncounter>5){
                    if(Math.random()<0.3){
                        charInfo.currentMonster=JSON.parse(JSON.stringify(monsters[Math.floor(Math.random()*monsters.length)]))
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
                if(charInfo.progress<self.length){
                    progressBar(self, monsters, monstersDefeated)
                }else{
                    if(charInfo.currentMonster==null){
                        charInfo.finished=true
                        if(charInfo.baseStats.hp>charInfo.totalStats.hp){
                            charInfo.baseStats.hp=charInfo.totalStats.hp
                        }
                    }
                    else{
                        progressBar(self, monsters, monstersDefeated)
                    }
                }
            }, 1000)
            return
        }
        progressBar(this.self, this.monsters, this.monstersDefeated)
    },
   }
}
</script>

<template>
     <button @click="startMission()" v-if="!inProgress">Start Mission</button>
     <p>
        <!-- <<span v-for="i of charInfo.progress">-</span> -->
        <!-- <span v-for="j of this.self.length-charInfo.progress">&nbsp;</span>> -->
        {{ charInfo.progress }}/{{ this.self.length }}
    </p>
    <div class="flex">
        <div class="border"><ul>Player
            <li class="health">health:{{ charInfo.totalStats.hp }}</li>
            <li class="attack">attack:{{ charInfo.totalStats.attack }}</li>
            <li class="defense">defense:{{ charInfo.totalStats.defense }}</li>
        </ul></div>
        <div class="border" v-if="charInfo.currentMonster!=null">{{ charInfo.currentMonster.name }}
            <ul>
                <li class="health">health:{{ charInfo.currentMonster.stats.hp }}</li>
                <li class="attack">attack:{{ charInfo.currentMonster.stats.attack }}</li>
            </ul>
        </div>
    </div>
     <br>
     <strong>monsters defeated:</strong>
     <p>[<span v-for="monster in this.monstersDefeated">&nbsp;{{ monster.name }}&nbsp;</span>]</p>
</template>

<style>
</style>