<template>
    <div class="fast-add__item fast-add__toggle">
        <input type="checkbox" :id="`fast-add-toggle_${props.item.id}`" v-model="props.item.status"/>
        <label class="toggle" :for="`fast-add-toggle_${props.item.id}`"></label>
        <span>
            {{ props.item.title }}
        </span>
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
