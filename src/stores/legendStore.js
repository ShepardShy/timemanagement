import { defineStore } from "Pinia";
import legend from '@/data/legend.json'


export const useLegendStore = defineStore('legendStore', {
    state: () => {
        return {
            legend
        }
    }
})