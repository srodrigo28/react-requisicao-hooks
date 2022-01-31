import { useState } from "react"

export const UseEffect2 = () =>{
    const [counter, setCounter] = useState(0)
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={ ()=> setCounter(counter + 1) }>Adicionar</button>
            <button onClick={ ()=> setCounter(counter - 1) }>Remover</button>
        </div>
    )
}