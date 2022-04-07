import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from 'vue-router'

const routes: Array<RouteRecordRaw> = []
const files = import.meta.globEager('./pages/**/*.route.ts')

for (const key in files) {
	routes.push(files[key].default)
}

const router: Router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
