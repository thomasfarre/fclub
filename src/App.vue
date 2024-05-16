<script setup>

</script>

<template>
  <div id="app" class="max-w-4xl mx-auto py-6">
    <header class="flex space-x-12 items-center">
      <div >
        <img class="w-28 h-14" src="https://v-images.cdnsw.com/Root/durlh/logoflcub2.png?s=YqFAknhl" alt="">
      </div>
      <nav class="flex items-center space-x-6">
        <a>Le club</a>
        <a>Activités</a>
        <a>Activités Enfants</a>
        <a>Actu/Vie du club</a>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <!-- <footer>
      footer
    </footer> -->
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
