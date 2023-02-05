<template>
    <div class="modal">
        <div class="modal__title">
            <slot name="title"></slot>
        </div>
        <div class="modal__body">
            <slot name="body"></slot>
        </div>
        <div class="modal__footer">
            <slot name="footer"></slot>
        </div>

        <div class="modal__close" @click="$emit('closeModal')">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.07107 15.669L15.2132 1.52683M15.2132 15.669L1.07107 1.52683" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
</template>

<script setup>
    import './Modal.scss';
    
    const emit = defineEmits(['closeModal'])
</script>
