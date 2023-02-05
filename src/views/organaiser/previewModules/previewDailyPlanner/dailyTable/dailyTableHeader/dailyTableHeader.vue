<template>
    <TableHeader>
        <TableRow>
            <TableItem :text="''"/>
            <TableItem :text="'Время'"/>
            <TableItem :text="'Действие'"/>
        </TableRow>
    </TableHeader>
</template>

<script setup>
    import './dailyTableHeader.scss';
    
    import TableHeader from '@/components/Table/TableHeader/TableHeader.vue';
    import TableRow from '@/components/Table/TableRow/TableRow.vue';
    import TableItem from '@/components/Table/TableItem/TableItem.vue';
    
</script>
