<template>
    <vSection class="wheel organaiser__section">
        <template v-slot:title>
            <div class="wheel__title">Колесо жизни</div>
            <vButton>
                <template v-slot:title>
                    <router-link to="/organaiser/organaiser-wheel"> 
                        Перейти
                    </router-link>
                </template>
            </vButton>
        </template>
        <template v-slot:body>
            <TaskPlate :section="activeSection" />
            <vDiagram />
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
    import './previewWheel.scss';
    import vSection from '@/components/Section/Section.vue';
    import vButton from '@/components/Button/Button.vue'
    
    import TaskProgress from '@/components/TaskPlate/TaskProgress/TaskProgress.vue';
    import TaskPlate from '@/components/TaskPlate/TaskPlate.vue';
    import vLegend from '@/components/Legend/Legend.vue';
    import vDiagram from '@/components/Diagram/Diagram.vue';

    import { useWheelStore } from '@/stores/wheelStore'
    import { storeToRefs } from 'Pinia'

    const { activeSection, wheel } = storeToRefs(useWheelStore())
</script>
