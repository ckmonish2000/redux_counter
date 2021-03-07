import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {incr,dcr,dbl} from "./actions"

export default function App() {
    const counter = useSelector(state=>state.counterReducer);
    const dispatch=useDispatch();

    return (
        <div>
            <h1>
                counter= {counter}
            </h1>

            <button onClick={()=>dispatch(incr())}>+</button>
            <button onClick={()=>dispatch(dcr())}>-</button>
            <button onClick={()=>dispatch(dbl())}>*</button>
        </div>
    )
}
