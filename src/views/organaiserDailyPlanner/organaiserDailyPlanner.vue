<template>
    <vMain class="daily-planner">
        <div class="daily-planner__header">
            <pageTitle> {{ $route.name }} </pageTitle>
            <vButton>
                <template v-slot:title>
                    Управление
                </template>
            </vButton>
        </div>
        <div class="daily-planner__main">
            <dailyPlannerTable />
            <dailyPlannerDiagram />
            <dailyPlannerLegend />
        </div>
    </vMain>
</template>

<script setup>
    import './organaiserDailyPlanner.scss';
    
    import vMain from '@/components/Main/vMain.vue';
    import pageTitle from '@/components/PageTitle/PageTitle.vue';
    import vButton from '@/components/Button/Button.vue'

    import dailyPlannerDiagram from './dailyPlannerDiagram/dailyPlannerDiagram.vue';
    import dailyPlannerTable from './dailyPlannerTable/dailyPlannerTable.vue';
    import dailyPlannerLegend from './dailyPlannerLegend/dailyPlannerLegend.vue';

</script>