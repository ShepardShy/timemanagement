<template>
    <div class="fast-add__toggle">
        <input type="checkbox" :id="`fast-add-toggle_${props.item.id}`" :value="props.item.status"/>
        <label class="toggle" :for="`fast-add-toggle_${props.item.id}`" @click="moduleStore.toggleStatus(props.item.id)"> {{ props.item.title }} </label>
    </div>
</template>

<script setup>
    import './FastAddToggle.scss';
    
    const props = defineProps({
        item: {
            default: {
                id: -1,
                status: false,
                title: 'Состояние'
            },
            type: Object
        }
    })
</script>
