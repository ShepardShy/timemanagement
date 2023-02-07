<template>
    <vSection class="daily-planner__legend">
        <template v-slot:title>
            Легенда
        </template>
        <template v-slot:body>
            <vLegend />
        </template>
    </vSection>
</template>

<script setup>
    import './dailyPlannerLegend.scss';

    import vLegend from '@/components/Legend/Legend.vue';
    import vSection from '@/components/Section/Section.vue';
</script>