<template>
<<<<<<< HEAD
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
=======
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import HelloWorld from './views/AdminPage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
>>>>>>> c67f431a476eb0e3cbc3c2abdf3e62ee084bbcd5
}
</style>