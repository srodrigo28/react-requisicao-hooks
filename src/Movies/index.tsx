import { useState } from "react";
import { Movie } from "./../types/Movie";

export const Movies = () =>{
    const [movies, setMovies] = useState<Movie[]>([]);

  // https://api.b7web.com.br/cinema/

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
  return (
    <div className=''>
      
      <button className="block bg-green-900 text-white p-2 rounded" onClick={loadMovies}>Carregar Filmes</button>
      <br />
      <p className="">Total de Filmes: {movies.length}</p>
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