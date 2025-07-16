<script>
import Mission from './Mission.vue'
export default{
    components:{
        Mission
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
                    length:50
                },
                {
                    name:"mission C",
                    length:100
                }
            ],
            selectedMission:null
        }
    },
    methods:{
        selectMission(mission){
            console.log(mission)
            this.selectedMission=mission
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
            <Mission v-if="this.selectedMission" :self="this.selectedMission" />
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