import { ChangeEvent, useEffect, useState } from "react"

export const UseEffect5 = () =>{
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
    const [obs, setObs] = useState('')

    useEffect(() => {
        setFullName(`${name} ${lastName} ${obs}`);
    }, [name, lastName, obs]);

    const PegaNome = (e: ChangeEvent<HTMLInputElement>) => {
        setName( e.target.value);
    }
    const PegaSobreNome = (e: ChangeEvent<HTMLInputElement>) =>{
        setLastName( e.target.value);
    }
    const PegaObs = (e: ChangeEvent<HTMLInputElement>) =>{
        setObs( e.target.value);
    }

    return(
        <div className="contador p-3">
            <p>Nome Completo: {fullName}</p>
            <label>Nome:</label>
            <input type="text" value={name} onChange={PegaNome} className="form-control" />
            <br />
            <label>Sobre Nome</label>
            <input type="text" value={lastName} onChange={PegaSobreNome} className="form-control" />
            <br />
            <label>Observação</label>
            <input type="text" value={obs} onChange={PegaObs} className="form-control" />
        </div>
    )
}