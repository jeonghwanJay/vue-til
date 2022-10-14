import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex)

export default new vuex.Store({
	state: {
		username: "",
	},
	getters: {
		isLogin(state) {
			return state.username !== ""
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username
		},
		clearUsername(state) {
			state.username = ""
		},
	},
})
