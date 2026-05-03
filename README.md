# Tarot

Un juego de tarot web. Tres cartas: pasado, presente, futuro. Bilingüe (español + inglés).

🔮 Sitio: https://marcfabianco.github.io/Tarot/ *(no activo todavía)*

---

## Sobre este proyecto

La página es un juego de tarot funcional. Las cartas se barajan honestamente (`crypto.getRandomValues`), las interpretaciones están escritas a mano sintetizando fuentes clásicas y modernas, y la narrativa que conecta las cartas se compone por plantillas — sin modelos de lenguaje en ningún punto del proceso.

Cada carta tiene **dos interpretaciones distintas** por orientación: una **general** (amplia, aplicable a cualquier momento de vida) y una **relacional** (vínculos afectivos y dinero). El sistema elige aleatoriamente cuál mostrar en cada tirada — la misma tirada en dos momentos puede revelar lecturas distintas.

Acompaña a un ensayo en Substack que examina por qué este tipo de lecturas resultan tan convincentes a pesar de basarse en azar puro. *Link al ensayo cuando se publique.*

## Idiomas

- **v1 (en desarrollo):** español.
- **v2:** inglés. La estructura del JSON ya contempla ambos idiomas; falta llenar los textos en inglés.

## Estado

🚧 En desarrollo. Plan completo y avance documentado en [tarot-game-plan.md](tarot-game-plan.md).

## Para retomar el proyecto

**Antes de escribir o editar interpretaciones de cartas, leer:**

📖 **[docs/STYLE_GUIDE.md](docs/STYLE_GUIDE.md)** — reglas de escritura para los textos de las cartas. Tono, tiempos gramaticales, qué evitar. El lenguaje drifta sin esta guía.

## Imágenes de las cartas

Las 78 imágenes en `assets/images/cards/` provienen del **Rider-Waite-Smith Tarot Deck** (Pamela Colman Smith, 1909) — dominio público. Detalles en [ATTRIBUTION.md](assets/images/cards/ATTRIBUTION.md).

## Licencia

Pendiente. Probable: MIT para el código, CC-BY para los textos interpretativos cuando estén escritos.
