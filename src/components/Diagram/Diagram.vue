<template>
    <div class="diagram">
        <svg class="diagram__svg">
            <clipPath id="diagram_section" clipPathUnits="userSpaceOnUse">
                <path d="M184.459 153.518C194.721 129.342 200.121 103.381 200.35 77.1175C200.579 50.8541 195.633 24.8028 185.794 0.450873L0.357607 75.3723L184.459 153.518Z"/>
            </clipPath>
        </svg>
        <DiagramSection 
            v-for="section in wheel"
            @click="changeActiveSection(section)"
            :class="section.id == wheelStore.activeSection.id ? 'diagram__section_active' : ''"
            :style="`background: linear-gradient(90deg, ${section.color} ${0.3*section.progress*10}%, rgba(255, 0, 0, 0) ${0.6*section.progress*10}%)`"
        />
    </div>
</template>

<script setup>
    import './Diagram.scss';
    import DiagramSection from './DiagramSection/DiagramSection.vue';
    
    import { useWheelStore } from '@/stores/wheelStore'
    import { storeToRefs } from 'Pinia'

    const { wheel } = storeToRefs(useWheelStore())
    const wheelStore = useWheelStore()


    const changeActiveSection = (section) => {
        wheelStore.activeSection = section
    }
</script>
