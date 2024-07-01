<script>
import { setLoginState } from '../store'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
      })
        .then((res) => res.json())
        .then((data) => {
          setLoginState(true)
          sessionStorage.setItem('access_token', data.access_token)
          alert('Successfully login')
          this.$router.push({ path: '/' })
        })
        .catch((err) => alert(err))
    }
  }
}
</script>

<template>
  <main class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 class="text-center text-2xl font-bold leading-tight tracking-tight text-gray-900">
        Login
      </h1>
      <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900"
            >Username</label
          >
          <input
            type="text"
            name="username"
            id="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:outline-blue-300 block w-full p-2.5"
            placeholder="username"
            v-model="username"
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
            >Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:outline-blue-300 block w-full p-2.5"
            v-model="password"
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login
        </button>
      </form>
    </div>
  </main>
</template>
