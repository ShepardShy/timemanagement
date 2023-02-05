import { defineStore } from 'Pinia'
import dailyPlanner from '@/data/dailyPlanner.json'

export const useDailyPlannerStore = defineStore('dailyPlannerStore', {
    state: () => {
        return {
            dailyPlanner
        }
    }
})