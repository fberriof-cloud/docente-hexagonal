import axios from "axios";

const API_URL = "http://localhost:8080/docentes";

export const getDocentes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createDocente = async (docente) => {
  const response = await axios.post(API_URL, docente);
  return response.data;
};

export const updateDocente = async (id, docente) => {
  const response = await axios.put(`${API_URL}/${id}`, docente);
  return response.data;
};

export const deleteDocente = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
