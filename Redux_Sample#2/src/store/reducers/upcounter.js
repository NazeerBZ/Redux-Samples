

export default function UpCounter(state = 0, action) {

    switch (action.type) {

        case 'INCREAMENT': return state + 1;
        default: return state;
    }
}

