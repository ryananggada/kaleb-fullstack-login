<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      password: ''
    }
  },
  methods: {
    async handleSubmit() {
      await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.name, username: this.username, password: this.password })
      })
        .then(() => {
          alert('Successfully register account, now you can log in!')
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
        Register
      </h1>
      <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:outline-blue-300 block w-full p-2.5"
            placeholder="Full name"
            v-model="name"
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  </main>
</template>
