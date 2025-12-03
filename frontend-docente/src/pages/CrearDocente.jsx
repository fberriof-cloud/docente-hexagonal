import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDocente } from "../services/api";

const CrearDocente = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    aniosExperiencia: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        aniosExperiencia: Number(formData.aniosExperiencia || 0),
      };

      await createDocente(payload);

      alert("✅ Docente creado correctamente");
      navigate("/docentes");
    } catch (error) {
      console.error(error);
      alert("❌ Error al crear el docente. Revisa la consola.");
    }
  };

  const handleCancel = () => {
    navigate("/docentes");
  };

  return (
    <div className="app-container">
      <h1 className="page-title">Crear Docente</h1>

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
            Guardar
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

export default CrearDocente;
