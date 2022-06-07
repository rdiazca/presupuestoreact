import { useState } from "react";
import Pregunta from "./components/Pregunta";

function App() {
  //state
  const [presupuesto, setPresupuesto] = useState(0);
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {preguntaPresupuesto ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setPreguntaPresupuesto={setPreguntaPresupuesto}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <p>Formulario aqui</p>
              </div>
              <div className="one-half column"></div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;