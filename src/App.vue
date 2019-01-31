<template>
  <main id="app">
    <div v-if="$route.meta.requireAuth" class="app-wrapper">
      <router-view />
    </div>
    <div v-else class="app-wrapper">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;

  .app-wrapper {
    height: inherit;
    width: inherit;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
