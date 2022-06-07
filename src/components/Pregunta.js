import { Fragment, useState } from "react";

function Pregunta(props) {
  const { setPresupuesto, setPreguntaPresupuesto } = props;
  //definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //validar presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //si se pasa la validación
    setError(false);
    setPresupuesto(cantidad);
    setPreguntaPresupuesto(false);
  };
  return (
    <Fragment>
      <h2> Coloca tu Presupuesto</h2>
      {error ? (
        <p className="alert alert-danger error">El presupuesto es incorrecto</p>
      ) : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          min="0"
          className="u-full-width"
          placeholder="Agrega tu Presupuesto"
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}

export default Pregunta;
