<template>
    <div class="website-showcase">
      <h1>Website Showcase</h1>
      <div class="websites">
        <div class="website" v-for="website in websites" :key="website.id">
          <h2>{{ website.name }}</h2>
          <p>{{ website.description }}</p>
          <a :href="website.url" target="_blank">Visit</a>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'AppIndex',
    data() {
      return {
        websites: [
          { id: 1, name: 'Website 1', description: 'Description for website 1', url: 'https://website1.com' },
          { id: 2, name: 'Website 2', description: 'Description for website 2', url: 'https://website2.com' },
          { id: 3, name: 'Website 3', description: 'Description for website 3', url: 'https://website3.com' },
          // Add more websites as needed
        ]
      }
    }
  })
  </script>
  
  <style scoped>
  .website-showcase {
    text-align: center;
  }
  
  .websites {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .website {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    padding: 20px;
    width: 200px;
  }
  
  .website h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .website p {
    font-size: 1em;
    margin-bottom: 10px;
  }
  
  .website a {
    color: #42b983;
    text-decoration: none;
    font-weight: bold;
  }
  </style>