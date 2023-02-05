<template>
    <vModal class="compilator__modal" @closeModal="$emit('closeModal')">
        <template v-slot:title>
            Сохранить
        </template>
        <template v-slot:body>
            
        </template>
        <template v-slot:footer>
            <vButton class="modal__button">
                <template v-slot:title>
                    Сохранить
                </template>
            </vButton>
        </template>
    </vModal>
</template>

<script setup>
    import './compilatorModalCreate.scss';
    
    import vModal from '@/components/Modal/Modal.vue'
    import vButton from '@/components/Button/Button.vue';

    const emit = defineEmits(['closeModal'])
</script>
