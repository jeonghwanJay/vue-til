import { shallowMount } from "@vue/test-utils"
import LoginForm from "./LoginForm.vue"

describe("LoginForm.vue", () => {
	test("로그인 id 형식은 이메일이어야 합니다.", () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: "test12@naver.com",
				}
			},
		})
		const warningText = wrapper.find(".warning")
		expect(warningText.exists()).toBeTruthy()
	})
	test("아이디와 패스워드를 모두 입력해야 로그인이 가능합니다.", () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					username: "",
					password: "",
				}
			},
		})
		const button = wrapper.find("button")
		expect(button.element.disabled).toBeTruthy()
	})
})
