# Tarot — Plan de Implementación

**Objetivo:** Construir un juego de tarot web que se presenta como una experiencia mística pura. Acompaña a un post de Substack que, separadamente, deconstruye el juego como ilustración de narrative fallacy, regresión espuria y construcción de significado a partir del azar.

**Stack:** HTML + CSS + JavaScript vanilla. Archivos estáticos en GitHub Pages.

**Tipo de tirada (v1):** Tres cartas — pasado / presente / futuro.

---

## Decisión arquitectónica clave (mayo 2026)

El proyecto tiene **dos piezas separadas** que cumplen funciones distintas:

- **La página web (este repo)** → presenta el juego como tarot directo. Sin meta-comentario, sin sección educativa colapsable, sin "ven aquí está el truco". El usuario entra, tira las cartas, lee la lectura. La atmósfera es mística.
- **El post de Substack (separado)** → contiene la deconstrucción: aleatoriedad real, plantillas, narrative fallacy, Granger-Newbold, efecto Barnum.

La página tiene únicamente un disclaimer discreto (footer o esquina) con un link al ensayo. Algo como: *"Una pieza de [autor]. Lee el ensayo →"*.

**Por qué este orden importa:** el lector vive la magia primero, después lee el ensayo que revela el mecanismo. Si la página preempt el reveal, el ensayo pierde fuerza.

---

## Filosofía de diseño

Tres principios duros que sobreviven el cambio arquitectónico:

1. **Plantillas, no LLM.** Las narrativas se generan por composición de plantillas + textos pre-escritos. No hay llamadas a ningún modelo de lenguaje. *Razón:* el ensayo del Substack va a afirmar esto literalmente. Tiene que ser verdad.
2. **Aleatoriedad honesta.** `crypto.getRandomValues()`, no `Math.random()`. Misma razón.
3. **Código en repo público.** Cualquiera con curiosidad puede ver el `deck.js`, el shuffle, todo. La transparencia *está disponible* aunque la página no la *exhiba*.

---

## Stage 0 — Setup del repo ✅

- [x] Repo en GitHub: https://github.com/marcfabianco/Tarot
- [x] `.gitignore` (incluye `references/`, drafts `.docx`, archivos del SO)
- [x] `README.md` stub
- [x] `assets/images/cards/` con las 78 cartas RWS (dominio público) + atribución
- [ ] `index.html` placeholder
- [ ] Activar GitHub Pages → `https://marcfabianco.github.io/Tarot/`

---

## Stage 1 — Estructura de datos del mazo

**Objetivo:** Tener las 78 cartas codificadas con sus interpretaciones antes de tocar UI.

**Archivo:** `js/deck.js`, exporta `const DECK = [...]`. Se carga vía `<script src>` desde `index.html` (no requiere `fetch`, doble click al HTML funciona localmente).

**Razón del archivo separado:** conveniencia de edición. Editar una carta = abrir un archivo, modificar dos líneas. No mezclar datos con presentación.

### Dos interpretaciones por carta-orientación

Cada carta-orientación tiene **dos interpretaciones distintas**:

- `general` — la lectura amplia, aplicable a cualquier momento de vida.
- `relacional` — enfoque en relaciones afectivas y dinero/finanzas.

En cada tirada, el sistema **elige aleatoriamente** cuál de las dos mostrar para cada carta. Esto significa que la misma tirada (mismas 3 cartas, mismas orientaciones) produce lecturas distintas en momentos distintos. Es deliberado — agrega variedad y refuerza la sensación de que cada lectura es "única."

### Estructura bilingüe lista desde el inicio

El proyecto será bilingüe (español + inglés) con un toggle en la UI. **v1 escribimos español; inglés viene después como segunda pasada.** El JSON ya contempla los dos campos para no refactorizar después — el campo `en` queda como `null` o string vacío hasta que se llene.

### Estructura por carta

```js
{
  id: "major_12",
  nombre: { es: "El Colgado", en: "The Hanged Man" },
  arcano: "mayor",                  // o "menor"
  palo: null,                        // o "copas" | "bastos" | "espadas" | "oros"
  numero: 12,
  imagen: "assets/images/cards/major_12.jpg",
  derecha: {
    general: {
      corto: { es: "...", en: null },     // 1-2 oraciones
      largo: { es: "...", en: null }      // 4 oraciones
    },
    relacional: {
      corto: { es: "...", en: null },
      largo: { es: "...", en: null }
    }
  },
  invertida: {
    general: {
      corto: { es: "...", en: null },
      largo: { es: "...", en: null }
    },
    relacional: {
      corto: { es: "...", en: null },
      largo: { es: "...", en: null }
    }
  },
  fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
}
```

### Total a escribir

| Versión | Textos |
|---|---|
| **v1 — solo español** | 78 cartas × 2 orientaciones × 2 interpretaciones × 2 versiones (corto + largo) = **624 textos** |
| **v2 — bilingüe** (agrega inglés) | × 2 idiomas = **1.248 textos** |

### Tono

- Lenguaje claro y accesible. Sin metáforas opacas que requieran definición.
- No infantilizar, no técnico, no místico-denso.
- `general` es realmente general — aplicable a cualquier persona.
- `relacional` se enfoca en vínculos afectivos y dimensión material/financiera, pero sin asumir situaciones específicas (no asumir que el lector tiene pareja, deuda, trabajo asalariado, etc.).

### Convenciones

- Numeración Waite: Fuerza = 8, Justicia = 11.
- Nombres en español: **pendiente decidir** (variantes existen: "El Colgado" vs "El Ahorcado", "Sota" vs "Paje", etc.).
- Nombres en inglés: estándar RWS (The Fool, The Magician, etc.) — sin variantes contenciosas.

**Validación:** `DECK.length === 78`. Cada carta tiene los 8 textos en español completos. Inglés puede quedar `null` en v1.

---

## Stage 2 — Aleatorización honesta

**Objetivo:** Función pura que toma el mazo y devuelve N cartas con orientación, usando aleatorización criptográficamente respetable.

**Tareas:**
- `shuffleDeck(deck)` con Fisher-Yates + `crypto.getRandomValues()`.
- `drawCards(n)` que:
  1. Clona `DECK`.
  2. Lo baraja.
  3. Saca las primeras `n` cartas.
  4. Para cada carta, decide orientación con `crypto.getRandomValues()` (50/50).
  5. Para cada carta, decide tipo de interpretación (`general` o `relacional`) con `crypto.getRandomValues()` (50/50).
  6. Devuelve `[{carta, orientacion: "derecha"|"invertida", interpretacion: "general"|"relacional"}, ...]`.

**Criterio de éxito:** distribución uniforme en pruebas de stress (1000 tiradas, distribuciones aproximadamente uniformes en cartas, orientaciones e interpretaciones).

---

## Stage 3 — UI mínima funcional (sin estética)

**Objetivo:** Botón → tirada → resultados visibles. Feo pero funcional.

**Tareas:**
- HTML con título, botón "Tirar las cartas", contenedor de resultados.
- Al click: `drawCards(3)` y renderiza tres bloques con imagen + nombre + orientación.
- CSS mínimo solo para legibilidad.
- **Toggle de idioma** (ES / EN) en alguna esquina, accesible desde el inicio. En v1 con solo español escrito, el toggle existe pero el "EN" muestra placeholder o queda deshabilitado hasta que se llenen los textos.

---

## Stage 4 — Output corto (la "cadena")

**Objetivo:** Mostrar las 3 cartas con su interpretación corta, encadenadas como pasado → presente → futuro.

**Tareas:**
- Función `renderCorto(tirada)` que muestra:
  ```
  Pasado:    [imagen] [Carta A]   — [corto_A]
  Presente:  [imagen] [Carta B]   — [corto_B]
  Futuro:    [imagen] [Carta C]   — [corto_C]
  ```
- El texto `corto_A` viene de `cartaA.[orientacion].[interpretacion].corto[idioma]`, donde `interpretacion` (general o relacional) ya fue elegido aleatoriamente en Stage 2 y `idioma` viene del toggle de la UI.

**Nota:** El plan original llamaba a esto "cadena lógica" con sintaxis `Si... entonces...`. Esa formulación tenía sentido cuando la página deconstruía. Ahora que la página es solo el juego, evaluar si mantener ese fraseo o ir con presentación más natural ("Pasado: ..., Presente: ..., Futuro: ..."). **Decidir antes de implementar.**

---

## Stage 5 — Output largo (la narrativa)

**Objetivo:** Versión narrada que conecta las 3 cartas con prosa fluida.

**Tareas:**
- Crear arrays de conectores en español **y en inglés** (5-10 cada uno):
  ```js
  CONECTORES = {
    es: {
      pasado_presente: ["Por eso", "Como consecuencia", "De ahí que", ...],
      presente_futuro: ["En consecuencia", "Y precisamente por ello", ...]
    },
    en: {
      pasado_presente: ["That's why", "As a result", ...],
      presente_futuro: ["Therefore", "And precisely for that reason", ...]
    }
  };
  ```
- Función `generarNarrativa(tirada, idioma)`:
  ```
  En tu pasado, [largo_A]. [conector_1], en el presente [largo_B]. [conector_2], el futuro indica que [largo_C].
  ```
- El texto `largo_A` viene de `cartaA.[orientacion].[interpretacion].largo[idioma]` (interpretacion ya fue elegido en Stage 2).
- Conectores se eligen aleatoriamente en cada render → variación en cada tirada aunque el contenido por carta sea fijo.

**Política:** Determinismo donde importa (textos por carta), variación donde no afecta el sentido (conectores y elección general/relacional). La variación siempre viene de un set finito de plantillas/textos, no de generación libre. Coherente con la regla "no LLM."

---

## ~~Stage 6 — Sección educativa colapsable~~ — Diferido

Esta sección estaba en el plan original como parte de la página. Movida al Substack (ver "Decisión arquitectónica clave" arriba). Posible reincorporación a la página en versión futura, si decide ofrecerse una vista "ensayo" además de la "magia".

---

## Stage 7 — Estética

**Objetivo:** Aplicar el look final.

**Pendiente decidir** la dirección estética. Opciones discutidas:
- **Mística minimalista** (la del plan original — fondo oscuro, dorado, serif).
- **Editorial / literaria** (blanco, serif, casi como página de libro).
- **Otra** — la decisión se conversa antes de empezar.

Lo que sí está fijo:
- Las cartas se renderizan con sus imágenes RWS reales (`assets/images/cards/`).
- Orientación invertida = imagen rotada 180° vía CSS.
- Responsive: cartas apiladas en móvil.

---

## Stage 8 — README final + footer + link a Substack

**Tareas:**
- README explicando el proyecto en términos de la página (juego de tarot) + link al ensayo.
- Footer/esquina de la página con disclaimer discreto + link al Substack.
- Bibliografía en el README:
  - Waite, A.E. (1910). *The Pictorial Key to the Tarot*.
  - Pollack, R. (1980). *Seventy-Eight Degrees of Wisdom*.
  - Labyrinthos Academy (consultado para tono moderno).
  - Biddy Tarot (consultado para tono moderno).
- Licencia: MIT para el código, CC-BY para los textos interpretativos.

---

## Stage 9 — Mejoras post-launch (opcional)

- **Llenar los textos en inglés** (~624 textos) — el toggle de idioma ya existe en v1 pero solo español está poblado.
- **Permalink a cada tirada**: codificar la tirada en la URL para compartir.
- **Cruz Celta** (10 cartas) como modo alternativo.
- **Sección educativa colapsable** (la diferida del Stage 6) si se quiere ofrecer las dos lecturas — magia y deconstrucción — en el mismo lugar.

---

## Estructura del repo

```
Tarot/
├── index.html
├── README.md
├── tarot-game-plan.md       (este archivo)
├── .gitignore
├── assets/
│   └── images/
│       ├── cards/           (78 cartas RWS + ATTRIBUTION.md)
│       └── (favicon, OG image cuando se haga estética)
├── js/
│   └── deck.js              (Stage 1 — pendiente)
└── references/              (gitignored — uso local)
    └── interpretaciones/    (Waite + Labyrinthos + Biddy URLs)
```

---

## Decisiones pendientes (a conversar antes de avanzar)

1. **Nombres en español de las cartas** (variantes regionales: "El Colgado" vs "El Ahorcado", "Sota" vs "Paje", "El Loco" vs "El Tonto", etc.).
2. **Quién escribe los 312 textos** — ¿draft generado por Claude desde las fuentes para que tú revises, o los escribes tú desde cero?
3. **Tono del Stage 4** — ¿se mantiene la sintaxis "Si... entonces..." de la versión deconstructiva, o se va a presentación natural?
4. **Estética del Stage 7** — dirección visual.

---

## Notas para el post de Substack

Cosas que el juego *demuestra*:

- **El truco no está en el manual, está en la capa interpretativa.** El juego solo aplica el manual; aun así suena convincente.
- **La forma narrativa hace el trabajo causal.** Conectores como "Por eso" convierten coincidencia en consecuencia.
- **Plantillas vs. LLMs vs. tarotistas humanos**: los tres producen "lecturas" plausibles. Esto debería preocuparnos sobre cómo evaluamos credibilidad en otros dominios (consultoría, predicción macro, análisis político).
- **Conexión con econometría:** la regresión espuria de Granger-Newbold (1974) es exactamente el equivalente cuantitativo. Series aleatorias correlacionadas → narrativa causal aleatoria. Mismo error cognitivo, distinto vehículo.
- **Lo que sobrevive a la crítica:** la utilidad del azar simbólico como prompt de introspección estructurada. No predicción, sí provocación cognitiva.
