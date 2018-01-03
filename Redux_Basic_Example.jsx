
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

class Counter extends React.Component{
    render(){

        const value = this.props.value;
        const increaseOnClick = this.props.increaseOnClick;    
        
        return (
            <div>
            <span>{value}</span>
            <button onClick={increaseOnClick}>increase</button>
            </div>
        )
    }
}

const increament = {
    type: 'INCREASE'
}

function counting(state = {count: 0}, action){

    switch(action.type){

        case 'INCREASE': return state = {count: ++state.count}
        default:  return state
    }

}

const Store = createStore(counting); 

function passStateToComp(state){
    return {
        value: state.count
    }    
}

function sentActionToReducer(dispatch){
    return {
         increaseOnClick: ()=> dispatch(increament)
    }     
}

const App = connect(passStateToComp, sentActionToReducer)(Counter)

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>
    ,document.getElementById("content"))















// React component
/*class Counter extends React.Component {

  render() {
    const value = this.props.value;
    const onIncreaseClick = this.props.onIncreaseClick;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}*/


// Action
// const increaseAction = { type: 'increase' }

// Reducer
// function counter(state = { count: 0 }, action) {
    
//   const incr = state.count
//   switch (action.type) {
//     case 'increase':
//       return state = {count: ++state.count}
//     default:
//       return state
//   }
// }

// Store
// const store = createStore(counter)

// // Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

// Map Redux actions to component props
// function mapDispatchToProps(dispatch) { 
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }

// Connected Component
/*const App = connect(mapStateToProps,mapDispatchToProps)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
)*/

