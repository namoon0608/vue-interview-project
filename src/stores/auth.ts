import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // 從 localStorage 讀取先前存入的 id
    accountId: localStorage.getItem('accountId') || '',
    isLoading: false,
    userEmail: '',
  }),
  actions: {
    async login(payload: any) {
      this.isLoading = true
      try {
        const INTERVIEWER_NAME = 'MinXuanChiang'

        const response = await axios.post(
          'https://api-frontend-interview-server.metcfire.com.tw/create-account',
          payload,
          {
            headers: {
              interviewername: INTERVIEWER_NAME,
            },
          },
        )

        if (response.data && response.data.account) {
          const id = response.data.account.id
          const email = response.data.account.email

          // 存入 Pinia State
          this.accountId = id
          this.userEmail = email

          // 存入 localStorage 持久化
          localStorage.setItem('accountId', id)

          console.log('ID 儲存成功:', id)
          return true
        }

        return false
      } catch (error) {
        console.error('請求失敗:', error)
        throw error
      } finally {
        this.isLoading = false
      }
    },

    // 登出清除資料
    logout() {
      this.accountId = ''
      this.userEmail = ''
      localStorage.removeItem('accountId')
    },
  },
})
