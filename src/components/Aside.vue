<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <RouterLink to="/">
            <span>Navigator One</span>
          </RouterLink>
        </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
      <el-menu-item index="1">
        <el-icon><location /></el-icon>
        <RouterLink to="/">
          <span>主页</span>
        </RouterLink>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <RouterLink to="/show">
          <span>Navigator Two</span>
        </RouterLink>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <RouterLink to="/fileUpload">
          <span>上传文件</span>
        </RouterLink>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import {RouterLink} from "vue-router"
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
  .el-menu {
    height: 88vh;
  }

  .el-menu-item a , .el-sub-menu a{
    text-decoration: none;
    color: #303133;
  }

  .is-active a {
    color: #6bb4ff !important;
  }
</style>
