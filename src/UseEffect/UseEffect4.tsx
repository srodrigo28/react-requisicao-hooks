import { useState } from "react"

export const UseEffect4 = () =>{
    const [counter, setCounter] = useState(0)
    const Adicionar = () =>{
        setCounter(counter + 1)
    }
    const Remover = () =>{
        if(counter <= 0 ){
            return
        }
        setCounter(counter - 1)
    }
    return(
        <div className="contador">
            <button className="btn btn-primary first" onClick={ Adicionar }>Adicionar</button>
            <h1>{counter}</h1>
            <button className="btn btn-danger" onClick={ Remover }>Remover</button>
        </div>
    )
}