# ReviewLab — Bloque 2: Portafolios

## Descripción

Módulo de portafolios para ReviewLab. Permite crear proyectos con título, descripción e imagen, y visualizarlos en una interfaz web.

## Estructura

```
backend/
  server.js          ← Servidor Express + API + base de datos (JSON)
  package.json
  data.json          ← Datos persistentes (auto-generado)
frontend/
  index.html         ← Lista de proyectos
  crear.html         ← Formulario de creación
  detalle.html       ← Vista de detalle
  css/styles.css
  js/app.js          ← Utilidades compartidas
  js/index.js        ← Lógica de lista
  js/crear.js        ← Lógica de formulario
  js/detalle.js      ← Lógica de detalle
```

## Instalación

```bash
cd backend
npm install
```

## Ejecución

```bash
npm run dev    # desarrollo con nodemon
npm start      # producción
```

## API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/projects` | Listar proyectos |
| GET | `/api/projects/:id` | Ver un proyecto |
| POST | `/api/projects` | Crear proyecto |

### Crear proyecto (POST)

```json
{
  "title": "Mi Proyecto",
  "description": "Descripción del proyecto",
  "image_url": "https://..."
}
```

## Tecnologías

- **Backend:** Node.js + Express
- **Frontend:** HTML + CSS + JavaScript vanilla
- **Datos:** JSON file (sin base de datos externa)
- Enlace a vista de detalle de cada proyecto

### Vista de Detalle

Al hacer clic en un proyecto se muestra:
- Imagen completa del proyecto
- Título y fecha de creación
- Descripción completa
- Botón para volver a la lista

### Código relevante

**Frontend:**
- `frontend/src/pages/ProjectsPage.jsx` — Lista de proyectos
- `frontend/src/pages/ProjectDetailPage.jsx` — Vista de detalle
- `frontend/src/components/ProjectCard.jsx` — Tarjeta reutilizable

**Backend:**
- `backend/src/controllers/project.controller.js` → `listProjects`, `getProjectDetail`
- `backend/src/models/project.model.js` → `getAll`, `getById`

---

## Endpoints API

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/projects` | Crear nuevo proyecto |
| GET | `/api/projects` | Listar todos los proyectos |
| GET | `/api/projects/:id` | Obtener detalle de un proyecto |

### Ejemplo de respuesta — Crear proyecto

```json
{
  "status": "success",
  "message": "Project created successfully",
  "project": {
    "id": 1,
    "title": "Mi Proyecto",
    "description": "Descripción del proyecto",
    "image_url": "https://ejemplo.com/imagen.jpg",
    "created_at": "2026-05-01T21:00:00.000Z",
    "updated_at": "2026-05-01T21:00:00.000Z"
  }
}
```

### Ejemplo de respuesta — Listar proyectos

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "Mi Proyecto",
      "description": "Descripción del proyecto",
      "image_url": "https://ejemplo.com/imagen.jpg",
      "created_at": "2026-05-01T21:00:00.000Z",
      "updated_at": "2026-05-01T21:00:00.000Z"
    }
  ],
  "count": 1
}
```

---

## Estructura del Proyecto

```
reviewlab-portfolios/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── mockDatabase.js
│   │   ├── models/
│   │   │   ── project.model.js
│   │   ├── controllers/
│   │   │   └── project.controller.js
│   │   ├── routes/
│   │   │   └── project.routes.js
│   │   ├── middlewares/
│   │   │   └── error.middleware.js
│   │   ├── app.js
│   │   └── server.js
│   ├── data.json
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── CreateProjectPage.jsx
│   │   │   └── ProjectDetailPage.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── projectService.js
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── README.md
└── .gitignore
```

---

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | React 18, Vite, React Router, Axios |
| Backend | Node.js, Express, express-validator |
| Base de datos | Archivo JSON (mockDatabase) |
| Estilos | CSS personalizado |

---

## Ejecución

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor disponible en: http://localhost:3000

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplicación disponible en: http://localhost:5174

---

## Capturas de Pantalla

### Lista de Proyectos (vacía)
> Muestra el estado vacío con mensaje "No hay proyectos todavía" y botón para crear uno.

### Crear Proyecto
> Formulario con campos: Título, Descripción, Imagen (URL).

### Detalle de Proyecto
> Vista completa con imagen, título, fecha y descripción.
