<template>
    <!-- 页面头部 -->
    <header>
        <h1>福建水利监管工作平台</h1>
    </header>
    <!-- 内容容器 -->
    <div class="container">
        <!-- 卡片内容 -->
        <div class="card">
            <h2>监管工作平台</h2>
            <p>这是一个简单监管工作平台。</p>
            <a href="#" class="btn">了解更多</a>
        </div>
        <div class="card">
            <h2>稽查填报</h2>
            <ul>
                <li>稽查填报</li>
                <li>稽查填报</li>
                <li>稽查填报</li>
            </ul>
            <a href="#" class="btn">查看详情</a>
        </div>
        <div class="card">
            <h2>安标评审</h2>
            <ul>
                <li>安标评审</li>
                <li>安标评审</li>
                <li>安标评审</li>
            </ul>
            <a href="#" class="btn">查看详情</a>
        </div>
    </div>
    <!-- 底部任务栏 -->
    <div class="bottom-nav">
        <a :class="{ active: activeIndex === 0 }" @click.prevent="setActiveIndex(0)">
            <i class="fa-solid fa-house"></i>
            首页
        </a>
        <a :class="{ active: activeIndex === 1 }" @click.prevent="setActiveIndex(1)">
            <i class="fa-solid fa-image"></i>
            一张图
        </a>
        <a :class="{ active: activeIndex === 2 }" @click.prevent="setActiveIndex(2)">
            <i class="fa-solid fa-binoculars"></i>
            督查
        </a>
        <a :class="{ active: activeIndex === 3 }" @click.prevent="setActiveIndex(3)">
            <i class="fa-solid fa-question"></i>
            问题
        </a>
        <a :class="{ active: activeIndex === 4 }" @click.prevent="setActiveIndex(4)">
            <i class="fa-solid fa-user"></i>
            我的
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 定义当前激活的导航索引
const activeIndex = ref(0);

// 定义设置激活索引的方法
const setActiveIndex = (index) => {
    activeIndex.value = index;
    // 这里可以添加切换页面内容的逻辑
    // 例如根据点击的链接加载不同的内容
};
</script>

<style scoped>
/* 全局样式 */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    /* 为底部任务栏预留空间 */
    padding-bottom: 60px; 
    position: relative;
    min-height: 100vh;
}

/* 头部样式 */
header {
    background-color: #007BFF;
    color: white;
    text-align: center;
    padding: 20px;
}

/* 内容容器样式 */
.container {
    padding: 20px;
    /* 允许内容区域滚动 */
    overflow-y: auto; 
}

/* 卡片样式 */
.card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
}

/* 按钮样式 */
.btn {
    display: inline-block;
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
}

/* 底部任务栏样式 */
.bottom-nav {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    color: white;
    padding: 10px 0;
    /* 固定底部位置 */
    position: fixed; 
    bottom: 0;
    left: 0;
    right: 0;
}

.bottom-nav a {
    color: white;
    text-decoration: none;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bottom-nav a i {
    font-size: 24px;
    margin-bottom: 5px;
}

/* 激活状态样式 */
.bottom-nav a.active {
    color: #007BFF;
}
</style>