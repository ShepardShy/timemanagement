<template>
    <vSection class="daily-planner__body">
        <template v-slot:body>
            <vTable class="daily-planner__table">
                <template v-slot:header>
                    <dailyPlannerTableHeader />
                </template>
                <template v-slot:body>
                    <dailyPlannerTableBody />
                </template>
            </vTable>
        </template>
    </vSection>
</template>

<script setup>
    import './dailyPlannerTable.scss';

    import vSection from '@/components/Section/Section.vue';
    import vTable from '@/components/Table/Table.vue'

    import dailyPlannerTableHeader from './dailyPlannerTableHeader/dailyPlannerTableHeader.vue';
    import dailyPlannerTableBody from './dailyPlannerTableBody/dailyPlannerTableBody.vue';
</script>