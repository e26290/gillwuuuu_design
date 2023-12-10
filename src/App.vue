<template>
  <div>
    <header_vue />
    <router-view></router-view>
    <footer_vue />
  </div>
</template>
<script setup>
import header_vue from './components/header.vue';
import footer_vue from './components/footer.vue';
</script>
<script>
export default {
  mounted() {
    this.$router.push('/page1');
  }
};
</script>
<style scoped>
</style>
