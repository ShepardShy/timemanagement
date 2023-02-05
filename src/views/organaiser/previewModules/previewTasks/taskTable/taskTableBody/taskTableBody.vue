<template>
    <TableBody>
            <TableColumn v-for="column in tasks">
                <TableItem 
                    v-for="task in column.list" 
                    :text="task.title"
                    :class="[`table__item_${task.type}`, task.status ? '' : 'table__item_strikeout']"
                />
            </TableColumn>
    </TableBody>
</template>

<script setup>
    import './taskTableBody.scss';

    import TableBody from '@/components/Table/TableBody/TableBody.vue';
    import TableItem from '@/components/Table/TableItem/TableItem.vue';
    import TableColumn from '@/components/Table/TableColumn/TableColumn.vue';

    import { useTaskStore } from '@/stores/tasksStore'
    import { storeToRefs } from 'Pinia'

    const { tasks } = storeToRefs(useTaskStore())
</script>