<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$router.push('/page1');
  }
};
</script>

<style scoped></style>
