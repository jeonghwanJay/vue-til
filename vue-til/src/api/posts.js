// 학습 노트 CRUD 관련 함수
import { posts } from "@/api/index"

function fetchPosts() {
	return posts.get("posts")
}

function createPost(postData) {
	return posts.post("posts", postData)
}

export { fetchPosts, createPost }
