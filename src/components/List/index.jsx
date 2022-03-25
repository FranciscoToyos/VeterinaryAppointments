import Datos from "./Datos";

const ListadoPacientes = ({ datosPacientes = [], setDatosPaciente = () => {}, eliminarPaciente = () => {} }) => {
  const pacientes = datosPacientes.length > 1 ? "pacientes" : "paciente";

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">
        {datosPacientes.length === 0
          ? "No hay pacientes"
          : `Hay ${datosPacientes.length} ${pacientes}`}
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {datosPacientes.map((paciente) => {
        return <Datos paciente={paciente} key={paciente.id} setDatosPaciente={setDatosPaciente} eliminarPaciente={eliminarPaciente} />;
      })}
    </div>
  );
};

export default ListadoPacientes;
