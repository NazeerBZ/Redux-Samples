

export default function DownCounter(state = 0, action) {

    switch (action.type) {

        case 'DECREAMENT':
            return state - 1;

        case 'DECREAMENT_WITH_VALUE':
            return state - action.value;

        default:
            return state;
    }
}

