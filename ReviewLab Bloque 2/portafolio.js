// =============================================
//  portafolio.js — ReviewLab
//  Bloque 2: Funcionalidades 3 y 4
//  Patrón: Vanilla JS + localStorage
// =============================================

const STORAGE_KEY = "rl_projects";

// --- DOM refs ---
const form = document.getElementById("projectForm");
const projectsGrid = document.getElementById("projectsGrid");
const projectsCount = document.getElementById("projectsCount");
const imgUrlInput = document.getElementById("imgUrl");
const imgPreview = document.getElementById("imgPreview");

// =============================================
//  FUNCIONALIDAD 3 — Crear proyecto
// =============================================

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const imagen = imgUrlInput.value.trim();
  const categoria = document.getElementById("categoria").value;

  // Validación
  if (!titulo || !descripcion || !categoria) {
    showToast("⚠️ Completa todos los campos obligatorios");
    return;
  }

  const newProject = {
    id: Date.now(),
    titulo,
    descripcion,
    imagen_portada: imagen || "",
    categoria,
    fecha_creacion: new Date().toISOString(),
  };

  saveProject(newProject);
  form.reset();
  imgPreview.src = "";
  imgPreview.classList.remove("visible");
  renderProjects();
  showToast("✅ Proyecto guardado correctamente");

  // Scroll suave hacia la sección de proyectos
  document
    .getElementById("mis-proyectos")
    .scrollIntoView({ behavior: "smooth" });
});

function saveProject(project) {
  const projects = getProjects();
  projects.push(project);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

// =============================================
//  FUNCIONALIDAD 4 — Ver proyectos
// =============================================

function getProjects() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function renderProjects() {
  const projects = getProjects();

  // Actualizar contador
  projectsCount.textContent =
    projects.length === 1
      ? "1 proyecto"
      : `${projects.length} proyectos`;

  if (projects.length === 0) {
    projectsGrid.innerHTML = `
      <div class="col-12">
        <div class="empty-state">
          <div class="empty-state__icon">🗂️</div>
          <p class="empty-state__text">Aún no tienes proyectos.<br>¡Crea tu primero arriba!</p>
        </div>
      </div>
    `;
    return;
  }

  // Render dinámico — más recientes primero
  projectsGrid.innerHTML = projects
    .slice()
    .reverse()
    .map((p) => buildProjectCard(p))
    .join("");
}

function buildProjectCard(project) {
  const fecha = new Date(project.fecha_creacion).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const imgHtml = project.imagen_portada
    ? `<img src="${escapeHtml(project.imagen_portada)}" alt="${escapeHtml(project.titulo)}" onerror="this.parentElement.innerHTML='<span class=\\'project-card__img-placeholder\\'>🖼️</span>'">`
    : `<span class="project-card__img-placeholder">🖼️</span>`;

  return `
    <div class="col-sm-6 col-lg-4 mb-4">
      <div class="card project-card" data-id="${project.id}">
        <div class="project-card__img">
          ${imgHtml}
        </div>
        <div class="project-card__body">
          <span class="project-card__category">${escapeHtml(project.categoria)}</span>
          <h5 class="project-card__title">${escapeHtml(project.titulo)}</h5>
          <p class="project-card__desc">${escapeHtml(project.descripcion)}</p>
          <div class="project-card__footer">
            <span class="project-card__date">📅 ${fecha}</span>
            <button class="project-card__delete" onclick="deleteProject(${project.id})" title="Eliminar proyecto">
              🗑️ Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function deleteProject(id) {
  if (!confirm("¿Eliminar este proyecto?")) return;
  const projects = getProjects().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  renderProjects();
  showToast("🗑️ Proyecto eliminado");
}

// =============================================
//  UTILIDADES
// =============================================

// Preview de imagen en tiempo real
imgUrlInput.addEventListener("input", function () {
  const url = this.value.trim();
  if (url) {
    imgPreview.src = url;
    imgPreview.classList.add("visible");
    imgPreview.onerror = () => {
      imgPreview.classList.remove("visible");
    };
  } else {
    imgPreview.src = "";
    imgPreview.classList.remove("visible");
  }
});

// Sanitiza texto para evitar XSS al insertar innerHTML
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Toast de notificación (mismo UX que feedback)
function showToast(message) {
  const toast = document.getElementById("toastMsg");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

// =============================================
//  INIT
// =============================================
renderProjects();
