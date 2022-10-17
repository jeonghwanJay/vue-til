import VueRouter from "vue-router"
import Vue from "vue"
import store from "@/store/index"

Vue.use(VueRouter)

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			redirect: "/login",
		},
		{
			path: "/login",
			component: () => import("@/views/LoginPage.vue"),
		},
		{
			path: "/signup",
			component: () => import("@/views/SignupPage.vue"),
		},
		{
			path: "/add",
			component: () => import("@/views/PostAddPage.vue"),
			meta: { auth: true },
		},
		{
			path: "/main",
			component: () => import("@/views/MainPage.vue"),
			meta: { auth: true },
		},
		{
			path: "/posts/:id",
			component: () => import("@/views/PostEditPage.vue"),
			meta: { auth: true },
		},
		{
			path: "*",
			component: () => import("@/views/NotFoundPage.vue"),
		},
	],
})
router.beforeEach((to, from, next) => {
	if (to.meta.auth && !store.getters.isLogin) {
		console.log("인증이 필요합니다.")
		next("/login")
		return
	}
	next()
})
export default router
