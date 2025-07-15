<script>
import ExampleComponent from './components/ExampleComponent.vue'

export default {
  components: {
    ExampleComponent
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
  </main>

  <footer>
  </footer>
</template>

<style scoped>
header {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

h1 {
  color: #393939;
}
</style>
