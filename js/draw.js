// js/draw.js — Operaciones del mazo: shuffle + drawCards.
//
// Aleatoriedad: crypto.getRandomValues() (no Math.random()).
// El ensayo en Substack va a afirmar que la aleatoriedad es real. Tiene que serlo.
//
// drawCards también aleatoriza, por carta:
//   - orientacion: "derecha" | "invertida"  (50/50)
//   - interpretacion: "general" | "relacional"  (50/50)
//
// La interpretacion se sortea en el draw (no en el render), para que la misma
// tirada produzca el mismo set de textos al re-renderizar.

function _randomInt(maxExclusive) {
  // Entero uniforme en [0, maxExclusive). Usa crypto.getRandomValues.
  // Rejection sampling para evitar el sesgo del modulo.
  const max = 0x100000000; // 2^32
  const limit = max - (max % maxExclusive);
  const arr = new Uint32Array(1);
  let v;
  do {
    crypto.getRandomValues(arr);
    v = arr[0];
  } while (v >= limit);
  return v % maxExclusive;
}

function _coinFlip() {
  return _randomInt(2) === 0;
}

function shuffleDeck(deck) {
  // Fisher-Yates con crypto.getRandomValues. No muta el original.
  const out = deck.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = _randomInt(i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function drawCards(deck, n) {
  // Devuelve n objetos {card, orientacion, interpretacion}.
  // Sin reemplazo: las cartas son distintas.
  const shuffled = shuffleDeck(deck);
  const drawn = [];
  for (let i = 0; i < n; i++) {
    drawn.push({
      card: shuffled[i],
      orientacion: _coinFlip() ? "derecha" : "invertida",
      interpretacion: _coinFlip() ? "general" : "relacional"
    });
  }
  return drawn;
}
