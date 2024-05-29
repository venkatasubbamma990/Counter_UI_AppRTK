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
    const counterBoxStyle = {
        width: '24%',
        height: '300px',
        boxShadow: '0px 0px 5px black',
        padding: '10px',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Example linear gradient
        textAlign: 'center',
        display : "flex",
        flexDirection : "column",
       // justifyContent : "center",
        alignItems : "center",
        borderRadius : "10px",
        margin : "10px",
        color : "white",
      };

    const ButtonStyles = {
        padding: " 10px",
        width: "150px",
        border: "none",
        marginBottom: "10px",
        color : "white" , 
        borderRadius : "50px",
        fontWeight : "bold",
        boxShadow : "0px 0px 5px black",
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)'
    }
    const incstyles = {
        background: 'linear-gradient(to right, rgb(62 70 64), rgb(61, 124, 91))'
    }
    const decstyles = {
        background: 'linear-gradient(to right, rgb(86 70 67), rgb(204 25 90))',
    }
    const resetstyles = {
        background: 'linear-gradient(to right, rgb(77 70 68), rgb(45 156 158))',
    }
    const h1Styles = {
        color : "white",
        fontSize : "30px",
        fontWeight : "bold",
        margin : "10px",
        padding : "10px",
        textAlign : "center",
        textShadow : "2px 2px 4px black",
        textTransform : "uppercase",
        letterSpacing : "2px",
        //textDecoration : "underline",
        textDecorationColor : "white",
        textDecorationStyle : "solid",
        textDecorationThickness : "1px",
       // textDecorationLine : "underline",
        textDecorationSkipInk : "none",
        textDecorationSkip : "none",
        textDecorationSkipInk : "none",
        marginBottom :"30px"
    }


    return (
        <div style={{display:"flex" , justifyContent : "center" , marginTop: '5%'}}>

           <div style={counterBoxStyle}>
           <h1 style={h1Styles}>Counter : {count}</h1>
            <button onClick={HandleIncrement} style={{...ButtonStyles , ...incstyles}}>
                Increment
            </button>
            <button onClick={HandleDecrement} style={{...ButtonStyles , ...decstyles}}>
                Decrement
            </button>
            <button onClick={HandleReset} style={{...ButtonStyles , ...resetstyles}}>
                Reset
            </button>
           </div>

        </div>
    )
}
