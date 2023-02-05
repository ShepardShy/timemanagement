<template>
    <div class="legend">
        <LegendItem 
            v-for="item in legend"
            :item="item"
        />
    </div>
</template>

<script setup>
    import './Legend.scss';
    import LegendItem from './LegendItem/LegendItem.vue';

    import { useLegendStore } from '@/stores/LegendStore'
    import { storeToRefs } from 'Pinia'

    const { legend } = storeToRefs(useLegendStore())
    
</script>
