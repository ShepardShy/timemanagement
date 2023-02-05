<template>
    <div class="modal__item">
        {{ props.item.title }}
    </div>
</template>

<script setup>
    import './compilatorModalItem.scss';
    
    const props = defineProps({
        item: {
            default: {
                id: -1,
                title: "Undefined",
                code: ""
            }
        }
    })
</script>
