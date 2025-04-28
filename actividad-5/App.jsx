import './App.css';
import Saludo from './componentes/Saludo.jsx';
import Presentacion from './componentes/Presentacion.jsx';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <p>Click on the Vite and React logos to learn more</p>
      <Saludo nombre="Guada" />
      <Presentacion nombre="Guada" edad={20} profesion="Estudiante" />
      <div className="flex items-center justify-center min-h-screen">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Hacer clic
        </button>
      </div>
    </>
  );
}

export default App;


  