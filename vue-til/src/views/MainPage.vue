<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<LoginSpinner v-if="!isLoading"></LoginSpinner>
			<PostListItem
				v-else
				v-for="postItem in postItems"
				v-bind:key="postItem._id"
				v-bind:postItem="postItem"
				@refresh="fetchData"
			></PostListItem>
		</div>
		<router-link to="/add" class="create-button">
			<i class="ion-md-add"></i>
		</router-link>
	</div>
</template>

<script>
import { fetchPosts } from "@/api/posts"
import PostListItem from "@/components/posts/PostListItem.vue"
import LoginSpinner from "@/components/common/LoginSpinner.vue"
export default {
	components: {
		PostListItem,
		LoginSpinner,
	},
	data() {
		return {
			postItems: [],
			isLoading: false,
		}
	},
	methods: {
		async fetchData() {
			this.isLoading = false
			const { data } = await fetchPosts()
			this.isLoading = true
			// console.log(data.posts)
			this.postItems = data.posts
		},
	},
	created() {
		this.fetchData()
	},
}
</script>

<style></style>
