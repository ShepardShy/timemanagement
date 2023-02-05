<template>
    <vModal class="compilator__modal" @closeModal="$emit('closeModal')">
        <template v-slot:title>
            Добавленные
        </template>
        <template v-slot:body>
            <modalItem 
                v-for="item in compilatorStore.codeList"
                :item="item"
                @click="compilatorStore.$patch(state => state.activeCode = item)"
            />
        </template>
        <template v-slot:footer>
            <vButton class="modal__button" @click="$emit('newCode')">
                <template v-slot:title>
                    Создать
                </template>
            </vButton>
        </template>
    </vModal>
</template>

<script setup>
    import './compilatorModalLibrary.scss';
    
    import vModal from '@/components/Modal/Modal.vue'
    import vButton from '@/components/Button/Button.vue';
    import modalItem from '../compilatorModalItem/compilatorModalItem.vue'

    import { useCompilatorStore } from '@/stores/compilatorStore'

    const compilatorStore = useCompilatorStore()

    const emit = defineEmits(['closeModal', 'newCode'])
    
</script>
