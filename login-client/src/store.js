import { ref } from 'vue'

export const isLogin = ref(!!sessionStorage.getItem('access_token'))

export const setLoginState = (state) => {
  isLogin.value = state
}
