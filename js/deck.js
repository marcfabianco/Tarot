// js/deck.js — Mazo Rider-Waite-Smith con interpretaciones bilingues.
//
// Estructura por carta:
//   id, nombre {es,en}, arcano, palo, numero, imagen,
//   derecha:  { general: {corto:{es,en}, largo:{es,en}}, relacional: {...} },
//   invertida: { general: {corto:{es,en}, largo:{es,en}}, relacional: {...} },
//   fuentes_consultadas: [...]
//
// Estado: ESQUELETO. Textos vacios "" en es, null en en — pendientes de escribir.

const DECK = [
  {
    id: "major_00",
    nombre: { es: "El Loco", en: "The Fool" },
    arcano: "mayor",
    palo: null,
    numero: 0,
    imagen: "assets/images/cards/major_00.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_01",
    nombre: { es: "El Mago", en: "The Magician" },
    arcano: "mayor",
    palo: null,
    numero: 1,
    imagen: "assets/images/cards/major_01.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_02",
    nombre: { es: "La Sacerdotisa", en: "The High Priestess" },
    arcano: "mayor",
    palo: null,
    numero: 2,
    imagen: "assets/images/cards/major_02.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_03",
    nombre: { es: "La Emperatriz", en: "The Empress" },
    arcano: "mayor",
    palo: null,
    numero: 3,
    imagen: "assets/images/cards/major_03.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_04",
    nombre: { es: "El Emperador", en: "The Emperor" },
    arcano: "mayor",
    palo: null,
    numero: 4,
    imagen: "assets/images/cards/major_04.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_05",
    nombre: { es: "El Hierofante", en: "The Hierophant" },
    arcano: "mayor",
    palo: null,
    numero: 5,
    imagen: "assets/images/cards/major_05.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_06",
    nombre: { es: "Los Enamorados", en: "The Lovers" },
    arcano: "mayor",
    palo: null,
    numero: 6,
    imagen: "assets/images/cards/major_06.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_07",
    nombre: { es: "El Carro", en: "The Chariot" },
    arcano: "mayor",
    palo: null,
    numero: 7,
    imagen: "assets/images/cards/major_07.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_08",
    nombre: { es: "La Fuerza", en: "Strength" },
    arcano: "mayor",
    palo: null,
    numero: 8,
    imagen: "assets/images/cards/major_08.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_09",
    nombre: { es: "El Ermitaño", en: "The Hermit" },
    arcano: "mayor",
    palo: null,
    numero: 9,
    imagen: "assets/images/cards/major_09.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_10",
    nombre: { es: "La Rueda de la Fortuna", en: "Wheel of Fortune" },
    arcano: "mayor",
    palo: null,
    numero: 10,
    imagen: "assets/images/cards/major_10.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_11",
    nombre: { es: "La Justicia", en: "Justice" },
    arcano: "mayor",
    palo: null,
    numero: 11,
    imagen: "assets/images/cards/major_11.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_12",
    nombre: { es: "El Colgado", en: "The Hanged Man" },
    arcano: "mayor",
    palo: null,
    numero: 12,
    imagen: "assets/images/cards/major_12.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_13",
    nombre: { es: "La Muerte", en: "Death" },
    arcano: "mayor",
    palo: null,
    numero: 13,
    imagen: "assets/images/cards/major_13.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_14",
    nombre: { es: "La Templanza", en: "Temperance" },
    arcano: "mayor",
    palo: null,
    numero: 14,
    imagen: "assets/images/cards/major_14.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_15",
    nombre: { es: "El Diablo", en: "The Devil" },
    arcano: "mayor",
    palo: null,
    numero: 15,
    imagen: "assets/images/cards/major_15.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_16",
    nombre: { es: "La Torre", en: "The Tower" },
    arcano: "mayor",
    palo: null,
    numero: 16,
    imagen: "assets/images/cards/major_16.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_17",
    nombre: { es: "La Estrella", en: "The Star" },
    arcano: "mayor",
    palo: null,
    numero: 17,
    imagen: "assets/images/cards/major_17.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_18",
    nombre: { es: "La Luna", en: "The Moon" },
    arcano: "mayor",
    palo: null,
    numero: 18,
    imagen: "assets/images/cards/major_18.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_19",
    nombre: { es: "El Sol", en: "The Sun" },
    arcano: "mayor",
    palo: null,
    numero: 19,
    imagen: "assets/images/cards/major_19.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_20",
    nombre: { es: "El Juicio", en: "Judgement" },
    arcano: "mayor",
    palo: null,
    numero: 20,
    imagen: "assets/images/cards/major_20.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "major_21",
    nombre: { es: "El Mundo", en: "The World" },
    arcano: "mayor",
    palo: null,
    numero: 21,
    imagen: "assets/images/cards/major_21.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_01",
    nombre: { es: "As de Copas", en: "Ace of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 1,
    imagen: "assets/images/cards/copas_01.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_02",
    nombre: { es: "Dos de Copas", en: "Two of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 2,
    imagen: "assets/images/cards/copas_02.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_03",
    nombre: { es: "Tres de Copas", en: "Three of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 3,
    imagen: "assets/images/cards/copas_03.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_04",
    nombre: { es: "Cuatro de Copas", en: "Four of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 4,
    imagen: "assets/images/cards/copas_04.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_05",
    nombre: { es: "Cinco de Copas", en: "Five of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 5,
    imagen: "assets/images/cards/copas_05.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_06",
    nombre: { es: "Seis de Copas", en: "Six of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 6,
    imagen: "assets/images/cards/copas_06.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_07",
    nombre: { es: "Siete de Copas", en: "Seven of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 7,
    imagen: "assets/images/cards/copas_07.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_08",
    nombre: { es: "Ocho de Copas", en: "Eight of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 8,
    imagen: "assets/images/cards/copas_08.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_09",
    nombre: { es: "Nueve de Copas", en: "Nine of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 9,
    imagen: "assets/images/cards/copas_09.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_10",
    nombre: { es: "Diez de Copas", en: "Ten of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 10,
    imagen: "assets/images/cards/copas_10.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_11",
    nombre: { es: "Sota de Copas", en: "Page of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 11,
    imagen: "assets/images/cards/copas_11.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_12",
    nombre: { es: "Caballero de Copas", en: "Knight of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 12,
    imagen: "assets/images/cards/copas_12.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_13",
    nombre: { es: "Reina de Copas", en: "Queen of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 13,
    imagen: "assets/images/cards/copas_13.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "copas_14",
    nombre: { es: "Rey de Copas", en: "King of Cups" },
    arcano: "menor",
    palo: "copas",
    numero: 14,
    imagen: "assets/images/cards/copas_14.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_01",
    nombre: { es: "As de Bastos", en: "Ace of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 1,
    imagen: "assets/images/cards/bastos_01.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_02",
    nombre: { es: "Dos de Bastos", en: "Two of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 2,
    imagen: "assets/images/cards/bastos_02.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_03",
    nombre: { es: "Tres de Bastos", en: "Three of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 3,
    imagen: "assets/images/cards/bastos_03.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_04",
    nombre: { es: "Cuatro de Bastos", en: "Four of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 4,
    imagen: "assets/images/cards/bastos_04.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_05",
    nombre: { es: "Cinco de Bastos", en: "Five of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 5,
    imagen: "assets/images/cards/bastos_05.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_06",
    nombre: { es: "Seis de Bastos", en: "Six of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 6,
    imagen: "assets/images/cards/bastos_06.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_07",
    nombre: { es: "Siete de Bastos", en: "Seven of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 7,
    imagen: "assets/images/cards/bastos_07.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_08",
    nombre: { es: "Ocho de Bastos", en: "Eight of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 8,
    imagen: "assets/images/cards/bastos_08.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_09",
    nombre: { es: "Nueve de Bastos", en: "Nine of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 9,
    imagen: "assets/images/cards/bastos_09.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_10",
    nombre: { es: "Diez de Bastos", en: "Ten of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 10,
    imagen: "assets/images/cards/bastos_10.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_11",
    nombre: { es: "Sota de Bastos", en: "Page of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 11,
    imagen: "assets/images/cards/bastos_11.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_12",
    nombre: { es: "Caballero de Bastos", en: "Knight of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 12,
    imagen: "assets/images/cards/bastos_12.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_13",
    nombre: { es: "Reina de Bastos", en: "Queen of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 13,
    imagen: "assets/images/cards/bastos_13.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "bastos_14",
    nombre: { es: "Rey de Bastos", en: "King of Wands" },
    arcano: "menor",
    palo: "bastos",
    numero: 14,
    imagen: "assets/images/cards/bastos_14.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_01",
    nombre: { es: "As de Espadas", en: "Ace of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 1,
    imagen: "assets/images/cards/espadas_01.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_02",
    nombre: { es: "Dos de Espadas", en: "Two of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 2,
    imagen: "assets/images/cards/espadas_02.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_03",
    nombre: { es: "Tres de Espadas", en: "Three of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 3,
    imagen: "assets/images/cards/espadas_03.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_04",
    nombre: { es: "Cuatro de Espadas", en: "Four of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 4,
    imagen: "assets/images/cards/espadas_04.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_05",
    nombre: { es: "Cinco de Espadas", en: "Five of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 5,
    imagen: "assets/images/cards/espadas_05.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_06",
    nombre: { es: "Seis de Espadas", en: "Six of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 6,
    imagen: "assets/images/cards/espadas_06.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_07",
    nombre: { es: "Siete de Espadas", en: "Seven of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 7,
    imagen: "assets/images/cards/espadas_07.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_08",
    nombre: { es: "Ocho de Espadas", en: "Eight of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 8,
    imagen: "assets/images/cards/espadas_08.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_09",
    nombre: { es: "Nueve de Espadas", en: "Nine of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 9,
    imagen: "assets/images/cards/espadas_09.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_10",
    nombre: { es: "Diez de Espadas", en: "Ten of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 10,
    imagen: "assets/images/cards/espadas_10.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_11",
    nombre: { es: "Sota de Espadas", en: "Page of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 11,
    imagen: "assets/images/cards/espadas_11.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_12",
    nombre: { es: "Caballero de Espadas", en: "Knight of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 12,
    imagen: "assets/images/cards/espadas_12.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_13",
    nombre: { es: "Reina de Espadas", en: "Queen of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 13,
    imagen: "assets/images/cards/espadas_13.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "espadas_14",
    nombre: { es: "Rey de Espadas", en: "King of Swords" },
    arcano: "menor",
    palo: "espadas",
    numero: 14,
    imagen: "assets/images/cards/espadas_14.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_01",
    nombre: { es: "As de Oros", en: "Ace of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 1,
    imagen: "assets/images/cards/oros_01.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_02",
    nombre: { es: "Dos de Oros", en: "Two of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 2,
    imagen: "assets/images/cards/oros_02.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_03",
    nombre: { es: "Tres de Oros", en: "Three of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 3,
    imagen: "assets/images/cards/oros_03.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_04",
    nombre: { es: "Cuatro de Oros", en: "Four of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 4,
    imagen: "assets/images/cards/oros_04.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_05",
    nombre: { es: "Cinco de Oros", en: "Five of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 5,
    imagen: "assets/images/cards/oros_05.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_06",
    nombre: { es: "Seis de Oros", en: "Six of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 6,
    imagen: "assets/images/cards/oros_06.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_07",
    nombre: { es: "Siete de Oros", en: "Seven of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 7,
    imagen: "assets/images/cards/oros_07.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_08",
    nombre: { es: "Ocho de Oros", en: "Eight of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 8,
    imagen: "assets/images/cards/oros_08.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_09",
    nombre: { es: "Nueve de Oros", en: "Nine of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 9,
    imagen: "assets/images/cards/oros_09.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_10",
    nombre: { es: "Diez de Oros", en: "Ten of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 10,
    imagen: "assets/images/cards/oros_10.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_11",
    nombre: { es: "Sota de Oros", en: "Page of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 11,
    imagen: "assets/images/cards/oros_11.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_12",
    nombre: { es: "Caballero de Oros", en: "Knight of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 12,
    imagen: "assets/images/cards/oros_12.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_13",
    nombre: { es: "Reina de Oros", en: "Queen of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 13,
    imagen: "assets/images/cards/oros_13.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  },
  {
    id: "oros_14",
    nombre: { es: "Rey de Oros", en: "King of Pentacles" },
    arcano: "menor",
    palo: "oros",
    numero: 14,
    imagen: "assets/images/cards/oros_14.jpg",
    derecha: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    invertida: {
      general: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      },
      relacional: {
        corto: { es: "", en: null },
        largo: { es: "", en: null }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  }
];

