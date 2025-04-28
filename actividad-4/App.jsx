import './App.css'
import Saludo from './componentes/Saludo.jsx';
import Presentacion from './componentes/Presentacion';


function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Saludo nombre="Guada" />
      <Presentacion nombre="Guada" edad={20} profesion="Estudiante" />
    </>
  );
}


  

export default App
