import { defineStore } from 'Pinia'
import tasks from '@/data/tasks.json'

export const useTaskStore = defineStore('tasksStore', {
    state: () => {
        return {
            tasks
        }
    }
})