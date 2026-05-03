// js/deck.js — Mazo Rider-Waite-Smith con interpretaciones bilingues.
//
// Estructura por carta:
//   id, nombre {es,en}, arcano, palo, numero, imagen,
//   derecha:  { general: {corto:{es,en}, largo:{es,en}}, relacional: {...} },
//   invertida: { general: {corto:{es,en}, largo:{es,en}}, relacional: {...} },
//   fuentes_consultadas: [...]
//
// Generado por tools/build_deck.py

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
        corto: {
          es: "Algo empieza. Lo que viene aún no tiene forma, y eso es precisamente lo que lo hace posible.",
          en: null
        },
        largo: {
          es: "Estás en el primer paso de algo. No hay manera de saber hacia dónde lleva, y por una vez eso no es problema. La inocencia que otros desestiman es lo que te permite avanzar sin pedirle garantías al camino. El impulso sabe antes que la razón.",
          en: null
        }
      },
      relacional: {
        corto: { es: "Un encuentro o una decisión sin precedentes. Todavía no hay reglas escritas para esto.", en: null },
        largo: {
          es: "En lo afectivo, alguien o algo nuevo entra y no calza con lo conocido. Si abres sin condiciones, abres también el espacio donde puede crecer. En lo material, hay un gasto o una apuesta que la cabeza no sabe justificar pero el cuerpo sí. La pregunta verdadera es si vale la pena empezarlo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Avanzas sin mirar. Lo espontáneo se vuelve descuido cuando ignoras lo que ya estaba ahí.", en: null },
        largo: {
          es: "Lo que parecía libertad se acerca a evasión. Algo no se está viendo, o se está eligiendo no ver, y se acumula por detrás. Seguir moviéndote es válido si va acompañado de mirar antes de cada paso. Una pausa breve evita un tropiezo grande.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Te entusiasmas sin verificar. En afecto y en dinero, lo que parece liviano suele tener más peso del que aparenta.",
          en: null
        },
        largo: {
          es: "En vínculos cercanos opera una idealización: alguien, un momento, una expectativa que cuando se desinfla, duele. Vale preguntarse qué se está eligiendo no ver. En finanzas, hay decisiones tomadas sin números ni plazos: préstamos, compromisos, compras que se sienten bien al firmar y se vuelven peso después. La intuición no exime de las consecuencias.",
          en: null
        }
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
        corto: { es: "Tienes los recursos para hacerlo. La pregunta es si los estás usando.", en: null },
        largo: {
          es: "Hay todo lo necesario sobre la mesa: habilidad, voluntad, oportunidad. La carta señala el momento en que la intención se vuelve acción concreta. Lo que hace falta es decidir y empezar a usar lo que ya está disponible. La fuerza se activa solo cuando se la pone a trabajar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien sabe lo que quiere y lo busca con claridad. En lo material, una iniciativa propia empieza a dar frutos.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona (o tú) que actúa con intención y carisma. La atracción que produce viene de la claridad de su proyección. En lo financiero, las habilidades propias se pueden traducir en ingresos si se ponen en uso. Conviene mirar qué talentos están dormidos esperando aplicación.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Hay habilidad, pero algo del manejo se torció. La intención perdió su claridad.", en: null },
        largo: {
          es: "El mismo poder que crea también puede manipular. Algo del talento propio se está volcando en la imagen más que en lo concreto, o se está descartando por inseguridad. Hay un patrón de prometer más de lo que se entrega, propio o ajeno. Antes de buscar afuera, conviene revisar la intención con la que se sostienen las propias acciones.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Cuidado con palabras dulces que no se traducen en hechos. Lo que aparenta presencia puede no estar.",
          en: null
        },
        largo: {
          es: "En lo afectivo, hay alguien (puede ser uno mismo) que vende una versión que no se sostiene. La duda merece ser escuchada antes que descartada como paranoia. En lo financiero, las propuestas brillantes piden ser miradas dos veces antes de firmar. La habilidad para presentar bien también puede usarse para esconder.",
          en: null
        }
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
        corto: {
          es: "Saber sin tener que explicar. La intuición ya tiene la respuesta antes que la razón la formule.",
          en: null
        },
        largo: {
          es: "Hay un conocimiento que viene de la atención más que del análisis. Algo en ti registra lo que aún no se puede nombrar. La carta invita al silencio antes que a la acción, a escuchar antes que a decidir. Lo que se busca afuera, en muchos casos, ya está disponible adentro.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una intimidad que no necesita palabras. En lo material, una decisión que pide más reflexión que números.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una conexión hecha más de presencia que de gestos visibles. Lo que el otro siente puede que no se exprese en frases. En lo financiero, conviene escuchar la sospecha antes de firmar, especialmente si un detalle no termina de calzar. La intuición está leyendo algo que la planilla todavía no muestra.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La intuición está hablando y algo la silencia. La razón se impone donde no debería.", en: null },
        largo: {
          es: "Hay un saber interior siendo ignorado por presión externa o por impaciencia. Lo que el cuerpo o el instinto registran no encuentran espacio para ser escuchados. La consecuencia es decisiones tomadas con información incompleta. Antes de pedir respuestas afuera, conviene volver al silencio.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Información oculta o malentendida en lo afectivo. En lo material, falta saber algo importante antes de decidir.",
          en: null
        },
        largo: {
          es: "En lo afectivo, hay algo no dicho que pesa, propio o del otro. La superficie se ve calma pero algo se mueve debajo. En lo financiero, hay datos faltantes en un acuerdo, contrato o préstamo. Lo prudente es buscar quien pueda traducir lo que no se está mostrando con claridad.",
          en: null
        }
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
        corto: {
          es: "Algo se está gestando con calma, sin necesidad de forzarlo. La paciencia es parte de la fertilidad.",
          en: null
        },
        largo: {
          es: "Hay un proceso fértil en marcha, propio o cercano. Algo está madurando sin necesidad de tu intervención constante. La energía actual sostiene mejor a otros que a planes nuevos. Cuidar lo que ya creció pesa más que iniciar más cosas.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Calidez y cuidado mutuo en lo afectivo. En lo material, una abundancia ganada con paciencia se puede compartir.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo que sostiene más por presencia que por intensidad. La maternidad de gestos pequeños construye más que un solo gran gesto. En lo financiero, hay holgura para ser generoso con quien lo necesita sin que eso te desbalancee. La abundancia se mantiene cuando circula.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El cuidado dado a otros dejó al centro vacío. Algo de la propia energía está siendo descuidada.",
          en: null
        },
        largo: {
          es: "La generosidad se está derramando hacia afuera y poco está volviendo. Hay un modo maternal aplicado donde no le toca, sofocando en vez de nutriendo. Lo creativo está bloqueado porque la energía se va antes en cuidar lo de otros. Conviene revisar dónde se está dejando de cuidar a uno mismo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, hay control disfrazado de cariño. En lo material, dependencia económica que ahoga.",
          en: null
        },
        largo: {
          es: "Afectivamente, alguien (puede ser uno mismo) está cuidando con tanta cercanía que sofoca. El cariño bien intencionado puede convertirse en jaula sin notarlo. En lo financiero, hay una dependencia material que está creando desbalance: ayuda dada que no se devuelve, o ayuda recibida que pesa demasiado. Lo justo necesita salir a la luz sin culpas pero sin cortinas.",
          en: null
        }
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
        corto: {
          es: "Una estructura clara sostiene lo que otros dejan al azar. La situación pide reglas claras y cumplirlas.",
          en: null
        },
        largo: {
          es: "Hay capacidad de organización funcionando bien, propia o ajena. Lo que estaba disperso encuentra forma cuando alguien decide y traza el límite. La autoridad útil aquí se sostiene en responsabilidad asumida. Avanzar implica mantener la estructura sin caer en rigidez.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja con bases sólidas y respeto mutuo. En lo material, disciplina financiera que da estabilidad.",
          en: null
        },
        largo: {
          es: "Afectivamente, lo que sostiene un vínculo es la consistencia y el acuerdo de fondo, más que el romance permanente. Hay reglas implícitas funcionando bien. En lo financiero, hay disciplina con el dinero: presupuesto, ahorro, decisiones tomadas con cabeza. La libertad real depende del orden más que de la improvisación.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay autoridad mal aplicada, propia o ajena. El control se volvió rigidez o se perdió por completo.",
          en: null
        },
        largo: {
          es: "El poder está siendo usado de forma desbalanceada. Por exceso, alguien impone sin escuchar y todo se vuelve obligación. Por defecto, falta dirección y las cosas se desordenan. Recuperar el equilibrio empieza por mirar qué se está controlando por miedo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una dinámica de poder está deformando el vínculo. En lo material, las cuentas escapan al control propio.",
          en: null
        },
        largo: {
          es: "Afectivamente, alguien quiere mandar más que acompañar. Una pareja, un familiar, o uno mismo está ejerciendo control disfrazado de cuidado. En lo financiero, los gastos exceden la planificación, o no hay planificación. La situación pide volver a lo básico antes de improvisar más.",
          en: null
        }
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
        corto: { es: "Lo establecido tiene su razón. Un consejo viejo encuentra aplicación nueva.", en: null },
        largo: {
          es: "Hay valor en seguir un camino ya trazado. La tradición, la institución o el mentor disponible ofrecen estructura útil para este momento. Innovar puede esperar; lo que pide la situación es aprender de quienes ya pasaron por aquí. La sabiduría heredada está disponible para quien sepa pedirla.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo que se enmarca en lo formal o tradicional. En lo material, las decisiones conservadoras dan frutos.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación que pide un paso institucional: matrimonio, vida en común, compromiso oficializado. La estructura compartida sostiene más de lo que parece. En lo financiero, los caminos probados (ahorro tradicional, instituciones establecidas) son más seguros que las apuestas nuevas. La estrategia conservadora protege precisamente cuando todo parece brillar.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Una norma o tradición empieza a sentirse como prisión. Hay impulso de salir del molde.", en: null },
        largo: {
          es: "Las reglas heredadas pueden empezar a sentirse como prisión cuando ya no tienen función. Hay una rebeldía justificada contra costumbres que perdieron sentido. La carta abre espacio para el camino propio por encima del heredado. Romper bien implica entender qué se rompe antes de hacerlo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo se vuelve rutina sin proyecto. En lo material, los consejos clásicos no aplican a esta situación.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación pierde frescura por aferrarse a moldes que ya no le sirven. La rutina se confunde con compromiso. En lo financiero, los caminos tradicionales no calzan con esta situación particular: hay que pensar fuera del manual. Lo no convencional pide responsabilidad propia, sin la red de la institución.",
          en: null
        }
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
        corto: {
          es: "Una elección importante se presenta. La respuesta surge de los valores, más que de los deseos del momento.",
          en: null
        },
        largo: {
          es: "Hay una decisión que pide alineación entre lo que se quiere y lo que se es. La carta señala armonía cuando esa alineación se logra, y conflicto cuando se rompe. Frente a una opción que parece atractiva pero choca con los principios, conviene escuchar el principio. Las elecciones hechas con coherencia interna se sostienen mejor en el tiempo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un encuentro que conecta en varios niveles a la vez. En lo material, una sociedad o pareja que multiplica lo que cada uno aporta.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una conexión que combina deseo, afinidad y propósito común. La pareja funciona porque las decisiones grandes se piensan juntas. En lo financiero, una asociación o sociedad encuentra equilibrio: cada parte aporta y recibe en proporción justa. Cuando los acuerdos están claros desde el inicio, lo demás fluye.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Una elección postergada empieza a tener costo. La indecisión acumula tensión.", en: null },
        largo: {
          es: "Hay un desbalance entre lo que se quiere y lo que se elige sostener. La carta invertida señala incongruencia: actos que contradicen valores propios, o miedo a comprometerse con la decisión que ya está tomada por dentro. La salida pide claridad, aunque resulte incómoda. Lo que se evita decidir, se decide por inercia.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un desencuentro de fondo, o una decisión postergada en pareja. En lo material, una sociedad pierde balance.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una grieta entre lo que dos personas creen querer y lo que en realidad quieren. La conversación postergada es la que más urge. En lo financiero, una sociedad o acuerdo entre partes está perdiendo equilibrio: alguien aporta más, alguien recibe más. Sin redefinir términos, la fricción se vuelve permanente.",
          en: null
        }
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
        corto: { es: "Hay impulso suficiente para llegar adonde apuntas. Lo que falta es mantener la dirección.", en: null },
        largo: {
          es: "La carta señala un momento de avance decidido. Las fuerzas que jalan en distintas direcciones se pueden gobernar si hay claridad sobre el destino. La victoria en este caso depende de la disciplina más que del azar. Soltar el rumbo equivale a perderlo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una conquista o consolidación lograda con foco. En lo material, una meta financiera concreta a la vista.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay momentum: un vínculo que avanza con dirección clara, o una persona que decide perseguir lo que quiere sin dudar. La voluntad bien dirigida tiene resultado. En lo financiero, los obstáculos materiales se pueden superar con foco y disciplina. Lo que se persigue con consistencia llega.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Demasiada presión propia o ajena, sin un destino claro. El movimiento se parece más a agitación que a avance.",
          en: null
        },
        largo: {
          es: "Hay esfuerzo desplegado pero sin coordinación. Las fuerzas internas tiran en sentidos opuestos y ninguna gana. La urgencia de hacer algo puede estar tapando una falta de dirección. Conviene parar antes de seguir, para definir hacia dónde se va.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pulseada de poder agota a las dos partes. En lo material, decisiones financieras tomadas en piloto automático.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay competencia donde debería haber colaboración. Cada uno empuja en su dirección y el vínculo se desgasta. En lo financiero, las decisiones se están tomando por inercia o por reacción, sin una estrategia detrás. Recuperar la dirección requiere parar el ritmo antes de acelerarlo.",
          en: null
        }
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
        corto: {
          es: "Hay una fuerza interior que no necesita demostrarse. La calma sostiene mejor que la agresividad.",
          en: null
        },
        largo: {
          es: "La carta describe una capacidad de mantener la serenidad cuando todo lo demás se agita. La fuerza acá nace del autocontrol y la paciencia más que de la imposición. Hay un poder en domar las propias reacciones impulsivas. Quien se controla a sí mismo tiene más influencia que quien grita.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo donde la pasión convive con la paciencia. En lo material, la solidez se construye con disciplina, sin urgencias.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación intensa que se sostiene precisamente porque las dos partes saben templar lo que sienten. La pasión tiene cauce. En lo financiero, los hábitos pacientes (no comprar por impulso, ahorrar de a poco) están dando resultado. Lo que se construye despacio resiste mejor que lo que se infla rápido.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Hay miedo o rabia tomando el mando interior. La calma habitual se está desarmando.", en: null },
        largo: {
          es: "La fuerza interior se siente lejos. La inseguridad o el agotamiento están haciendo difíciles cosas que de otro modo se manejarían sin esfuerzo. Reaccionar con rabia o ceder al miedo son formas de perder la propia centralidad. Recuperarla pasa por gestos pequeños: descansar, comer, mover el cuerpo, dormir lo suficiente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, hay codependencia disfrazada de amor. En lo material, miedo financiero que paraliza.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación se está apoyando en la inseguridad de uno o de los dos. Lo que parece intimidad puede estar siendo evasión de lo propio. En lo financiero, el miedo está bloqueando movimientos necesarios: gastos diferidos, decisiones postergadas, oportunidades que se pasan por incapacidad de actuar. Recuperar la fuerza pide enfrentar lo que asusta, en pequeñas dosis.",
          en: null
        }
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
        corto: {
          es: "La situación pide retirarse para escucharse. La respuesta está adentro y pide silencio para emerger.",
          en: null
        },
        largo: {
          es: "La carta señala una etapa de introspección. Hay un movimiento natural hacia el silencio: alejarse del ruido para escuchar lo propio. La sabiduría que se busca llega en soledad, despacio. La retirada actual es preparación para lo que viene, aunque parezca pasividad.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, espacio individual antes de avanzar en pareja. En lo material, una decisión grande pide reflexión más que consultas externas.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una etapa donde uno o ambos necesitan tiempo a solas para entender lo propio. La carta sugiere respetar ese silencio en lugar de forzar conversación. En lo financiero, las decisiones importantes (inversión, compra grande, cambio de trabajo) piden tiempo de reflexión personal antes de acción. La sabiduría útil aquí viene de la propia evaluación cuidadosa.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La soledad dejó de ser refugio y se volvió aislamiento. Hay un cierre que conviene revisar.",
          en: null
        },
        largo: {
          es: "Lo que empezó como retirada útil se convirtió en escondite. La carta invertida marca el punto donde el silencio interior empieza a congelar más que a nutrir. Aislarse para crecer pesa diferente que aislarse para evitar. Recuperar el contacto con otros, aunque sea pequeño, devuelve perspectiva.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una soledad no buscada que pesa. En lo material, decisiones financieras tomadas sin asesoría necesaria.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una distancia que llegó sin ser pedida y que pesa. Una pareja se está alejando, o alguien está atravesando un período de soledad difícil. En lo financiero, hay reluctancia a pedir ayuda donde se necesita: contador, asesor, alguien que sepa más. La autosuficiencia exagerada está costando más caro que el orgullo.",
          en: null
        }
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
        corto: {
          es: "Algo está cambiando por su propio peso. Lo que sube en algún momento baja, y al revés también es cierto.",
          en: null
        },
        largo: {
          es: "La carta señala un giro en marcha. Las cosas se están reordenando por causas que no están del todo bajo control propio. Lo importante es notar el movimiento y leer qué pide. La suerte premia más a quien se mueve con el cambio que a quien lo resiste.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un giro inesperado que reposiciona lo conocido. En lo material, una oportunidad llega por un canal no anticipado.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación cambia de fase: de amistad a algo más, o al revés. La carta señala que el cambio es más grande que la voluntad de las partes. En lo financiero, hay una vuelta de timón: una propuesta inesperada, un cambio de empleo, un golpe de suerte. Aprovecharla pide flexibilidad antes que planificación.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Algo se trabó. La rueda gira pero parece girar contra ti.", en: null },
        largo: {
          es: "Hay un ciclo que está funcionando en contra. Lo que se intenta no termina de cuajar, y aparecen obstáculos en cadena. La carta invertida pide aceptar que parte de lo que pasa no está bajo control propio, y dejar de pelear contra el viento. Lo que se resiste con fuerza solo prolonga el ciclo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una mala racha se sostiene. En lo material, una pérdida o gasto inesperado descalibra la planificación.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un patrón que se repite: el mismo tipo de vínculo, el mismo tipo de desencuentro, la misma frustración. La carta invertida invita a mirar qué papel propio sostiene el ciclo. En lo financiero, hay un golpe imprevisto que rompe el plan: gasto médico, reparación, pérdida laboral. Adaptarse pesa más que tener razón.",
          en: null
        }
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
        corto: {
          es: "Las acciones tienen su peso, y ese peso se está midiendo. Lo hecho se está leyendo con cuidado.",
          en: null
        },
        largo: {
          es: "Hay una balanza funcionando. Las decisiones tomadas, las palabras dichas, las acciones puestas en marcha están dando su resultado proporcional. La carta señala que la situación se va a inclinar hacia donde lo justo lo pida. La integridad propia importa más que la apariencia.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una verdad importante sale a la luz y reordena. En lo material, un acuerdo o trámite se resuelve con justicia.",
          en: null
        },
        largo: {
          es: "Afectivamente, lo que estaba turbio en una relación encuentra claridad. La conversación postergada se da, y todo queda en su sitio. En lo financiero, los acuerdos se cierran de forma equilibrada: contratos firmados, deudas saldadas, herencias resueltas. Lo justo se impone al final.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Hay desbalance que aún no se reconoce. Eludir la responsabilidad solo retrasa el ajuste.", en: null },
        largo: {
          es: "Algo no está en balance y la carta invertida nombra la negación de eso. Hay una situación donde la verdad pesa más que la versión cómoda. Eludir la responsabilidad funciona corto plazo y se cobra largo plazo. Volver al equilibrio empieza por mirar la propia parte sin defensa.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un trato desigual sostenido por demasiado tiempo. En lo material, un trámite injusto o un acuerdo que se rompió.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde una parte da más y la otra recibe más, y ninguna lo quiere nombrar. En lo financiero, hay un litigio, una herencia disputada, un contrato incumplido, o un trámite que parece avanzar contra lo razonable. Reclamar lo justo requiere documentación, paciencia y disposición a sostener la queja sin agotarse.",
          en: null
        }
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
        corto: { es: "Una pausa forzada que cambia el ángulo de visión. Lo que parecía claro se vuelve a leer.", en: null },
        largo: {
          es: "Hay un momento de suspensión que conviene aceptar más que pelear. Lo que se vivencia como bloqueo está produciendo, en silencio, un cambio de perspectiva. Las certezas anteriores se relajan y aparecen ángulos nuevos. Avanzar pasa por soltar lo que solía orientar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pausa que pide reformular más que actuar. En lo material, un período donde menos es más.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un alto en el vínculo que pide ser respetado. Forzar movimiento aquí solo desgasta. La pausa permite ver lo que estaba oculto por la velocidad. En lo financiero, hay un momento de quietud: ahorros sin movilizar, planes en espera, proyectos detenidos. La quietud cumple función de maduración aunque pueda parecer fracaso.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La pausa se prolongó demasiado. Lo que era reflexión se volvió parálisis.", en: null },
        largo: {
          es: "Algo en la suspensión perdió su función. La quietud útil se convirtió en estancamiento. La carta invertida marca el momento de salir del estado de espera, aunque cueste. La decisión postergada empieza a tener un costo concreto que ya no se puede ignorar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja en pausa que ya no se reactiva. En lo material, dinero parado donde se necesita movimiento.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación está detenida en un punto del cual no sale: los dos saben que algo tiene que decidirse y los dos lo postergan. En lo financiero, hay capital parado, ahorros sin uso, oportunidades dejadas pasar por excesiva precaución. Lo que se reservó por miedo está perdiendo valor con el tiempo.",
          en: null
        }
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
        corto: { es: "Algo termina. Lo que termina hace lugar para lo que viene.", en: null },
        largo: {
          es: "Hay un final que ya está en marcha, querido o no. La carta nombra una transformación profunda: una etapa, una identidad, una forma de relacionarse que cierra. El miedo al cambio es comprensible, pero resistir alarga el dolor sin cambiar el resultado. Soltar abre lugar para lo que aún no se ha mostrado.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un cierre que reordena todo lo demás. En lo material, una pérdida que despeja espacio para algo nuevo.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación llega a su final, o cambia de forma de manera profunda. Aceptarlo es más útil que sostener algo que ya terminó. En lo financiero, hay una pérdida material que duele: trabajo, propiedad, recurso esperado. Esta pérdida también es transformación: empuja a redefinir qué es realmente importante.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Hay resistencia a un cambio que ya pasó. Sostener lo terminado consume sin dar.", en: null },
        largo: {
          es: "Lo que ya cerró está siendo sostenido como si todavía estuviera vivo. La carta invertida marca el costo de no aceptar el final: el cuerpo, la energía, el tiempo se gastan en mantener una ilusión. La transformación está esperando, pero no puede empezar mientras lo viejo siga ocupando el lugar. El miedo al vacío posterior es comprensible, y el vacío es la condición para lo nuevo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un duelo postergado que pide ser hecho. En lo material, una decisión de cambio que se evita.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una despedida que no se completó: una relación que terminó pero que sigue ocupando espacio mental, un duelo que se intentó saltar, un patrón emocional que ya no sirve. En lo financiero, hay una decisión de cambio que se posterga (renunciar, vender, terminar un proyecto) y el postergarla está costando más que tomarla. El paso difícil es también el paso necesario.",
          en: null
        }
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
        corto: {
          es: "La virtud aquí está en la mezcla justa, lejos de cualquier extremo. La paciencia funciona como estrategia activa.",
          en: null
        },
        largo: {
          es: "Hay un equilibrio en juego entre fuerzas que parecen opuestas pero se necesitan. La carta sugiere combinar antes que elegir, integrar antes que separar. Lo que pide la situación es paciencia: dejar que las cosas decanten, ajustar de a poco, sin forzar. La templanza opera como maestría del ritmo: actuar despacio sin dejar de actuar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación que sostiene tensiones sin romperse. En lo material, un balance financiero ganado con disciplina suave.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo que combina diferencias sin pelear: dos personalidades distintas encuentran su modo de funcionar juntas. La paciencia mutua sostiene más que la afinidad inicial. En lo financiero, hay un manejo cuidadoso: ahorrar sin austeridad extrema, gastar sin imprudencia, mantener proporciones sostenibles en el tiempo. El equilibrio que se construye despacio es el que dura.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Algo está fuera de proporción. Un extremo está jalando con fuerza desbalanceada.", en: null },
        largo: {
          es: "Hay un desbalance interno que se proyecta hacia afuera. La templanza invertida marca exceso (de trabajo, de afecto, de gasto, de control) o defecto (apatía, falta de cuidado, inacción). La armonía pide mirar dónde se está cargando demasiado y dónde se está dejando vacío. Pequeños ajustes sostenidos importan más que grandes correcciones bruscas.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, conflicto sin mediación posible aún. En lo material, finanzas en desorden por urgencia o desidia.",
          en: null
        },
        largo: {
          es: "Afectivamente, dos personas no logran encontrar el ritmo común: cada una opera en su tiempo y la pareja se desencuentra. En lo financiero, hay desorden: gasto compulsivo, ahorro extremo que paraliza, o falta de planificación que deja todo a la improvisación. Recuperar la mezcla justa pide tiempo y aceptar que el cambio será gradual.",
          en: null
        }
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
        corto: { es: "Hay una atadura que se confunde con elección. Lo que parece libertad puede ser hábito.", en: null },
        largo: {
          es: "La carta nombra una dependencia: a una sustancia, a una persona, a una forma de pensar, a un patrón material. La cadena en la imagen es importante porque está suelta: las amarras son menos sólidas de lo que parecen. Hay placer en lo conocido y eso lo hace difícil de soltar. Reconocer la atadura es el primer movimiento hacia desatarla.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, deseo intenso que puede confundirse con amor. En lo material, gasto compulsivo o atadura financiera disfrazada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación marcada por la pasión más que por el cuidado. La intensidad puede esconder dependencia, posesividad, o un vínculo que solo se sostiene por costumbre física. En lo financiero, hay deudas que se prolongan, gastos que se justifican como necesidades, una atadura material que limita opciones. Soltar implica nombrar la atadura primero.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Una cadena se está aflojando. Lo que parecía imposible de dejar está empezando a soltarse.",
          en: null
        },
        largo: {
          es: "La carta invertida marca un momento de despertar. Lo que tenía a la persona atada (sea el hábito, el vínculo o el patrón material) está perdiendo fuerza. Romper con eso implica incomodidad inicial pero abre espacio nuevo. La libertad recuperada se siente al principio como vacío, después como aire.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, salida de una relación que ataba más que nutría. En lo material, alivio de una deuda o atadura financiera.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación tóxica en proceso de cierre. La distancia que asustaba está empezando a sentirse como descanso. En lo financiero, una deuda se salda, una dependencia económica se rompe, un compromiso material que limitaba se afloja. La reconquista de la propia autonomía pide sostener el nuevo estado sin recaer en el viejo.",
          en: null
        }
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
        corto: { es: "Algo cae. Lo que se rompe estaba mal sostenido desde el principio.", en: null },
        largo: {
          es: "La carta describe un derrumbe brusco. Una estructura se viene abajo, y aunque duele, lo que cae no era sostenible. La crisis es información: muestra dónde estaban los errores. Después del derrumbe queda espacio para construir sobre algo más firme.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una ruptura que reorganiza todo. En lo material, una pérdida abrupta o un revés inesperado.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación o ilusión que se desmorona de golpe. La caída deja la verdad expuesta; lo que era falso ya no se puede sostener. En lo financiero, hay un golpe imprevisto: pérdida de empleo, fracaso de proyecto, problema de salud que afecta lo material. Reconstruir empieza por aceptar lo que ya no está.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Hay una crisis que se intuye pero aún no estalló. Algo se está sosteniendo con alfileres.", en: null },
        largo: {
          es: "La carta invertida nombra el momento previo a la caída. Hay una estructura interna o externa que ya sabe que no se sostiene, pero que se está prolongando con esfuerzo. Postergar el derrumbe solo aumenta el costo cuando finalmente ocurra. Aceptar la caída con anticipación duele menos que sostener la mentira.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja agonizando que ninguno quiere terminar. En lo material, un negocio o trabajo insostenible que se sigue forzando.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación que ya no funciona pero que ninguna de las partes nombra. La energía gastada en mantener apariencias deja a las dos vacías. En lo financiero, hay un proyecto, trabajo o sociedad que está fallando y se sigue intentando con métodos que no funcionan. Cortar antes evita que el daño se acumule.",
          en: null
        }
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
        corto: {
          es: "En medio de la dificultad, una calma luminosa. La esperanza regresa sin necesidad de ser invocada.",
          en: null
        },
        largo: {
          es: "La carta señala un momento de renovación interior. Lo peor de la tormenta se va aflojando y queda espacio para la respiración honda. La fe (en uno mismo, en lo que viene, en el sentido de lo que pasó) se restablece despacio. La paciencia con el propio proceso es la mejor compañía aquí.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo se sana o uno nuevo aparece con suavidad. En lo material, un alivio después de aprietos.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación entra en un período de armonía: las heridas se procesan, la confianza se reconstruye, hay espacio para mostrarse sin máscara. En lo financiero, las cosas empiezan a destrabarse: una oferta que llega, una solución que aparece, un alivio en lo que pesaba. Lo bueno de este momento se construye sobre lo aprendido.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La esperanza está flaqueando. Algo nubló la posibilidad de mejor.", en: null },
        largo: {
          es: "Hay un momento de desánimo donde la fe en lo que viene se debilitó. La carta invertida marca dificultad temporal de ver la salida más que ausencia de ella. Lo que falta es la perspectiva, y se restituye con tiempo. Recuperar el horizonte pide volver a lo pequeño que sí funciona.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, desencanto que aún no termina de levantarse. En lo material, expectativas defraudadas.",
          en: null
        },
        largo: {
          es: "Afectivamente, una decepción está teniendo más peso que la esperanza. La confianza se quebró en algún punto y no termina de regenerarse. En lo financiero, expectativas que parecían firmes se desinflaron: una oferta no concretada, un negocio que no rinde, un retorno menor al esperado. Reordenar pide aceptar la decepción sin dejar que defina todo lo que viene.",
          en: null
        }
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
        corto: { es: "No todo es lo que parece. Lo que ves es solo parte de lo que pasa.", en: null },
        largo: {
          es: "La carta marca un momento de incertidumbre y confusión. Lo aparente y lo real no coinciden. Las emociones tiñen la lectura de la situación, y miedos viejos pueden estar mezclándose con datos del presente. La intuición es más confiable aquí que el análisis: percibir antes que decidir.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, hay algo que no se está viendo claramente. En lo material, decisiones financieras pendientes con información incompleta.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una bruma sobre el vínculo: malentendidos, sospechas no confirmadas, sentimientos confusos. Forzar claridad en este momento es contraproducente; conviene esperar que la situación se aclare por sí sola. En lo financiero, no es buen momento para grandes decisiones: faltan datos, los números no terminan de cuadrar, alguien retiene información. La paciencia evita errores de los que después cuesta volver.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La niebla empieza a despejarse. Lo que estaba escondido se vuelve visible.", en: null },
        largo: {
          es: "La carta invertida marca el momento en que la confusión empieza a disiparse. Las dudas que pesaban encuentran respuesta, las sospechas se confirman o se descartan. Lo que estaba escondido (por uno mismo o por otro) sale a la superficie. Con la información completa, las decisiones se vuelven manejables.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, salen a la luz cosas que estaban opacas. En lo material, claridad sobre lo que estaba turbio en cuentas o acuerdos.",
          en: null
        },
        largo: {
          es: "Afectivamente, lo que se intuía se confirma: una mentira sale a la luz, un secreto se nombra, un malentendido se aclara. La verdad puede doler pero deja de drenar energía. En lo financiero, los números empiezan a tener sentido: lo que parecía un misterio (gasto, deuda, pago no recibido) se explica. Con la información a mano, lo que toca es decidir.",
          en: null
        }
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
        corto: { es: "Hay claridad y calor disponibles. Lo que estaba en sombra se ilumina.", en: null },
        largo: {
          es: "La carta marca un momento de plenitud. Las cosas funcionan, hay energía, hay claridad sobre lo que se quiere. La alegría aquí tiene fundamento: viene de haber atravesado lo difícil. Lo logrado pide ser disfrutado y compartido con quienes acompañaron.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación radiante o un encuentro luminoso. En lo material, una recompensa concreta y bien ganada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un período donde el vínculo florece: confianza, alegría, presencia compartida, planes hechos juntos. La pareja (o la posibilidad de pareja) se siente sin esfuerzo. En lo financiero, llega un fruto: un ascenso, una venta, una recompensa por trabajo hecho con paciencia. La abundancia se nota más cuando se reconoce y se agradece.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Algo de la alegría está nublado. Lo que debería brillar está parcialmente cubierto.", en: null },
        largo: {
          es: "La carta invertida marca un momento donde la felicidad disponible no termina de llegar. Hay logros pero algo los empaña: cansancio, duda, la sensación de que falta algo. A veces es exceso de optimismo desmedido lo que oculta problemas reales; otras es pesimismo crónico tapando éxitos válidos. Reconocer lo que sí está funcionando es el primer paso para que se note.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una alegría parcial o postergada. En lo material, un éxito menor al esperado.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación tiene buenos momentos pero algo los limita: tiempo escaso, distancia, circunstancias externas. En lo financiero, hay un logro pero menor de lo proyectado: el aumento es chico, la venta es buena pero no excelente, el bono llega pero recortado. Lo que toca es reconocer lo que sí está, sin amargarse por lo que no.",
          en: null
        }
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
        corto: { es: "Una nueva claridad sobre el propio camino. Lo que había que cambiar se vuelve obvio.", en: null },
        largo: {
          es: "La carta describe un momento de despertar interior. Algo que estaba dormido se reactiva, algo que se evitaba mirar se vuelve evidente. Hay una llamada a tomar perspectiva sobre la propia historia y decidir qué se conserva y qué se suelta. Es un punto de inflexión silencioso pero profundo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una conversación que cambia la dirección de una relación. En lo material, un balance honesto sobre la propia situación financiera.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un momento de claridad sobre lo que la relación necesita: una conversación honesta, una decisión postergada, una redefinición de acuerdos. La verdad compartida abre espacio para algo nuevo. En lo financiero, el balance honesto sobre lo que se gana, se gasta y se debe permite cambiar lo que estaba mal. La conciencia de la propia situación es ya parte de la solución.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay autocrítica desmedida o, al revés, falta de mirar lo propio. El balance interno está fuera de foco.",
          en: null
        },
        largo: {
          es: "La carta invertida marca dos extremos posibles: o demasiada culpa que paraliza, o falta de honestidad sobre lo que sí necesita cambiar. La salida pasa por mirar las propias acciones sin demonizarlas y sin justificarlas. Lo importante es aprender más que condenar. La oportunidad de cambio sigue disponible cuando se la mira sin defensa.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, autocrítica que se proyecta en el vínculo. En lo material, postergar enfrentar lo que ya hay que enfrentar.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un patrón donde la inseguridad propia se traduce en exigencia hacia el otro. La culpa o la duda se descargan en el vínculo en vez de procesarse adentro. En lo financiero, hay decisiones pendientes que se siguen postergando: deudas no enfrentadas, presupuestos no hechos, ingresos no revisados. El despertar empieza por mirar lo que se viene evitando.",
          en: null
        }
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
        corto: { es: "Algo se completa. Las piezas del proceso encajan finalmente.", en: null },
        largo: {
          es: "La carta marca el cierre exitoso de un ciclo. El proceso largo encuentra finalmente su forma definitiva. Hay una integración de todo lo aprendido en el camino. Esta plenitud es la base sobre la cual empieza el ciclo siguiente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación llega a un nivel de plenitud o paso importante. En lo material, una meta financiera se alcanza.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un cierre que se siente como logro: una pareja consolida, un proceso difícil se resuelve, una etapa de la vida juntos cierra bien. En lo financiero, una meta importante se concreta: deuda saldada, casa comprada, proyecto entregado, retiro alcanzado. La satisfacción acá pide ser registrada antes de saltar a la siguiente meta.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Falta una pieza para cerrar. El cuadro está casi completo pero algo se resiste.", en: null },
        largo: {
          es: "La carta invertida marca un ciclo que está a punto de cerrar pero no termina de hacerlo. Hay una pieza pendiente: una conversación, una decisión, un trámite, una aceptación interna. Lo que se evita cerrar mantiene abierta una energía que no termina de descansar. Completar lo que falta libera para lo siguiente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación que casi llega a destino pero algo la frena. En lo material, una meta a la que le falta el último paso.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde el siguiente paso (vivir juntos, casarse, dejar de hacerlo, formar familia) no termina de darse aunque todo lo apunta. La indecisión deja al vínculo en suspenso. En lo financiero, hay una meta casi alcanzada que falta cerrar: un trámite final, un pago último, una venta a punto de concretarse. Sostener el esfuerzo final es lo que da el cierre.",
          en: null
        }
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
        corto: {
          es: "Algo te conmueve y no sabes bien por qué. Esa emoción es la señal de que algo nuevo se está abriendo.",
          en: null
        },
        largo: {
          es: "Hay una corriente afectiva que se abre paso después de un silencio largo. Puede ser una persona, un proyecto, una sensación olvidada. Lo que importa es dejar que llegue, sin filtrar demasiado. Lo que rechaces tarda mucho en volver.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Afectivamente, una nueva intimidad encuentra forma. En lo material, una entrada inesperada llega a través de gente con aprecio.",
          en: null
        },
        largo: {
          es: "Una relación se profundiza, o aparece una desde un lugar inesperado. La cercanía gana más terreno que la cautela. En el dinero, la generosidad de otros encuentra cómo manifestarse: un préstamo aprobado, una ayuda que llega, una oferta hecha desde el afecto. Recibir bien también es una habilidad.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La fuente está, pero algo la tapa. Lo que se siente no termina de salir.", en: null },
        largo: {
          es: "Hay un cierre afectivo del que no eres del todo consciente. La desconfianza filtra cada gesto antes de dejarlo pasar. La emoción está adentro pero no encuentra cómo expresarse. Antes de buscar afuera, conviene revisar lo que sigue pendiente adentro.",
          en: null
        }
      },
      relacional: {
        corto: { es: "Una decepción afectiva te tiene en pausa todavía. Lo que toca es reparar antes de pedir.", en: null },
        largo: {
          es: "En lo afectivo aparece distancia, malentendido, o una pérdida aún sin procesar. Forzar el contacto no ayuda; conviene dejarlo asentar. En el dinero, una ayuda esperada no llega o llega menos de lo prometido. Lo prudente es revisar dependencias antes de apoyarse en lo que todavía no está firme.",
          en: null
        }
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
        corto: { es: "Algo se está moviendo por debajo. O lo haces tú, o te lo están haciendo.", en: null },
        largo: {
          es: "Hay una estrategia en juego que evita la confrontación directa. Conseguir algo sin pedirlo abiertamente puede funcionar a corto plazo, pero deja un costo que se cobra después. Si la maniobra es propia, vale considerar qué cambiaría al poner la carta sobre la mesa. Si la maniobra es ajena, la intuición ya lo sabe.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Una omisión, una verdad a medias. En lo material, una promesa hecha con asteriscos que no se mencionan.",
          en: null
        },
        largo: {
          es: "Afectivamente, alguien (puede ser uno mismo) guarda información que cambiaría las cosas. Lo no dicho pesa aunque no se nombre. En lo financiero, conviene mirar dos veces los acuerdos donde lo importante quedó fuera del papel: ofertas demasiado convenientes, préstamos con letra chica, dinero prestado a alguien que ya esquiva el tema. Lo que parece una salida lateral suele salir caro.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Algo escondido sale a la luz. La opción es confesar antes que te confiesen.", en: null },
        largo: {
          es: "Lo que estaba sostenido a escondidas ya no puede sostenerse. Hay un alivio en dejar de cargarlo, aunque venga acompañado de consecuencias. Quien oculta tiene una ventana para hablar antes que el otro. Quien queda fuera de la información empieza a verla con claridad.",
          en: null
        }
      },
      relacional: {
        corto: { es: "Sale a flote lo que estaba debajo. La salida pasa por reparar lo que se rompió.", en: null },
        largo: {
          es: "En lo afectivo, una verdad postergada se hace evidente y exige respuesta. La pregunta útil es qué se hace con esa verdad. En lo material, hay irregularidades pidiendo orden: impuestos pendientes, deudas no reconocidas, cuentas turbias con alguien. Lo desordenado, una vez puesto en su sitio, deja respirar.",
          en: null
        }
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
        corto: {
          es: "Estás en posición de generar y de cuidar a la vez. Lo que produces se convierte en refugio, tuyo y de otros.",
          en: null
        },
        largo: {
          es: "Hay una capacidad concreta funcionando bien: manejas lo material sin perder el aire para lo emocional. La casa, el cuerpo, las cuentas, cada cosa en su lugar sin que parezca esfuerzo. La fuerza acá es útil sin necesidad de ser ostentosa. Otros se acercan porque saben que contigo las cosas funcionan.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Estabilidad y nutrición en lo afectivo. En lo material, una seguridad ganada con paciencia.",
          en: null
        },
        largo: {
          es: "En lo afectivo, lo que sostiene es la consistencia, sin necesidad de dramatismo. El cuidado mutuo aparece en lo cotidiano: tiempo, presencia, tareas compartidas. En lo financiero, una meta de seguridad se concreta. Lo construido pide ser disfrutado sin culpa.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La capacidad sigue ahí, pero el cuidado está desbalanceado. Mucho volcado hacia afuera, poco hacia el centro propio.",
          en: null
        },
        largo: {
          es: "La generosidad se inclina más hacia los demás y deja poco para uno mismo. O al revés: hay un cierre que hace que todo lo material se sienta como amenaza. El desbalance está entre lo que se da y lo que se reserva. La salida pasa por revisar a dónde se va lo que ya hay: tiempo, dinero, energía.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Inseguridad disfrazada de control. En el dinero, la cuenta no cuadra entre lo que entra y lo que se va.",
          en: null
        },
        largo: {
          es: "En lo afectivo, los celos, la posesividad o la dependencia material rompen el flujo natural de la cercanía. El origen está en una inseguridad propia que se proyecta hacia afuera. En lo financiero, hay desorden: gastos impulsivos por incomodidad emocional, o avaricia que aleja a la gente que importa. Reordenar pide mirar primero qué falta de verdad adentro.",
          en: null
        }
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
