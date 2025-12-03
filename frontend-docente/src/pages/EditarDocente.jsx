import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDocentes, updateDocente } from "../services/api";

const EditarDocente = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    aniosExperiencia: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarDocente = async () => {
      try {
        const data = await getDocentes();
        const encontrado = data.find((d) => d.id === Number(id));

        if (!encontrado) {
          alert("Docente no encontrado");
          navigate("/docentes");
          return;
        }

        setFormData(encontrado);
      } catch (error) {
        console.error(error);
        alert("Error al cargar los datos del docente");
        navigate("/docentes");
      } finally {
        setLoading(false);
      }
    };

    cargarDocente();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "aniosExperiencia" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDocente(id, formData);
      alert("✅ Docente actualizado correctamente");
      navigate("/docentes");
    } catch (error) {
      console.error(error);
      alert("❌ Error al actualizar el docente");
    }
  };

  const handleCancel = () => {
    navigate("/docentes");
  };

  if (loading) {
    return (
      <div className="app-container">
        <p className="text-muted">Cargando datos del docente...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="page-title">Editar Docente</h1>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Años de experiencia:</label>
          <input
            type="number"
            name="aniosExperiencia"
            value={formData.aniosExperiencia}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Guardar cambios
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarDocente;
