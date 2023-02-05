<template>
    <vMain class="organaiser">
        <div class="organaiser__header">
            <pageTitle> {{ $route.name }} </pageTitle>
        </div>
        <div class="organaiser__main">
            <previewTasks />
            <previewDailyPlanner />
            <previewWheel />
        </div>
    </vMain>
</template>

<script setup>
    import './organaiser.scss';
    import vMain from'@/components/Main/vMain.vue';
    import pageTitle from '@/components/PageTitle/PageTitle.vue';

    import previewTasks from './previewModules/previewTasks/previewTasks.vue';
    import previewWheel from './previewModules/previewWheel/previewWheel.vue';
    import previewDailyPlanner from './previewModules/previewDailyPlanner/previewDailyPlanner.vue';

</script>
