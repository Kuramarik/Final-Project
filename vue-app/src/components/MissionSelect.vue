<script>
import Mission from './Mission.vue'
    /*data {
    missionList objects
    selectedMission (starts null)
    }
    methods:{
    
    }*/

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
    <!-- List of missions, displaying Mission.vue when one is chosen as selected -->
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
    /* use flexbox to put the list on the left and mission on the right */
</style>