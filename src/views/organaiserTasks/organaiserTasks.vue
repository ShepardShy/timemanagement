<template>
    <vMain class="tasks">
        <div class="tasks__header">
            <pageTitle> {{ $route.name }} </pageTitle>
        </div>
        <div class="tasks__main">
            <div class="tasks__inform">
                <vSection class="tasks__table tasks-table">
                    <template v-slot:title>
                        <div class="tasks-table__title">Срочные и важные</div>
                    </template>
                    <template v-slot:body>

                    </template>
                </vSection>
                <vSection class="tasks__table tasks-table">
                    <template v-slot:title>
                        <div class="tasks-table__title">Быстрые</div>
                    </template>
                    <template v-slot:body>

                    </template>
                </vSection>
                <vSection class="tasks__table tasks-table">
                    <template v-slot:title>
                        <div class="tasks-table__title">Ждущие</div>
                    </template>
                    <template v-slot:body>

                    </template>
                </vSection>
                <vSection class="tasks__table tasks-table">
                    <template v-slot:title>
                        <div class="tasks-table__title">Неактуальные</div>
                    </template>
                    <template v-slot:body>

                    </template>
                </vSection>
            </div>

        </div>
        <vLegend class="tasks__legend" />
    </vMain>
</template>

<script setup>
    import './organaiserTasks.scss';
    import vMain from '@/components/Main/vMain.vue';
    import pageTitle from '@/components/PageTitle/PageTitle.vue';

    import vSection from '@/components/Section/Section.vue';
    import vLegend from '@/components/Legend/Legend.vue';
</script>