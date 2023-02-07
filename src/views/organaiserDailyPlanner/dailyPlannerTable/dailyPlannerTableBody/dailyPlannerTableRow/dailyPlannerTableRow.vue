<template>
    <TableRow :class="[`table__row_${props.row.type}`, props.row.status ? 'table__row_strikeout' : '', props.row.nesting == null ? '' : 'table__row_nesting']">

        <input type="checkbox" id="">
        <TableItem :text="props.row.time" />
        <TableItem :text="props.row.title" />

        <div class="daily-planner-table__item-actions">
            <figure class='ibg daily-planner-table__item-action daily-planner-table__item-edit'>
                <img src='/actions/edit.svg' alt=''>
            </figure>
            <figure class='ibg daily-planner-table__item-action daily-planner-table__item-remove'>
                <img src='/actions/remove.svg' alt=''>
            </figure>
        </div>

        <dailyPlannerTableNest 
            v-if="props.row.nesting != null"
            :nesting="props.row.nesting"
        />
    </TableRow>
</template>

<script setup>
    import './dailyPlannerTableRow.scss';
    import dailyPlannerTableNest from './dailyPlannerTableNest/dailyPlannerTableNest.vue';

    import TableItem from '@/components/Table/TableItem/TableItem.vue';
    import TableRow from '@/components/Table/TableRow/TableRow.vue';

    const props = defineProps({
        row: {
            default: {
                "id": -1,
                "status": false,
                "type": "none",
                "title": "Undefined",
                "time": "00:00",
                "nesting": null
            },
            type: Object
        }
    })
</script>