<script>
    /*data {
    missionList objects
    selectedMission (starts null)
    }
    methods:{
    
    }*/
export default{
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
    <div>
        <div>
            <div v-for="mission in this.missionList">
                <h3>{{ mission.name }}</h3>
                <p>{{ mission.length }}</p>
                <button>Select</button>
            </div>
        </div>
    </div>
    <!-- List of missions, displaying Mission.vue when one is chosen as selected -->
</template>

<style>
    /* use flexbox to put the list on the left and mission on the right */
</style>