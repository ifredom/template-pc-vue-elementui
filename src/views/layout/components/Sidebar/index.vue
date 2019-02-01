<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      
      <sidebar-item v-for="route in routes" :key="route.meta.id" :item="route" :base-path="route.meta.url"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import sidebarData from './sidebarData'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      /**
       * sidebarData 菜单根据接口返回数据显示。此处使用的模拟数据
       * this.$router.options.routes 菜单根据在router.js中的数据显示
       */
      return sidebarData  // 使用接口返回的数据，前端改造后的路由
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
