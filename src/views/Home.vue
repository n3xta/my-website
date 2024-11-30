<template>
  <div>
    <h1>Hi there it's N3XTA</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/sketch">Sketch</router-link> |
      <router-link to="/app">App</router-link> |
      <router-link to="/shader">Shader</router-link> |
      <router-link to="/nyu-ima">Edu</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
}
</script>

<style scoped>
nav {
  padding: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>