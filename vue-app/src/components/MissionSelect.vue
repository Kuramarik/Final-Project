<script>
import Quest from './Mission.vue'
import {charInfo} from './charInfo.js'

//Fix Shaan's error

export default{
    components:{
        Mission:Quest
    },
    data(){
        return{
            missionList:[
                {
                    name:"mission A",
                    length:15
                },
                {
                    name:"mission B",
                    length:25
                },
                {
                    name:"mission C",
                    length:30
                }
            ],
            selectedMission:null,
            charInfo
        }
    },
    methods:{
        selectMission(mission){
            this.selectedMission=mission
            charInfo.finished=false
            charInfo.progress = 0
            this.$refs.missionData.monstersDefeated=[]
            charInfo.levelGained=0
            charInfo.newGear=[]
            this.$refs.missionData.inProgress=false
        },
        updateList(extract){
            this.missionList=this.missionList.filter(other=>other.name!=extract.name
            )
        }
    }
}
</script>

<template>
    <div class="flex">
        <div class="border">
            <div v-for="mission in this.missionList" class="border">
                <strong>{{ mission.name }}</strong>
                <p>length: {{ mission.length }}</p>
                <button @click="selectMission(mission)">Select</button>
            </div>
        </div>
        <div class="border">
            <Mission v-if="this.selectedMission" ref="missionData" :self="this.selectedMission" @mission-started="updateList" />
        </div>
    </div>
</template>

<style>
</style>