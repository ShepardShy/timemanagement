<template>
    <vTable class="daily__table">
        <template v-slot:header>
            <dailyTableHeader />
        </template>
        <template v-slot:body>
            <dailyTableBody />
        </template>
    </vTable>
</template>

<script setup>
    import './dailyTable.scss';
    
    import vTable from '@/components/Table/Table.vue';

    import dailyTableHeader from './dailyTableHeader/dailyTableHeader.vue';
    import dailyTableBody from './dailyTableBody/dailyTableBody.vue';
</script>
