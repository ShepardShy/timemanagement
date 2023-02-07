<template>
    <TableBody>
            <dailyPlannerTableRow 
                v-for="row in dailyPlanner"
                :row="row"
            />
    </TableBody>
</template>

<script setup>
    import './dailyPlannerTableBody.scss';
    
    import TableBody from '@/components/Table/TableBody/TableBody.vue';

    import dailyPlannerTableRow from './dailyPlannerTableRow/dailyPlannerTableRow.vue';

    import { useDailyPlannerStore } from '@/stores/dailyPlannerStore'
    import { storeToRefs } from 'Pinia'
    let { dailyPlanner } = storeToRefs(useDailyPlannerStore())
    
</script>
