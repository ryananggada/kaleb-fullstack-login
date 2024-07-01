<script setup>
import { ref, onMounted, watch } from 'vue'
import { isLogin } from '../store'

const profileName = ref('')

const fetchProfile = async () => {
  if (sessionStorage.getItem('access_token')) {
    await fetch('http://localhost:3000/auth/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('access_token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        profileName.value = data.name
      })
      .catch((err) => alert(err))
  } else {
    profileName.value = ''
  }
}

onMounted(fetchProfile)

watch(isLogin, fetchProfile)
</script>

<template>
  <div class="flex justify-center">
    <p v-if="profileName">Welcome, {{ profileName }}</p>
    <p v-else>You are not logged in yet</p>
  </div>
</template>
