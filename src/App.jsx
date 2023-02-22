import { useState } from "react";
import { ClickCounter } from "./ClickCounter";
import { GithubUser } from "./GithubUser";

export function App() {
    const [showCounter, setCounter] = useState(true)

    const toggleCounter = () => {
         setCounter(show => !show)
    }

    return (
        <div>
            {showCounter && <ClickCounter />}
            <button onClick={toggleCounter}>Toggle counter</button>
            <GithubUser />
        </div>
    )
}