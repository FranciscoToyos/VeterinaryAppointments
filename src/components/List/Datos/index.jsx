import React from "react";

const Datos = ({
  paciente = {},
  setDatosPaciente = () => {},
  eliminarPaciente = () => {},
}) => {
  const { nombre, dueño, email, fecha, sintoma, id } = paciente;

  const handleDelete = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 my-10">
      <>
        <p className="font-bold mb-3 text-grey-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">
          Dueño: {""}
          <span className="font-normal normal-case">{dueño}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">
          Fecha alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-grey-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">{sintoma}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            onClick={() => setDatosPaciente(paciente)}
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          >
            Editar
          </button>

          <button
            onClick={handleDelete}
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          >
            Eliminar
          </button>
        </div>
      </>
    </div>
  );
};

export default Datos;
