<script setup>
import { isLogin, setLoginState } from '../store'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  sessionStorage.clear()
  setLoginState(false)
  router.push('/')
}
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-4">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div class="font-bold">
          <RouterLink to="/">Login App</RouterLink>
        </div>
        <div v-if="isLogin" class="flex gap-6">
          <button @click="logout" class="hover:text-blue-500">Logout</button>
        </div>
        <div v-else class="flex gap-6">
          <RouterLink to="/login" class="hover:text-blue-500">Login</RouterLink>
          <RouterLink to="/register" class="hover:text-blue-500">Register</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
