import { defineStore } from 'Pinia'
import profile from "@/data/profile.json"

export const useProfileStore = defineStore('profileStore', {
    state: () => {
        return {
            profile
        }
    }
})