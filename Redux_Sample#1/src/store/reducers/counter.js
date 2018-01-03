

export default function Counter(state = 0, action) {

    switch (action.type) {

        case 'INCREAMENT': return state + 1;
        case 'DECREAMENT': return state - 1;
        default: return state;
    }
}

