<template>
    <div class="tasks-table__item" :class="[`tasks-table__item_${props.item.type}`, props.item.status ? '' : 'tasks-table__item_strikeout']">
        <input type="checkbox" class="tasks-table__input" :id="`tasks-table__input-${props.tableID}-${props.item.id}`">
        <label :for="`tasks-table__input-${props.tableID}-${props.item.id}`"> {{ props.item.title }} </label>
    </div>
</template>

<script setup>
    import './organaiserTasksItem.scss';
    
    const props = defineProps({
        tableID: {
            default: -1,
            type: Number
        },
        item: {
            default: {
                "id": -1,
                "title": "undefined",
                "type": "none",
                "status": false
            },
            type: Object
        }
    })
</script>
