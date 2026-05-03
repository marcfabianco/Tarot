# Tarot Game — Plan de Implementación

**Objetivo:** Construir un juego de tarot web que acompaña un post de Substack sobre narrative fallacy, regresión espuria y construcción de significado. El juego es a la vez funcional (sí da una lectura) y autoconsciente (expone su propia lógica).

**Stack:** HTML + CSS + JavaScript vanilla. Un solo archivo `index.html`, sin dependencias, deployable en GitHub Pages.

**Tipo de tirada (v1):** Tres cartas — pasado / presente / futuro.

**Estética:** Mística minimalista. Fondo oscuro, acentos dorados, tipografía serif para textos, sans-serif para UI.

---

## Filosofía de diseño

Tres principios que guían cada etapa:

1. **Transparencia.** El código debe ser auditable. Los significados de las cartas viven como JSON visible en el repo, no en una base de datos opaca.
2. **Honestidad epistémica.** El juego funciona como tarot, pero también enseña por qué funciona. La sección educativa no es un anexo: es parte central del producto.
3. **Plantillas, no LLM.** El output narrativo se genera por plantillas con huecos. Esto es deliberado: refuerza el argumento de que una narrativa convincente puede generarse mecánicamente.

---

## Stage 0 — Setup del repo

**Objetivo:** Tener la estructura mínima en GitHub Pages funcionando con un "Hello World".

**Tareas:**
- Crear repo en GitHub (sugerencia de nombre: `tarot-spurious` o `madame-sassi`).
- Crear `index.html` con un `<h1>` placeholder.
- Activar GitHub Pages en Settings → Pages → main branch.
- Verificar que carga en `https://[usuario].github.io/[repo]/`.
- Crear `README.md` con descripción del proyecto y link al post de Substack (cuando esté).

**Criterio de éxito:** La URL pública carga el placeholder.

---

## Stage 1 — Estructura de datos del mazo

**Objetivo:** Tener las 78 cartas codificadas con sus significados canónicos antes de tocar UI.

**Tareas:**
- Crear un objeto JS `DECK` con las 78 cartas. Cada carta es un objeto:
  ```js
  {
    id: "major_12",
    nombre: "El Colgado",
    arcano: "mayor",  // o "menor"
    palo: null,        // o "copas" | "bastos" | "espadas" | "oros"
    numero: 12,
    significado_derecho_corto: "...",   // 5-10 palabras, para la cadena lógica
    significado_derecho_largo: "...",   // 1-2 oraciones, para narrativa
    significado_invertido_corto: "...",
    significado_invertido_largo: "...",
    fuente: "Waite 1910 / Pollack 1980"
  }
  ```
- Poblar las 22 cartas de Arcanos Mayores primero. Usar Waite (*The Pictorial Key to the Tarot*, 1910) para texto canónico, complementado con Pollack (*Seventy-Eight Degrees of Wisdom*, 1980) para sistematización moderna.
- Poblar las 56 cartas Menores (4 palos × 14 cartas).
- Validar: `DECK.length === 78`.

**Criterio de éxito:** Abrir consola del navegador y poder hacer `DECK.find(c => c.nombre === "El Colgado")` y obtener el objeto completo.

**Nota:** Esta es la etapa más laboriosa pero la más importante. Hacerla bien una vez = juego funciona para siempre. Considerar pedir a Claude Code que genere el JSON inicial y luego revisarlo manualmente.

---

## Stage 2 — Aleatorización honesta

**Objetivo:** Función pura que toma el mazo y devuelve N cartas con orientación, usando aleatorización criptográficamente respetable.

**Tareas:**
- Implementar `shuffleDeck(deck)` usando Fisher-Yates con `crypto.getRandomValues()` (no `Math.random()`, que es predecible).
- Implementar `drawCards(n)` que:
  1. Clona `DECK`.
  2. Lo baraja 7 veces (referencia al barajeo riffle clásico — más simbólico que matemáticamente necesario, pero honra la tradición).
  3. Saca las primeras `n` cartas.
  4. Para cada carta, decide orientación con `crypto.getRandomValues()` (50/50).
  5. Devuelve array de `{carta, orientacion: "derecha"|"invertida"}`.
- Mostrar la semilla / timestamp en consola para auditabilidad.

**Criterio de éxito:** Llamar `drawCards(3)` 1000 veces en consola y verificar distribución uniforme aproximada (no debe favorecer ciertas cartas).

---

## Stage 3 — UI mínima funcional (sin estética todavía)

**Objetivo:** Botón → tirada → resultados visibles. Feo pero funcional.

**Tareas:**
- HTML con: título, botón "Tirar las cartas", contenedor de resultados.
- Al hacer click: llamar `drawCards(3)` y renderizar tres bloques con nombre + orientación.
- Sin CSS más allá de lo mínimo para legibilidad.

**Criterio de éxito:** El juego es jugable, aunque feo.

---

## Stage 4 — Output 1: la cadena lógica

**Objetivo:** Generar la oración "Si... entonces... entonces..." de forma seca y directa.

**Tareas:**
- Función `generarCadenaLogica(tirada)` que devuelve un string con esta estructura:
  ```
  Si [carta_pasado.nombre] ([orientación]) significa [significado_corto],
  entonces [carta_presente.nombre] ([orientación]) implica [significado_corto],
  entonces [carta_futuro.nombre] ([orientación]) sugiere [significado_corto].
  ```
- Renderizar debajo de las cartas, con etiqueta "Cadena lógica".
- Tipografía monoespaciada o serif sobria — debe sentirse casi clínica.

**Criterio de éxito:** El output se lee como una proposición lógica, no como una narrativa. La sequedad es deliberada.

---

## Stage 5 — Output 2: la narrativa por plantillas

**Objetivo:** Versión narrada de la misma información, generada por plantillas, no por LLM.

**Tareas:**
- Crear un array `PLANTILLAS_NARRATIVAS` con 5-10 plantillas distintas. Cada una tiene huecos `{pasado_largo}`, `{presente_largo}`, `{futuro_largo}`, `{conector_1}`, `{conector_2}`. Ejemplo:
  ```
  "En tu pasado, {pasado_largo}. {conector_1}, en el presente {presente_largo}.
  {conector_2}, el futuro indica que {futuro_largo}."
  ```
- Crear arrays de conectores: `["Por eso", "Como consecuencia", "De ahí que", "En consecuencia", "Y precisamente por ello"]`.
- Función `generarNarrativa(tirada)` que selecciona plantilla y conectores aleatoriamente y rellena los huecos.
- Renderizar debajo de la cadena lógica, en tipografía serif, prosa fluida.

**Criterio de éxito:** Diez tiradas seguidas con las mismas tres cartas producen narrativas distintas — esto es importante para el argumento del post.

**Nota crítica:** No caer en la tentación de usar un LLM. La plantilla mecánica *es* el punto pedagógico. Si el usuario nota que las narrativas se repiten en estructura, mejor — eso revela el truco.

---

## Stage 6 — Sección educativa colapsable

**Objetivo:** Justo debajo de la lectura, un disclosure que explica por qué la lectura es persuasiva aunque sea aleatoria.

**Tareas:**
- Elemento `<details>` con `<summary>` que diga algo como: *"¿Por qué esto suena tan convincente? →"*.
- Contenido desplegado: 4-5 párrafos cortos explicando:
  1. **Aleatoriedad real.** Link al código fuente del shuffle, mencionar `crypto.getRandomValues()`.
  2. **Efecto Barnum.** Los significados son lo bastante ambiguos para aplicar a casi cualquier persona.
  3. **Narrative fallacy.** Referencia a Kahneman / Taleb. El cerebro convierte secuencias en historias causales aunque no haya causalidad.
  4. **Regresión espuria.** Analogía con Granger & Newbold (1974): dos series temporales aleatorias pueden mostrar correlaciones altísimas. Aquí pasa lo simbólico.
  5. **Lo que sí queda.** El valor del ejercicio como prompt aleatorio para introspección dirigida (à la *Oblique Strategies* de Eno o *rubber duck debugging*).
- Cada punto con referencia bibliográfica al final.

**Criterio de éxito:** Alguien que solo lee esta sección entiende la tesis del post sin haber leído el Substack.

---

## Stage 7 — Estética: mística minimalista

**Objetivo:** Aplicar el look final. Fondo oscuro, acentos dorados, jerarquía tipográfica clara.

**Tareas:**
- Paleta:
  - Fondo: `#0d0a14` (negro violáceo)
  - Texto principal: `#e8e3d3` (crema)
  - Acento dorado: `#c9a961` (no demasiado brillante)
  - Texto secundario: `#8a7f6e`
- Tipografía:
  - Títulos / cartas: serif de display (sugerencia: Cormorant Garamond, EB Garamond — ambas en Google Fonts).
  - Prosa: serif de lectura (Crimson Text, Lora).
  - UI / botones / código: sans-serif (Inter, IBM Plex Sans).
- Cartas: rectángulos con borde dorado fino, número romano en esquina superior, nombre centrado, orientación indicada con un símbolo (↑ derecha, ↓ invertida) o rotando visualmente la carta 180° si está invertida.
- Botón "Tirar las cartas" con borde dorado, hover sutil.
- Animación: al tirar, breve fade-in escalonado de las tres cartas (200ms cada una). Sin más efectos — la estética es contenida, no de feria.
- Responsive: en móvil, las cartas apiladas verticalmente.

**Criterio de éxito:** Se ve elegante en desktop y móvil. No hay un solo emoji místico ni una luna animada. La sobriedad *es* el estilo.

---

## Stage 8 — README y referencias

**Objetivo:** Documentación que da seriedad al proyecto y conecta con el Substack.

**Tareas:**
- `README.md` con:
  - Descripción breve del proyecto y su propósito doble (juego + experimento epistémico).
  - Link al post de Substack.
  - Sección "Cómo funciona" con los tres principios de diseño.
  - Sección "Bibliografía":
    - Waite, A.E. (1910). *The Pictorial Key to the Tarot*.
    - Pollack, R. (1980). *Seventy-Eight Degrees of Wisdom*.
    - Kahneman, D. (2011). *Thinking, Fast and Slow*.
    - Taleb, N.N. (2007). *The Black Swan* (capítulo sobre narrative fallacy).
    - Granger, C.W.J. & Newbold, P. (1974). "Spurious regressions in econometrics". *Journal of Econometrics*, 2(2).
    - Forer, B.R. (1949). "The fallacy of personal validation: A classroom demonstration of gullibility". *Journal of Abnormal and Social Psychology*.
  - Licencia (sugerencia: MIT para el código, CC-BY para los textos interpretativos).
- Link al README desde el footer del juego.

**Criterio de éxito:** Cualquier visitante del repo entiende el proyecto sin contexto previo.

---

## Stage 9 (opcional) — Mejoras post-launch

Ideas para iterar después del primer release:

- **Modo Cruz Celta** (10 cartas) como toggle.
- **Permalink a cada tirada**: codificar la tirada en la URL (`?cards=major_12_inv,minor_oros_9_up,...`) para compartir.
- **Modo "solo cartas, sin interpretación"** — el usuario interpreta solas. Refuerza el argumento de que el significado lo pone el lector.
- **Contador de tiradas en sesión** y log local con `localStorage`. Permite al usuario ver cómo el azar produce patrones aparentes en muestras pequeñas.
- **Versión inglés/español** con toggle.
- **Modo "lectura en frío vs canónica"**: dos botones que generan distinto tipo de narrativa para que el usuario compare.

---

## Notas para el post de Substack

Cosas que el juego *demuestra* y que puedes apoyarte para escribir:

- **El truco no está en el manual, está en la capa interpretativa.** El juego solo aplica el manual; aun así suena convincente.
- **La forma narrativa hace el trabajo causal.** "Si... entonces..." convierte coincidencia en consecuencia.
- **Plantillas vs. LLMs vs. tarotistas humanos**: los tres producen "lecturas" plausibles. Esto debería preocuparnos sobre cómo evaluamos credibilidad en otros dominios (consultoría, predicción macro, análisis político).
- **Conexión con tu campo:** la regresión espuria de Granger-Newbold es exactamente el equivalente cuantitativo. Series aleatorias correlacionadas → narrativa causal aleatoria. Mismo error cognitivo, distinto vehículo.
- **Lo que sobrevive a la crítica:** la utilidad del azar simbólico como prompt de introspección estructurada. No predicción, sí provocación cognitiva.

---

**Tiempo estimado total:** 6-10 horas con Claude Code, dependiendo de cuánto tiempo dediques a poblar bien los 78 significados (Stage 1) y a la estética (Stage 7).

**Orden recomendado de implementación:** Stages 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8. Estética al final — primero que funcione, después que se vea bien.
