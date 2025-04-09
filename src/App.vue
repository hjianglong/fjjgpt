<template>
  <div>
      <!-- 引入头部组件 -->
      <HeaderComponent />
      <!-- 路由出口 -->
      <router-view></router-view>
      <!-- 引入底部导航组件 -->
      <BottomNavComponent />
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import BottomNavComponent from './components/BottomNavComponent.vue';
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  padding-bottom: 60px; 
  position: relative;
  min-height: 100vh;
}
</style>