import { useState } from "react"

export const UseEffect3 = () =>{
    const [counter, setCounter] = useState(0)
    const Adicionar = () =>{
        setCounter(counter + 1)
    }
    const Remover = () =>{
        setCounter(counter - 1)
    }
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={ Adicionar }>Adicionar</button>
            <button onClick={ Remover }>Remover</button>
        </div>
    )
}