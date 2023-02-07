<template>
    <vSection class="daily-planner__diagram">
        <template v-slot:title>
            Распределение дня
        </template>
        <template v-slot:body>
            <div class="diagram">
                <div class="pie animate" v-for="task in percents" v-show="task.count != 0" :style="`--pie_percent: ${task.percent}; --c: ${task.color}; z-index: ${task.index}`"></div>
            </div>
        </template>
    </vSection>
</template>

<script setup>
    import { onBeforeMount, ref } from 'vue';
    import './dailyPlannerDiagram.scss';

    import vSection from '@/components/Section/Section.vue';
    import diagramJS from './Diagram.js'

    import { useDailyPlannerStore } from '@/stores/dailyPlannerStore'
    import { storeToRefs } from 'Pinia'
    let { dailyPlanner } = storeToRefs(useDailyPlannerStore())

    let percents = ref(null)

    onBeforeMount(() => {
        percents.value = diagramJS.analizingType(dailyPlanner.value)
    })

</script>