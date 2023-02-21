import { useEffect, useState } from "react"

export function ClickCounter({ initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    const setCount = () => {
        setCounter(count => count + 1)
    }

    useEffect(() => {
         console.log(`The current value of the counter is ${counter}`)
    },[counter])

    return (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={setCount}>Start Counting</button>
        </div>
    )
}