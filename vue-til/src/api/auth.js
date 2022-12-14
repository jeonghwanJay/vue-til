// 로그인, 로그아웃, 회원가입
import { instance } from "@/api/index"

// 회원가입 API
function registerUser(userData) {
	return instance.post("signup", userData)
}

// 로그인 API
function loginUser(userData) {
	return instance.post("login", userData)
}

export { registerUser, loginUser }
