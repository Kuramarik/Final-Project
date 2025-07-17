import {reactive} from 'vue'

export const charInfo=reactive({
    level:10,
    allocLevel:10,
    levelGained:0,
    baseStats:{
        attack:1,
        magic:1,
        defense:1,
        hp:10
    },
    inventory:[],
    newGear:[],
    finished:false
})