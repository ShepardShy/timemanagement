<template>
    <vSection class="wheel organaiser__section">
        <template v-slot:title>
            <div class="wheel__title">Колесо жизни</div>
            <vButton>
                <template v-slot:title>
                    Перейти
                </template>
            </vButton>
        </template>
        <template v-slot:body>
            <TaskPlate />
            <vDiagram />
            <vLegend />
        </template>
    </vSection>
</template>

<script setup>
    import './previewWheel.scss';
    import vSection from '@/components/Section/Section.vue';
    import vButton from '@/components/Button/Button.vue'
    
    import TaskPlate from '@/components/TaskPlate/TaskPlate.vue';
    import vLegend from '@/components/Legend/Legend.vue';
    import vDiagram from '@/components/Diagram/Diagram.vue';
</script>
