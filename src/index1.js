import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import {createStore} from "redux"


// action => describes what you want to do
const increment=()=>{
    return {
        type:"Increment",
    }
}

const decrement=()=>{
    return {
        type:"Decrement",
    }
}

// reducer => explains what happens to the state on action
const counter=(state=0,action)=>{
    switch(action.type){
        case "Increment": return state+1;
        case "Decrement":return state-1;
    }
}

// store => is a global state

let store=createStore(counter)

store.subscribe(()=>{console.log(store.getState())})
// Dispatch =>execute the actio to reducer
store.dispatch(increment())



reactDom.render(<App/>,document.getElementById("root"))