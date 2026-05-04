// js/narrative.js — Composición de output corto y largo.
//
// getText extrae el texto de una carta sorteada según versión e idioma.
// generarNarrativaCorta concatena los 3 cortos sin conectores.
// generarNarrativa devuelve una estructura por bloques (pasado/presente/futuro)
// con conector + marco temporal + largo. Cada largo se preserva tal cual fue
// escrito (autocontenido). El UI decide cómo render: párrafos, h3+p, etc.
// formatearNarrativa convierte la estructura a texto plano para print/debug.

function getText(drawn, version, idioma) {
  // drawn  = {card, orientacion, interpretacion}
  // version = "corto" | "largo"
  // idioma  = "es" | "en"
  return drawn.card[drawn.orientacion][drawn.interpretacion][version][idioma];
}

function _pickRandom(arr) {
  const a = new Uint32Array(1);
  crypto.getRandomValues(a);
  return arr[a[0] % arr.length];
}

function generarNarrativaCorta(draw, idioma) {
  // Tres oraciones cortas, una por carta, sin conectores.
  return draw.map(d => getText(d, "corto", idioma)).join(" ");
}

const _MARCOS = {
  es: { pasado: "En tu pasado.",    presente: "en el presente.", futuro: "el futuro." },
  en: { pasado: "In your past.",    presente: "in the present.", futuro: "the future." }
};

function generarNarrativa(draw, idioma) {
  // draw = [cartaPasado, cartaPresente, cartaFuturo]
  // Devuelve array de 3 bloques: { posicion, conector, marco, largo }.
  // - posicion: "pasado" | "presente" | "futuro"
  // - conector: null para pasado; string para presente y futuro.
  // - marco: frase temporal corta (sirve como header semántico).
  // - largo: el texto autocontenido de la carta, sin alterar.
  if (draw.length !== 3) {
    throw new Error("generarNarrativa needs exactly 3 cards");
  }
  const [a, b, c] = draw;
  const m = _MARCOS[idioma];
  return [
    {
      posicion: "pasado",
      conector: null,
      marco: m.pasado,
      largo: getText(a, "largo", idioma)
    },
    {
      posicion: "presente",
      conector: _pickRandom(CONECTORES[idioma].pasado_presente),
      marco: m.presente,
      largo: getText(b, "largo", idioma)
    },
    {
      posicion: "futuro",
      conector: _pickRandom(CONECTORES[idioma].presente_futuro),
      marco: m.futuro,
      largo: getText(c, "largo", idioma)
    }
  ];
}

function formatearNarrativa(bloques) {
  // Texto plano para imprimir o como fallback. UI rica usa la estructura.
  return bloques
    .map(b => {
      const header = b.conector ? `${b.conector}, ${b.marco}` : b.marco;
      return `${header}\n${b.largo}`;
    })
    .join("\n\n");
}
