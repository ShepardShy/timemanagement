<template>
    <div class="table__header">
        <slot></slot>
    </div>
</template>

<script setup>
    import './TableHeader.scss';

    import TableRow from '../TableRow/TableRow.vue';

    const props = defineProps({
        items: {
            default: [],
            type: Array
        }
    }) 
</script>