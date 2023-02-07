<template>
    <div class="table__row_nest">
        <TableRow 
            v-for="nest in props.nesting"
            :class="[`table__row_${nest.type}`, nest.status ? 'table__row_strikeout' : '']">

            <input type="checkbox" id="">
            <TableItem :text="nest.time" />
            <TableItem :text="nest.title" />

            <div class="daily-planner-table__item-actions">
                <figure class='ibg daily-planner-table__item-action daily-planner-table__item-edit'>
                    <img src='/actions/edit.svg' alt=''>
                </figure>
                <figure class='ibg daily-planner-table__item-action daily-planner-table__item-remove'>
                    <img src='/actions/remove.svg' alt=''>
                </figure>
            </div>
        </TableRow>
    </div>
</template>

<script setup>
    import './dailyPlannerTableNest.scss';

    import TableItem from '@/components/Table/TableItem/TableItem.vue';
    import TableRow from '@/components/Table/TableRow/TableRow.vue';

    const props = defineProps({
        nesting: {
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