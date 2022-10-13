<template>
	<form v-on:submit.prevent="submitForm">
		<div>
			<label for="username">id:</label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw:</label>
			<input id="password" type="password" v-model="password" />
		</div>
		<button type="submit" v-bind:disabled="!isUsernameValid || !password">
			로그인
		</button>
		<p>{{ logmessage }}</p>
	</form>
</template>

<script>
import { loginUser } from "@/api/index"
import { validateEmail } from "@/utils/validation"
export default {
	data() {
		return {
			username: "",
			password: "",
			logmessage: "",
		}
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username)
		},
	},
	methods: {
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password,
				}
				const { data } = await loginUser(userData)
				this.logmessage = `${data.user.username}님 환영합니다.`
				// this.initForm()
			} catch (error) {
				this.logmessage = error.response.data
			} finally {
				this.initForm()
			}
		},
		initForm() {
			;(this.username = ""), (this.password = "")
		},
	},
}
</script>

<style></style>
