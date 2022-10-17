import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

export default new VueRouter({
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
		},
		{
			path: "/main",
			component: () => import("@/views/MainPage.vue"),
		},
		{
			path: "*",
			component: () => import("@/views/NotFoundPage.vue"),
		},
	],
})
