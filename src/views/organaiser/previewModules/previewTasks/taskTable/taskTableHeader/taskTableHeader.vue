<template>
    <TableHeader>
        <TableRow>
            <TableItem 
                v-for="task in tasks"
                :text="task.title"
            />
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import './taskTableHeader.scss';

    import TableHeader from '@/components/Table/TableHeader/TableHeader.vue';
    import TableRow from '@/components/Table/TableRow/TableRow.vue';
    import TableItem from '@/components/Table/TableItem/TableItem.vue';

    import { useTaskStore } from '@/stores/tasksStore'
    import { storeToRefs } from 'Pinia'

    const { tasks } = storeToRefs(useTaskStore())
</script>