<template>
  <div class="construction">
    <h1>🚧 Under 🚧<br>Construction </h1>
    <p>Wrong time right place!</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UnderConstruction',
};
</script>

<style scoped>
.construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40ch;
  text-align: Center;
}

h1 {
  font-size: 8vw;
  margin-bottom: 0rem;
}

p {
  font-size: 4vw;
  font-weight: 300;
  font-style: italic;
}
</style>
