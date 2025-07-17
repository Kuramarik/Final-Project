<script>
import Quest from './Mission.vue'
import {charInfo} from './charInfo.js'

export default{
    components:{
        Mission:Quest
    },
    data(){
        return{
            missionList:[
                {
                    name:"mission A",
                    length:3
                },
                {
                    name:"mission B",
                    length:5
                },
                {
                    name:"mission C",
                    length:6
                }
            ],
            selectedMission:null,
            charInfo
        }
    },
    methods:{
        selectMission(mission){
            this.selectedMission=mission
            this.$refs.missionData.progress = 0
            this.$refs.missionData.monstersDefeated=[]
            charInfo.levelGained=0
            this.$refs.missionData.inProgress=false
        },
        updateList(extract){
            charInfo.finished=false
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
.border, .flex {
    border:2px solid black;
    margin:10px
}
.flex{
    display: flex;
    justify-content: space-around;
}
.border{
    flex-grow: 1;
    padding:10px
}
</style>