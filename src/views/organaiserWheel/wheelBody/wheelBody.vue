<template>
    <vSection class="wheel__section">
        <template v-slot:body>
            <vDiagram class="wheel_active" />

            <TaskPlate 
                v-for="section in wheel" 
                :section="section" 
            />

            <TaskProgress 
                v-for="section in wheel" 
                :summary="10" 
                :completed="section.progress"
                :class="`task__progress_${section.type}`" 
            />

            <vLegend />
        </template>
    </vSection>
</template>

<script setup>
    import './wheelBody.scss';

    import vSection from '@/components/Section/Section.vue';
    import TaskProgress from '@/components/TaskPlate/TaskProgress/TaskProgress.vue';
    import vDiagram from '@/components/Diagram/Diagram.vue';
    import vLegend from '@/components/Legend/Legend.vue';
    import TaskPlate from '@/components/TaskPlate/TaskPlate.vue';

    import { useWheelStore } from '@/stores/wheelStore'
    import { storeToRefs } from 'Pinia'
    const { wheel } = storeToRefs(useWheelStore())

</script>