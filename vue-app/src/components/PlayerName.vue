<script>
import { charInfo } from './charInfo.js';

// charInfo name
// Set charInfo name by form submit
export default{
    data() {
        return {
            charInfo,
            entered:"",
        }
    },
    methods: {
        setName(given){
            console.log(given)
            charInfo.name=given
        }

    }
}
</script>

<template>
<!-- v-if charInfo.name is null, display name submission form
 v-else charInfo.name -->
 <form v-if="charInfo.name==null"><label>Enter your name:<input type="text" :value="entered" @input="e=>{entered=e.target.value}" /></label>
 <button @click.prevent="()=>{
    setName(entered)
 }">Submit name</button></form>
 <h1>{{ charInfo.name }} Quest</h1>
</template>

<style></style>