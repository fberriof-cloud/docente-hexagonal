# 📚 Proyecto Docente – Arquitectura Hexagonal

Este proyecto implementa un sistema de gestión de docentes utilizando **Arquitectura Hexagonal (Ports & Adapters)** en el backend con **Java + Spring Boot**, y un frontend moderno construido con **React + Vite**.

El objetivo principal es aplicar buenas prácticas de diseño, separación de responsabilidades y un enfoque limpio para el dominio.

---

## 🚀 Tecnologías utilizadas

### 🧩 Backend (Java)
- Java 17  
- Spring Boot  
- Arquitectura Hexagonal  
- H2 Database  
- JPA / Hibernate  
- Maven  

### 🎨 Frontend (React)
- React 18  
- Vite  
- React Router  
- Axios  

---

## 🏗️ Arquitectura Hexagonal

El proyecto está dividido en las siguientes capas:

### 🔸 **Domain (Núcleo de negocio)**
Contiene:
- Entidad `Docente`
- Reglas del negocio
- Interfaces de entrada y salida (Ports)

### 🔸 **Application**
Gestiona los casos de uso:
- Crear Docente  
- Actualizar Docente  
- Eliminar Docente  
- Listar Docentes  

### 🔸 **Infrastructure**
Implementa los adapters:
- REST Controller (entrada)
- JPA Repository (salida)
- Mappers entre DTO ↔ Dominio ↔ Entidad

---

## 🧪 Endpoints Principales (REST API)

| Método | Endpoint | Descripción |
|-------|----------|-------------|
| GET | `/docentes` | Lista todos los docentes |
| POST | `/docentes` | Crea un nuevo docente |
| GET | `/docentes/{id}` | Obtiene un docente por ID |
| PUT | `/docentes/{id}` | Actualiza un docente |
| DELETE | `/docentes/{id}` | Elimina un docente |

---

## 🗄️ Base de Datos – H2

URL de consola H2: http://localhost:8080/h2-console

---

## Como Ejecutar el Proyecto 
### ⏯️**Backend**

ternminal 
cd docente-hexagonal 
**mvn spring-boot:run** 

### Backend corre en: 
**http://localhost:8080**

---

## ⏯️ Frontend

terminal 
cd frontend-docente
**npm install**
**npm run dev**

### Frontend corre en:
**http://localhost:5173**





