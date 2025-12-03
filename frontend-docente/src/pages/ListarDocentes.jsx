import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDocentes, deleteDocente } from "../services/api";

const ListarDocentes = () => {
  const [docentes, setDocentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const cargarDocentes = async () => {
    try {
      const data = await getDocentes();
      setDocentes(data);
    } catch (error) {
      console.error(error);
      alert("❌ Error al cargar los docentes. Revisa la consola.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarDocentes();
  }, []);

  const handleCrear = () => {
    navigate("/docentes/nuevo");
  };

  const handleEliminar = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este docente?"
    );
    if (!confirmar) return;

    try {
      await deleteDocente(id);
      alert("✅ Docente eliminado correctamente.");
      cargarDocentes();
    } catch (error) {
      console.error(error);
      alert("❌ Error al eliminar el docente. Revisa la consola.");
    }
  };

  const handleEditar = (id) => {
    navigate(`/docentes/editar/${id}`);
  };

  return (
    <div className="app-container">
      <h1 className="page-title">Listado de Docentes</h1>

      <div className="top-bar">
        <button className="btn btn-primary" onClick={handleCrear}>
          <span>＋</span> Crear Docente
        </button>
      </div>

      {loading ? (
        <p className="text-muted">Cargando...</p>
      ) : docentes.length === 0 ? (
        <p className="text-muted">No hay docentes registrados.</p>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Años Experiencia</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {docentes.map((docente) => (
                <tr key={docente.id}>
                  <td>{docente.id}</td>
                  <td>{docente.nombre}</td>
                  <td>{docente.apellido}</td>
                  <td>{docente.email}</td>
                  <td>{docente.telefono}</td>
                  <td>{docente.aniosExperiencia}</td>
                  <td>
                    <button
                      className="btn btn-outline"
                      onClick={() => handleEditar(docente.id)}
                    >
                      ✏ Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "0.35rem" }}
                      onClick={() => handleEliminar(docente.id)}
                    >
                      🗑 Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListarDocentes;
