import { useState, useEffect } from "react";
import { Movie } from "./../types/Movie";

export const Movies = () =>{
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
      loadMovies();
    }, [])

  // https://api.b7web.com.br/cinema/
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
   let res = await fetch('https://api.b7web.com.br/cinema/');
   let json = await res.json();
   setLoding(false);
   setMovies(json);
   
 }
  return (
    <div className=''>

      {loading &&
        <div>Carregando...</div>
      }
      
      <button className="block bg-green-900 text-white p-2 rounded" onClick={loadMovies}>Carregar Filmes</button>
      {!loading &&
      <div>Total de Filmes: {movies.length}</div>
      }
      <div>
        <div className="grid grid-cols-6 gap-3"></div>
            {movies.map((item, index) =>(
              <div key={index}>
                <img src={item.avatar} className="w-32 block" alt="aaa"/>
                <p>{item.titulo}</p> 
               </div>
            ))}
      </div>
    </div>
  );
}