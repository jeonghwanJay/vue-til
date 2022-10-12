<template>
	<div>
		<form v-on:submit.prevent="submitForm">
			<div>
				<label for="username">id:</label>
				<input id="username" type="text" v-model="username" />
			</div>
			<div>
				<label for="password">pw:</label>
				<input id="password" type="current-password" v-model="password" />
			</div>
			<div>
				<label for="nickname">nickname:</label>
				<input id="nickname" type="text" v-model="nickname" />
			</div>
			<button type="submit">회원가입</button>
		</form>
	</div>
</template>

<script>
import { registerUser } from "@/api/index"
export default {
	data() {
		return {
			username: "",
			password: "",
			nickname: "",
		}
	},
	methods: {
		submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			}
			registerUser(userData)
		},
	},
}
</script>

<style></style>
