<template>
    <div class="fast-add__item">
        <label class="fast-add__item-title" :for="`fast-add__textarea-${props.item.id}`">
            <span>
                {{ props.item.title }}
            </span>
        </label>
        <textarea class="fast-add__textarea" v-model="props.item.value" :id="`fast-add__textarea-${props.item.id}`"></textarea>
    </div>
</template>

<script setup>
    import './FastAddTextarea.scss';
    
    const props = defineProps({
        item: {
            default: {
                id: -1,
                value: '',
                title: 'Комментарий'
            },
            type: Object
        }
    })
</script>
