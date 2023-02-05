<template>
    <menu>
        <div class="menu__title"> {{ props.group.title }} </div>
        <menuItem 
            v-for="item in props.group.links"
            v-show="item.status"
            :item="item"
        />

    </menu>
</template>

<script setup>
    import './MenuGroup.scss';
    import menuItem from '../MenuItem/MenuItem.vue'

    const props = defineProps({
        group: {
            defalut: {
                title: '',
                links: []
            },
            type: Object
        }
    })
</script>
