<template>
    <vMain class="wheel">
        <wheelHeader />
        <wheelBody />
    </vMain>
</template>

<script setup>
    import './organaiserWheel.scss';

    import vMain from '@/components/Main/vMain.vue';

    import wheelHeader from './wheelHeader/wheelHeader.vue'
    import wheelBody from './wheelBody/wheelBody.vue'

</script>