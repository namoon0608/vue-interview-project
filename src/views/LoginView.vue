<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useAuthStore } from '@/stores/auth'
const router = useRouter()

const authStore = useAuthStore()

// 表單資料綁定
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

// 登入 Function
const handleLogin = async () => {
  try {
    await authStore.login({
      email: email.value,
      password: password.value,
    })
    router.push('/dashboard')
  } catch (error) {
    alert('登入失敗，請檢查帳號密碼')
  }
}
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4"
  >
    <Card class="w-full max-w-md">
      <CardHeader class="flex flex-col items-center text-center mb-8">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-log-in w-8 h-8 text-white"
            aria-hidden="true"
          >
            <path d="m10 17 5-5-5-5"></path>
            <path d="M15 12H3"></path>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          </svg>
        </div>
        <CardTitle class="text-gray-900 mb-2">歡迎回來</CardTitle>
        <CardDescription class="text-gray-600">請登入您的帳號以繼續</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div class="grid w-full items-center gap-4">
            <div class="flex flex-col space-y-1.5">
              <Label for="email" class="block text-gray-700 mb-2">電子郵件</Label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-mail h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </div>
                <Input
                  class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  placeholder="your@example.com"
                />
              </div>
            </div>
            <div class="flex flex-col space-y-1.5">
              <Label for="password">密碼</Label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-lock h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <Input
                  v-model="password"
                  id="password"
                  type="password"
                  class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  required
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div class="flex justify-between items-center">
              <div class="flex items-center gap-3">
                <Checkbox
                  id="terms"
                  class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <Label for="terms" class="text-gray-700">記住我</Label>
              </div>
              <a href="#" class="text-indigo-600 hover:text-indigo-700">忘記密碼？</a>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex flex-col">
        <Button
          type="submit"
          :disabled="authStore.isLoading"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          :size="'lg'"
          @click="handleLogin"
        >
          <span v-if="authStore.isLoading">登入中...</span>
          <template v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-log-in w-5 h-5"
              aria-hidden="true"
            >
              <path d="m10 17 5-5-5-5"></path>
              <path d="M15 12H3"></path>
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            </svg>
            登入
          </template>
        </Button>
        <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200 w-full">
          <p class="text-blue-800 text-center">💡 提示：輸入任意電子郵件和密碼即可登入</p>
        </div>
      </CardFooter>
    </Card>
    <p class="text-center mt-6 text-gray-600">
      還沒有帳號？<a class="text-indigo-600 hover:text-indigo-700" href="#">立即註冊</a>
    </p>
  </main>
</template>
