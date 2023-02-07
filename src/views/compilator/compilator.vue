<template>
    <vMain class="compilator">
        <div class="compilator__header">
            <pageTitle> {{ $route.name }} </pageTitle>
            <vButton @click="showModal('library')">
                <template v-slot:title>
                    Библиотека
                </template>
            </vButton>
        </div>
        <div class="compilator__main">
            <compilatorCode />
            <compilatorDisplay />
            <compilatorConsole />
        </div>
    </vMain>

    <compilatorModalLibrary
        v-show="modal.status && modal.type == 'library'"
        :class="modal.status ? 'modal_open' : ''" 
        @closeModal="modal.status = false"
        @newCode="newCode"
    />

    <compilatorModalCreate 
        v-show="modal.status && modal.type == 'create'"
        :class="modal.status ? 'modal_open' : ''" 
        @closeModal="modal.status = false"
    />
</template>

<script setup>
    import { ref } from 'vue';
    import './compilator.scss';
    import vMain from'@/components/Main/vMain.vue'
    import vButton from '@/components/Button/Button.vue'
    import pageTitle from '@/components/PageTitle/PageTitle.vue'

    import compilatorCode from './compilatorCode/compilatorCode.vue'
    import compilatorModalLibrary from './compilatorModal/compilatorModalLibrary/compilatorModalLibrary.vue'
    import compilatorModalCreate from './compilatorModal/compilatorModalCreate/compilatorModalCreate.vue'
    import compilatorDisplay from './compilatorDisplay/compilatorDisplay.vue'
    import compilatorConsole from './compilatorConsole/compilatorConsole.vue'
    
    import { useCompilatorStore } from '@/stores/compilatorStore'

    const compilatorStore = useCompilatorStore()

    let modal = ref({
        type: 'create',
        status: false
    })

    const showModal = type => {
        modal.value = {
            type: type, 
            status: true
        }
    }

    const newCode = () => {
        modal.value.status = false
        compilatorStore.$patch(state => {
            state.activeCode = {
                id: -1,
                status: "create",
                title: "Новый скрипт",
                code: "// Put your code there \n"
            }
        })
    }
</script>
