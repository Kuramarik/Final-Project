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
        {
            "name":"bonemail",
            "type":"armor",
            "effect":3
        },
        {
            "name":"stone slate",
            "type":"armor",
            "effect":5
        },
    ],
    newGear:[],
    currentMonster:null,
    finished:false
})