import Gasto from "./Gasto";
function Listado({ gastos }) {
  return (
    <div className="gastos-realizados">
      <h2> Listados</h2>
      {gastos.map((gasto) => (
        <Gasto key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
}
export default Listado;
