<template>
    <div class="fast-add__item">
        <label class="fast-add__item-title" :for="`fast-add__datestamp-${props.item.id}`">
            <span>
                {{ props.item.title }}
            </span>
        </label>
        <div class="fast-add__input">
            <input type="date" class="fast-add__datestamp" v-model="props.item.value" :id="`fast-add__datestamp-${props.item.id}`">
        </div>
    </div>
</template>

<script setup>
    import './FastAddDatestamp.scss';
    
    const props = defineProps({
        item: {
            default: {
                id: -1,
                value: '',
                title: 'Дата'
            },
            type: Object
        }
    })
</script>
