<template>
    <vMain class="settings">
        <div class="settings__header">
            <pageTitle> {{ $route.name }} </pageTitle>
            <settingsFilter />
        </div>
        <div class="settings__main">
            <settingsModules />
        </div>
    </vMain>
</template>

<script setup>
    import './settings.scss';
    import vMain from'@/components/Main/vMain.vue'
    import pageTitle from '@/components/PageTitle/PageTitle.vue'
    import settingsFilter from './SettingsFilter/SettingsFilter.vue'
    import settingsModules from './settingsModules/settingsModules.vue'
</script>
