<template>
    <vSection class="dayly-planner organaiser__section section_shadow">
        <template v-slot:title>
            <div class="dayly-planner__title">Распорядок дня</div>
            <vButton> 
                <template v-slot:title>
                    <router-link to="/organaiser/daily-planner"> 
                        Перейти
                    </router-link>
                </template>
            </vButton>
        </template>
        <template v-slot:body>
            <dailyTable />
        </template>
    </vSection>
</template>

<script setup>
    import './previewDailyPlanner.scss';
    import vSection from '@/components/Section/Section.vue';
    import vButton from '@/components/Button/Button.vue'
    
    import dailyTable from './dailyTable/dailyTable.vue'
</script>
