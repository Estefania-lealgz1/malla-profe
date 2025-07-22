const materias = {
  "Cálculo": { year: 1, regular: [], aprobada: [] },
  "Intro. a la Matemática": { year: 1, regular: [], aprobada: [] },
  "Inglés I": { year: 1, regular: [], aprobada: [] },
  "Inglés II": { year: 1, regular: ["Inglés I"], aprobada: [] },
  "Física General": { year: 1, regular: ["Cálculo", "Intro. a la Matemática"], aprobada: [] },
  "Intro. al Álgebra Lineal": { year: 1, regular: ["Intro. a la Matemática"], aprobada: [] },

  "Cálculo II": { year: 2, regular: ["Cálculo I", "Intro. al Álgebra Lineal"], aprobada: [] },
  "Geometría Analítica": { year: 2, regular: ["Intro. al Álgebra Lineal"], aprobada: [] },

  "Cálculo III": { year: 3, regular: ["Cálculo II"], aprobada: ["Cálculo I"] },
  "Geometría Clásica": { year: 3, regular: ["Geometría Analítica"], aprobada: [] },

  "Intro. al Análisis I": {
    year: 3,
    regular: ["Cálculo II", "Intro. al Álgebra Lineal", "Geometría Analítica"],
    aprobada: [],
  },

  "Intro. a los Fundamentos de la Matemática": {
    year: 4,
    regular: ["Intro. al Análisis I", "Inglés II"],
    aprobada: [],
  },
};

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalRegular = document.getElementById("modal-regular");
const modalAprobada = document.getElementById("modal-aprobada");

closeModal.onclick = () => modal.classList.add("hidden");

function createMateria(nombre, info) {
  const btn = document.createElement("button");
  btn.className = "materia";
  btn.textContent = nombre;
  btn.onclick = () => {
    modalTitle.textContent = nombre;
    modalRegular.textContent = info.regular.join(", ") || "Ninguna";
    modalAprobada.textContent = info.aprobada.join(", ") || "Ninguna";
    modal.classList.remove("hidden");
  };
  return btn;
}

Object.entries(materias).forEach(([nombre, info]) => {
  const yearDiv = document.getElementById("year" + info.year);
  yearDiv.appendChild(createMateria(nombre, info));
});
