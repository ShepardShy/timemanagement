<template>
    <vSection class="task organaiser__section section_shadow">
        <template v-slot:title>
            <div class="task__title">Дела</div>
            <vButton>
                <template v-slot:title>
                    <router-link to="/organaiser/tasks"> 
                        Перейти
                    </router-link>
                </template>
            </vButton>
        </template>
        <template v-slot:body>
            <taskTable />
        </template>
    </vSection>
</template>

<script setup>
    import './previewTasks.scss';
    import vSection from '@/components/Section/Section.vue';
    import vButton from '@/components/Button/Button.vue'

    import taskTable from './taskTable/taskTable.vue'
</script>
