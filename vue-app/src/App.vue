<script>
import PlayerName from './components/PlayerName.vue'
import Character from './components/Character.vue'
import Mission from './components/Mission.vue'
import MissionSelect from './components/MissionSelect.vue'
import Results from './components/Results.vue'

export default {
  components: {
    PlayerName,
    Character,
    Mission,
    MissionSelect,
    Results
  },
  data() {
    return {
      reportTo:""
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
    this.reportTo= fetch("https://atdpsites.berkeley.edu/aic/f/tracker/")
    console.log(this.reportTo)
  }
}
</script>

<template>

  <main>
    <PlayerName />
    <Character />
    <MissionSelect />
    <Results />
    <a href="/validate/">validate</a>
    <br>
    <a href="/evaluate/">evaluate</a>
  </main>

  <footer>
  </footer>
</template>

<style>
@scope{
  header {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  h1 {
    color: #393939;
  }
}

main{
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.border, .flex {
    margin:10px
}
.flex{
    display: flex;
    justify-content: space-around;
}
.border{
    border:2px solid black;
    flex-grow: 1;
    padding:10px;
    box-shadow: 8px 4px 4px gray;
    border-radius: 15px
}

.attack{
  color:crimson
}

.defense{
  color:blue
}

.health{
  color:green
}

</style>
