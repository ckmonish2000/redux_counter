import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import counterReducer from "./counter";
import LoggedinReducer from "./logged";
import {combineReducers,createStore} from "redux"

const allReducers=combineReducers({
        counterReducer,
        LoggedinReducer
    })

const store=createStore(allReducers);



reactDom.render(<App/>,document.getElementById("root"))