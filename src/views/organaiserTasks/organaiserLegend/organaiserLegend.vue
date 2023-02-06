<template>
    <vSection class="tasks__legend">
        <template v-slot:title>
            Легенда
        </template>
        <template v-slot:body>
            <vLegend />
        </template>
    </vSection>
</template>

<script setup>
    import './organaiserLegend.scss';

    import vLegend from '@/components/Legend/Legend.vue';
    import vSection from '@/components/Section/Section.vue';
</script>