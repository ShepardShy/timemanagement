<template>
    <div class="fast-add__item">
        <label class="fast-add__item-title" :for="`fast-add__select-${props.item.id}`">
            <span>
                {{ props.item.title }}
            </span>
        </label>
        <select class="fast-add__select" v-model="props.item.value" :id="`fast-add__select-${props.item.id}`">
            <option v-for="option in props.item.options" :value="option.title"> {{ option.title }} </option>
        </select>
    </div>
</template>

<script setup>
    import './FastAddSelect.scss';
    
    const props = defineProps({
        item: {
            default: {
                id: -1,
                value: '',
                options: [
                    {
                        id: -1,
                        title: 'Не выбрано'
                    }
                ],
                title: 'Селект'
            },
            type: Object
        }
    })
</script>
