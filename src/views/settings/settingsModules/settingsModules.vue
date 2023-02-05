<template>
    <div class="settings__modules">
        <settingsModule 
            v-for="module in modules" 
            :module="module" 
        />
    </div>
</template>

<script setup>
    import { watch, ref, onMounted } from 'vue';
    import './settingsModules.scss';
    import settingsModule from './settingsModule/settingsModule.vue'

    import { useModuleStore } from '@/stores/moduleStore';
    const moduleStore = useModuleStore()

    let modules = ref([])

    watch(() => moduleStore.filter, () => {
        switch (moduleStore.filter) {
            case 'enabled':
                modules.value = moduleStore.modules[0].links.filter(item => item.status)
                break;
            case 'disabled':
                modules.value = moduleStore.modules[0].links.filter(item => !item.status)
                break;
            default:
                modules.value = moduleStore.modules[0].links
                break;
        }
    })

    onMounted(() => {
        modules.value = moduleStore.modules[0].links
    })
</script>