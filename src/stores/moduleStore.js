import { defineStore } from 'Pinia'
import modules from '@/data/modules.json'

export const useModuleStore = defineStore('moduleStore', {
    // states
    state: () =>  {
        return {
            modules,
            filter: 'all'
        }
    }, 
    
    // actions
    actions: {
        // Изменение статуса
        toggleStatus(id) {
            this.modules[0].links[id].status = !this.modules[0].links[id].status
        },

        // ФИльтрация модулей по статусу
        filterModules(type) {
            switch (type) {
                case 'enabled':
                    this.filter = 'enabled'
                    break;
                case 'disabled':
                    this.filter = 'disabled'
                    break;
                default:
                    this.filter = 'all'
                    break;
            }
        }
    }

    // getters
})