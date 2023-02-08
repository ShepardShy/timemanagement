<template>
    <div class="task-plate" v-if="props.section.id != -1" :class="`task-plate_${props.section.type}`">
        <div class="task-plate__header">
            <div class="task-plate__title"> Задачи </div>
            <div class="task-plate__progress"> {{ `${findCompletedTask()}/${props.section.tasks.length}` }} </div>
        </div>
        <div class="task-plate__body">
            <div class="task-plate__task" v-for="task in sortTasks(props.section.tasks)">
                <input type="checkbox" v-model="task.status" :id="`task-plate__id-${task.id}`">
                <label :for="`task-plate__id-${task.id}`" class="task-plate__task-title"> {{ task.title }} </label>
            </div>
        </div>
    </div>
</template>

<script setup>
    import './TaskPlate.scss';

    const props = defineProps({
        section: {
            default: {
                "id": -1,
                "title": "Undefined",
                "color": "#FFFFFF",
                "progress": 0,
                "type": "none",
                "tasks": [
                    {
                        "id": -1,
                        "title": "Undefined",
                        "status": false
                    }
                ]
            },
            type: Object
        }
    })

    // Сортировка задач по статусу
    const sortTasks = (tasks) => {
        return tasks.sort((prev, next) => next.status - prev.status)
    }

    // Нахождение завершенных задач
    const findCompletedTask = () => {
        let countCompletedTask = 0
        if (props.section != null) {
            for (let task of props.section.tasks) {
                if (task.status) {
                    countCompletedTask++
                }
            }
            return countCompletedTask
        }
    }
</script>
