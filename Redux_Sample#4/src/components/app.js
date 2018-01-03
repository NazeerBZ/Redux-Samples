
import React from 'react'
import { connect } from 'react-redux'
import { Store } from '../store/store.js'
import ActionBundle from '../actions/actions.js'


function mapStateToComp(state) {

    return {
        incCounter: state.UpCounter,
        decCounter: state.DownCounter
    }

}

function mapDispatchToProps(dispatch) {
    return {
        increament: () => { Store.dispatch(ActionBundle.INCREAMENT()) },
        increament_with_value: () => { Store.dispatch(ActionBundle.INCREAMENT_WITH_VALUE(4)) },
        increament_with_userinput: (v)=>{ Store.dispatch(ActionBundle.INCREAMENT_WITH_USERINPUT(v)) },
        decreament: () => { Store.dispatch(ActionBundle.DECREAMENT()) },
        decreament_with_value: () => { Store.dispatch(ActionBundle.DECREAMENT_WITH_VALUE(4)) },
        decreament_with_userinput: (v)=>{ Store.dispatch(ActionBundle.DECREAMENT_WITH_USERINPUT(v)) }
    }
}

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInput: 0
        }
    }


    getText(event) {
        var val = parseInt(event.target.value, 0); // I put 0 due to WARNING: warning  Missing radix parameter  radix
        this.setState({
            userInput: val
        })
    }

    userIncreament(){
        this.props.increament_with_userinput(this.state.userInput);
    }

    userDecrement(){
        this.props.decreament_with_userinput(this.state.userInput);
    }

    render() {
        return (
            <div>
                Counter: {this.props.incCounter + this.props.decCounter}
                <br /><br />
                <input type="text" onChange={this.getText.bind(this)} />
                <br /><br />
                <button onClick={this.props.increament}>increase</button>
                <br /><br />
                <button onClick={this.props.increament_with_value}>increase with value 4</button>
                <br /><br />
                <button onClick={this.userIncreament.bind(this)}>increase with User Value</button>
                <br /><br />
                <button onClick={this.props.decreament}>decrease</button>
                <br /><br />
                <button onClick={this.props.decreament_with_value}>decrease with value 4</button>
                <br /><br />
                <button onClick={this.userDecrement.bind(this)}>decrement with User Value</button>
                <br /><br />

            </div>
        )
    }

}

export const MyApp = connect(mapStateToComp, mapDispatchToProps)(App);


