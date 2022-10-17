// 학습 노트 CRUD 관련 함수
import { posts } from "@/api/index"

// 학습 노트 목록을 조회하는 API
function fetchPosts() {
	return posts.get()
}

// 특정 학습 노트를 조회하는 API
function fecthPost(postId) {
	return posts.get(postId)
}

// 학습 노트를 생성하는 API
function createPost(postData) {
	return posts.post("/", postData)
}

// 특정 학습 노트를 수정하는 API
function editPost(id, postData) {
	return posts.put(id, postData)
}

// 학습 노트를 삭제하는 API
function deletePost(postId) {
	return posts.delete(postId)
}
export { fetchPosts, fecthPost, createPost, editPost, deletePost }
