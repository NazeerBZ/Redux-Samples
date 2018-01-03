

export default function UpCounter(state = 0, action) {

    switch (action.type) {

        case 'INCREAMENT':
            return state + 1;

        case 'INCREAMENT_WITH_VALUE':
            return state + action.value;

        case 'INCREAMENT_WITH_USERINPUT':
            return state + action.value;

        default:
            return state;
    }
}

