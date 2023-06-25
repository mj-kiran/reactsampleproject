import { useState } from "react";

function Counter() {
    // const [data,setData]=useState()



    const [initialstate, setState] = useState(1)
    const [num, setNum] = useState(19)

    function increment() {
        setState(initialstate + 1)

    }
    function decrement() {
        setNum(num - 1)
    }
    function reset() {
        setState(1)
        setNum(19)
    }
    return (

        <div >

            <h1>{initialstate}</h1>
            <h1>{num}</h1>
            <button onClick={increment}>click me!!</button>
            <button onClick={decrement}>Press here......</button>
            <button onClick={reset}>reset/////</button>
        </div>

    );
}
export default Counter;