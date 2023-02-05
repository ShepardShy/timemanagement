<template>
    <table>
        <slot name="header"></slot>
        <slot name="body"></slot>
    </table>
</template>

<script setup>
    import './Table.scss';
</script>
