<template>
    <div class="table__body">
        <slot></slot>
    </div>
</template>

<script setup>
    import './TableBody.scss';
    
    import TableRow from '../TableRow/TableRow.vue';
</script>
