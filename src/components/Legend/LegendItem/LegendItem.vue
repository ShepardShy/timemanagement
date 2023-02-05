<template>
    <div :class="['legend__item', `legend__item_${props.item.type}`]">
        {{ props.item.title }}
    </div>
</template>

<script setup>
    import './LegendItem.scss';
    
    const props = defineProps({
        item: {
            default: {
                id: -1,
                title: 'undefined',
                type: 'none'
            },
            type: Object
        }
    })
</script>
