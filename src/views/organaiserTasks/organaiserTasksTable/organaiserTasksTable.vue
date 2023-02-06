<template>
    <vSection class="tasks__table tasks-table section_shadow" v-for="table in tasks">
        <template v-slot:title>
            <div class="tasks-table__title"> {{ table.title }} </div>
        </template>
        <template v-slot:body>
            <div class="tasks-table__body">
                <organaiserTasksItem 
                    v-for="task in table.list" 
                    :tableID="table.id"
                    :item="task" 
                />
            </div>
        </template>
    </vSection>
</template>

<script setup>
    import './organaiserTasksTable.scss';

    import vSection from '@/components/Section/Section.vue';
    import organaiserTasksItem from './organaiserTasksItem/organaiserTasksItem.vue'

    import { useTaskStore } from '@/stores/tasksStore'
    import { storeToRefs } from 'Pinia'
    const { tasks } = storeToRefs(useTaskStore())

</script>