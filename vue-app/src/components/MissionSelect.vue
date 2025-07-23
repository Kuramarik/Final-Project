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
            selectedMission:null,
            charInfo,
            isDisabled:false
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
            charInfo.missionList=charInfo.missionList.filter(other=>other.name!=extract.name
            )
            this.isDisabled=true
        }
    },
    watch: {
        'charInfo.finished'(newValue){
            if(newValue){
                this.isDisabled=false
            }
        }
    }
}
</script>

<template>
    <div class="flex">
        <div class="border">
            <div v-for="mission in charInfo.missionList" class="border">
                <strong>{{ mission.name }}</strong>
                <p>length: {{ mission.length }}</p>
                <button @click="selectMission(mission)" :disabled="isDisabled">Select</button>
            </div>
        </div>
        <div class="border">
            <Mission v-if="this.selectedMission" ref="missionData" :self="this.selectedMission" @mission-started="updateList" />
        </div>
    </div>
</template>

<style>
</style>