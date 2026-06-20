# ReviewLab — Entrega Académica

## Descripción

**ReviewLab** es una plataforma colaborativa donde creadores pueden compartir proyectos creativos y recibir evaluaciones constructivas de la comunidad.

## Funcionalidad

El flujo principal permite:
```
Registro → Login → Crear Proyecto → Visualizar Proyecto
```

## Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Frontend | React 18 + Vite |
| Backend | Node.js + Express |
| Base de Datos | PostgreSQL |
| Autenticación | JWT |

## Estructura del Proyecto

```
ReviewLab/
├── client/          # Frontend React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── services/
│   ├── index.html
│   └── package.json
├── server/          # Backend Express
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middlewares/
│   │   ├── models/
│   │   └── routes/
│   ├── .env.example
│   └── package.json
└── README.md
```

## Instalación y Ejecución

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`
