import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from './slice';

export default function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counterReducer.value)
    console.log("count" , count)
    const HandleIncrement = () => {
        dispatch(increment())
    }
    const HandleDecrement = () => {
        dispatch(decrement())
    }
    const HandleReset = () => {
        dispatch(reset())
    }
    return (
        <div style={{display:"flex" , justifyContent : "center" , marginTop: '5%'}}>

           <div style={{width : "20%" , height : "40%" , boxShadow : "0px 0px 5px black" , padding : "10px"}}>
              <h1>Counter : {count}</h1>
            <button onClick={HandleIncrement}>
                Increment
            </button>
            <button onClick={HandleDecrement}>
                Decrement
            </button>
            <button onClick={HandleReset}>
                Reset
            </button>
           </div>

        </div>
    )
}
