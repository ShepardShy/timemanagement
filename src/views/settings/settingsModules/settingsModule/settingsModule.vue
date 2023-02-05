<template>
    <div class="settings__module module">
        <div class="module__content">
            <figure class='ibg module__img'>
                <img :src='props.module.img' alt=''>
            </figure>
            <div class="module__settings"></div>
            <div class="module__info">
                <div class="module__title"> {{ props.module.title }} </div>
                <div class="module__status" :class="props.module.status ? 'module__status_on' : 'module__status_off'"> 
                    Состояние <span> {{ props.module.status ? 'Включено' : 'Выключено' }} </span> 
                </div>
                <div class="module__toggle">
                    <input type="checkbox" :id="`module-toggle_${props.module.id}`" :value="props.module.id"/>
                    <label class="moduleToggle" :for="`module-toggle_${props.module.id}`" @click="moduleStore.toggleStatus(props.module.id)"></label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import './settingsModule.scss';
    import { useModuleStore } from '@/stores/moduleStore';
    const moduleStore = useModuleStore()

    const props = defineProps({
        module: {
            type: Object,
            default: {
                id: -1,
                title: '',
                img: '/vite.svg',
                status: false
            }
        }
    })
</script>