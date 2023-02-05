<template>
    <section>
        <div class="section__title">
            <slot name="title"></slot>
        </div>
        <div class="section__body">
            <slot name="body"></slot>
        </div>
    </section>
</template>

<script setup>
    import './Section.scss';
    
</script>
