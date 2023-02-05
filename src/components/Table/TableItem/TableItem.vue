<template>
    <div class="table__item">
        <span :title="text"> {{ text }} </span>
    </div>
</template>

<script setup>
    import './TableItem.scss';

    const props = defineProps({
        text: {
            type: String,
            default: ''
        }
    })
</script>
