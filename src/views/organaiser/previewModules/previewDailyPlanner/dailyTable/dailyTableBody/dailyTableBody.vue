<template>
    <TableBody>
        <template v-for="item in dailyPlanner">
            <TableRow>
                <TableItem 
                    :text="''"
                    :class="`table__item_${item.type}`"
                />
                <TableItem :text="item.time"/>
                <TableItem :text="item.title"/>
            </TableRow>
            <TableRow 
                v-if="item.nesting != null" 
                v-for="nest in item.nesting"
                class="table__row_nest"
            >
                <TableItem 
                    :text="''"
                    :class="`table__item_${nest.type}`"
                />
                <TableItem :text="nest.time"/>
                <TableItem :text="nest.title"/>
            </TableRow>
        </template>
    </TableBody>
</template>

<script setup>
    import './dailyTableBody.scss';
    import TableBody from '@/components/Table/TableBody/TableBody.vue';
    import TableRow from '@/components/Table/TableRow/TableRow.vue';
    import TableItem from '@/components/Table/TableItem/TableItem.vue';
    
    import { useDailyPlannerStore } from '@/stores/dailyPlannerStore'
    import { storeToRefs } from 'Pinia'
    
    const { dailyPlanner } = storeToRefs(useDailyPlannerStore())
</script>
