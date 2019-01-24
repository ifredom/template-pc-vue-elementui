<template>
  <div class="layout-wrapper">
    <img src="../../assets/logo.png">

    <div id="nav">
      <h2>Layout</h2>
      <router-link to="/login">Go to login</router-link>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js + Elementui App" />
    <PlatForm></PlatForm>
  </div>
</template>

<script>
import PlatForm from "./PlatForm";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  name: "Layout",
  components: {
    PlatForm,
    HelloWorld
  }
};
</script>

<style  lang="stylus" scoped>
@import '~@/style/mixin.styl';

.layout-wrapper {
  height: 100%;
  width: 100%;
  background: pink;
}

</style>
