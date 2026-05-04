// js/app.js — UI wiring. Sin estilo todavía; solo funcionalidad.
//
// Estado global mínimo:
//   STATE.idioma  — "es" | "en"
//   STATE.draw    — array de 3 cartas sorteadas o null
//   STATE.conIdx  — índices de los conectores elegidos para esta tirada
//
// El conIdx se fija al draw y se preserva al toggle de idioma, así la
// estructura narrativa (qué conector toca dónde) no cambia al traducir.

const STATE = {
  idioma: "es",
  draw: null,
  conIdx: null
};

const LABELS = {
  es: {
    drawButton:    "Tirar cartas",
    drawAgain:     "Tirar otra vez",
    langToggle:    "EN",
    posiciones:    ["Pasado", "Presente", "Futuro"],
    invertida:     " (invertida)",
    disclaimer:    "Una pieza de Marcos Fabián. Lee el ensayo →"
  },
  en: {
    drawButton:    "Draw cards",
    drawAgain:     "Draw again",
    langToggle:    "ES",
    posiciones:    ["Past", "Present", "Future"],
    invertida:     " (reversed)",
    disclaimer:    "A piece by Marcos Fabián. Read the essay →"
  }
};

function $(id) { return document.getElementById(id); }

function renderCards() {
  const container = $("cards");
  container.innerHTML = "";
  if (!STATE.draw) return;

  const L = LABELS[STATE.idioma];

  STATE.draw.forEach((d, i) => {
    const div = document.createElement("article");
    div.className = `card-block card-${d.orientacion}`;

    const pos = document.createElement("h2");
    pos.textContent = L.posiciones[i];
    div.appendChild(pos);

    const img = document.createElement("img");
    img.src = d.card.imagen;
    img.alt = d.card.nombre[STATE.idioma];
    if (d.orientacion === "invertida") {
      img.style.transform = "rotate(180deg)";
    }
    div.appendChild(img);

    const name = document.createElement("p");
    name.className = "card-name";
    const orientLabel = d.orientacion === "derecha" ? "" : L.invertida;
    name.textContent = d.card.nombre[STATE.idioma] + orientLabel;
    div.appendChild(name);

    const corto = document.createElement("p");
    corto.className = "card-corto";
    corto.textContent = getText(d, "corto", STATE.idioma);
    div.appendChild(corto);

    container.appendChild(div);
  });
}

function renderNarrative() {
  const container = $("narrative");
  container.innerHTML = "";
  if (!STATE.draw) return;

  const bloques = generarNarrativa(STATE.draw, STATE.idioma, STATE.conIdx);

  bloques.forEach(b => {
    const section = document.createElement("section");
    section.className = `narr-block narr-${b.posicion}`;

    const header = document.createElement("h3");
    header.textContent = b.conector ? `${b.conector}, ${b.marco}` : b.marco;
    section.appendChild(header);

    const p = document.createElement("p");
    p.textContent = b.largo;
    section.appendChild(p);

    container.appendChild(section);
  });
}

function applyLabels() {
  const L = LABELS[STATE.idioma];
  $("draw-button").textContent = STATE.draw ? L.drawAgain : L.drawButton;
  $("lang-toggle").textContent = L.langToggle;
  $("disclaimer").textContent = L.disclaimer;
  document.documentElement.lang = STATE.idioma;
}

function handleDraw() {
  STATE.draw = drawCards(DECK, 3);
  STATE.conIdx = elegirConectores();
  applyLabels();
  renderCards();
  renderNarrative();
}

function handleLangToggle() {
  STATE.idioma = STATE.idioma === "es" ? "en" : "es";
  applyLabels();
  renderCards();
  renderNarrative();
}

document.addEventListener("DOMContentLoaded", () => {
  $("draw-button").addEventListener("click", handleDraw);
  $("lang-toggle").addEventListener("click", handleLangToggle);
  applyLabels();
});
