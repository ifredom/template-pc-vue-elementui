<template>
  <div class="layout-wrapper">
    <HelloWorld msg="Welcome to Your Vue.js + Elementui App" />
    <img src="../../assets/logo.png">


    <PlatForm></PlatForm>

    <div id="nav" style="margin-top:20px;">
      <router-link to="/login">前往登陆页面</router-link>
    </div>

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

<style lang="stylus" scoped>
  @import '~@/style/mixin.styl';

  .layout-wrapper {
    height: 100%;
    width: 100%;
    background: pink;
  }
</style>