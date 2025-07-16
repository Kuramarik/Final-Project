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
                    length:5
                },
                {
                    name:"mission C",
                    length:6
                }
            ],
            selectedMission:null
        }
    }
}
</script>

<template>
    <div class="flex">
        <div class="border">
            <div v-for="mission in this.missionList" class="border">
                <h3>{{ mission.name }}</h3>
                <p>length: {{ mission.length }}</p>
                <button>Select</button>
            </div>
        </div>
        <div class="border">
            <Mission />
        </div>
    </div>
    <!-- List of missions, displaying Mission.vue when one is chosen as selected -->
</template>

<style>
.border, .flex {
    border:2px solid black;
    margin:2px
}
.flex{
    display: flex;
    justify-content: space-around;
}
.border{
    flex-grow: 1;
}
    /* use flexbox to put the list on the left and mission on the right */
</style>