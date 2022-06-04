<template>
  <div class="main-view space-y-2 p-2">
    <header class="mx-auto max-w-4xl pt-2">
      <header-general></header-general>
    </header>
    <main class="mx-auto max-w-4xl min-h-screen">
     <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-4xl py-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";

export default {
  components: {
    "header-general":header,
    "footer-general":footer
  }
}
</script>


<style lang="less">
#app {
  background: linear-gradient(-45deg, #ee7752, #23d5ab);
}
</style>