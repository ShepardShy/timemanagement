<template>
    <div class="task__progress"> {{ `${props.completed}/${props.summary}` }} </div>
</template>

<script setup>
    import './TaskProgress.scss';
    
    const props = defineProps({
        completed: {
            default: 0,
            type: Number
        },
        summary: {
            default: 0,
            type: Number
        }
    })
</script>
