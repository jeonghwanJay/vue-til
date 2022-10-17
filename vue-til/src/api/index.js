import axios from "axios"
import { setInterceptors } from "@/api/common/Interceptors"

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	})
	return setInterceptors(instance)
}
export const instance = createInstance()

function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	})
	return setInterceptors(instance)
}

export const posts = createInstanceWithAuth("posts")
