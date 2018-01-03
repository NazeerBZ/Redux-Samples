
export default class ActionBundle {

    static INCREAMENT() {
        return {
            type: 'INCREAMENT'
        }
    }

    static INCREAMENT_WITH_VALUE(val) {
        return {
            type: 'INCREAMENT_WITH_VALUE',
            value: val
        }
    }

    static INCREAMENT_WITH_USERINPUT(val){
         return {
            type: 'INCREAMENT_WITH_USERINPUT',
            value: val
        }
    }

    static DECREAMENT() {
        return {
            type: 'DECREAMENT'
        }
    }

    static DECREAMENT_WITH_VALUE(val) {
        return {
            type: 'DECREAMENT_WITH_VALUE',
            value: val
        }
    }

    static DECREAMENT_WITH_USERINPUT(val){
         return {
            type: 'DECREAMENT_WITH_USERINPUT',
            value: val
        }
    }
}



