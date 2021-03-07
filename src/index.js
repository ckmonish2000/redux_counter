import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import counterReducer from "./counter";
import LoggedinReducer from "./logged";
import {combineReducers,createStore} from "redux"
import {Provider} from "react-redux"


// combining all reducers
const allReducers=combineReducers({
        counterReducer,
        LoggedinReducer
    })

// store 
const store=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



reactDom.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById("root"))