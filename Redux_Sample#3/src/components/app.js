
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
        increament_with_value: ()=>{ Store.dispatch(ActionBundle.INCREAMENT_WITH_VALUE(4)) },
        decreament: ()=>{ Store.dispatch(ActionBundle.DECREAMENT()) },
        decreament_with_value: ()=>{ Store.dispatch(ActionBundle.DECREAMENT_WITH_VALUE(4)) }
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
                 <button onClick={this.props.increament_with_value}>increase with value 4</button>  
                 <br/><br/>                
                <button onClick={this.props.decreament}>decrease</button>
                 <br/><br/>    
                <button onClick={this.props.decreament_with_value}>decrease with value 4</button>  
                 <br/><br/>  
                
            </div>
        )
    }

}

export const MyApp = connect(mapStateToComp,mapDispatchToProps)(App);


