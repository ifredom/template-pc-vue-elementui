<template>
  <div v-if="item.children" class="menu-wrapper">
      
    <template v-if="hasOneShowingChild(item)">
      <router-link  :to="onlyOneChild.meta.path">
        <el-menu-item :index="onlyOneChild.meta.id" :class="{'submenu-title-noDropdown':!isNest}">
          <i class="fontcontainer">
              <span class="iconfont" v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :class="onlyOneChild.meta.icon"></span>
          </i>
          <span v-if="onlyOneChild.meta&&onlyOneChild.meta.title" slot="title">{{onlyOneChild.meta.title}}</span>
        </el-menu-item>
        zheli
      </router-link>
    </template>

    <el-submenu v-else :index="item.meta.title||item.meta.path">
        <template slot="title">
            <!-- <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon> -->
            <i class="fontcontainer">
                <span class="iconfont" v-if="item.meta&&item.meta.icon" :class="item.meta.icon"></span>
            </i>
            <!-- <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span> -->
            <span>{{item.meta.title}}</span>
        </template>

        <template v-for="childItem in item.children">
            <sidebar-item :is-nest="true" class="nest-menu" v-if="childItem.children&&childItem.children.length>0" :item="childItem" :key="childItem.meta.id" :base-path="childItem.meta.path"></sidebar-item>

            <router-link v-else :to="childItem.meta.path" :key="childItem.meta.title">
            <el-menu-item :index="childItem.meta.id">
                <i class="fontcontainer">
                    <span class="iconfont" v-if="childItem.meta&&childItem.meta.icon" :class="childItem.meta.icon"></span>
                </i>
                <span v-if="childItem.meta&&childItem.meta.title" slot="title">{{childItem.meta.title}}</span>
            </el-menu-item>
            </router-link>
        </template>
    </el-submenu>

  </div>
</template>

<script>
import path from "path";

export default {
    name: "SidebarItem",
    props: {
        // route配置json
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            default: false
        },
        basePath: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            onlyOneChild: null
        };
    },
    methods: {
        hasOneShowingChild(item) {
            
            // 如果只有一个显示子元素，则使用
            if (item.children.length === 0) {
                
                this.onlyOneChild = item;
                console.log(this.onlyOneChild);
                return true;
            }
            return false;
        },
        resolvePath(...paths) {
            // console.log(this.basePath);
            // console.log(paths);
            
            return path.resolve(this.basePath, ...paths);
        }
    }
};
</script>

<style scoped>
.fontcontainer{
    padding-right:10px;
}
</style>

