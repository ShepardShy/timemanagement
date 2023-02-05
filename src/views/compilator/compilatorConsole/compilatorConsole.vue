<template>
    <vSection class="console compilator__section">
        <template v-slot:title>
            Консоль
        </template>
        <template v-slot:body>
            
        </template>
    </vSection>
</template>

<script setup>
    import './compilatorConsole.scss';
    import vSection from '@/components/Section/Section.vue';

    import { useCompilatorStore } from '@/stores/compilatorStore'

    const compilatorStore = useCompilatorStore()

</script>