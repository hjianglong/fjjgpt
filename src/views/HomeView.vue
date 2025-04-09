<template>
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
</template>

<style scoped>
.container {
    padding: 20px;
    overflow-y: auto; 
}

.card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
}
</style>