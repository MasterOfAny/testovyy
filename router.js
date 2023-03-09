const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('~/views/index/index')
    },
    {
        path: '/second',
        name: 'second',
        component: () => import('~/views/second/index')
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router