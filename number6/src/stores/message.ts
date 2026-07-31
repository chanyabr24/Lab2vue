import { defineStore } from 'pinia'

export const useMessageStore = defineStore('message', {
  state: () => ({
    message: ''
  }),

  actions: {
    updateMessage(message: string) {
      this.message = message
    },

    resetMessage() {
      this.message = ''
    }
  }
})