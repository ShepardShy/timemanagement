import { defineStore } from 'Pinia'
import wheel from '@/data/wheel.json'

export const useWheelStore = defineStore('wheelStore', {
    state: () => {
        return {
            wheel,
            activeSection: wheel[0]
        }
    }
})
