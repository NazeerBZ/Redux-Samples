
import React from 'react'
import {connect} from 'react-redux'
import {Store} from '../store/store.js'
import ActionBundle from '../actions/actions.js'


function mapStateToComp(state){

    return {
       incCounter: state.UpCounter,
       decCounter: state.DownCounter
    }
   
}

function mapDispatchToProps(dispatch){
    return {
        increament: ()=>{ Store.dispatch(ActionBundle.INCREAMENT()) },
        decreament: ()=>{ Store.dispatch(ActionBundle.DECREAMENT()) }
    }
}

class App extends React.Component{

    render(){
        return(
            <div>
                Counter: {this.props.incCounter + this.props.decCounter}
                <br/><br/>
                <button onClick={this.props.increament}>increase</button>  
                 <br/><br/>              
                <button onClick={this.props.decreament}>decrease</button>
                
            </div>
        )
    }

}

export const MyApp = connect(mapStateToComp,mapDispatchToProps)(App);


