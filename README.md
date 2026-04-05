# ReviewLab---Plataforma-Colaborativa-de-Portafolios-Creativos
ReviewLab es una solución tecnológica diseñada para abordar la falta de retroalimentación estructurada en las plataformas de contenido visual actuales. Este sistema permite a los creadores gestionar portafolios digitales, recibir evaluaciones basadas en criterios objetivos y colaborar mediante propuestas de mejora técnica y versiones alternativas.

## Características Principales

### Para Creadores de Contenido
* [cite_start]**Gestión de Portafolio**: Permite crear, editar, visualizar y eliminar proyectos digitales de forma centralizada [cite: 424-427].
* [cite_start]**Contenido Multimedia**: Soporte para la inclusión de imágenes y descripciones detalladas mediante la integración con Cloudinary[cite: 428, 579].
* [cite_start]**Seguimiento de Evolución**: Acceso a un historial de versiones que permite rastrear la mejora continua de cada trabajo[cite: 437, 554].

### Para Evaluadores y Colaboradores
* [cite_start]**Retroalimentación Estructurada**: Sistema de evaluación con criterios predefinidos que supera los comentarios superficiales [cite: 341-342, 429].
* [cite_start]**Calificaciones y Comentarios**: Posibilidad de asignar puntajes y añadir observaciones obligatorias para una crítica constructiva [cite: 430-432, 507].
* [cite_start]**Propuestas de Mejora**: Funcionalidad para sugerir cambios directos y generar versiones alternativas de proyectos existentes [cite: 434-436, 525].

---

## Stack Tecnológico

[cite_start]El proyecto se basa en una arquitectura de tipo cliente-servidor para garantizar escalabilidad y seguridad[cite: 244, 563]:

| Capa / Área | Tecnología | Propósito |
| :--- | :--- | :--- |
| Frontend | React | [cite_start]Construcción de la interfaz de usuario reactiva[cite: 579]. |
| Backend | Node.js + Express | [cite_start]Gestión de lógica de negocio y API REST[cite: 579]. |
| Base de Datos | PostgreSQL | [cite_start]Almacenamiento relacional de datos[cite: 579]. |
| Autenticación | JWT | [cite_start]Control de acceso seguro mediante tokens[cite: 579]. |
| Multimedia | Cloudinary | [cite_start]Optimización y gestión de imágenes en la nube[cite: 579]. |
| Despliegue | Vercel / Render | [cite_start]Publicación continua del cliente y servidor[cite: 579]. |

---

## Arquitectura del Sistema

[cite_start]La solución emplea una arquitectura dividida en tres capas principales [cite: 245-248, 564-567]:
1. [cite_start]**Frontend (Capa de Presentación)**: Desarrollada en React, gestiona la interacción del usuario, los componentes y el estado global[cite: 246, 565].
2. [cite_start]**Backend (Capa de Lógica)**: Basada en Node.js, expone una API REST para procesar solicitudes y validar seguridad vía JWT[cite: 247, 566].
3. [cite_start]**Persistencia (Capa de Datos)**: PostgreSQL almacena de forma estructurada los usuarios, proyectos, evaluaciones y propuestas[cite: 248, 567].

---

## Metodología de Desarrollo

[cite_start]Se aplicó el marco de trabajo ágil Scrum, organizando el desarrollo en ciclos de valor de dos semanas denominados Sprints[cite: 375, 391]:

* [cite_start]**Roles**: El equipo cuenta con Product Owner, Scrum Master y un equipo de desarrollo técnico [cite: 386-388].
* [cite_start]**Ciclo de Vida**: El proyecto se estructuró en 6 Sprints que abarcan desde el análisis hasta el despliegue final [cite: 394-399].
* **Herramientas de Gestión**:
    * [cite_start]**Jira**: Seguimiento de tareas y tablero Scrum[cite: 406].
    * [cite_start]**GitHub**: Control de versiones y colaboración de código[cite: 409].
    * [cite_start]**Figma**: Prototipado y diseño de interfaz de usuario[cite: 410].

---

## Equipo de Trabajo

[cite_start]Este proyecto fue desarrollado como parte del programa de Ingeniería de Software en la Corporación Universitaria Iberoamericana[cite: 272, 273]:

* [cite_start]**Santiago Duque Mora** [cite: 275]
* [cite_start]**Yonathan Esleider Cuenu Mancilla** [cite: 276]
* [cite_start]**Carolina Franco Horta** [cite: 277]
* [cite_start]**Jhorman Leyner Tique Ojeda** [cite: 278]

[cite_start]**Docente**: Tatiana Lizbeth Cabrera Vargas[cite: 280].

---
[cite_start]*Este proyecto tiene fines académicos y profesionales, orientado a fortalecer el aprendizaje colaborativo en el sector creativo digital[cite: 318].*
