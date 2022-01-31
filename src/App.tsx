
import './App.css'
import { useState } from 'react'
// https://alunos.b7web.com.br/curso/reactjs/react-ciclo-de-vida-do-componente
function App() {
  const [movies, setMovies] = useState([]);

  // https://api.b7web.com.br/cinema/
  return (
    <div className='container'>
      
      <button className='btn btn-outline-primary mt-3'>Carregar Filmes</button>
      <br />
      <p className='alert alert-success mt-3'>Total de Filmes: {movies.length}</p>
      <div>

      </div>
    </div>
  );
}

export default App;
