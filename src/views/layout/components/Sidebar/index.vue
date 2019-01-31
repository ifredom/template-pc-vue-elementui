<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item
        v-for="route in permission_routers"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
      {{ permission_routers }}
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import sidebarRouterData from './sidebar.json'

export default {
  components: {
    SidebarItem
  },
  data () {
    return {
      navs: [],
      touchI: 0
    }
  },
  computed: {
    ...mapGetters(['permission_routers', 'sidebar']),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  mounted () {
    console.log(this.permission_routers)

    this.navs = sidebarRouterData.data.childList
  }
}
</script>
