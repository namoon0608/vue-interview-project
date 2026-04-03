<template>
  <header v-if="authStore.isAuthenticated">
    <main
      class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
    >
      <nav>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </main>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>
