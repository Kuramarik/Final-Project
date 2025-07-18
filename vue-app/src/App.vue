<script>
import ExampleComponent from './components/ExampleComponent.vue'
import Character from './components/Character.vue'
import Mission from './components/Mission.vue'
import MissionSelect from './components/MissionSelect.vue'
import Results from './components/Results.vue'

export default {
  components: {
    ExampleComponent,
    Character,
    Mission,
    MissionSelect,
    Results
  },
  data() {
    return {
      heading: "",
      content: "... but the first step is not always simple."
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
    this.heading = "Every journey is simply a series of steps..."
  }
}
</script>

<template>
  <header>
    <h1>
      {{ heading }}
    </h1>
  </header>

  <main>
    <ExampleComponent :paragraph="content"/>
    <Character />
    <MissionSelect />
    <Results />
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
    padding:10px
}

</style>
