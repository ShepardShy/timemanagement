import { defineStore } from 'Pinia'
import codeList from '@/data/code.json'

export const useCompilatorStore = defineStore('compilatorStore', {
    state: () => {
        return {
            codeList,
            activeCode: {}
        }
    },

    actions: {
        inputCode(code) {
            this.activeCode = code
        }
    }
})