// ===== ESTADO GLOBAL =====
let filtroActual = "todas";

// ===== INICIALIZACIÓN =====
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("btnEnviar")
    .addEventListener("click", enviarPropuesta);

  document.querySelectorAll(".filtro").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtrar(btn.dataset.estado);
    });
  });

  // Delegación de eventos para botones dinámicos
  document.getElementById("listaPropuestas").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-aceptar")) {
      const id = Number(e.target.dataset.id);
      cambiarEstado(id, "aceptada");
    }

    if (e.target.classList.contains("btn-rechazar")) {
      const id = Number(e.target.dataset.id);
      cambiarEstado(id, "rechazada");
    }
  });

  renderPropuestas();
});

// ===== LOCAL STORAGE =====
function obtenerPropuestas() {
  return JSON.parse(localStorage.getItem("propuestas_mejora")) || [];
}

function guardarPropuestas(propuestas) {
  localStorage.setItem("propuestas_mejora", JSON.stringify(propuestas));
}

// ===== CREAR PROPUESTA =====
function enviarPropuesta() {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const prioridad = document.getElementById("prioridad").value;

  if (!titulo || !descripcion) {
    alert("Completa todos los campos");
    return;
  }

  const propuestas = obtenerPropuestas();

  const nueva = {
    id: Date.now(),
    titulo,
    descripcion,
    prioridad,
    estado: "pendiente",
    fecha: new Date().toISOString().split("T")[0],
  };

  propuestas.push(nueva);
  guardarPropuestas(propuestas);

  limpiarFormulario();
  renderPropuestas();
}

// ===== LIMPIAR FORM =====
function limpiarFormulario() {
  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("prioridad").value = "media";
}

// ===== RENDER =====
function renderPropuestas() {
  const contenedor = document.getElementById("listaPropuestas");
  const propuestas = obtenerPropuestas();

  contenedor.innerHTML = "";

  const filtradas = propuestas.filter((p) => {
    if (filtroActual === "todas") return true;
    return p.estado === filtroActual;
  });

  if (filtradas.length === 0) {
    contenedor.innerHTML =
      '<p class="text-center text-muted">No hay propuestas</p>';
    return;
  }

  filtradas.reverse().forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">

          <h5>${p.titulo}</h5>
          <p class="flex-grow-1">${p.descripcion}</p>

          <div class="mb-2">
            <span class="badge ${colorEstado(p.estado)}">${p.estado}</span>
            <span class="badge bg-dark">${p.prioridad}</span>
          </div>

          <small class="text-muted">${p.fecha}</small>

          <div class="mt-3 d-flex gap-2">
            <button data-id="${p.id}" class="btn btn-success btn-sm w-100 btn-aceptar">
              Aceptar
            </button>
            <button data-id="${p.id}" class="btn btn-danger btn-sm w-100 btn-rechazar">
              Rechazar
            </button>
          </div>

        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });
}

// ===== COLORES =====
function colorEstado(estado) {
  switch (estado) {
    case "pendiente":
      return "bg-secondary";
    case "en_revision":
      return "bg-warning text-dark";
    case "aceptada":
      return "bg-success";
    case "rechazada":
      return "bg-danger";
    default:
      return "bg-dark";
  }
}

// ===== CAMBIAR ESTADO =====
function cambiarEstado(id, nuevoEstado) {
  const propuestas = obtenerPropuestas();

  const index = propuestas.findIndex((p) => p.id === id);
  if (index !== -1) {
    propuestas[index].estado = nuevoEstado;
    guardarPropuestas(propuestas);
    renderPropuestas();
  }
}

// ===== FILTRO =====
function filtrar(estado) {
  filtroActual = estado;
  renderPropuestas();
}
