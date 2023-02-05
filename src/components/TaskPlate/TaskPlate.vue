<template>
    <div class="task-plate" v-if="activeSection.id != -1" :class="`task-plate_${activeSection.type}`">
        <div class="task-plate__header">
            <div class="task-plate__title"> Задачи </div>
            <div class="task-plate__progress"> {{ `${findCompletedTask()}/${activeSection.tasks.length}` }} </div>
        </div>
        <div class="task-plate__body">
            <div class="task-plate__task" v-for="task in sortTasks(activeSection.tasks)">
                <input type="checkbox" v-model="task.status" :id="`task-plate__id-${task.id}`">
                <label :for="`task-plate__id-${task.id}`" class="task-plate__task-title"> {{ task.title }} </label>
            </div>
        </div>
    </div>
</template>

<script setup>
    import './TaskPlate.scss';
    
    import { useWheelStore } from '@/stores/wheelStore'
    import { storeToRefs } from 'Pinia'

    const { activeSection } = storeToRefs(useWheelStore())

    // Сортировка задач по статусу
    const sortTasks = (tasks) => {
        return tasks.sort((prev, next) => next.status - prev.status)
    }

    // Нахождение завершенных задач
    const findCompletedTask = () => {
        let countCompletedTask = 0
        if (activeSection.value != null) {
            for (let task of activeSection.value.tasks) {
                if (task.status) {
                    countCompletedTask++
                }
            }
            return countCompletedTask
        }
    }
</script>
