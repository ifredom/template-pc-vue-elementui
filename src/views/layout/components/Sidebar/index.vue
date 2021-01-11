<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.meta.path"
        :item="route"
        :base-path="route.meta.path"
      ></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import sidebarData from "@/router/sidebarData";

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(["sidebar"]),
    /**
     * !可选参数 [sidebarData|]
     * ?sidebarData  菜单根据接口返回数据显示。此处使用的模拟Mock数据
     */
    routes() {
      return sidebarData;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
