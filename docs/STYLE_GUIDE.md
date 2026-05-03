# Guía de estilo — interpretaciones del Tarot

> **Lectura obligatoria al volver al proyecto.** Cada vez que se retome la escritura de cartas, releer este documento antes del primer texto. El lenguaje drifta sin guía explícita.

## Propósito

Este documento define las reglas para escribir las 624 interpretaciones del juego (78 cartas × 2 orientaciones × 2 interpretaciones × 2 versiones, en español primero, después inglés). Se aplica al archivo `js/deck.js`.

## Tono

**"Justo".** Ni frío clínico, ni místico floreado. Simple pero con aura. Literario pero claro. Frases que pesan sin pretender. Sin floritura, sin metáforas opacas, sin lenguaje hippie ni académico.

El lector tiene que poder leer una interpretación y entenderla sin diccionario, sin ser tonto, sin sentir que un AI se la generó.

---

## Reglas duras (no negociables)

### 1. Nunca usar em dashes (—)

Reemplazos según contexto:
- Punto: para cortar y empezar nuevo pensamiento.
- Coma: para incisos cortos.
- Dos puntos: para listas o enumeraciones.
- Paréntesis: para aclaraciones.

❌ `Si te están maniobrando, ya lo intuyes — confía en esa intuición.`
✅ `Si la maniobra es ajena, la intuición ya lo sabe.`

### 2. Nunca "no es A, es B" / "no es A, sino B"

Esa construcción suena AI-generada. Afirmar B directamente, o usar una comparación con "más que".

❌ `Tu fuerza no es ostentosa, es útil.`
✅ `Tu fuerza es útil sin necesidad de ser ostentosa.`

❌ `La templanza no es pasividad, es maestría del ritmo.`
✅ `La templanza opera como maestría del ritmo: actuar despacio sin dejar de actuar.`

❌ `No es momento de pedir, sino de reparar.`
✅ `Lo que toca es reparar antes de pedir.`

❌ `La fuerza acá nace del autocontrol, no de la imposición.`
✅ `La fuerza acá nace del autocontrol más que de la imposición.`

**Patrón seguro:** `X más que Y` (comparación) en lugar de `no Y, X` (negación + afirmación).

### 3. Referencias autocontenidas

No presuponer un referente que el lector no estableció. La carta puede aparecer sin que el lector haya nombrado ningún vínculo, situación, ni persona específica.

❌ `En el vínculo, una verdad postergada se hace evidente.` *(¿qué vínculo?)*
✅ `En lo afectivo, una verdad postergada se hace evidente.`
✅ `Afectivamente, una verdad postergada se hace evidente.`

❌ `La relación funciona porque...`
✅ `Cuando hay relación, lo que la sostiene es...`
✅ `Afectivamente, lo que sostiene es...`

**Aperturas seguras:** `En lo afectivo,` / `Afectivamente,` / `En lo material,` / `En lo financiero,` / `En el dinero,` / `En vínculos cercanos,`

### 4. Tiempos gramaticales neutros

La carta puede caer en posición de **pasado, presente o futuro** dentro de la tirada. El texto no debe anclarse en un tiempo específico, porque el contexto temporal viene de la posición, no del texto.

**Evitar:**
- `ahora`, `hoy`, `actualmente`
- `antes`, `después` (cuando funcionan como anclas narrativas)
- `el pasado`, `el presente`, `el futuro`
- imperativos directos que asuman acción inmediata: `Confía`, `Pregúntate`, `Mira`, `Limpia`
- narrativas de pasado-explicando-presente: `Algo te hizo desconfiar y ahora cada gesto pasa por un filtro`

**Preferir:**
- Presente atemporal: `hay`, `está`, `aparece`, `opera`
- Estados con `estás` (se traduce naturalmente a cualquier tiempo)
- Subjuntivo y condicional: `lo que rechaces`, `quien abre`
- Voz impersonal: `conviene revisar`, `vale considerar`, `lo prudente es`
- Gerundios y participios como adjetivos: `una sensación olvidada`, `decisiones tomadas sin números`

❌ `Limpia el pasado para que el presente respire.`
✅ `Lo desordenado, una vez puesto en su sitio, deja respirar.`

❌ `Es momento de reparar.`
✅ `Lo que toca es reparar.`
✅ `La situación pide reparación.`

❌ `La libertad que sentías antes ahora se parece a evasión.`
✅ `Lo que parecía libertad se acerca a evasión.`

### 5. Sin frases hechas tipo "es momento de", "ha llegado el momento de"

Son disfraces de imperativo presente. Reemplazar con construcciones impersonales.

❌ `Es momento de tomar la decisión.`
✅ `La decisión pendiente pide ser tomada.`
✅ `Lo que toca es decidir.`

### 6. Variedad de estructura

Evitar el patrón formulaico `En lo afectivo, ... En lo material, ...` repetido en TODOS los largos relacionales. Variar:

- Algunas oraciones pueden empezar con sujeto, otras con adverbio, otras con frase descriptiva.
- No todas las largo necesitan dividirse mitad afectivo / mitad material. A veces los cuatro renglones son un solo arco.

---

## Estructura

### 8 textos por carta

| Orientación | Interpretación | Versión | Longitud |
|---|---|---|---|
| Derecha | General | Corto | 1-2 oraciones |
| Derecha | General | Largo | 4 oraciones |
| Derecha | Relacional | Corto | 1-2 oraciones |
| Derecha | Relacional | Largo | 4 oraciones |
| Invertida | General | Corto | 1-2 oraciones |
| Invertida | General | Largo | 4 oraciones |
| Invertida | Relacional | Corto | 1-2 oraciones |
| Invertida | Relacional | Largo | 4 oraciones |

### Distinción general vs relacional

- **General**: aplicable a cualquier persona en cualquier momento. Es la lectura simbólica amplia. No asume situación específica.
- **Relacional**: enfocado en vínculos afectivos y dimensión material/financiera (dinero, trabajo, recursos). **No asume** pareja, hijos, deuda, trabajo asalariado, propiedad, ni vínculos específicos. Funciona para alguien casado, soltero, divorciado, viudo, etc.

Las dos interpretaciones de la misma carta-orientación deben ser distinguibles. Si la relacional se siente igual que la general, falló la diferenciación.

---

## Proceso por carta

1. Leer fuente Waite (`references/interpretaciones/waite_1910/waite_pkt_full.txt`).
2. Leer fuente Labyrinthos (`references/interpretaciones/labyrinthos/<slug>.html`).
3. Identificar consenso simbólico entre las dos.
4. Escribir 8 textos siguiendo las reglas.
5. **Auto-revisar antes de pasar a la siguiente:**
   - ¿algún em dash? → quitar
   - ¿`no es A, es B` o `no A, sino B`? → rephrasear
   - ¿`el vínculo` / `la relación` sin referente? → rephrasear
   - ¿`ahora`, `antes`, `el pasado`? → neutralizar
   - ¿imperativo que asume "ya"? → impersonalizar
   - ¿largo tiene 4 oraciones? → contar

Para extraer fuentes, hay un helper: `python3 tools/extract_sources.py <card_id>`.

---

## Ejemplo correcto

**El Loco — invertida — general — largo:**
> Lo que parecía libertad se acerca a evasión. Algo no se está viendo, o se está eligiendo no ver, y se acumula por detrás. Seguir moviéndote es válido si va acompañado de mirar antes de cada paso. Una pausa breve evita un tropiezo grande.

Por qué funciona:
- Sin em dashes.
- Sin patrón `no A es B`.
- `Algo no se está viendo` es descriptivo, sin pasado-presente narrado.
- Cuatro oraciones.
- Segunda persona (`moviéndote`) en gerundio, sin imperativo directo.
- Tono firme pero no rígido.

## Ejemplo malo (lo que NO hacer)

> La libertad que sentías antes ahora se parece más a evasión. Hay algo que no estás viendo — o que prefieres no ver — y se te está acumulando atrás. No se trata de dejar de moverte, sino de mirar antes de dar el siguiente paso. Una pausa breve evita un tropiezo grande.

Por qué falla:
- `que sentías antes ahora` — pasado + presente anclado.
- Em dashes (dos veces).
- `No se trata de... sino de...` — patrón AI.

---

## Fuentes consultadas

Las interpretaciones se sintetizan de:

- **Waite, A.E.** (1910). *The Pictorial Key to the Tarot*. Dominio público.
- **Labyrinthos Academy.** *Tarot Card Meanings*. Consultado para tono moderno.
- **Biddy Tarot.** *Tarot Card Meanings*. Consultado para tono moderno.

No se copia texto verbatim de Labyrinthos ni Biddy (copyright). Se sintetiza la idea simbólica y se escribe en propias palabras siguiendo esta guía.

Material de referencia local en `references/interpretaciones/` (gitignored).
