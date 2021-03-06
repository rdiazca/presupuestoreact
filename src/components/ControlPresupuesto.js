import { revisarPresupuesto } from "../helpers";
const ControlPresupuesto = ({ presupuesto, restante }) => (
  <>
    <div className="alert alert-primary">Presupuesto: ${presupuesto}</div>
    <div className={revisarPresupuesto(presupuesto, restante)}>
      Restante: ${restante}
    </div>
  </>
);

export default ControlPresupuesto;
