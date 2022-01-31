import { useEffect, useState } from "react";

export const UseEffect1 = () =>{
    const [name, setName] = useState('Yasmin');

    useEffect(() => {
        alert("Executou!")
    }, [name])

    const haddleClick = () =>{
        setName('Pedro')
    }
    return(
        <div>
            Nome: {name} <br /><hr />
            <button onClick={haddleClick}>Cliqui Aqui</button>
        </div>
    )
}