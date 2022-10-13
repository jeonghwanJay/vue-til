<template>
	<form v-on:submit.prevent="submitForm">
		<div>
			<label for="username">id:</label>
			<input id="username" type="text" />
		</div>
		<div>
			<label for="password">pw:</label>
			<input id="password" type="new-password" />
		</div>
		<button type="submit">로그인</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: "",
		}
	},
	methods: {
		submitForm() {},
	},
}
</script>

<style></style>
