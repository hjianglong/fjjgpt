<template>
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
        <a :class="{ active: activeIndex === 4 }" @click.prevent="goToAboutPage">
            <i class="fa-solid fa-user"></i>
            我的
        </a>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// 定义当前激活的导航索引
const activeIndex = ref(0);
const router = useRouter();

// 定义设置激活索引的方法
const setActiveIndex = (index) => {
    activeIndex.value = index;
    // 这里可以添加切换页面内容的逻辑
    // 例如根据点击的链接加载不同的内容
    if (index === 0) {
        router.push('/');
    }
};

// 定义跳转到关于页面的方法
const goToAboutPage = () => {
    activeIndex.value = 4;
    router.push('/about');
};
</script>

<style scoped>
.bottom-nav {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    color: white;
    padding: 10px 0;
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

.bottom-nav a.active {
    color: #007BFF;
}
</style>