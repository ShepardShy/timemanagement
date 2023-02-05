<template>
    <aside>
        <div class="aside__content">
            <figure class='ibg logo'>
                <img src='/vite.svg' alt=''>
            </figure>

            <menuGroup 
                v-for="group in modules"
                :group="group"
            />
        </div>

        <menuProfile />
    </aside>
</template>

<script setup>
    import './vMenu.scss';
    import menuGroup from './MenuGroup/MenuGroup.vue'
    import menuProfile from './MenuProfile/MenuProfile.vue'

    import { useModuleStore } from '@/stores/moduleStore';
    import { storeToRefs } from 'Pinia'
    const { modules } = storeToRefs(useModuleStore())

</script>
