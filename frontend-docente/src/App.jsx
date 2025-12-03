import { Routes, Route, Navigate } from "react-router-dom";
import ListarDocentes from "./pages/ListarDocentes";
import CrearDocente from "./pages/CrearDocente";
import EditarDocente from "./pages/EditarDocente";

function App() {
  return (
    <Routes>
      {/* Redirigir raíz a /docentes */}
      <Route path="/" element={<Navigate to="/docentes" />} />

      {/* Listado */}
      <Route path="/docentes" element={<ListarDocentes />} />

      {/* Crear */}
      <Route path="/docentes/nuevo" element={<CrearDocente />} />

      {/* Editar */}
      <Route path="/docentes/editar/:id" element={<EditarDocente />} />
    </Routes>
  );
}

export default App;
