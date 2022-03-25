import { useEffect, useState } from "react";
import { Form, Header, ListadoPacientes } from "./components";

function App() {
  // State's
  const [datosPacientes, setDatosPacientes] = useState([]);
  const [datoPaciente, setDatosPaciente] = useState({});

  
  // Init

  useEffect(() => {
    obtenerLocalS()
  },[])

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(datosPacientes))
  }, [datosPacientes])


  const obtenerLocalS = () => {
    const pacientesLocalS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    setDatosPacientes(pacientesLocalS)
  }

  // Handle Delete paciente
  const eliminarPaciente = (id) => {
    const eliminarPaciente = datosPacientes.filter((elem) => elem.id !== id);

    setDatosPacientes(eliminarPaciente);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          datosPacientes={datosPacientes}
          setDatosPacientes={setDatosPacientes}
          datoPaciente={datoPaciente}
          setDatosPaciente={setDatosPaciente}
        />
        <ListadoPacientes
          datosPacientes={datosPacientes}
          setDatosPaciente={setDatosPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
