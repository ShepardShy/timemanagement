<template>
    <div class="wheel__header">
        <pageTitle> {{ $route.name }} </pageTitle>
        <div class="wheel__header-actions">
            <vButton>
                <template v-slot:title>
                    <span>
                        Изменить цели
                    </span>
                </template>

            </vButton>
            <vButton>
                <template v-slot:title>
                    <span>
                        Новый план
                    </span>
                </template>
            </vButton>
        </div>
    </div>
</template>

<script setup>
    import './wheelHeader.scss';

    import pageTitle from '@/components/PageTitle/PageTitle.vue';
    import vButton from '@/components/Button/Button.vue'
</script>