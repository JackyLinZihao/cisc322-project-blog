import { createRouter, createWebHistory } from 'vue-router'
import HomePageComponent from '../views/homepage.vue'

const routes = [
    {
        path: '/',            // 根路径，表示主页
        name: 'Home',
        component: HomePageComponent,  // 指定页面组件
    },
    // 如果有其他页面，也可以在此添加其他路由
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),  // 使用 HTML5 的历史模式
    routes,  // 路由表
})

export default router
