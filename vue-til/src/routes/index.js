import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: "/login",
			component: () => import("@/views/LoginPage.vue"),
		},
		{
			path: "/signup",
			component: () => import("@/views/SignupPage.vue"),
		},
	],
})
