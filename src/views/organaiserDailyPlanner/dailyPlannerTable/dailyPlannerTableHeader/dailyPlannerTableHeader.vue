<template>
    <TableHeader>
        <TableRow>
            <TableItem 
                :text="''"
            />
            <TableItem 
                :text="''"
            />
            <TableItem 
                :text="'Время'"
            />
            <TableItem 
                :text="'Действие'"
            />
            <TableItem 
                :text="''"
            />
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import './dailyPlannerTableHeader.scss';
    
    import TableHeader from '@/components/Table/TableHeader/TableHeader.vue';
    import TableRow from '@/components/Table/TableRow/TableRow.vue';
    import TableItem from '@/components/Table/TableItem/TableItem.vue';
</script>
