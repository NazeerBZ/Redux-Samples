

export default function DownCounter(state = 0, action) {

    switch (action.type) {

        case 'DECREAMENT': return state - 1;
        default: return state;
    }
}

