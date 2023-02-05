<template>
    <router-link class="menu__item" :to="props.item.link" :class="$route.path == props.item.link ? 'menu__item_active' : ''"> 
        <figure class='ibg menu__item-icon'>
            <img :src='props.item.icon' alt=''>
        </figure>
        <div class="menu__item-link"> {{ props.item.title }} </div>
    </router-link>    
</template>

<script setup>
    import './MenuItem.scss';
    
    const props = defineProps({
        item: {
            default: {
                title: '',
                link: '/',
                icon: '/vite.sbg'
            },
            type: Object
        }
    })
</script>
