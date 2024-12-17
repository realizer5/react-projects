import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const increaseValue = () => {
        if (count < 20) {
            setCount(count + 1)
        }
    }
    const decreaseValue = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div>Counter : {count}</div>
            <br />
            <button onClick={increaseValue}>Increase count </button>
            <br />
            <br />
            <button onClick={decreaseValue}>Decrease count </button>
        </>
    )
}

export default App
