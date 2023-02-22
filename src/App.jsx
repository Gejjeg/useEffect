import { useState } from "react";
import { ClickCounter } from "./ClickCounter";

export function App() {
    const [showCounter, setCounter] = useState(true)

    const toggleCounter = () => {
         setCounter(show => !show)
    }

    return (
        <div>
            {showCounter && <ClickCounter />}
            <button onClick={toggleCounter}>Toggle counter</button>
        </div>
    )
}