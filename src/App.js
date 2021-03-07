import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {incr,dcr,dbl,Login,Logout} from "./actions"

export default function App() {
    const counter = useSelector(state=>state.counterReducer);
    const IsLoggedin=useSelector(state=>state.LoggedinReducer)
    const dispatch=useDispatch();

    return (
        <div>
           {IsLoggedin?
        ( <span>
            <h1>
                counter= {counter}
            </h1>

            <button onClick={()=>dispatch(incr())}>+</button>
            <button onClick={()=>dispatch(dcr())}>-</button>
            <button onClick={()=>dispatch(dbl())}>*</button>
            <br/>
            <br/>
            <button onClick={()=>dispatch(Logout())}>Logout</button>
        </span>):<button onClick={()=>dispatch(Login())}>Login</button>
        }
        </div>
    )
}
