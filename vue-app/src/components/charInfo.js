import {reactive} from 'vue'

export const charInfo=reactive({
    level:10,
    allocLevel:10,
    levelGained:0,
    baseStats:{
        attack:1,
        defense:1,
        hp:10
    },
    totalStats:{
        attack:1,
        defense:1,
        hp:10
    },
    inventory:[
    ],
    newGear:[],
    currentMonster:null,
    progress:0,
    finished:false,
    name:null,
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
})