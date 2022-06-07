import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

function Formulario(props) {
  const { setGasto, setCrearGasto } = props;

  //state
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidadGasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === "") {
      setError(true);
      return;
    }

    //construir objeto de gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate(),
    };

    //pasar gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    //eliminar alerta
    setError(false);

    //resetear el form
    setNombreGasto("");
    setCantidadGasto("");
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2> Agrega tus gastos</h2>
      {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={(e) => setNombreGasto(e.target.value)}
          value={nombreGasto}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={(e) => setCantidadGasto(parseInt(e.target.value, 10))}
          value={cantidadGasto}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
}

export default Formulario;
