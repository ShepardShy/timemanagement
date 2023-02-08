<template>
    <FastAdd class="tasks__fast-add">
        <template v-slot:title>
            Добавить событие
        </template>
        <template v-slot:body>
            <div class="fast-add__datestamp-group" v-if="!eventSettings.toggle.status">
                <FastAddDatestamp 
                    :item="eventSettings.datestamp_alone"
                />
            </div>

            <div class="fast-add__datestamp-group" v-if="eventSettings.toggle.status">
                <FastAddDatestamp 
                    :item="eventSettings.datestamp_group.datestamp_begin"
                />
                <FastAddDatestamp 
                    :item="eventSettings.datestamp_group.datestamp_end"
                />
            </div>

            <FastAddSelect 
                :item="eventSettings.type"
            />
            <FastAddSelect 
                :item="eventSettings.category"
            />
            <FastAddTextarea 
                :item="eventSettings.title"
            />
        </template>
        <template v-slot:footer>
            <FastAddToggle
                :item="eventSettings.toggle"
            />
            <vButton class="fast-add__button" @click="addEvent()">
                <template v-slot:title>
                    <span>
                        Добавить
                    </span>
                </template>
            </vButton>
        </template>
    </FastAdd>
</template>

<script setup>
    import './FastAddTasks.scss';

    import FastAdd from '@/components/FastAdd/FastAdd.vue';
    import FastAddDatestamp from '@/components/FastAdd/FastAddDatestamp/FastAddDatestamp.vue';
    import FastAddSelect from '@/components/FastAdd/FastAddSelect/FastAddSelect.vue';
    import FastAddTextarea from '@/components/FastAdd//FastAddTextarea/FastAddTextarea.vue'
    import FastAddToggle from '@/components/FastAdd/FastAddToggle/FastAddToggle.vue';
    import vButton from '@/components/Button/Button.vue'

    import { eventSettings } from './eventSettings';

    // Добавление нового события
    const addEvent = () => {
        let event = null
        // Продолжительное событие
        if (eventSettings.value.toggle.status) {
            event = {
                date_begin: eventSettings.value.datestamp_group.datestamp_begin,
                date_end: eventSettings.value.datestamp_group.datestamp_end,
                type: eventSettings.value.type,
                category: eventSettings.value.category,
                title: eventSettings.value.title,
                toggle: eventSettings.value.toggle
            }
        } 
        // Событие с одной датой
        else {
            event = {
                date: eventSettings.value.datestamp_alone,
                type: eventSettings.value.type,
                category: eventSettings.value.category,
                title: eventSettings.value.title,
            }
        }

        console.log(event);
    }
</script>