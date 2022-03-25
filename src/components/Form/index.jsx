import { useState, useEffect } from "react";
import { Errors } from "..";

const Form = ({
  datosPacientes = [],
  setDatosPacientes = () => {},
  datoPaciente = {},
  setDatosPaciente = () => {},
}) => {
  // State's
  const [nombre, setNombre] = useState("");
  const [dueño, setDueño] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintoma, setSintoma] = useState("");

  const [error, setError] = useState(false);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    //Validación

    if ([nombre, dueño, email, fecha, sintoma].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);
      return;
    }

    setError(false);

    const objPaciente = {
      nombre,
      dueño,
      email,
      fecha,
      sintoma,
    };

    if (datoPaciente.id) {
      objPaciente.id = datoPaciente.id;

      const pacienteActualizado = datosPacientes.map((pacienteState) =>
        pacienteState.id === datoPaciente.id ? objPaciente : pacienteState
      );

      setDatosPacientes(pacienteActualizado);

      setDatosPaciente({});
    } else {
      objPaciente.id = generarId();
      setDatosPacientes([...datosPacientes, objPaciente]);
    }

    //Reiniciar form
    setNombre("");
    setDueño("");
    setEmail("");
    setFecha("");
    setSintoma("");
  };

  useEffect(() => {
    if (!!datoPaciente) {
      setNombre(datoPaciente.nombre);
      setDueño(datoPaciente.dueño);
      setEmail(datoPaciente.email);
      setFecha(datoPaciente.fecha);
      setSintoma(datoPaciente.sintoma);
    }
  }, [datoPaciente]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5"
        onSubmit={handleSubmit}
      >
        {error && <Errors mensaje="Todos los campos son obligatorios" />}

        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre de la mascota"
            value={nombre}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(evt) => setNombre(evt.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="dueño"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Dueño
          </label>
          <input
            id="dueño"
            name="dueño"
            type="text"
            value={dueño}
            placeholder="Nombre del Dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(evt) => setDueño(evt.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email del Dueño
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="Email del Dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            name="alta"
            value={fecha}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            onChange={(evt) => setFecha(evt.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            name="sintomas"
            value={sintoma}
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los síntomas"
            onChange={(evt) => setSintoma(evt.target.value)}
          />
        </div>

        <input
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value={datoPaciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};
export default Form;
