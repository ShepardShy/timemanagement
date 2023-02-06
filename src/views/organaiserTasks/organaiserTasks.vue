<template>
    <vMain class="tasks">
        <div class="tasks__header">
            <pageTitle> {{ $route.name }} </pageTitle>
        </div>
        <div class="tasks__main">
            <div class="tasks__inform">
                <organaiserTasksTable />
            </div>
            <div class="tasks__action">
                <FastAddTasks />
                <organaiserLegend />
            </div>
        </div>
    </vMain>
</template>

<script setup>
    import './organaiserTasks.scss';
    import vMain from '@/components/Main/vMain.vue';
    import pageTitle from '@/components/PageTitle/PageTitle.vue';

    import organaiserTasksTable from './organaiserTasksTable/organaiserTasksTable.vue';
    import FastAddTasks from './FastAddTasks/FastAddTasks.vue'
    import organaiserLegend from './organaiserLegend/organaiserLegend.vue';
</script>