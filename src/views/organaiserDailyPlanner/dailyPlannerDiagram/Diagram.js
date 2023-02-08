export default {
    // Подсчет типов
    analizingType(tasks) {
        for (let task of tasks) {
            if (task.nesting != null) {
                for (let detail of task.nesting) {
                    switch (detail.type) {
                        case 'health':
                            percents[0].count++
                            break;
                        case 'environment':
                            percents[1].count++
                            break;
                        case 'family':
                            percents[2].count++
                            break;
                        case 'career':
                            percents[3].count++
                            break;
                            case 'finance':
                            percents[4].count++
                            break;
                        case 'spirit':
                            percents[5].count++
                            break;
                        case 'myself':
                            percents[6].count++
                            break;
                        case 'brightness':
                            percents[7].count++
                            break;
                        default:
                            break;
                    }
                }
            }
            
            switch (task.type) {
                case 'health':
                    percents[0].count++
                    break;
                case 'environment':
                    percents[1].count++
                    break;
                case 'family':
                    percents[2].count++
                    break;
                case 'career':
                    percents[3].count++
                    break;
                    case 'finance':
                    percents[4].count++
                    break;
                case 'spirit':
                    percents[5].count++
                    break;
                case 'myself':
                    percents[6].count++
                    break;
                case 'brightness':
                    percents[7].count++
                    break;
                default:
                    break;
            }
        }
        return initPercent(); 
    }
}

// Подсчет частей и распределение процентов
const initPercent = () => {
    let amount = 0
    percents.forEach(elem => {
        amount += elem.count
    });

    let part = (100 / amount)
    let count = 0
    percents.forEach(elem => {
        elem.percent = (part * elem.count) + count
        if (count == 0) {
            elem.percent_split = 1
        } else {
            elem.percent_split = count + 1
        }
        count = elem.percent
    });

    return percents
}

// Данные для диаграммы
let percents = [{
        id: 0,
        type: 'health',
        count: 0,
        percent: 0,
        index: 7,
        percent_split: 0,
        color: '#ff0000'
    },
    {
        id: 1,
        type: 'environment',
        count: 0,
        percent: 0,
        index: 6,
        percent_split: 0,
        color: '#ffa600'
    },
    {
        id: 2,
        type: 'family',
        count: 0,
        percent: 0,
        index: 5,
        percent_split: 0,
        color: '#ffe600'
    },
    {
        id: 3,
        type: 'career',
        count: 0,
        percent: 0,
        index: 4,
        percent_split: 0,
        color: '#48ff00'
    },
    {
        id: 4,
        type: 'finance',
        count: 0,
        percent: 0,
        index: 3,
        percent_split: 0,
        color: '#4AB3FF'
    },
    {
        id: 5,
        type: 'spirit',
        count: 0,
        percent: 0,
        index: 2,
        percent_split: 0,
        color: '#1100ff'
    },
    {
        id: 6,
        type: 'myself',
        count: 0,
        percent: 0,
        index: 1,
        percent_split: 0,
        color: '#9900ff'
    },
    {
        id: 7,
        type: 'brightness',
        count: 0,
        percent: 0,
        index: 0,
        percent_split: 0,
        color: '#ff0095'
    }
]