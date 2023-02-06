import { ref } from 'vue'

export let eventSettings = ref({
    datestamp_alone: {
        id: 1,
        value: '',
        title: 'Дата'
    },
    datestamp_group: {
        datestamp_begin: {
            id: 2.1,
            value: '',
            title: 'Дата начала'
        },
        datestamp_end: {
            id: 2.2,
            value: '',
            title: 'Дата окончания'
        }
    },
    type: {
        id: 5,
        value: '',
        options: [
            {
                id: -1,
                title: 'Не выбрано'
            },
            {
                id: 0,
                title: 'Срочные и важные'
            },
            {
                id: 1,
                title: 'Быстрые'
            },
            {
                id: 2,
                title: 'Ждущие'
            },
            {
                id: 3,
                title: 'Неактуальные'
            }
        ],
        title: 'Тип'
    },
    category: {
        id: 6,
        value: '',
        options: [
            {
                id: -1,
                title: 'Не выбрано'
            },
            {
                id: 0,
                title: 'Здоровье и спорт'
            },
            {
                id: 1,
                title: 'Окружение'
            },
            {
                id: 2,
                title: 'Семья'
            },
            {
                id: 3,
                title: 'Карьера и бизнес'
            },
            {
                id: 4,
                title: 'Доходы'
            },
            {
                id: 5,
                title: 'Духовность и творчество'
            },
            {
                id: 6,
                title: 'Личностный рост'
            },
            {
                id: 7,
                title: 'Яркость жизни'
            }
        ],
        title: 'Категория'
    },
    title: {
        id: 4,
        value: '',
        title: 'Событие'
    },
    toggle: {
        id: 3,
        status: false,
        title: 'Продолжительное событие'
    }
})