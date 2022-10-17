import vue from "vue"
import LoginForm from "@/components/LoginForm.vue"

describe("컴포넌트가 마운팅되면 username이 존재하고 초기값 설정이 되어있어야 한다.", () => {
	test("LoginForm.vue", () => {
		const instance = new vue(LoginForm).$mount()
		expect(instance.username).toBe("")
	})
})
