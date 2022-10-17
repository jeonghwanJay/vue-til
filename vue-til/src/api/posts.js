// 학습 노트 CRUD 관련 함수
import { posts } from "@/api/index"

function fetchPosts() {
	return posts.get()
}

function createPost(postData) {
	return posts.post("/", postData)
}

function deletePost(postId) {
	return posts.delete(postId)
}
export { fetchPosts, createPost, deletePost }
