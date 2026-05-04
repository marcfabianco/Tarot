// js/connectors.js — Frases puente para tejer el output narrativo de 3 cartas.
//
// Cuatro arrays: 2 slots temporales × 2 idiomas. Se eligen al azar en cada
// render, dando variación entre tiradas sin recurrir a un LLM. Coherente con
// la regla "no LLM" del proyecto.
//
// Nota epistémica: estos conectores son el dispositivo causal de la narrativa.
// "Por eso" convierte coincidencia en consecuencia. La página los usa para
// la experiencia mística; el ensayo en Substack los deconstruye.

const CONECTORES = {
  es: {
    pasado_presente: [
      "Por eso",
      "Como consecuencia",
      "Como resultado",
      "Por ese motivo",
      "A partir de ahí",
      "En esa línea",
      "Sobre esa base"
    ],
    presente_futuro: [
      "En consecuencia",
      "Por esa razón",
      "Y precisamente por ello",
      "De ese modo",
      "Por todo eso",
      "En esa proyección",
      "Como continuación"
    ]
  },
  en: {
    pasado_presente: [
      "That is why",
      "As a result",
      "Hence",
      "Following from that",
      "From that",
      "On that thread",
      "Carried forward"
    ],
    presente_futuro: [
      "Therefore",
      "For that reason",
      "And precisely for that reason",
      "From here",
      "On that trajectory",
      "Looking ahead",
      "Following the same line"
    ]
  }
};
