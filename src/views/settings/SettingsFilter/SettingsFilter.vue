<template>
    <div class="settings__filter filter">
        <div  :class="{'filter__item': true, 'filter__item_active': moduleStore.filter == 'all'}" @click="moduleStore.filterModules('all')">
            Все
        </div>
        <div :class="{'filter__item': true, 'filter__item_active': moduleStore.filter == 'enabled'}" @click="moduleStore.filterModules('enabled')">
            Активные
        </div>
        <div :class="{'filter__item': true, 'filter__item_active': moduleStore.filter == 'disabled'}" @click="moduleStore.filterModules('disabled')">
            Выключенные
        </div>
    </div>    
</template>

<script setup>
    import './SettingsFilter.scss';
    
    import { useModuleStore } from '@/stores/moduleStore';
    const moduleStore = useModuleStore()
</script>
