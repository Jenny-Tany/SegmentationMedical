<script setup>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Show from './components/Show.vue'
import {RouterView} from "vue-router"
import Home from './views/Home.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside><Aside /></el-aside>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  * {
    margin: 0 !important;
    padding: 0 !important;
  }

  .el-aside {
    width: 200px;
  }
</style>
