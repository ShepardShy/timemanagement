<template>
    <div class="table__header">
        <slot></slot>
    </div>
</template>

<script setup>
    import './TableHeader.scss';

    const props = defineProps({
        items: {
            default: [],
            type: Array
        }
    }) 
</script>