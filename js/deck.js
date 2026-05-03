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
        corto: {
          es: "Una conexión genuina con otra persona. Lo que cada uno aporta encuentra su correspondencia exacta.",
          en: null
        },
        largo: {
          es: "Hay un encuentro de iguales en marcha. Dos partes que reconocen lo que el otro tiene y lo que aporta lo propio. La carta marca el inicio de un vínculo donde ambas partes se sostienen mutuamente sin perder lo individual. La fuerza de esta unión está en el equilibrio del intercambio.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja en armonía o el inicio de una. En lo material, una sociedad o acuerdo entre dos partes que se respetan.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación donde ambas personas se eligen activamente y se cuidan con la misma intensidad. La compañía suma sin restar individualidad. En lo financiero, una sociedad o acuerdo entre dos partes encuentra equilibrio: aportes proporcionales, decisiones compartidas, beneficios distribuidos con justicia. Lo que se construye con otro tiene más raíz que lo que se construye solo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "El equilibrio entre dos partes se rompió. Algo del intercambio dejó de fluir.", en: null },
        largo: {
          es: "La igualdad del vínculo está rota: alguien da más, alguien recibe más, o las dos partes se confundieron en una sola sin individualidad. La codependencia puede pasar por intimidad pero ahoga lentamente. Recuperar el balance pide que cada uno vuelva a tener vida propia. Sin diferencia entre dos no hay encuentro posible.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja desbalanceada que no termina de nombrarlo. En lo material, una sociedad donde uno aporta más y nadie lo dice.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación donde uno asumió el rol que el otro abandonó: cuidar, sostener, decidir. Ese desequilibrio agota a quien carga y aleja a quien recibe sin reciprocidad. En lo financiero, hay una sociedad o acuerdo entre dos donde el reparto se torció: aportes desiguales, beneficios mal distribuidos, decisiones tomadas por una sola parte. Renegociar es la salida.",
          en: null
        }
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
        corto: {
          es: "Una celebración compartida, propia o ajena. Lo logrado se festeja con quienes acompañaron.",
          en: null
        },
        largo: {
          es: "Hay un momento de alegría comunitaria. Algo bueno se completa y pide ser celebrado en compañía. Las amistades, los grupos, los círculos cercanos toman protagonismo. Lo que se vive con otros pesa distinto que lo que se vive en privado.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "Afectivamente, una amistad importante o un grupo que sostiene. En lo material, una recompensa que coincide con un momento social.",
          en: null
        },
        largo: {
          es: "Afectivamente, los vínculos cercanos están en buen estado: encuentros que reconfortan, complicidad con amigos, una pareja que se nutre del entorno común. El amor también puede llegar desde un círculo de amistades. En lo financiero, hay un logro que se da en contexto colectivo: una venta, un evento, un proyecto compartido que rinde. Compartir lo bueno multiplica más que retenerlo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La celebración tiene gusto a poco. Algo del entorno social drena más de lo que aporta.", en: null },
        largo: {
          es: "Hay exceso o desencuentro en lo grupal: fiestas que cansan, círculos donde la cercanía se siente vacía, chismes que llegan donde no deberían. La calidad de los vínculos pesa más que la cantidad. Cuando lo social agota en vez de nutrir, conviene mirar a quién se le sigue dando tiempo. No todo lo que se llama amistad lo es.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un tercero o un grupo entrometiéndose donde no le toca. En lo material, un evento social genera más gasto que celebración.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja siendo afectada por terceros: comentarios externos, una amistad que se cruza, alguien tratando de meterse donde no le compete. La defensa del vínculo se hace en privado y de a dos. En lo financiero, un compromiso social (boda, cumpleaños, viaje grupal) genera más estrés que disfrute por su costo. Lo prudente es ajustar gastos antes que ceder a la presión social.",
          en: null
        }
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
        corto: {
          es: "Algo se ofrece y la mirada está en otro lado. La oportunidad existe pero pasa desapercibida.",
          en: null
        },
        largo: {
          es: "Hay un momento de retraimiento: cansancio, apatía, una sensación de que nada vale el esfuerzo. La carta señala que hay algo siendo ofrecido y la atención está demasiado puesta en lo perdido para verlo. El descontento puede ser legítimo y al mismo tiempo estar tapando lo que sí está disponible. Salir del trance pide levantar la vista del propio descontento.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, desinterés o saturación con lo que hay. En lo material, una propuesta económica recibida con indiferencia.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación pierde brillo por costumbre o por exceso de exigencia interna. La frescura dejó de notarse aunque siga estando. En lo financiero, llega una propuesta (oferta de trabajo, oportunidad de inversión, ayuda ofrecida) y se la mira con escepticismo o cansancio. Antes de descartarla, vale revisar si la apatía está hablando por encima del juicio.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La atención vuelve. Algo que se había ignorado empieza a ser visto con otros ojos.", en: null },
        largo: {
          es: "La carta invertida marca la salida del estancamiento. Lo que se rechazaba por desinterés vuelve a interesar. Hay una reconexión con el deseo, con la posibilidad, con lo que estaba esperando ser recibido. La sensibilidad se reactiva después de un período de bloqueo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, vuelve la apertura después de un cierre. En lo material, una oportunidad rechazada vuelve a presentarse.",
          en: null
        },
        largo: {
          es: "Afectivamente, una persona empieza a salir del aislamiento: vuelve a aceptar invitaciones, a mostrarse, a permitirse vínculo. El deshielo es gradual y no requiere apuro. En lo financiero, una propuesta dejada de lado vuelve a considerarse con mejor disposición. La diferencia entre rechazar por hartazgo y rechazar por convicción se vuelve clara, y permite decidir mejor.",
          en: null
        }
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
        corto: { es: "Algo se perdió y la mirada está fija en eso. Lo que sí quedó está fuera del foco actual.", en: null },
        largo: {
          es: "Hay un duelo en proceso. La pérdida es real y merece ser sentida, pero el dolor se está volviendo paisaje. Tres copas caídas reciben atención mientras dos siguen en pie, esperando ser vistas. Salir del lamento pide girar la cabeza despacio hacia lo que sí se conservó.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un duelo de relación o una decepción reciente. En lo material, una pérdida económica que pesa más por lo simbólico que por la cifra.",
          en: null
        },
        largo: {
          es: "Afectivamente, una ruptura, una traición o un desencuentro están dominando la mirada. La herida es legítima y al mismo tiempo está tapando lo que aún queda: amistades, otros vínculos, capacidad propia de querer. En lo financiero, una pérdida material duele tanto por lo que representaba como por su valor concreto: un trabajo, un negocio, una expectativa. Reordenar empieza por inventariar lo que sigue en pie.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "El duelo empieza a ceder. La mirada se levanta y encuentra lo que estaba esperando.", en: null },
        largo: {
          es: "La carta invertida marca la salida del lamento. Hay una aceptación silenciosa de la pérdida, sin necesidad de borrarla. Lo que sigue en pie empieza a recibir el cuidado que merecía. El paso siguiente se vuelve posible cuando el peso del pasado deja de ser referencia única.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una herida cicatriza y abre espacio para nuevo vínculo. En lo material, recuperación después de un golpe económico.",
          en: null
        },
        largo: {
          es: "Afectivamente, lo que dolió se va integrando: una ruptura procesada, un duelo elaborado, una traición que dejó aprendizaje. La capacidad de amar vuelve sin cargar el peso anterior. En lo financiero, lo que sobrevivió a la pérdida alcanza para reconstruir otra vez. La nueva versión suele ser más realista y por eso más sólida.",
          en: null
        }
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
        corto: {
          es: "El pasado vuelve con dulzura. Una memoria, una persona o un lugar conocido reaparece y aporta calor.",
          en: null
        },
        largo: {
          es: "Hay una vuelta a lo familiar: gente conocida, recuerdos de infancia, espacios que sostienen sin pedir nada. La carta marca un descanso del presente exigente, un permiso para estar en lo conocido. Las raíces, las amistades viejas, la familia de origen ofrecen algo sólido. Lo que viene de lejos puede ayudar a entender lo que pasa cerca.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un reencuentro con alguien del pasado o una relación que retoma calor. En lo material, una ayuda familiar o un recurso heredado aparece.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación que recupera intimidad después de distancia, o aparece alguien del pasado con quien hay historia. La nostalgia es bienvenida si no termina de reemplazar al presente. En lo financiero, llega ayuda desde el círculo cercano: familia, amistades de toda la vida, alguien que decide acompañar materialmente. Recibir desde ese lugar tiene la calidad de la continuidad familiar más que de la deuda.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La nostalgia se volvió refugio permanente. El presente queda en segundo plano.", en: null },
        largo: {
          es: "La carta invertida marca el momento donde mirar atrás dejó de ser descanso y se volvió evasión. Hay una atadura emocional con un pasado idealizado que impide habitar el presente. El pasado se recuerda con filtro: aparece dulce porque se omitieron sus partes duras. Avanzar requiere soltar la versión dorada para poder ver lo que hay frente a uno.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, vínculos viejos pesando más que los actuales. En lo material, autonomía que pide salir del nido familiar.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una expareja, un primer amor o un vínculo idealizado bloqueando la posibilidad de querer en el presente. La comparación constante hace imposible que algo nuevo crezca. En lo financiero, hay una madurez material que pide independizarse: dejar la casa familiar, dejar de depender económicamente, asumir responsabilidades propias. El paso es incómodo y necesario.",
          en: null
        }
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
        corto: { es: "Demasiadas opciones brillan al mismo tiempo. No todas las que parecen oro lo son.", en: null },
        largo: {
          es: "Hay una multiplicidad de caminos disponibles y eso confunde más de lo que ayuda. La carta nombra el momento donde la fantasía gana terreno sobre la decisión concreta. Algunas opciones son reales y otras son proyecciones del deseo. Distinguir entre las dos pide pasar de la imaginación al examen.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, varios candidatos posibles o una fantasía dominando lo real. En lo material, propuestas tentadoras que piden segundo análisis.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una situación donde aparecen varios intereses al mismo tiempo, o donde el deseo está más en la imaginación que en la persona concreta. La idealización tapa lo que sí está disponible para tocar. En lo financiero, llegan ofertas y oportunidades atractivas, pero al menos una es ilusión. Antes de elegir, conviene ver cuál sostiene la mirada al mediodía.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La confusión empieza a despejarse. Una opción se distingue del resto.", en: null },
        largo: {
          es: "La carta invertida marca el paso de la fantasía a la decisión. Lo que era nube se vuelve dirección. Algo del exceso de posibilidades se ordena, y queda claro qué corresponde elegir. La voluntad recupera el control sobre lo imaginado.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una elección clara entre varias posibilidades. En lo material, foco financiero recuperado.",
          en: null
        },
        largo: {
          es: "Afectivamente, alguien decide cuál relación realmente quiere sostener, dejando atrás las fantasías paralelas. La claridad sobre lo que se busca atrae lo que corresponde. En lo financiero, una decisión postergada por exceso de opciones se concreta: una inversión elegida, una compra hecha, un proyecto al que se le da prioridad. La energía dispersa vuelve a ser productiva al concentrarse.",
          en: null
        }
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
        corto: {
          es: "Algo conocido pide ser dejado atrás. La salida está disponible para quien la decida tomar.",
          en: null
        },
        largo: {
          es: "Hay un momento de despedida silenciosa: una situación, una etapa, un lugar emocional ya cumplió su función. La carta nombra el coraje de irse antes que el desgaste lo decida por uno. Lo que se construyó importa, y aún así no es razón suficiente para quedarse. El próximo capítulo pide espacio que solo se libera al soltar el anterior.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión de partir de algo que ya no nutre. En lo material, dejar atrás un trabajo o proyecto agotado.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay claridad sobre que una relación llegó a su fin, aunque haya sido buena. La decisión se toma con tristeza pero sin ambigüedad. En lo financiero, hay una renuncia en marcha: dejar un empleo estable que no satisface, cerrar un negocio que se sostuvo demasiado tiempo, soltar una inversión emocional que dejó de rendir. La pérdida material se compensa con recuperar la propia vida.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Hay impulso de irse y algo aún retiene. La indecisión prolonga el desgaste.", en: null },
        largo: {
          es: "La carta invertida marca el conflicto entre saber que hay que partir y no animarse. Lo familiar pesa más que el ánimo de cambio. La permanencia por miedo a lo desconocido tiene su propio costo, que se acumula sin nombre. La decisión postergada se vuelve más cara cada día que se posterga.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien sostiene una relación por miedo a estar solo. En lo material, alguien permanece en un trabajo agotador por seguridad.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación que dejó de funcionar y que se sostiene por costumbre, miedo a empezar de nuevo, o pena del otro. Esa permanencia agota a las dos partes sin nombrarse. En lo financiero, hay un trabajo o emprendimiento del que se debería partir y se aplaza por la seguridad económica que ofrece. El precio de la estabilidad puede ser mayor al beneficio cuando se mide en bienestar.",
          en: null
        }
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
        corto: { es: "Lo deseado encuentra cumplimiento. Hay satisfacción material y emocional disponible.", en: null },
        largo: {
          es: "Es la carta del deseo cumplido. Algo que se buscaba con ganas llega y trae la sensación de estar bien. La abundancia presente pide ser registrada, agradecida, disfrutada. Antes de saltar al siguiente deseo, vale habitar este.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una satisfacción profunda con la pareja o con el estado actual. En lo material, una recompensa concreta y bien recibida.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación da exactamente lo que se esperaba: cariño, presencia, alegría compartida. La pareja se siente como hogar. En lo financiero, llega un fruto material concreto: aumento, bonus, venta, retorno de inversión. La sensación de tener lo necesario, y un poco más, se hace tangible. El placer del logro pide ser registrado antes de pensar en lo próximo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Lo que parecía pleno tiene gusto a poco. Hay logros sin satisfacción real.", en: null },
        largo: {
          es: "La carta invertida marca el momento donde lo aparentemente bueno no llena. Las cajas están tachadas pero algo falta. La satisfacción material o externa no compensa una insatisfacción más profunda. Vale revisar qué deseo real está siendo confundido con el deseo cumplido.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja que en el papel funciona pero algo la limita. En lo material, una abundancia que no se traduce en bienestar.",
          en: null
        },
        largo: {
          es: "Afectivamente, una relación tiene todos los componentes esperados (estabilidad, presencia, planes) y aún así falta algo: profundidad, complicidad, deseo. La conversación honesta sobre eso es lo que puede destrabar. En lo financiero, hay holgura material que no se traduce en sensación de seguridad: dinero ahorrado pero ansiedad alta, ingresos buenos pero sin sentido de propósito. Lo material por sí solo no resuelve lo que es falta interior.",
          en: null
        }
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
        corto: {
          es: "Una plenitud emocional duradera. La felicidad acá se mide en relaciones más que en logros.",
          en: null
        },
        largo: {
          es: "La carta describe una armonía emocional plena, sostenida en el tiempo. Hay vínculos cercanos funcionando bien: pareja, familia, amistades elegidas. La sensación de pertenencia y de hogar se hace concreta. Esta plenitud tiene la cualidad de lo construido despacio y por eso es más estable que otras formas de éxito.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación o familia en su mejor momento. En lo material, estabilidad compartida con quienes importan.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una vida en pareja o en familia que da sentido a lo demás. La cotidianidad se vive con gratitud, las decisiones grandes se piensan juntas, hay proyecto común sostenido. En lo financiero, la estabilidad económica está al servicio del bienestar compartido: una casa, un viaje juntos, recursos para los hijos o para los seres queridos. La abundancia compartida pesa más que la abundancia solitaria.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La armonía familiar tiene grietas. Algo del proyecto compartido no funciona como muestra.", en: null },
        largo: {
          es: "La carta invertida marca disonancia entre la imagen y la realidad. La familia parece bien por fuera y duele por dentro: tensiones no nombradas, expectativas frustradas, gente cumpliendo roles sin sentir lo que el rol pide. La diferencia entre lo que se proyecta y lo que se vive empieza a hacer ruido. Sanar pasa por reconocer la grieta antes de simular cohesión.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, conflicto familiar o de pareja que erosiona lo cotidiano. En lo material, disputas económicas dentro de la familia.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay tensión sostenida en una pareja o en el grupo familiar: intervenciones de terceros, expectativas no acordadas, viejos resentimientos que reaparecen. La unidad pide ser defendida desde adentro. En lo financiero, hay disputas dentro del círculo cercano: una herencia, un préstamo familiar no devuelto, un negocio compartido con desacuerdos. Resolver requiere separar lo afectivo de lo material para poder mirar cada cosa con claridad.",
          en: null
        }
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
        corto: { es: "Llega un mensaje del lado emocional. Algo nuevo se abre en lo sensible.", en: null },
        largo: {
          es: "Hay una sensibilidad recién despierta. Una idea creativa, una intuición sorpresiva, una emoción inesperada llega y pide atención. La carta describe la apertura curiosa al propio mundo interno, sin demanda de productividad. Lo que se siente sin nombrar bien está empezando a buscar forma.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien joven o emocionalmente fresco entra en escena. En lo material, una propuesta inicial que nace del afecto.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un encuentro con cualidad de ternura: una persona dulce, soñadora, en proceso de descubrimiento emocional. La intimidad se construye con paciencia y curiosidad mutua. En lo financiero, llega una propuesta o invitación nacida del afecto antes que del cálculo: un proyecto entre amigos, una invitación a colaborar, una idea pequeña con potencial creativo. Las cosas pequeñas también tienen su importancia.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Una emoción sin canalizar se desborda. Hay sensibilidad sin sostén.", en: null },
        largo: {
          es: "La carta invertida nombra una inmadurez emocional que se manifiesta en reacciones desproporcionadas. Hay creatividad atascada porque la inseguridad pesa más que la voluntad de crear. El mundo interno demanda atención sin saber cómo pedirla. Aprender a sostener lo sentido, sin descargarlo en otros, es el trabajo pendiente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien (propio u otro) reacciona con drama infantil. En lo material, una propuesta poco realista que requiere bajada a tierra.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona en juego con dificultad para regular sus emociones: rabietas, escenas, sensibilidad herida fácilmente. La paciencia tiene límite. En lo financiero, llega una propuesta entusiasta que no resiste números: una idea apasionada sin plan concreto, una promesa sentida sin cálculo. Antes de comprometerse, conviene pedir el plan escrito.",
          en: null
        }
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
        corto: { es: "Una propuesta romántica o creativa se acerca. La emoción busca expresión visible.", en: null },
        largo: {
          es: "Hay un movimiento que viene desde el corazón hacia afuera: una invitación, una declaración, una propuesta hecha con intención. La carta describe el momento donde lo sentido se vuelve gesto. La cualidad del Caballero es ofrecer sin exigir respuesta inmediata. Lo que se acerca pide ser recibido con apertura, sin decidir todavía.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una propuesta concreta o un romance con energía. En lo material, una oferta hecha con cuidado y carisma.",
          en: null
        },
        largo: {
          es: "Afectivamente, llega una invitación clara: una declaración de amor, una propuesta de compromiso, alguien que acerca su intención sin juego. La sinceridad del gesto pide reciprocidad o respuesta honesta. En lo financiero, aparece una propuesta presentada con encanto: una oferta de trabajo cuidadosamente hecha, una invitación a sumarse a un proyecto. Lo que se ofrece tiene fondo más allá de la forma.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Las palabras pesan más que las acciones. Hay encanto sin sustancia.", en: null },
        largo: {
          es: "La carta invertida nombra al seductor: alguien que dice todo lo que se quiere oír y entrega poco. La promesa es bonita y vacía. La capacidad de presentar bien se está usando para evitar el compromiso real. Distinguir gesto de palabra es la tarea aquí.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien promete sin cumplir. En lo material, una oferta brillante que no resiste lectura cuidadosa.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona (puede ser uno mismo) que acerca con palabras dulces sin respaldo: declaraciones grandes, planes vagos, ausencias en el momento concreto. Las acciones acumuladas dan más información que cualquier discurso. En lo financiero, una propuesta llega con presentación impecable y letra chica problemática: condiciones poco claras, retornos prometidos sin base, plazos elásticos. La regla es leer dos veces antes de firmar una.",
          en: null
        }
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
        corto: {
          es: "Hay una capacidad de sostener emocionalmente, propia o cercana. La empatía está disponible y se nota.",
          en: null
        },
        largo: {
          es: "La carta describe una madurez emocional funcionando bien. Hay capacidad para escuchar sin imponer, para acompañar sin invadir, para sentir profundo sin perderse. Esa cualidad atrae confianza desde otros y permite que cosas delicadas encuentren cauce. El trabajo pendiente es no agotarse en el cuidado de los demás.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja o vínculo donde la sensibilidad se cuida mutuamente. En lo material, una decisión tomada con cabeza y corazón en proporción justa.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde la profundidad emocional sostiene más que la pasión inicial. La intimidad se construye en escuchar y ser escuchado sin filtro. En lo financiero, hay decisiones tomadas considerando tanto los números como las personas: ayudar a un familiar con sentido, dar un préstamo donde corresponde, gastar en quien importa. Lo material al servicio del afecto se vuelve significativo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Las emociones desbordan o se usan para manipular. La sensibilidad perdió equilibrio.", en: null },
        largo: {
          es: "La carta invertida nombra dos extremos posibles: o demasiada emoción que se descarga sobre otros, o emocionalidad usada como herramienta para conseguir. La empatía propia, exagerada, lleva a cargar lo que no es propio. Y la empatía instrumentalizada hiere a quien confía. Recuperar el centro pide diferenciar entre sentir y reaccionar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo donde uno se vuelve terapeuta del otro. En lo material, gasto compulsivo por incomodidad emocional.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación donde una parte sostiene emocionalmente a la otra sin reciprocidad. La carga acumulada agota a quien acompaña y no madura a quien recibe. En lo financiero, las emociones están guiando decisiones materiales sin filtro: compras impulsivas para calmar ansiedad, regalos costosos para tapar culpa, gastos hechos por incomodidad interna. La conciencia de la conexión emoción-gasto es ya parte de la solución.",
          en: null
        }
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
        corto: {
          es: "La calma se mantiene cuando todo lo demás se agita. Las emociones se reconocen y se canalizan.",
          en: null
        },
        largo: {
          es: "La carta describe una madurez emocional probada. Hay capacidad de mantener la cabeza fría en situaciones cargadas, sin que eso signifique desconectarse de lo que se siente. La diplomacia natural permite mediar entre partes en conflicto sin tomar posición precipitada. Esta calma viene de atravesar muchas tormentas y funciona como fundamento.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja con diálogo maduro y mediación equilibrada. En lo material, decisiones financieras tomadas con cabeza fría y corazón presente.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde los conflictos se procesan con palabras más que con escenas. La capacidad de escuchar sin reaccionar permite resolver lo que en otros vínculos se atasca. En lo financiero, hay equilibrio entre el cálculo y el cuidado: inversiones pensadas, gastos justificados, decisiones que combinan rentabilidad con responsabilidad afectiva. Lo profesional y lo personal se manejan sin contradicción.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La calma esconde algo. Bajo la superficie hay emoción reprimida o usada para controlar.", en: null },
        largo: {
          es: "La carta invertida nombra el costo de la represión emocional sostenida. Lo que parece serenidad puede ser desconexión, y lo que parece equilibrio puede ser manipulación bien disfrazada. Las emociones embotelladas terminan saliendo de formas indirectas: pasividad agresiva, sarcasmo, retiros silenciosos. Reconectar con lo sentido honestamente es el trabajo aquí.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien controla la temperatura del vínculo a su antojo. En lo material, decisiones financieras tomadas con emoción reprimida que después estalla.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte mantiene la calma de manera estratégica: usa el silencio como castigo, distribuye afecto a cuentagotas, hace sentir al otro responsable de la armonía. La diplomacia se transformó en herramienta de poder. En lo financiero, hay decisiones aparentemente racionales tomadas con emoción no procesada por debajo: gastos que después generan resentimiento, inversiones que después se reprochan, compromisos asumidos por culpa. Procesar la emoción antes de decidir cambia el resultado.",
          en: null
        }
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
        corto: {
          es: "Una chispa creativa pide ser convertida en acción. La inspiración llegó y espera respuesta.",
          en: null
        },
        largo: {
          es: "Hay un impulso nuevo que pide manifestarse. Una idea, un proyecto, una vocación que estaba latente encuentra su momento de salir. La carta nombra el momento donde el deseo se vuelve potencia disponible. Empezar pesa más que esperar a tener todo claro.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pasión se enciende y pide ser expresada. En lo material, una iniciativa o proyecto que vale arrancar.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un encuentro con energía sexual y emocional fuerte: una atracción nueva, un romance que se reaviva, una chispa que cambia la dinámica. Lo material y lo carnal se mezclan sin pudor. En lo financiero, llega una oportunidad concreta: una propuesta de trabajo, una idea de negocio, un proyecto que pide ser empezado. La acción decidida multiplica más que el cálculo prolongado.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La chispa está pero algo la apaga. Hay impulso sin dirección, o ganas que no encuentran cauce.",
          en: null
        },
        largo: {
          es: "La inspiración existe pero se atasca antes de volverse acción. Hay falta de claridad sobre qué hacer con la energía disponible, o miedo a empezar y fracasar. Las ideas se acumulan sin que ninguna se concrete. Recuperar el impulso pide acción pequeña antes que plan grande.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pasión que arde y se apaga rápido. En lo material, un proyecto entusiasta que pierde fuelle.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una atracción intensa que probablemente no dura: química inmediata sin profundidad para sostener. La emoción del comienzo se confunde con compromiso real. En lo financiero, hay un proyecto o iniciativa que arrancó con fuerza y se quedó sin combustible: ideas sin ejecución, planes sin seguimiento, energía dispersa. Concretar lo que ya está empezado vale más que arrancar lo siguiente.",
          en: null
        }
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
        corto: {
          es: "Hay un mapa para trazar y la vista alcanza lejos. Las decisiones grandes se vuelven posibles desde acá.",
          en: null
        },
        largo: {
          es: "Hay un momento de planificación con perspectiva amplia. La carta describe a alguien con poder para decidir su próximo movimiento, viendo el campo entero. Las opciones están disponibles y la elección depende de la propia voluntad. Lo que se planifica con visión clara tiende a concretarse.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión de pareja sobre el rumbo a futuro. En lo material, una estrategia financiera de largo plazo en formación.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja considerando un paso grande: convivencia, mudanza, hijos, casamiento, separación. La conversación pide ser hecha con visión más allá de lo inmediato. En lo financiero, hay decisiones estratégicas en juego: inversión, cambio de carrera, compra grande, plan de jubilación. Las elecciones hechas con buena información cargan menos arrepentimiento.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El plan se atasca por miedo a comprometerse con una opción. La vista amplia se vuelve parálisis.",
          en: null
        },
        largo: {
          es: "La carta invertida marca el bloqueo del estratega. Hay tantas opciones disponibles que ninguna termina de ser elegida, o hay miedo a perder lo conocido por algo nuevo. La planificación se vuelve excusa para no actuar. Salir del bucle pide elegir aunque la información sea imperfecta.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión de pareja postergada por miedo. En lo material, una jugada financiera evitada por incertidumbre.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja sabiendo que tiene que decidir un paso grande y postergándolo por meses o años. El miedo a equivocarse cuesta más que la decisión misma. En lo financiero, hay una jugada estratégica posible (inversión, mudanza laboral, emprendimiento) que se aplaza por excesiva precaución. La oportunidad pierde valor con cada semana de demora.",
          en: null
        }
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
        corto: { es: "Una expansión está en marcha. Lo plantado empieza a dar resultado.", en: null },
        largo: {
          es: "La carta describe el momento donde la inversión inicial empieza a rendir. Hay barcos que vuelven, proyectos que despegan, esfuerzo previo que toma forma. La paciencia por sostener la espera se justifica. Lo que viene es más grande que lo que se esperaba.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación lista para crecer. En lo material, una recompensa por trabajo invertido.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo entrando en una nueva fase: convivencia, hijos, proyecto compartido más grande. La base construida sostiene lo que viene. En lo financiero, lo trabajado durante meses o años empieza a producir: ascenso, retorno de inversión, negocio que estabiliza, oportunidad internacional. La expansión pide aceptar que lo cómodo queda atrás.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La expansión esperada se demora. Los barcos no vuelven en el tiempo previsto.", en: null },
        largo: {
          es: "La carta invertida nombra demoras frustrantes. Lo planificado no llega cuando debía, o llega menor de lo esperado. Hay falta de información sobre por qué algo no avanza, lo que aumenta la ansiedad. Mientras se espera, conviene revisar si el plan original aún tiene sentido o requiere ajuste.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión postergada de común acuerdo se demora más. En lo material, retornos esperados que no llegan en el plazo.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja con planes (mudarse, casarse, viajar juntos) que se postergan por circunstancias externas: trabajo, dinero, familia, salud. La espera prueba la solidez del vínculo. En lo financiero, los proyectos lanzados con expectativa no rinden lo prometido en el plazo prometido: la venta no cierra, el cliente no paga, el negocio crece más lento. Sostener pide ajustar expectativas sin abandonar el plan.",
          en: null
        }
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
        corto: { es: "Una celebración del logro alcanzado. La estructura construida pide ser reconocida.", en: null },
        largo: {
          es: "La carta marca un hito festejado en compañía. Algo construido encuentra su forma estable y permite descansar. Las raíces están puestas, la casa funciona, el grupo cercano está. Esta solidez tiene peso real: funciona como base sobre la cual se construye lo siguiente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una unión celebrada con familia y amigos. En lo material, una estabilidad económica que permite generosidad.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un paso grande que se da con respaldo del entorno: matrimonio, mudanza juntos, fiesta de aniversario, presentación pública de la pareja. El amor se vuelve también acto social. En lo financiero, hay holgura para invertir en seres queridos: regalos, comidas, ayuda concreta a la familia. Compartir lo logrado le da otra dimensión.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La celebración prometida no termina de llegar. Algo de la estructura no está tan firme como parece.",
          en: null
        },
        largo: {
          es: "La carta invertida nombra una dificultad para festejar: o el logro tiene asteriscos, o el grupo cercano no acompaña, o hay tensión en la base que se intenta tapar. La armonía pública oculta fricción privada. Mirar lo que se está evitando permite reparar antes de cerrar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, conflicto familiar cuando se trata de oficializar la pareja. En lo material, gastos de celebración que pesan más que el evento.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja con tensión sobre cuándo o cómo dar el paso público: presentar a la familia, casarse, mudarse juntos. El miedo o la falta de acuerdo pesan más de lo que se nombra. En lo financiero, una celebración (boda, gran evento, fiesta importante) genera más estrés económico que disfrute. Conviene ajustar la escala antes que ceder a expectativas externas.",
          en: null
        }
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
        corto: { es: "Hay fricción en el aire. Cada parte defiende su posición sin escucharse del todo.", en: null },
        largo: {
          es: "La carta describe una situación de competencia o conflicto sin un ganador claro todavía. Múltiples fuerzas chocan al mismo tiempo y la energía se gasta en defenderse. El conflicto puede ser productivo si conduce a aclarar diferencias reales. Cuando solo es ruido, agota a todos por igual.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, peleas pequeñas que se acumulan sin gran problema de fondo. En lo material, competencia laboral o disputas por recursos.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay desacuerdos repetidos sobre cosas chicas que tapan algo más grande sin nombrarse. El roce constante desgasta sin avanzar. En lo financiero, hay competencia con otros por un puesto, por un cliente, por un recurso compartido. La rivalidad puede empujar a hacer mejor el trabajo o puede consumir energía que serviría mejor en otra parte.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "El conflicto baja de intensidad. Hay cansancio acumulado más que resolución verdadera.", en: null },
        largo: {
          es: "La carta invertida marca el final de una pelea, sea por agotamiento o por acuerdo. La energía gastada deja huella. Lo no resuelto queda guardado y puede reaparecer si no se conversa de fondo. La calma exterior puede ser real o solo aparente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pelea sostenida termina por cansancio. En lo material, competencia laboral resuelta sin claridad sobre quién ganó qué.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja saliendo de una racha de discusiones, con tregua pero sin profundización. Lo que generaba el roce sigue ahí debajo. En lo financiero, una competencia laboral o una disputa por recursos termina, pero las relaciones quedan tensas. Reparar los vínculos pesa tanto como ganar la disputa.",
          en: null
        }
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
        corto: { es: "El esfuerzo recibe reconocimiento. Lo logrado se vuelve público y celebrado.", en: null },
        largo: {
          es: "La carta marca el momento del triunfo visible. Lo trabajado durante tiempo es reconocido por otros, sea con un premio, un cargo, una palabra pública. La confianza en sí mismo se refuerza con esta validación. Vale registrar el momento sin dejar que el reconocimiento defina enteramente el valor propio.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja celebrada por su entorno. En lo material, un logro profesional que recibe visibilidad.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación que recibe reconocimiento público o que se afirma en el entorno: presentación a la familia, anuncio de compromiso, validación social del vínculo. La pareja gana solidez al ser nombrada. En lo financiero, llega un ascenso, un premio, un reconocimiento profesional. El éxito tiene forma de aplauso, y eso vale registrar antes de pasar al siguiente desafío.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El logro pasa sin reconocimiento. Hay esfuerzo invisible o expectativa frustrada de aprobación.",
          en: null
        },
        largo: {
          es: "La carta invertida marca el desencuentro entre lo logrado y el reconocimiento esperado. O el éxito no llega, o llega y nadie lo nota. La validación externa se vuelve más importante de lo saludable, generando frustración o resentimiento. La satisfacción interna es la que sostiene cuando la externa falla.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, sensación de no ser valorado por la pareja o el entorno. En lo material, un logro que pasa sin la recompensa esperada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona en la relación que siente que da más de lo que recibe en reconocimiento. La gratitud que falta se vuelve resentimiento silencioso. En lo financiero, un trabajo bien hecho no recibe el aumento, el ascenso o la mención esperada. Pedir lo que corresponde sirve más que esperar a ser visto.",
          en: null
        }
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
        corto: { es: "Hay que defender la posición lograda. Otros la disputan y la postura propia pesa.", en: null },
        largo: {
          es: "La carta describe el momento de aguantar bajo presión. Lo conseguido es atacado, criticado, puesto en duda. Sostener requiere coraje y claridad sobre por qué vale la pena. La defensa válida nace de la convicción más que de la terquedad.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, defender la pareja frente a interferencias externas. En lo material, defender una posición laboral o un proyecto bajo crítica.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja que tiene que sostenerse contra opiniones externas: familia que no acepta, amistades que cuestionan, situaciones que prueban el vínculo. La defensa hecha de a dos refuerza la unión. En lo financiero, hay un proyecto, un puesto o una idea siendo cuestionada por colegas, jefes o competencia. Sostener la posición pide argumentos sólidos y paciencia para repetirlos.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La defensa cansa. El terreno se va perdiendo o se está soltando por agotamiento.", en: null },
        largo: {
          es: "La carta invertida marca el momento donde la perseverancia se vuelve obstinación inútil. Defender una posición que ya no merece ser defendida desgasta sin propósito. A veces el cansancio es información: indica que la batalla equivocada se está peleando. Distinguir entre rendirse y soltar lo que ya no aporta es la decisión.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien deja de defender la relación frente a presiones. En lo material, abandono de un proyecto que requería más fuerza para ser defendido.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una de las partes (o las dos) deja de pelear por el vínculo bajo la presión externa o interna. La rendición puede ser madura o prematura, depende del caso. En lo financiero, un proyecto, un puesto o una idea se abandona cuando defenderlos pesaba demasiado. Vale revisar después si la decisión fue de claridad o de agotamiento.",
          en: null
        }
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
        corto: { es: "Las cosas se mueven rápido. Lo que tardaba empieza a avanzar con velocidad sorprendente.", en: null },
        largo: {
          es: "La carta marca un momento de aceleración. Decisiones que estaban trabadas se destraban, mensajes que faltaban llegan, oportunidades aparecen casi simultáneamente. Hay que estar listo para responder al ritmo. Lo que se demora en agarrar se pierde rápido también.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, comunicación intensa o un romance que avanza rápido. En lo material, noticias importantes o movimientos financieros veloces.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una conversación que se reactiva, mensajes que vuelven después de silencio, un romance que pasa de cero a cien en pocos días. La velocidad es parte del encanto y del riesgo. En lo financiero, llegan noticias rápido: una oferta de trabajo, una respuesta esperada, un movimiento de mercado. Estar disponible para responder en plazos cortos hace la diferencia.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "El movimiento se traba. La comunicación se enreda y los mensajes se cruzan mal.", en: null },
        largo: {
          es: "La carta invertida marca el atasco después del momentum. Lo que iba rápido se demora, los mensajes se interpretan mal, las decisiones tomadas con prisa muestran sus errores. Hay sensación de impotencia frente al ritmo perdido. Vale recuperar el aire antes de seguir empujando contra la inercia.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, malentendidos por comunicación apurada. En lo material, decisiones financieras precipitadas que muestran su costo.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja con malentendidos por mensajes mal interpretados, respuestas tardías o conversaciones inconclusas. La velocidad de los chats no compensa la falta de profundidad. En lo financiero, decisiones tomadas con apuro muestran sus huecos: un contrato firmado sin leer entero, una compra precipitada, una respuesta dada antes de pensar. Lo prudente es desacelerar para reparar.",
          en: null
        }
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
        corto: {
          es: "Lo logrado se sostiene a pesar del cansancio. Hay una resistencia probada que aguanta un esfuerzo más.",
          en: null
        },
        largo: {
          es: "La carta describe a alguien que ha pasado por mucho y aún se mantiene en pie. El cansancio acumulado no apaga la determinación. La carta nombra esa cualidad de sostener cuando otros ya se rindieron. Lo que falta del camino es menos largo de lo que parece.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja que sobrevivió pruebas y se sostiene firme. En lo material, un proyecto que aguantó dificultades y está cerca de rendir.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo que pasó por turbulencia y emerge más sólido. La fidelidad probada vale más que la promesa fácil. En lo financiero, hay un trabajo, negocio o inversión que atravesó dificultades y aún se sostiene cerca de su recompensa. Falta menos camino del que el cansancio sugiere.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La defensa se volvió desconfianza generalizada. Hay agotamiento que se disfraza de cautela.",
          en: null
        },
        largo: {
          es: "La carta invertida marca el costo emocional de tantas batallas. La persona desconfía hasta de quien ofrece ayuda, levanta muros donde no hace falta, ve amenaza en lo que es solo cercanía. La paranoia o la rigidez se justifican en la propia historia. Bajar la guardia con quien sí merece confianza es el trabajo aquí.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien levantó tantos muros que la cercanía no encuentra cómo entrar. En lo material, defensa exagerada de recursos por miedo a perderlos.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona herida por relaciones anteriores que dificulta dejar entrar a quien podría querer en serio. La cautela que protegía empieza a aislar. En lo financiero, hay una avaricia defensiva: agarrar todo por miedo a la escasez, no compartir por temor a perder, no invertir por miedo a fracasar. La protección excesiva impide el crecimiento que sí está disponible.",
          en: null
        }
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
        corto: { es: "Hay demasiado peso encima. Lo logrado se volvió carga difícil de cargar solo.", en: null },
        largo: {
          es: "La carta describe a alguien cargando responsabilidades que excedieron lo manejable. El éxito mismo trajo más obligaciones de las anticipadas. Hay sensación de no poder bajar la guardia ni un momento. Aliviar empieza por reconocer cuánto se está cargando, antes de pedir ayuda o soltar lo que sobra.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona sostiene sola lo que debería ser compartido. En lo material, exceso de responsabilidades laborales o financieras.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde una parte carga emocionalmente con todo: las preocupaciones, las decisiones, el trabajo doméstico, la planificación. El desbalance agota a quien sostiene y hace pasivo a quien no. En lo financiero, hay exceso de responsabilidades materiales: deudas múltiples, varios trabajos, presión por sostener a otros. El bienestar pide redistribuir o reducir antes que aguantar más.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Algo de la carga se suelta. Lo que no era propio empieza a ser devuelto.", en: null },
        largo: {
          es: "La carta invertida marca el alivio. Hay una decisión de dejar caer lo que se cargaba sin necesidad: una obligación asumida por compromiso, una culpa heredada, un proyecto que ya no compete. La liviandad recuperada permite ver con más claridad lo que sí toca cargar. La generosidad excesiva deja de ser virtud cuando enferma.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, redistribución de roles o pedido de ayuda concreta. En lo material, alivio financiero por delegar, vender o cerrar lo que pesaba.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una conversación necesaria sobre cómo se reparten cargas en una pareja o familia. Pedir ayuda funciona como redistribución necesaria del peso. En lo financiero, hay decisiones de reducir el peso material: cerrar un negocio que drenaba, vender una propiedad que costaba más mantener que vendiéndola, terminar un compromiso económico que no aporta. Soltar libera energía para lo que sí merece sostenerse.",
          en: null
        }
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
        corto: {
          es: "Una idea o propuesta nueva entra con entusiasmo. Hay ganas de explorar lo que aún no está mapeado.",
          en: null
        },
        largo: {
          es: "La carta describe una energía juvenil dispuesta a probar. Una idea, un proyecto, una invitación llega con cualidad de aventura. Falta experiencia y sobra entusiasmo. Lo que se intenta aquí, sin garantías, abre caminos que la cautela bloquearía.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien con espíritu libre y curioso entra en escena. En lo material, una propuesta nueva con potencial pero sin trayectoria probada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un encuentro con cualidad exploratoria: alguien aventurero, juguetón, con energía joven independientemente de su edad. La intensidad inicial puede sostenerse o desinflarse, depende. En lo financiero, llega una propuesta de proyecto, emprendimiento o cambio de rumbo con mucha promesa y poca historia. Vale arriesgar algo, sin apostar todo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El entusiasmo se dispersa antes de llegar a hacer algo. Hay impaciencia que sabotea su propio interés.",
          en: null
        },
        largo: {
          es: "La carta invertida nombra una energía sin foco. Las ideas se acumulan, los proyectos se empiezan y se abandonan, el entusiasmo se gasta antes de la primera ejecución. Falta paciencia para sostener lo iniciado. Aprender a terminar lo que se empieza es el trabajo pendiente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien que enamora rápido y huye más rápido. En lo material, una propuesta entusiasta sin sustento concreto.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona (puede ser uno mismo) con dificultad para sostener compromiso: enamoramientos breves, abandonos sin explicación, intensidad que se evapora. La paciencia encuentra mejor pareja en otro lado. En lo financiero, una propuesta llega con presentación entusiasta pero sin números, sin plan, sin trayectoria. Antes de comprometer dinero, conviene pedir lo concreto.",
          en: null
        }
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
        corto: { es: "Hay un avance decidido y rápido. La energía pone manos a la obra sin demoras.", en: null },
        largo: {
          es: "La carta describe acción decidida con carisma. Alguien (uno mismo o cercano) lanza un proyecto, lidera una iniciativa, pone el cuerpo en lo que cree. La velocidad y la confianza atraen a otros. Lo único que falta es alguien que pondere si hace falta más cálculo antes de avanzar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un romance pasional o una declaración audaz. En lo material, acción decidida en negocios o proyectos.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una atracción intensa que se traduce en acción rápida: alguien declara, propone, cambia su vida por la otra persona. La pasión se nota. En lo financiero, hay alguien tomando riesgos calculados con energía: un emprendimiento lanzado, un cambio de país, una inversión audaz. La fortuna favorece la acción decidida si la información es razonable.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La acción se vuelve impulso ciego. Hay velocidad sin dirección, o agresividad disfrazada de coraje.",
          en: null
        },
        largo: {
          es: "La carta invertida marca el costo del impulso sin freno. Decisiones tomadas en caliente que después generan arrepentimiento, palabras dichas en enojo que dañan vínculos, proyectos lanzados sin plan que se estrellan. La energía existe pero falta gobierno propio. Bajar la velocidad, una vez, antes de actuar cambia el resultado.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pasión que arrasa con todo y se va igual de rápido. En lo material, decisiones impulsivas con consecuencias visibles.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona (o uno mismo) que entra en relaciones con intensidad y se va con la misma fuerza, dejando promesas incumplidas. La pasión sin compromiso lastima a los dos. En lo financiero, hay decisiones tomadas sin pensar: una renuncia abrupta, una compra grande sin consultar, un negocio iniciado sin planificación. Reparar el desorden cuesta más tiempo que el ahorrado por actuar rápido.",
          en: null
        }
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
        corto: { es: "Hay carisma y voluntad funcionando juntos. La presencia propia abre puertas sin esfuerzo.", en: null },
        largo: {
          es: "La carta describe a alguien con magnetismo natural y propósito claro. La energía propia atrae oportunidades, gente, posibilidades, simplemente por mostrarse como se es. Hay independencia que no necesita aprobación externa. Lo que esta cualidad pide cuidar es no usarse para abrumar a quienes son más callados.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona segura de sí que atrae sin esfuerzo. En lo material, decisiones financieras tomadas con confianza y buen criterio.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde una parte (o las dos) aporta calidez, decisión y carisma. La pareja funciona porque ninguna se anula a la otra. En lo financiero, hay manejo confiado de los recursos: decisiones tomadas con criterio, inversiones evaluadas, oportunidades aprovechadas. La intuición sobre dinero está bien calibrada y vale escucharla.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La confianza se volvió arrogancia. La intensidad propia empieza a quemar a los demás.", en: null },
        largo: {
          es: "La carta invertida marca el desbalance entre seguridad y consideración. Hay alguien (uno mismo o cercano) imponiéndose donde debería escuchar, exigiendo donde debería pedir, dominando donde debería compartir. La fuerza personal se está usando para anular a otros. La inseguridad bajo la apariencia de fuerza es la raíz que pide ser mirada.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, celos posesivos o exigencia desmedida. En lo material, decisiones financieras tomadas con orgullo en vez de criterio.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte demanda atención permanente, controla movimientos, marca celos donde no toca. La inseguridad se traduce en posesividad. En lo financiero, hay decisiones materiales tomadas para demostrar (consumo conspicuo, gastos para impresionar) en lugar de para servir el plan real. El reconocimiento externo cuesta caro cuando se compra.",
          en: null
        }
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
        corto: {
          es: "Hay capacidad de liderar y de hacer realidad la idea propia. La visión se traduce en acción concreta.",
          en: null
        },
        largo: {
          es: "La carta describe a un líder maduro: alguien que ve hacia dónde ir y sabe cómo movilizar recursos para llegar. La autoridad acá viene de la experiencia probada. Otros se suman porque confían en el rumbo. Lo que pide cuidar es sostener tanto el plan como la ejecución.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja donde una parte sostiene visión de largo plazo. En lo material, una iniciativa empresarial o profesional bien ejecutada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde alguien aporta dirección y proyecto a largo plazo. La pareja funciona porque hay un horizonte compartido y alguien dispuesto a trabajarlo. En lo financiero, hay un proyecto, negocio o carrera siendo llevado adelante con liderazgo y visión. La autoridad propia se ejerce con responsabilidad. Lo que se construye con esta energía suele perdurar.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "El liderazgo se volvió autoritarismo. Hay imposición donde debería haber escucha.", en: null },
        largo: {
          es: "La carta invertida marca el abuso de poder. Lo que era visión se transformó en imposición de criterio único, lo que era confianza se volvió arrogancia, lo que era acción se volvió atropello. Otros se alejan, los proyectos pierden gente clave, las decisiones empiezan a tomarse en soledad cada vez más estrecha. Recuperar el balance pide volver a escuchar antes que decidir.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja donde uno impone su agenda sin consultar. En lo material, decisiones empresariales tomadas con arrogancia que costaron oportunidades.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona (o uno mismo) acostumbrada a decidir por dos, marcar el ritmo, definir prioridades sin consultar. La pareja se vuelve subordinación. En lo financiero, hay decisiones de negocio o carrera tomadas con tanta confianza que se ignoraron señales: una sociedad mal evaluada, una expansión sin pruebas, un cambio de rumbo desoyendo asesores. La humildad de revisar lo que no funcionó es la salida.",
          en: null
        }
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
        corto: { es: "Una claridad mental rompe la confusión. Lo que estaba turbio se vuelve nítido.", en: null },
        largo: {
          es: "La carta nombra un momento de quiebre intelectual. Una verdad que estaba cubierta sale a la luz, una decisión que pedía ser tomada se vuelve obvia. La mente corta lo accesorio y deja ver lo esencial. Esta lucidez tiene cualidad de filo: pesa, pero abre camino.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una conversación honesta destraba lo que estaba enredado. En lo material, una decisión financiera tomada con cabeza fría.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una conversación necesaria que destraba lo que el silencio enredaba: la verdad dicha bien duele menos que la incertidumbre prolongada. En lo financiero, hay una decisión que pide racionalidad por encima del sentimiento: un préstamo a un familiar, una sociedad con un amigo, una compra grande. La regla acá es escuchar la cabeza antes que el corazón. La claridad ahorra problemas que después cuestan caros.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay confusión mental o palabras que cortaron donde no deberían. La claridad se vuelve agresividad.",
          en: null
        },
        largo: {
          es: "La carta invertida nombra el filo usado mal. Las decisiones tomadas con la cabeza demasiado caliente, las palabras dichas con tono cortante, los argumentos lanzados para herir más que para aclarar. Falta información, o sobra ego en la forma de plantearla. Bajar el ritmo y revisar antes de hablar evita rupturas innecesarias.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pelea verbal donde las palabras hicieron más daño del necesario. En lo material, decisiones tomadas con información incompleta o sesgada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una discusión donde se dijeron cosas que después cuesta retirar. La razón puede tener razón sin tener tacto. En lo financiero, hay decisiones tomadas sin leer toda la letra: contratos firmados sin entender, acuerdos cerrados sin consultar, números asumidos sin verificar. Volver a revisar lo firmado y aclarar lo dudoso antes de seguir es lo prudente.",
          en: null
        }
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
        corto: {
          es: "Una decisión está bloqueada porque ambas opciones cuestan. Mantener los ojos cerrados ya no es posible.",
          en: null
        },
        largo: {
          es: "La carta describe una situación de impasse. Dos fuerzas chocan y la persona en el medio elige no elegir, pensando que así evita el costo. La parálisis tiene su propio precio: el tiempo decide por uno cuando uno no decide. Aceptar que cualquier elección implica perder algo es el primer paso para hacerla.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión postergada en pareja por miedo a herir. En lo material, una elección entre dos opciones financieras, ambas con costo.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una decisión que dos personas saben que tienen que tomar y postergan: separarse, comprometerse, mudarse, dejar de mudarse. El silencio cómodo se vuelve cárcel. En lo financiero, hay dos opciones disponibles y elegir una significa renunciar a la otra: un trabajo nuevo o el actual, una compra o el ahorro, una inversión o otra. La indecisión cuesta el costo de oportunidad de las dos.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La venda se cae. La verdad que se evitaba se vuelve visible.", en: null },
        largo: {
          es: "La carta invertida marca el momento donde el bloqueo se rompe. Lo que se evitaba mirar se hace ineludible, y la decisión pendiente se concreta. Puede haber tensión al aceptar la realidad después de tanto tiempo en negación. La claridad recuperada permite avanzar, aunque sea hacia un camino incómodo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una verdad sale a la luz y reordena la pareja. En lo material, una decisión financiera bloqueada se concreta.",
          en: null
        },
        largo: {
          es: "Afectivamente, lo no dicho se nombra finalmente: una infidelidad reconocida, una decisión de separación o compromiso tomada, una expectativa puesta sobre la mesa. La conversación duele y al mismo tiempo libera. En lo financiero, una decisión postergada se toma: vender la propiedad, aceptar la oferta, terminar la sociedad. Lo que estaba congelado vuelve a moverse.",
          en: null
        }
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
        corto: { es: "Hay dolor real, no exagerado. Una herida atraviesa el centro y pide ser sentida.", en: null },
        largo: {
          es: "La carta nombra el dolor sin disfraz. Una pérdida, una traición, una verdad dura está atravesando lo emocional. El sufrimiento es legítimo y la carta no pide minimizarlo. Atravesarlo despacio, sin huida, es lo que permite que cure en su tiempo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una traición o ruptura que duele profundo. En lo material, una pérdida económica que llega con peso emocional.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una traición confirmada, una infidelidad, una ruptura inesperada, o el final doloroso de un vínculo importante. El dolor es proporcional a lo que el vínculo significaba. En lo financiero, una pérdida material golpea también lo emocional: un divorcio que parte bienes, un negocio que cae, una expectativa de herencia que no se cumple. Hay que sentir lo que duele antes de tomar las próximas decisiones.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La herida empieza a curar. El dolor sigue ahí pero ya no domina la mirada.", en: null },
        largo: {
          es: "La carta invertida marca el comienzo de la cicatrización. La pena baja de intensidad sin desaparecer del todo. Si el duelo se está procesando bien, hay una integración paulatina del aprendizaje. Si se está reprimiendo, lo guardado puede reaparecer en otros vínculos hasta que se dé el espacio para sentirlo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una herida vieja se va integrando. En lo material, recuperación lenta después de una pérdida.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona saliendo de una traición o ruptura, con cicatrices visibles. La capacidad de confiar de nuevo se reconstruye despacio. En lo financiero, una pérdida material pasada empieza a quedar atrás: el divorcio se zanja, las deudas se reordenan, los proyectos vuelven a moverse. Tomar lo aprendido del golpe sirve para no volver a caer en lo mismo.",
          en: null
        }
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
        corto: { es: "Hay que parar antes de seguir. La pausa es parte del trabajo.", en: null },
        largo: {
          es: "La carta describe un retiro necesario. Después de mucho movimiento, el cuerpo y la mente piden silencio. La carta sugiere descanso real, sin continuar con menos intensidad. Lo que se intente hacer sin recuperarse primero saldrá peor de lo que merece.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja necesita espacio individual para volver a encontrarse. En lo material, una pausa estratégica antes de la siguiente jugada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja que se beneficia de un poco de distancia: vacaciones, fines de semana solos, espacio para procesar individual. La intimidad se renueva al darse aire. En lo financiero, hay un momento donde lo prudente es no hacer nada nuevo: pausar inversiones, no tomar decisiones grandes, dejar que la situación se asiente. La quietud estratégica vale tanto como la acción.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "El descanso no llega aunque hace falta. La inquietud propia bloquea la recuperación.", en: null },
        largo: {
          es: "La carta invertida marca la dificultad para parar. Hay urgencia interna de seguir produciendo, decidiendo, moviéndose, aunque el cuerpo y la mente pidan tregua. La inquietud se confunde con productividad. Sin pausa, los errores y el agotamiento se acumulan hasta forzar la pausa de manera más cara.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien empuja al otro sin respetar su necesidad de espacio. En lo material, decisiones tomadas en agotamiento que costaron.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona que persigue a otra sin notar que está pidiendo distancia: mensajes constantes, planes impuestos, presencia que no deja respirar. El acoso bien intencionado aleja. En lo financiero, hay decisiones tomadas en exceso de cansancio: contratos firmados sin energía para leer, compras hechas para calmar la ansiedad, inversiones aceptadas sin evaluar. Lo decidido en agotamiento suele cobrarse después.",
          en: null
        }
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
        corto: {
          es: "Hay una pelea ganada con costo alto. La victoria pesa más por lo que costó que por lo que dio.",
          en: null
        },
        largo: {
          es: "La carta describe un conflicto donde nadie sale bien. Una persona puede haber tenido razón pero perdió aliados al imponerla. El ego ganó la batalla y perdió el vínculo. Vale revisar si la pelea valía lo que se pagó por ganarla, o si soltar habría sido más sabio.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una discusión ganada que dejó la relación dañada. En lo material, una negociación dura que aisló.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja saliendo de una pelea fuerte donde uno (o los dos) se aferró a tener razón a costa del vínculo. La razón puede ser cierta y aun así no compensar. En lo financiero, hay una negociación o disputa donde se ganó el punto y se perdió la relación: un cliente que ya no vuelve, un socio que se aleja, un colega que recuerda. Considerar si hubo otras maneras de defender la posición es trabajo retroactivo útil.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La pelea baja de intensidad. Hay aprendizaje sobre lo que la disputa costó realmente.", en: null },
        largo: {
          es: "La carta invertida marca el momento posterior al conflicto. Hay reconocimiento de los daños colaterales de haber peleado así. La sensación de victoria se va diluyendo y queda la cuenta de lo perdido en el proceso. La salida pasa por reparar lo que se pueda y aprender qué peleas no tomar la próxima vez.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, reconciliación tentativa después de una pelea fuerte. En lo material, recuperación de relaciones laborales dañadas en una disputa.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja intentando recomponer después de una pelea que dejó marcas. La disculpa sincera vale más que el argumento perfecto. En lo financiero, hay reparación de vínculos profesionales o comerciales que sufrieron en una negociación dura: pedir disculpas, ofrecer compensación, recuperar credibilidad despacio. La reputación lleva tiempo de reconstruir y vale invertirlo.",
          en: null
        }
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
        corto: { es: "Un movimiento gradual hacia mejor terreno. La transición no es heroica, es necesaria.", en: null },
        largo: {
          es: "La carta describe el paso lento desde una situación difícil hacia algo más calmo. La travesía pide paciencia, sin esperar escapes brillantes. Hay tristeza por lo que se deja atrás y al mismo tiempo claridad sobre la necesidad de hacerlo. El destino aún no se ve del todo, y avanzar pide confiar en el rumbo elegido.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación que sale de una crisis o termina con dignidad. En lo material, un cambio de rumbo financiero que mejora la situación.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja superando una etapa difícil con conversación y trabajo, o una despedida hecha con respeto y poco drama. El alivio llega despacio. En lo financiero, hay un cambio que aleja del problema: mudanza por costos, cambio de trabajo por mejor sueldo, cierre de un negocio que drenaba. Lo que viene es mejor que lo que queda atrás, aunque el ajuste tome tiempo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La transición se traba. Algo del pasado retiene cuando ya tocaba avanzar.", en: null },
        largo: {
          es: "La carta invertida marca la dificultad para soltar lo que ya no sirve. Hay un movimiento iniciado que se devuelve a la mitad por miedo, nostalgia o costumbre. Lo conocido pesa más que la promesa de mejora. Avanzar pide reconocer qué retiene y soltarlo de a poco, sin negar el costo emocional del cambio.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien vuelve a una relación que ya había decidido dejar. En lo material, un cambio de trabajo o ciudad que se posterga indefinidamente.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona regresando a una relación tóxica que había decidido cerrar, o sosteniendo una pareja que ya emocionalmente terminó. La nostalgia confunde lo que ya estaba claro. En lo financiero, hay una decisión de cambio (mudanza, renuncia, venta) que se pospone por enésima vez. Cada nueva postergación tiene su costo en energía y oportunidad.",
          en: null
        }
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
        corto: {
          es: "Hay sensación de estar atrapado, pero las amarras son menos sólidas de lo que parecen. La salida existe.",
          en: null
        },
        largo: {
          es: "La carta describe un encierro donde la persona se ve atada y los nudos están sueltos. La parálisis es más mental que real. El miedo o la idea fija de no tener opciones bloquea ver las opciones que sí están. Salir empieza por mirar el atado con más cuidado.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien se siente atrapado en una relación pensando que no puede irse. En lo material, miedo a cambiar de trabajo o situación financiera.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona en un vínculo que se siente sin salida: cree que no puede irse por dependencia, miedo, costo, o por convencimiento de que no merece otra cosa. La cárcel es real y al mismo tiempo construida. En lo financiero, hay miedo a cambiar de trabajo, a reclamar lo que corresponde, a salir de una situación material que limita. La sensación de no tener opciones suele preceder a la decisión de mirarlas.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Las ataduras se aflojan. Lo que parecía imposible empieza a ser visto como elegible.", en: null },
        largo: {
          es: "La carta invertida marca el momento en que la venda se cae. Lo que parecía sin salida muestra puertas que estaban ocultas por el miedo. Hay reconocimiento de la propia agencia: uno no es solo víctima de las circunstancias, también participa de ellas. La libertad recuperada empieza tímida y se afirma con cada movimiento.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien decide salir de un vínculo donde se sentía sin opciones. En lo material, búsqueda activa de cambio después de mucho tiempo de pasividad.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona empezando a ejercer su propia agencia: poner límites, decir no, considerar dejar lo que no nutre. El movimiento puede ser pequeño y aun así marca el cambio. En lo financiero, hay búsqueda concreta de cambio: postular a otros trabajos, preguntar por opciones financieras, hablar con asesores. La parálisis se desarma cuando empieza a haber acción.",
          en: null
        }
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
        corto: { es: "Hay angustia sostenida. Los miedos se hacen más grandes en la cabeza que en la realidad.", en: null },
        largo: {
          es: "La carta describe la noche del alma: las preocupaciones que no dejan dormir, los pensamientos que vuelven en bucle, el peso emocional que se siente desproporcionado. La mente está amplificando los miedos. La realidad suele ser menos terrible que la versión imaginada. Buscar perspectiva externa ayuda a calibrar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, ansiedad sobre la pareja que crece más por dentro que por fuera. En lo material, miedos financieros que paralizan.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona dando vueltas mentales sobre la pareja: dudas, sospechas, ansiedad sobre lo que el otro siente, escenarios catastróficos imaginados. Compartir el miedo con el otro suele bajar su tamaño. En lo financiero, hay angustia sobre el dinero que no calza con la situación real: ansiedad por cuentas que están bien, miedo a perder lo que no está en riesgo. Una mirada externa al estado real de las cosas devuelve perspectiva.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La angustia empieza a aflojar. Lo temido se mira de cerca y resulta menos grave.", en: null },
        largo: {
          es: "La carta invertida marca el amanecer después de la noche larga. Las preocupaciones empiezan a verse en proporción. Hay alivio cuando lo que se temía resulta manejable o, al ser nombrado, pierde fuerza. El descanso recuperado permite pensar con más claridad.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alivio después de una conversación honesta que disipó miedos. En lo material, claridad financiera que desactiva la ansiedad.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona saliendo de un período de inseguridad después de hablar con su pareja: las dudas se aclararon, las sospechas se descartaron, o se confirmó algo que ya se intuía. La verdad libera más que la duda crónica. En lo financiero, mirar de frente la situación devuelve sensación de control: hacer el presupuesto, llamar al banco, hablar con un asesor. La angustia sobre dinero baja cuando hay datos en lugar de fantasías.",
          en: null
        }
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
        corto: { es: "Algo tocó fondo. Lo difícil ya no puede empeorar más.", en: null },
        largo: {
          es: "La carta describe el final doloroso de un ciclo. Algo se terminó de la peor manera, dejando agotamiento y heridas. La consolación posible es que desde acá solo se sube. El final, aunque traumático, libera para que algo nuevo pueda empezar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una ruptura definitiva o una traición que cierra el vínculo. En lo material, una pérdida grande o un fracaso visible.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una relación terminada en condiciones duras: traición, mentira sostenida, ruptura unilateral, abandono. El golpe deja marca y al mismo tiempo cierra capítulo. En lo financiero, hay una pérdida grande o un fracaso público: bancarrota, despido, proyecto colapsado, inversión que se hundió. Reconstruir empieza por aceptar el final sin negarlo.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "Algo del fondo empieza a ceder. Hay primeras señales de recuperación.", en: null },
        largo: {
          es: "La carta invertida marca el rebote después del golpe. Lo peor ya pasó y queda el trabajo lento de levantarse. La fortaleza encontrada en el proceso suele ser mayor a la que se creía tener. La cicatriz queda y al mismo tiempo es prueba de que se sobrevivió.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, recuperación después de una ruptura traumática. En lo material, reconstrucción después de un colapso financiero.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona reconstruyendo su capacidad de querer después de un golpe duro: terapia, tiempo, vínculos cuidados, espacio para sentir y procesar. La confianza vuelve gradualmente. En lo financiero, hay recuperación después de un fracaso material: nuevo trabajo, deudas reorganizadas, proyectos revisados. Lo aprendido del fondo es lo que evita volver a tocarlo.",
          en: null
        }
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
        corto: { es: "Hay una mente curiosa lista para investigar. Las preguntas pesan más que las respuestas.", en: null },
        largo: {
          es: "La carta describe energía intelectual joven y alerta. Hay ganas de aprender, de comunicar, de probar ideas. La curiosidad abre puertas que la cautela cerraba. Lo que falta es paciencia para sostener un tema antes de saltar al siguiente.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien con cabeza ágil y conversación interesante entra en escena. En lo material, una idea o información nueva que conviene investigar.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un encuentro o vínculo donde el atractivo principal es intelectual: conversaciones largas, debates, ideas compartidas. La intimidad emocional puede tardar más en aparecer. En lo financiero, llega información valiosa: una pista de inversión, un dato que cambia el panorama, una pregunta que conviene hacer antes de decidir. Vale investigar antes de actuar.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La mente está dispersa o las palabras hieren. La inteligencia se usa mal.", en: null },
        largo: {
          es: "La carta invertida nombra el costo de la sutileza convertida en cinismo. Comentarios sarcásticos que hieren, chismes que dañan, palabras agudas usadas para humillar. La capacidad verbal está al servicio del ego más que al de la verdad. Reconectar con cuidar a quien escucha cambia el efecto de lo que se dice.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien se vuelve crítico mordaz en lugar de comunicarse de verdad. En lo material, información poco confiable que conviene contrastar.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte usa palabras para herir más que para resolver: ironía, comentarios cortantes, comparaciones humillantes. La tregua verbal es condición para reparar. En lo financiero, hay información que llega con apariencia de dato pero sin verificación: un consejo apresurado, una recomendación interesada, un rumor presentado como hecho. Antes de actuar, vale chequear la fuente.",
          en: null
        }
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
        corto: { es: "Hay acción decidida y rápida. La cabeza marca el rumbo y el cuerpo ejecuta sin demora.", en: null },
        largo: {
          es: "La carta describe avance frontal con convicción. Las decisiones se toman con claridad mental y se ejecutan sin titubeo. La velocidad es virtud y al mismo tiempo riesgo. Lo que falta a veces es considerar el efecto en otros antes de cortar.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien actúa con decisión sin demasiado romanticismo. En lo material, una jugada audaz y rápida en negocios.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona que va al grano: declara, propone, decide, sin alargar la conversación. El estilo puede chocar con quien necesita más tiempo. En lo financiero, hay acción decidida: una negociación llevada con dureza, una inversión hecha sin consultar mucho, un cambio de trabajo aceptado al toque. La velocidad funciona si la información es buena.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La acción se vuelve agresión. Hay imposición disfrazada de eficiencia.", en: null },
        largo: {
          es: "La carta invertida marca el costo de la prisa sin filtro. Decisiones tomadas para imponer más que para resolver, palabras dichas para callar al otro, jugadas hechas para demostrar fuerza. La mente cortante actúa como arma más que como herramienta. Bajar el ritmo y considerar quién queda lastimado en el camino cambia el efecto.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien atropella al otro con argumentos en lugar de escucharlo. En lo material, decisiones impulsivas que dañan vínculos profesionales.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte gana las discusiones a costa de la otra: dialéctica afilada usada para anular, sin resolver. La razón puede ser correcta y aun así dañar. En lo financiero, hay decisiones tomadas con dureza que después generan resentimiento: jefes despedidos sin tacto, clientes maltratados, socios atropellados. La eficiencia que pierde gente cuesta caro a largo plazo.",
          en: null
        }
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
        corto: { es: "Hay una claridad madura nacida de la experiencia. La mente ve sin filtros.", en: null },
        largo: {
          es: "La carta describe a una persona con mente aguda y poco margen para la ingenuidad. Las decisiones se toman con información completa, las relaciones se eligen con cuidado, los errores propios y ajenos se reconocen sin negación. La frialdad aparente cubre una sensibilidad real que aprendió a protegerse. La autonomía es el rasgo distintivo.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona honesta y discernidora elige con cuidado. En lo material, decisiones financieras tomadas con cabeza y experiencia.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde la honestidad pesa más que el romanticismo. La pareja funciona porque hay respeto y conversación clara, sin dramas ni juegos. En lo financiero, hay manejo experto de los recursos: presupuesto claro, criterio para préstamos a otros, diferenciación entre necesidad y deseo. Lo que se decide acá rara vez se arrepiente.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: { es: "La claridad se volvió frialdad o resentimiento. La mente afilada corta donde no toca.", en: null },
        largo: {
          es: "La carta invertida marca el costo de la guardia mantenida demasiado tiempo. La sensibilidad se cubrió tanto que ya no encuentra cómo salir. Hay amargura por heridas viejas, juicio severo sobre los demás como protección, distancia que aísla. Volver a permitir vulnerabilidad es el trabajo aquí.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona herida se cierra al cariño que sí está disponible. En lo material, decisiones financieras tomadas con desconfianza generalizada.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una persona que sufrió y ahora trata a cada nueva posibilidad con la sospecha de la anterior. La autoprotección entendible se convirtió en barrera que aleja a quien no merece sospecha. En lo financiero, hay desconfianza extrema: no prestar nunca, no compartir información financiera con la pareja, no invertir por temor. La cautela que protege también puede paralizar.",
          en: null
        }
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
        corto: {
          es: "Hay autoridad mental basada en principios. Las decisiones se sostienen en lógica y en ética.",
          en: null
        },
        largo: {
          es: "La carta describe a alguien que combina inteligencia con integridad. La capacidad de analizar se acompaña de la responsabilidad de hacer lo correcto. Otros buscan su consejo porque pesan tanto la cabeza como la palabra. El poder se ejerce con criterio y con templanza.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja donde el respeto y la honestidad mandan. En lo material, decisiones financieras tomadas con principios sólidos.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde los acuerdos se respetan, la palabra se cumple, los conflictos se resuelven con conversación clara. La pasión convive con la estructura. En lo financiero, hay manejo ético del dinero: contratos transparentes, deudas pagadas, compromisos honrados, asesoría profesional buscada cuando hace falta. La reputación construida así se vuelve activo concreto.",
          en: null
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La autoridad se volvió manipulación. La inteligencia se usa para imponer más que para esclarecer.",
          en: null
        },
        largo: {
          es: "La carta invertida marca el abuso del intelecto. La capacidad mental se pone al servicio del propio interés sin consideración por otros, las decisiones se justifican con argumentos brillantes pero injustos, la palabra se quiebra cuando conviene. La frialdad sin ética es destructiva. Recuperar el balance pide volver a los principios antes que a las jugadas.",
          en: null
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona usa su inteligencia para controlar al otro. En lo material, decisiones financieras hechas con cinismo o ilegalidad.",
          en: null
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte manipula con palabras: gaslighting, argumentación tramposa, uso de la lógica para hacer dudar al otro de su propia experiencia. El abuso intelectual es real aunque no deje marcas visibles. En lo financiero, hay decisiones donde se cruzaron líneas éticas: contratos turbios, evasión, aprovechamiento de información privilegiada. Las cuentas pendientes con la propia conciencia se cobran con tiempo.",
          en: null
        }
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
