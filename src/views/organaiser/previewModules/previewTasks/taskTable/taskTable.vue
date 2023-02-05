<template>
    <vTable class="task__table">
        <template v-slot:header>
            <taskTableHeader />
        </template>
        <template v-slot:body>
            <taskTableBody />
        </template>
    </vTable>
</template>

<script setup>
    import './taskTable.scss';
    import vTable from '@/components/Table/Table.vue'

    import taskTableHeader from './taskTableHeader/taskTableHeader.vue'
    import taskTableBody from './taskTableBody/taskTableBody.vue'

</script>
