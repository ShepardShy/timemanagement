<template>
    <vSection class="code compilator__section">
        <template v-slot:title>
            <div class="code__title">Код </div>
            <div class="code__type"> {{ compilatorStore.activeCode.title }} </div>
            <figure class='ibg code__icon' v-show="compilatorStore.activeCode.status == 'create'">
                <img src='/compilatorIcons/save.svg' alt=''>
            </figure>
            <figure class='ibg code__icon' v-show="compilatorStore.activeCode.status == 'edit'">
                <img src='/compilatorIcons/save.svg' alt=''>
            </figure>
        </template>
        <template v-slot:body>
            <!-- <div class="code__content" contenteditable="true">
                <div></div>
            </div> -->
            <textarea class="code__content" v-model="compilatorStore.activeCode.code" @input="editCode"/>
        </template>
    </vSection>
</template>

<script setup>
    import './compilatorCode.scss';
    import vSection from '@/components/Section/Section.vue';

    import { useCompilatorStore } from '@/stores/compilatorStore'

    const compilatorStore = useCompilatorStore()
    
    const editCode = () => {
        if (compilatorStore.activeCode.status == 'check') {
            compilatorStore.activeCode.status = 'edit'
        }
    }

</script>