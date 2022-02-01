import { useState, useEffect } from "react";
import { User } from "./../types/User";

export const Users = () =>{
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
      loadMovies();
    }, [])

  // https://api.b7web.com.br/cinema/
  // http://localhost:3001/users/
  // http://localhost/www/api_php/users/users.php/records/
/*** 
  const loadMovies = () =>{
    fetch('https://api.b7web.com.br/cinema/')
    .then((res) =>{
      return res.json()
    })
    .then((json) =>{
      setMovies(json);
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  */
 const loadMovies = async () =>{
   setLoding(true);
   let res = await fetch('http://localhost:3001/users/');
   let json = await res.json();
   setLoding(false);
   setUsers(json);
   
 }
  return (
    <div className=''>

      {loading &&
        <div>Carregando...</div>
      }
      
      {!loading &&
      <div>Total de Registros: {users.length}</div>
      }
      
      <div>
        <div className="grid grid-cols-6 gap-3"></div>
            {users.map((item, index) =>(
              <div key={index}>
                <p>{item.name} - <span>{item.email}</span></p> 
               </div>
            ))}
      </div>
    </div>
  );
}