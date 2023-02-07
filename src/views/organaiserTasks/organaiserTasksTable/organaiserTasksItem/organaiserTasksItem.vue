<template>
    <div class="tasks-table__item" :class="[`tasks-table__item_${props.item.type}`, props.item.status ? '' : 'tasks-table__item_strikeout']">
        <input type="checkbox" class="tasks-table__input" :id="`tasks-table__input-${props.tableID}-${props.item.id}`">
        <label :for="`tasks-table__input-${props.tableID}-${props.item.id}`" :title="props.item.title" > {{ props.item.title }} </label>

        <div class="task-table__item-actions">
            <figure class='ibg task-table__item-action task-table__item-edit'>
                <img src='/actions/edit.svg' alt=''>
            </figure>
            <figure class='ibg task-table__item-action task-table__item-remove'>
                <img src='/actions/remove.svg' alt=''>
            </figure>
        </div>
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
