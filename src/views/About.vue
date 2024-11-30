<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      socialMedia: [
        { name: 'Twitter', url: 'https://twitter.com' },
        { name: 'Facebook', url: 'https://facebook.com' },
        { name: 'Instagram', url: 'https://instagram.com' }
      ]
    };
  }
};
</script>

<style scoped>
.about {
  text-align: center;
}
</style>