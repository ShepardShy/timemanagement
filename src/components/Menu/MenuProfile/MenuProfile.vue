<template>
    <div class="menu__profile profile">
        <figure class='ibg profile__icon'>
            <img :src='profile.icon' alt=''>
        </figure>

        <div class="profile__title"> {{ profile.firstname }} {{ profile.surname }} </div>
        <div class="profile__status profile__status_online"> {{ profile.status }} </div>
    </div>
</template>

<script setup>
    import './MenuProfile.scss';
    
    import { storeToRefs } from 'Pinia'
    import { useProfileStore } from '@/stores/profileStore';
    const { profile } = storeToRefs(useProfileStore())

</script>
