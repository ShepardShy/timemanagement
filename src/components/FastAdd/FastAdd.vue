<template>
    <vSection  class="fast-add">
        <template v-slot:title>
            <slot name="title"></slot>
        </template>
        <template v-slot:body>
            <div class="fast-add__content">
                <slot name="body"></slot>
            </div>
            <div class="fast-add__footer">
                <slot name="footer"></slot>
            </div>

        </template>
    </vSection>
</template>

<script setup>
    import './FastAdd.scss';
    
    import vSection from '@/components/Section/Section.vue';
</script>
