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
          en: "Something begins. What lies ahead has no shape yet, and that is precisely what makes it possible."
        },
        largo: {
          es: "Estás en el primer paso de algo. No hay manera de saber hacia dónde lleva, y por una vez eso no es problema. La inocencia que otros desestiman es lo que te permite avanzar sin pedirle garantías al camino. El impulso sabe antes que la razón.",
          en: "You stand at the first step of something. There is no way to know where it leads, and for once that is not a problem. The innocence others dismiss is what lets you move without demanding guarantees from the road. Impulse knows before reason does."
        }
      },
      relacional: {
        corto: {
          es: "Un encuentro o una decisión sin precedentes. Todavía no hay reglas escritas para esto.",
          en: "An encounter or a decision without precedent. No rules have been written for this yet."
        },
        largo: {
          es: "En lo afectivo, alguien o algo nuevo entra y no calza con lo conocido. Si abres sin condiciones, abres también el espacio donde puede crecer. En lo material, hay un gasto o una apuesta que la cabeza no sabe justificar pero el cuerpo sí. La pregunta verdadera es si vale la pena empezarlo.",
          en: "Emotionally, someone or something new enters and does not fit the familiar. Opening without conditions opens the space where it can grow. Materially, there is an expense or a wager the head cannot justify but the body can. The real question is whether it is worth starting."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Avanzas sin mirar. Lo espontáneo se vuelve descuido cuando ignoras lo que ya estaba ahí.",
          en: "You move forward without looking. What is spontaneous turns to carelessness when what is already there gets ignored."
        },
        largo: {
          es: "Lo que parecía libertad se acerca a evasión. Algo no se está viendo, o se está eligiendo no ver, y se acumula por detrás. Seguir moviéndote es válido si va acompañado de mirar antes de cada paso. Una pausa breve evita un tropiezo grande.",
          en: "What seemed like freedom is closer to avoidance. Something is going unseen, by chance or by choice, and it accumulates out of sight. Moving forward stays valid when each step comes with a look ahead. A short pause prevents a long fall."
        }
      },
      relacional: {
        corto: {
          es: "Te entusiasmas sin verificar. En afecto y en dinero, lo que parece liviano suele tener más peso del que aparenta.",
          en: "You get carried away without checking. In love and in money, what seems light usually weighs more than it shows."
        },
        largo: {
          es: "En vínculos cercanos opera una idealización: alguien, un momento, una expectativa que cuando se desinfla, duele. Vale preguntarse qué se está eligiendo no ver. En finanzas, hay decisiones tomadas sin números ni plazos: préstamos, compromisos, compras que se sienten bien al firmar y se vuelven peso después. La intuición no exime de las consecuencias.",
          en: "In close ties an idealization is at work: a person, a moment, an expectation that hurts when it deflates. It is worth asking what is being kept out of view. In finances, decisions are made without numbers or deadlines: loans, commitments, purchases that feel good at signing and turn into weight afterward. Intuition does not exempt anyone from consequences."
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
        corto: {
          es: "Tienes los recursos para hacerlo. La pregunta es si los estás usando.",
          en: "You have what it takes. The question is whether you are using it."
        },
        largo: {
          es: "Hay todo lo necesario sobre la mesa: habilidad, voluntad, oportunidad. La carta señala el momento en que la intención se vuelve acción concreta. Lo que hace falta es decidir y empezar a usar lo que ya está disponible. La fuerza se activa solo cuando se la pone a trabajar.",
          en: "Everything needed is on the table: skill, will, opportunity. The card marks the moment when intention becomes concrete action. What is missing is the decision to start using what is already at hand. Power activates only when put to work."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien sabe lo que quiere y lo busca con claridad. En lo material, una iniciativa propia empieza a dar frutos.",
          en: "Emotionally, someone knows what they want and pursues it with clarity. Materially, an initiative of your own begins to bear fruit."
        },
        largo: {
          es: "Afectivamente, hay una persona (o tú) que actúa con intención y carisma. La atracción que produce viene de la claridad de su proyección. En lo financiero, las habilidades propias se pueden traducir en ingresos si se ponen en uso. Conviene mirar qué talentos están dormidos esperando aplicación.",
          en: "In love, there is a person (or you) acting with intention and charisma. The attraction comes from the clarity of their projection. Financially, your own skills can translate into income when put to use. It is worth seeing which talents are dormant, waiting to be applied."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay habilidad, pero algo del manejo se torció. La intención perdió su claridad.",
          en: "There is skill, but something in the handling has gone off. The intention has lost its clarity."
        },
        largo: {
          es: "El mismo poder que crea también puede manipular. Algo del talento propio se está volcando en la imagen más que en lo concreto, o se está descartando por inseguridad. Hay un patrón de prometer más de lo que se entrega, propio o ajeno. Antes de buscar afuera, conviene revisar la intención con la que se sostienen las propias acciones.",
          en: "The same power that creates can also manipulate. Some of the talent at hand is being poured into image rather than substance, or is being dismissed out of insecurity. There is a pattern of promising more than what gets delivered, your own or another's. Before looking outward, it is worth reviewing the intention behind your own actions."
        }
      },
      relacional: {
        corto: {
          es: "Cuidado con palabras dulces que no se traducen en hechos. Lo que aparenta presencia puede no estar.",
          en: "Watch for sweet words that do not translate into deeds. What looks like presence may not be there."
        },
        largo: {
          es: "En lo afectivo, hay alguien (puede ser uno mismo) que vende una versión que no se sostiene. La duda merece ser escuchada antes que descartada como paranoia. En lo financiero, las propuestas brillantes piden ser miradas dos veces antes de firmar. La habilidad para presentar bien también puede usarse para esconder.",
          en: "In love, there is someone (it could be yourself) selling a version that does not hold. The doubt deserves listening to before being dismissed as paranoia. Financially, brilliant proposals ask to be looked at twice before signing. The skill of presenting well can also be used to hide."
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
          en: "Knowing without having to explain. Intuition already has the answer before reason formulates it."
        },
        largo: {
          es: "Hay un conocimiento que viene de la atención más que del análisis. Algo en ti registra lo que aún no se puede nombrar. La carta invita al silencio antes que a la acción, a escuchar antes que a decidir. Lo que se busca afuera, en muchos casos, ya está disponible adentro.",
          en: "There is a kind of knowing that comes from attention rather than analysis. Something in you registers what cannot yet be named. The card invites silence before action, listening before deciding. What is sought outside, in many cases, is already available within."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una intimidad que no necesita palabras. En lo material, una decisión que pide más reflexión que números.",
          en: "Emotionally, a closeness that does not need words. Materially, a decision asks for more reflection than numbers."
        },
        largo: {
          es: "Afectivamente, hay una conexión hecha más de presencia que de gestos visibles. Lo que el otro siente puede que no se exprese en frases. En lo financiero, conviene escuchar la sospecha antes de firmar, especialmente si un detalle no termina de calzar. La intuición está leyendo algo que la planilla todavía no muestra.",
          en: "In love, there is a connection built more on presence than on visible gestures. What the other feels may not come out in sentences. Financially, it is worth listening to the suspicion before signing, especially when a detail does not quite fit. Intuition is reading something the spreadsheet does not yet show."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La intuición está hablando y algo la silencia. La razón se impone donde no debería.",
          en: "Intuition is speaking and something silences it. Reason imposes itself where it should not."
        },
        largo: {
          es: "Hay un saber interior siendo ignorado por presión externa o por impaciencia. Lo que el cuerpo o el instinto registran no encuentran espacio para ser escuchados. La consecuencia es decisiones tomadas con información incompleta. Antes de pedir respuestas afuera, conviene volver al silencio.",
          en: "An inner knowing is being ignored under outer pressure or impatience. What the body or instinct register find no room to be heard. The consequence is decisions made on incomplete information. Before asking outside, it is worth returning to silence."
        }
      },
      relacional: {
        corto: {
          es: "Información oculta o malentendida en lo afectivo. En lo material, falta saber algo importante antes de decidir.",
          en: "Hidden or misread information in love. Materially, something important is still missing for the decision."
        },
        largo: {
          es: "En lo afectivo, hay algo no dicho que pesa, propio o del otro. La superficie se ve calma pero algo se mueve debajo. En lo financiero, hay datos faltantes en un acuerdo, contrato o préstamo. Lo prudente es buscar quien pueda traducir lo que no se está mostrando con claridad.",
          en: "In love, something unsaid is weighing, your own or another's. The surface looks calm while something moves beneath. Financially, there is missing data in an agreement, contract, or loan. The prudent move is finding someone who can read what is not being shown clearly."
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
          en: "Something is taking shape calmly, without needing to be forced. Patience is part of fertility."
        },
        largo: {
          es: "Hay un proceso fértil en marcha, propio o cercano. Algo está madurando sin necesidad de tu intervención constante. La energía actual sostiene mejor a otros que a planes nuevos. Cuidar lo que ya creció pesa más que iniciar más cosas.",
          en: "A fertile process is underway, your own or someone close. Something is ripening without needing constant intervention. The current energy holds others better than new plans. Tending to what has already grown matters more than starting more things."
        }
      },
      relacional: {
        corto: {
          es: "Calidez y cuidado mutuo en lo afectivo. En lo material, una abundancia ganada con paciencia se puede compartir.",
          en: "Warmth and mutual care in love. Materially, an abundance earned through patience can be shared."
        },
        largo: {
          es: "Afectivamente, hay un vínculo que sostiene más por presencia que por intensidad. La maternidad de gestos pequeños construye más que un solo gran gesto. En lo financiero, hay holgura para ser generoso con quien lo necesita sin que eso te desbalancee. La abundancia se mantiene cuando circula.",
          en: "In close ties, a bond that holds through presence more than through intensity. The mothering quality of small gestures builds more than a single grand one. Financially, there is room to be generous with those who need it without losing balance. Abundance keeps itself by circulating."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El cuidado dado a otros dejó al centro vacío. Algo de la propia energía está siendo descuidada.",
          en: "Care given outward has left the center empty. Some of your own energy is being neglected."
        },
        largo: {
          es: "La generosidad se está derramando hacia afuera y poco está volviendo. Hay un modo maternal aplicado donde no le toca, sofocando en vez de nutriendo. Lo creativo está bloqueado porque la energía se va antes en cuidar lo de otros. Conviene revisar dónde se está dejando de cuidar a uno mismo.",
          en: "Generosity is spilling outward and little is coming back. A maternal mode is being applied where it does not belong, smothering instead of nourishing. The creative is blocked because energy goes first to caring for others' affairs. It is worth checking where self-care has slipped."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, hay control disfrazado de cariño. En lo material, dependencia económica que ahoga.",
          en: "In love, there is control disguised as affection. Materially, a financial dependence that smothers."
        },
        largo: {
          es: "Afectivamente, alguien (puede ser uno mismo) está cuidando con tanta cercanía que sofoca. El cariño bien intencionado puede convertirse en jaula sin notarlo. En lo financiero, hay una dependencia material que está creando desbalance: ayuda dada que no se devuelve, o ayuda recibida que pesa demasiado. Lo justo necesita salir a la luz sin culpas pero sin cortinas.",
          en: "Emotionally, someone (it could be yourself) is caring so closely that it smothers. Well-meant affection can turn into a cage without notice. Financially, a material dependence is creating imbalance: help given that does not come back, or help received that weighs too much. What is fair needs to come into the open without guilt and without veiling."
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
          en: "A clear structure holds what others leave to chance. The situation calls for clear rules and the discipline to keep them."
        },
        largo: {
          es: "Hay capacidad de organización funcionando bien, propia o ajena. Lo que estaba disperso encuentra forma cuando alguien decide y traza el límite. La autoridad útil aquí se sostiene en responsabilidad asumida. Avanzar implica mantener la estructura sin caer en rigidez.",
          en: "There is organizational capacity working well, your own or someone else's. What was scattered finds shape when someone decides and draws the line. The useful authority here rests on responsibility taken. Moving forward means holding the structure without falling into rigidity."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja con bases sólidas y respeto mutuo. En lo material, disciplina financiera que da estabilidad.",
          en: "In love, a couple with solid ground and mutual respect. Materially, financial discipline that brings stability."
        },
        largo: {
          es: "Afectivamente, lo que sostiene un vínculo es la consistencia y el acuerdo de fondo, más que el romance permanente. Hay reglas implícitas funcionando bien. En lo financiero, hay disciplina con el dinero: presupuesto, ahorro, decisiones tomadas con cabeza. La libertad real depende del orden más que de la improvisación.",
          en: "In love, what holds a bond together is consistency and underlying agreement, more than permanent romance. Implicit rules are working well. Financially, there is discipline with money: budgeting, saving, decisions made with the head. Real freedom depends on order more than on improvisation."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay autoridad mal aplicada, propia o ajena. El control se volvió rigidez o se perdió por completo.",
          en: "Authority is being misapplied, your own or someone else's. Control has turned rigid, or has been lost altogether."
        },
        largo: {
          es: "El poder está siendo usado de forma desbalanceada. Por exceso, alguien impone sin escuchar y todo se vuelve obligación. Por defecto, falta dirección y las cosas se desordenan. Recuperar el equilibrio empieza por mirar qué se está controlando por miedo.",
          en: "Power is being used out of balance. By excess, someone imposes without listening and everything becomes obligation. By default, direction is missing and things fall out of order. Recovering the balance starts by looking at what is being controlled out of fear."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una dinámica de poder está deformando el vínculo. En lo material, las cuentas escapan al control propio.",
          en: "Emotionally, a dynamic of power is bending the bond. Materially, the accounts are escaping your own control."
        },
        largo: {
          es: "Afectivamente, alguien quiere mandar más que acompañar. Una pareja, un familiar, o uno mismo está ejerciendo control disfrazado de cuidado. En lo financiero, los gastos exceden la planificación, o no hay planificación. La situación pide volver a lo básico antes de improvisar más.",
          en: "In love, someone wants to command more than to accompany. A partner, a family member, or you yourself is exerting control disguised as care. Financially, expenses exceed the plan, or there is no plan. The situation calls for going back to basics before improvising further."
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
        corto: {
          es: "Lo establecido tiene su razón. Un consejo viejo encuentra aplicación nueva.",
          en: "What is established has its reason. An old piece of advice finds a new application."
        },
        largo: {
          es: "Hay valor en seguir un camino ya trazado. La tradición, la institución o el mentor disponible ofrecen estructura útil para este momento. Innovar puede esperar; lo que pide la situación es aprender de quienes ya pasaron por aquí. La sabiduría heredada está disponible para quien sepa pedirla.",
          en: "There is value in following a road already laid out. Tradition, the institution, or an available mentor offer useful structure for this moment. Innovation can wait; what the situation calls for is learning from those who have already passed through. Inherited wisdom is available to whoever knows how to ask."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo que se enmarca en lo formal o tradicional. En lo material, las decisiones conservadoras dan frutos.",
          en: "In love, a bond framed in something formal or traditional. Materially, conservative decisions bear fruit."
        },
        largo: {
          es: "Afectivamente, hay una relación que pide un paso institucional: matrimonio, vida en común, compromiso oficializado. La estructura compartida sostiene más de lo que parece. En lo financiero, los caminos probados (ahorro tradicional, instituciones establecidas) son más seguros que las apuestas nuevas. La estrategia conservadora protege precisamente cuando todo parece brillar.",
          en: "Emotionally, a relationship is asking for an institutional step: marriage, shared life, official commitment. The shared structure holds more than it seems. Financially, the proven paths (traditional saving, established institutions) are safer than new bets. The conservative strategy protects precisely when everything looks bright."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Una norma o tradición empieza a sentirse como prisión. Hay impulso de salir del molde.",
          en: "A rule or tradition begins to feel like prison. There is an impulse to step out of the mold."
        },
        largo: {
          es: "Las reglas heredadas pueden empezar a sentirse como prisión cuando ya no tienen función. Hay una rebeldía justificada contra costumbres que perdieron sentido. La carta abre espacio para el camino propio por encima del heredado. Romper bien implica entender qué se rompe antes de hacerlo.",
          en: "Inherited rules can start to feel like prison when they no longer serve. There is a justified rebellion against customs that lost their meaning. The card opens space for your own path over the inherited one. Breaking well means understanding what is being broken before doing it."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo se vuelve rutina sin proyecto. En lo material, los consejos clásicos no aplican a esta situación.",
          en: "In love, a bond turns to routine without a project. Materially, the classic advice does not apply to this situation."
        },
        largo: {
          es: "Afectivamente, una relación pierde frescura por aferrarse a moldes que ya no le sirven. La rutina se confunde con compromiso. En lo financiero, los caminos tradicionales no calzan con esta situación particular: hay que pensar fuera del manual. Lo no convencional pide responsabilidad propia, sin la red de la institución.",
          en: "Emotionally, a relationship loses freshness by clinging to molds that no longer serve. Routine gets confused with commitment. Financially, traditional paths do not fit this particular situation: thinking outside the manual is required. The unconventional asks for personal responsibility, without the safety net of the institution."
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
          en: "An important choice is taking shape. The answer comes from values more than from the wishes of the moment."
        },
        largo: {
          es: "Hay una decisión que pide alineación entre lo que se quiere y lo que se es. La carta señala armonía cuando esa alineación se logra, y conflicto cuando se rompe. Frente a una opción que parece atractiva pero choca con los principios, conviene escuchar el principio. Las elecciones hechas con coherencia interna se sostienen mejor en el tiempo.",
          en: "There is a decision asking for alignment between what is wanted and what is true. The card signals harmony when that alignment holds, and conflict when it breaks. When an option looks attractive but clashes with the principle, it is worth listening to the principle. Choices made with inner coherence hold better over time."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un encuentro que conecta en varios niveles a la vez. En lo material, una sociedad o pareja que multiplica lo que cada uno aporta.",
          en: "In love, an encounter that connects on several levels at once. Materially, a partnership or pairing that multiplies what each side brings."
        },
        largo: {
          es: "Afectivamente, hay una conexión que combina deseo, afinidad y propósito común. La pareja funciona porque las decisiones grandes se piensan juntas. En lo financiero, una asociación o sociedad encuentra equilibrio: cada parte aporta y recibe en proporción justa. Cuando los acuerdos están claros desde el inicio, lo demás fluye.",
          en: "Emotionally, a connection combining desire, affinity, and shared purpose. The pair works because the big decisions are thought through together. Financially, an association or partnership finds balance: each side contributes and receives in fair proportion. When the agreements are clear from the start, everything else flows."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Una elección postergada empieza a tener costo. La indecisión acumula tensión.",
          en: "A postponed choice is starting to have a cost. Indecision accumulates tension."
        },
        largo: {
          es: "Hay un desbalance entre lo que se quiere y lo que se elige sostener. La carta invertida señala incongruencia: actos que contradicen valores propios, o miedo a comprometerse con la decisión que ya está tomada por dentro. La salida pide claridad, aunque resulte incómoda. Lo que se evita decidir, se decide por inercia.",
          en: "There is a gap between what is wanted and what is being chosen to sustain. Reversed, the card signals incongruence: actions that contradict your values, or fear of committing to the decision already made inside. The way out asks for clarity, even when uncomfortable. What is left undecided gets decided by inertia."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un desencuentro de fondo, o una decisión postergada en pareja. En lo material, una sociedad pierde balance.",
          en: "In love, a deep mismatch, or a postponed decision in a couple. Materially, a partnership is losing balance."
        },
        largo: {
          es: "Afectivamente, hay una grieta entre lo que dos personas creen querer y lo que en realidad quieren. La conversación postergada es la que más urge. En lo financiero, una sociedad o acuerdo entre partes está perdiendo equilibrio: alguien aporta más, alguien recibe más. Sin redefinir términos, la fricción se vuelve permanente.",
          en: "Emotionally, there is a crack between what two people think they want and what they actually want. The postponed conversation is the most urgent one. Financially, a partnership or agreement is losing balance: someone contributes more, someone receives more. Without redefining terms, the friction becomes permanent."
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
        corto: {
          es: "Hay impulso suficiente para llegar adonde apuntas. Lo que falta es mantener la dirección.",
          en: "There is enough momentum to reach where you aim. What is missing is keeping the direction."
        },
        largo: {
          es: "La carta señala un momento de avance decidido. Las fuerzas que jalan en distintas direcciones se pueden gobernar si hay claridad sobre el destino. La victoria en este caso depende de la disciplina más que del azar. Soltar el rumbo equivale a perderlo.",
          en: "The card marks a moment of decided advance. The forces pulling in different directions can be governed when the destination is clear. Victory here depends on discipline more than on chance. Letting go of the course is the same as losing it."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una conquista o consolidación lograda con foco. En lo material, una meta financiera concreta a la vista.",
          en: "In love, a conquest or consolidation achieved through focus. Materially, a concrete financial goal in sight."
        },
        largo: {
          es: "Afectivamente, hay momentum: un vínculo que avanza con dirección clara, o una persona que decide perseguir lo que quiere sin dudar. La voluntad bien dirigida tiene resultado. En lo financiero, los obstáculos materiales se pueden superar con foco y disciplina. Lo que se persigue con consistencia llega.",
          en: "Emotionally, there is momentum: a bond moving with clear direction, or a person deciding to pursue what they want without hesitation. Will well-directed produces results. Financially, material obstacles can be overcome with focus and discipline. What is pursued with consistency arrives."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Demasiada presión propia o ajena, sin un destino claro. El movimiento se parece más a agitación que a avance.",
          en: "Too much pressure, your own or someone else's, without a clear destination. The movement looks more like agitation than advance."
        },
        largo: {
          es: "Hay esfuerzo desplegado pero sin coordinación. Las fuerzas internas tiran en sentidos opuestos y ninguna gana. La urgencia de hacer algo puede estar tapando una falta de dirección. Conviene parar antes de seguir, para definir hacia dónde se va.",
          en: "There is effort deployed without coordination. The inner forces pull in opposite directions and none wins. The urgency to do something may be covering a lack of direction. It is worth stopping before continuing, to define where you are going."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pulseada de poder agota a las dos partes. En lo material, decisiones financieras tomadas en piloto automático.",
          en: "In love, a power struggle exhausts both sides. Materially, financial decisions made on autopilot."
        },
        largo: {
          es: "Afectivamente, hay competencia donde debería haber colaboración. Cada uno empuja en su dirección y el vínculo se desgasta. En lo financiero, las decisiones se están tomando por inercia o por reacción, sin una estrategia detrás. Recuperar la dirección requiere parar el ritmo antes de acelerarlo.",
          en: "Emotionally, there is competition where there should be collaboration. Each one pushes in their own direction and the bond wears down. Financially, decisions are being made out of inertia or reaction, without a strategy behind them. Recovering the direction requires stopping the pace before speeding it up."
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
          en: "There is an inner strength that does not need to prove itself. Calm holds better than aggression."
        },
        largo: {
          es: "La carta describe una capacidad de mantener la serenidad cuando todo lo demás se agita. La fuerza acá nace del autocontrol y la paciencia más que de la imposición. Hay un poder en domar las propias reacciones impulsivas. Quien se controla a sí mismo tiene más influencia que quien grita.",
          en: "The card describes a capacity to keep serenity while everything else stirs. The strength here comes from self-control and patience more than from force. There is a power in taming your own impulsive reactions. Whoever masters themselves has more influence than whoever shouts."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo donde la pasión convive con la paciencia. En lo material, la solidez se construye con disciplina, sin urgencias.",
          en: "In love, a bond where passion lives alongside patience. Materially, solidity is built through discipline, without urgency."
        },
        largo: {
          es: "Afectivamente, hay una relación intensa que se sostiene precisamente porque las dos partes saben templar lo que sienten. La pasión tiene cauce. En lo financiero, los hábitos pacientes (no comprar por impulso, ahorrar de a poco) están dando resultado. Lo que se construye despacio resiste mejor que lo que se infla rápido.",
          en: "Emotionally, there is an intense relationship that holds precisely because both sides know how to temper what they feel. Passion has a channel. Financially, patient habits (not buying on impulse, saving little by little) are producing results. What is built slowly resists better than what inflates quickly."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay miedo o rabia tomando el mando interior. La calma habitual se está desarmando.",
          en: "Fear or anger is taking inner command. The usual calm is coming undone."
        },
        largo: {
          es: "La fuerza interior se siente lejos. La inseguridad o el agotamiento están haciendo difíciles cosas que de otro modo se manejarían sin esfuerzo. Reaccionar con rabia o ceder al miedo son formas de perder la propia centralidad. Recuperarla pasa por gestos pequeños: descansar, comer, mover el cuerpo, dormir lo suficiente.",
          en: "Inner strength feels far away. Insecurity or exhaustion are making difficult what would otherwise be handled without effort. Reacting with anger or yielding to fear are ways of losing your own center. Recovering it goes through small gestures: rest, food, moving the body, enough sleep."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, hay codependencia disfrazada de amor. En lo material, miedo financiero que paraliza.",
          en: "In love, codependence disguised as love. Materially, financial fear that paralyzes."
        },
        largo: {
          es: "Afectivamente, una relación se está apoyando en la inseguridad de uno o de los dos. Lo que parece intimidad puede estar siendo evasión de lo propio. En lo financiero, el miedo está bloqueando movimientos necesarios: gastos diferidos, decisiones postergadas, oportunidades que se pasan por incapacidad de actuar. Recuperar la fuerza pide enfrentar lo que asusta, en pequeñas dosis.",
          en: "Emotionally, a relationship is leaning on the insecurity of one or both sides. What looks like intimacy may be avoidance of yourself. Financially, fear is blocking necessary moves: deferred spending, postponed decisions, opportunities missed through inability to act. Recovering strength means facing what scares you, in small doses."
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
          en: "The situation calls for retreat to listen to yourself. The answer is within and asks for silence to surface."
        },
        largo: {
          es: "La carta señala una etapa de introspección. Hay un movimiento natural hacia el silencio: alejarse del ruido para escuchar lo propio. La sabiduría que se busca llega en soledad, despacio. La retirada actual es preparación para lo que viene, aunque parezca pasividad.",
          en: "The card marks a stage of introspection. There is a natural pull toward silence: stepping away from noise to hear what is your own. The wisdom being sought arrives in solitude, slowly. The current retreat is preparation for what comes, even when it looks like passivity."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, espacio individual antes de avanzar en pareja. En lo material, una decisión grande pide reflexión más que consultas externas.",
          en: "In love, individual space before advancing as a couple. Materially, a big decision asks for reflection more than for outside opinion."
        },
        largo: {
          es: "Afectivamente, hay una etapa donde uno o ambos necesitan tiempo a solas para entender lo propio. La carta sugiere respetar ese silencio en lugar de forzar conversación. En lo financiero, las decisiones importantes (inversión, compra grande, cambio de trabajo) piden tiempo de reflexión personal antes de acción. La sabiduría útil aquí viene de la propia evaluación cuidadosa.",
          en: "Emotionally, there is a stage where one or both need time alone to understand what is theirs. The card suggests respecting that silence rather than forcing conversation. Financially, important decisions (investment, a major purchase, a job change) ask for personal reflection before action. The useful wisdom here comes from your own careful evaluation."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La soledad dejó de ser refugio y se volvió aislamiento. Hay un cierre que conviene revisar.",
          en: "Solitude has stopped being shelter and turned into isolation. A closing-off is worth reviewing."
        },
        largo: {
          es: "Lo que empezó como retirada útil se convirtió en escondite. La carta invertida marca el punto donde el silencio interior empieza a congelar más que a nutrir. Aislarse para crecer pesa diferente que aislarse para evitar. Recuperar el contacto con otros, aunque sea pequeño, devuelve perspectiva.",
          en: "What began as useful retreat has become a hiding place. Reversed, the card marks the point where inner silence begins to freeze more than it nourishes. Withdrawing to grow weighs differently from withdrawing to avoid. Recovering contact with others, even in small doses, returns perspective."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una soledad no buscada que pesa. En lo material, decisiones financieras tomadas sin asesoría necesaria.",
          en: "In love, an unsought solitude that weighs. Materially, financial decisions made without the necessary advice."
        },
        largo: {
          es: "Afectivamente, hay una distancia que llegó sin ser pedida y que pesa. Una pareja se está alejando, o alguien está atravesando un período de soledad difícil. En lo financiero, hay reluctancia a pedir ayuda donde se necesita: contador, asesor, alguien que sepa más. La autosuficiencia exagerada está costando más caro que el orgullo.",
          en: "Emotionally, a distance has arrived unasked and it weighs. A couple is drifting apart, or someone is moving through a difficult stretch of solitude. Financially, there is reluctance to ask for help where it is needed: an accountant, an advisor, someone who knows more. Exaggerated self-sufficiency is costing more than pride."
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
          en: "Something is shifting under its own weight. What rises at some point falls, and the reverse is also true."
        },
        largo: {
          es: "La carta señala un giro en marcha. Las cosas se están reordenando por causas que no están del todo bajo control propio. Lo importante es notar el movimiento y leer qué pide. La suerte premia más a quien se mueve con el cambio que a quien lo resiste.",
          en: "The card marks a turning underway. Things are reordering through causes not fully under your control. What matters is noticing the movement and reading what it asks. Luck rewards whoever moves with the change more than whoever resists it."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un giro inesperado que reposiciona lo conocido. En lo material, una oportunidad llega por un canal no anticipado.",
          en: "In love, an unexpected turn that rearranges the familiar. Materially, an opportunity arrives through a channel that was not anticipated."
        },
        largo: {
          es: "Afectivamente, una relación cambia de fase: de amistad a algo más, o al revés. La carta señala que el cambio es más grande que la voluntad de las partes. En lo financiero, hay una vuelta de timón: una propuesta inesperada, un cambio de empleo, un golpe de suerte. Aprovecharla pide flexibilidad antes que planificación.",
          en: "Emotionally, a relationship shifts phase: from friendship to something more, or the other way around. The card signals that the change is bigger than the will of either side. Financially, there is a turn at the helm: an unexpected proposal, a job change, a stroke of luck. Taking it requires flexibility more than planning."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Algo se trabó. La rueda gira pero parece girar contra ti.",
          en: "Something has jammed. The wheel turns but seems to turn against you."
        },
        largo: {
          es: "Hay un ciclo que está funcionando en contra. Lo que se intenta no termina de cuajar, y aparecen obstáculos en cadena. La carta invertida pide aceptar que parte de lo que pasa no está bajo control propio, y dejar de pelear contra el viento. Lo que se resiste con fuerza solo prolonga el ciclo.",
          en: "There is a cycle running counter. What gets attempted does not quite hold, and obstacles appear in chain. Reversed, the card asks for accepting that part of what happens is not under your control, and stopping the fight against the wind. What is resisted with force only prolongs the cycle."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una mala racha se sostiene. En lo material, una pérdida o gasto inesperado descalibra la planificación.",
          en: "In love, a bad stretch keeps going. Materially, an unexpected loss or expense throws off the plan."
        },
        largo: {
          es: "Afectivamente, hay un patrón que se repite: el mismo tipo de vínculo, el mismo tipo de desencuentro, la misma frustración. La carta invertida invita a mirar qué papel propio sostiene el ciclo. En lo financiero, hay un golpe imprevisto que rompe el plan: gasto médico, reparación, pérdida laboral. Adaptarse pesa más que tener razón.",
          en: "Emotionally, there is a pattern repeating: the same kind of bond, the same kind of mismatch, the same frustration. Reversed, the card invites a look at what part of you sustains the cycle. Financially, an unforeseen blow breaks the plan: a medical bill, a repair, a job loss. Adapting weighs more than being right."
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
          en: "Actions have their weight, and that weight is being measured. What was done is being read with care."
        },
        largo: {
          es: "Hay una balanza funcionando. Las decisiones tomadas, las palabras dichas, las acciones puestas en marcha están dando su resultado proporcional. La carta señala que la situación se va a inclinar hacia donde lo justo lo pida. La integridad propia importa más que la apariencia.",
          en: "A scale is at work. The decisions made, the words spoken, the actions set in motion are giving their proportional result. The card signals that the situation will tilt toward what justice requires. Personal integrity matters more than appearance."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una verdad importante sale a la luz y reordena. En lo material, un acuerdo o trámite se resuelve con justicia.",
          en: "In love, an important truth surfaces and rearranges. Materially, an agreement or process resolves with fairness."
        },
        largo: {
          es: "Afectivamente, lo que estaba turbio en una relación encuentra claridad. La conversación postergada se da, y todo queda en su sitio. En lo financiero, los acuerdos se cierran de forma equilibrada: contratos firmados, deudas saldadas, herencias resueltas. Lo justo se impone al final.",
          en: "Emotionally, what was murky in a relationship finds clarity. The postponed conversation happens, and everything finds its place. Financially, agreements close in balanced form: contracts signed, debts settled, inheritances resolved. What is fair imposes itself in the end."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay desbalance que aún no se reconoce. Eludir la responsabilidad solo retrasa el ajuste.",
          en: "There is an imbalance not yet acknowledged. Dodging responsibility only delays the adjustment."
        },
        largo: {
          es: "Algo no está en balance y la carta invertida nombra la negación de eso. Hay una situación donde la verdad pesa más que la versión cómoda. Eludir la responsabilidad funciona corto plazo y se cobra largo plazo. Volver al equilibrio empieza por mirar la propia parte sin defensa.",
          en: "Something is not in balance and reversed, the card names the denial of that. There is a situation where the truth weighs more than the comfortable version. Dodging responsibility works in the short term and gets billed in the long. Returning to balance starts by looking at your own part without defense."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un trato desigual sostenido por demasiado tiempo. En lo material, un trámite injusto o un acuerdo que se rompió.",
          en: "In love, an unequal treatment sustained for too long. Materially, an unfair process or a broken agreement."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde una parte da más y la otra recibe más, y ninguna lo quiere nombrar. En lo financiero, hay un litigio, una herencia disputada, un contrato incumplido, o un trámite que parece avanzar contra lo razonable. Reclamar lo justo requiere documentación, paciencia y disposición a sostener la queja sin agotarse.",
          en: "Emotionally, there is a bond where one side gives more and the other receives more, and neither wants to name it. Financially, there is a lawsuit, a disputed inheritance, a breached contract, or a process moving against what is reasonable. Claiming what is fair requires documentation, patience, and a willingness to sustain the complaint without exhausting yourself."
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
        corto: {
          es: "Una pausa forzada que cambia el ángulo de visión. Lo que parecía claro se vuelve a leer.",
          en: "A forced pause that changes the angle of view. What seemed clear is read again."
        },
        largo: {
          es: "Hay un momento de suspensión que conviene aceptar más que pelear. Lo que se vivencia como bloqueo está produciendo, en silencio, un cambio de perspectiva. Las certezas anteriores se relajan y aparecen ángulos nuevos. Avanzar pasa por soltar lo que solía orientar.",
          en: "There is a moment of suspension worth accepting more than fighting. What is lived as blockage is quietly producing a shift of perspective. The earlier certainties loosen and new angles appear. Moving forward goes through releasing what used to orient."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pausa que pide reformular más que actuar. En lo material, un período donde menos es más.",
          en: "In love, a pause asking for reframing more than for action. Materially, a stretch where less is more."
        },
        largo: {
          es: "Afectivamente, hay un alto en el vínculo que pide ser respetado. Forzar movimiento aquí solo desgasta. La pausa permite ver lo que estaba oculto por la velocidad. En lo financiero, hay un momento de quietud: ahorros sin movilizar, planes en espera, proyectos detenidos. La quietud cumple función de maduración aunque pueda parecer fracaso.",
          en: "Emotionally, there is a halt in the bond that asks to be respected. Forcing movement here only drains. The pause makes visible what speed had hidden. Financially, there is a moment of stillness: savings unmoved, plans on hold, projects stopped. The stillness performs the function of ripening even when it looks like failure."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La pausa se prolongó demasiado. Lo que era reflexión se volvió parálisis.",
          en: "The pause has gone on too long. What was reflection has turned into paralysis."
        },
        largo: {
          es: "Algo en la suspensión perdió su función. La quietud útil se convirtió en estancamiento. La carta invertida marca el momento de salir del estado de espera, aunque cueste. La decisión postergada empieza a tener un costo concreto que ya no se puede ignorar.",
          en: "Something in the suspension has lost its function. Useful stillness has turned into stagnation. Reversed, the card marks the moment to step out of the waiting state, even when it costs. The postponed decision is beginning to carry a concrete cost that can no longer be ignored."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja en pausa que ya no se reactiva. En lo material, dinero parado donde se necesita movimiento.",
          en: "In love, a couple on pause that no longer reactivates. Materially, money parked where movement is needed."
        },
        largo: {
          es: "Afectivamente, una relación está detenida en un punto del cual no sale: los dos saben que algo tiene que decidirse y los dos lo postergan. En lo financiero, hay capital parado, ahorros sin uso, oportunidades dejadas pasar por excesiva precaución. Lo que se reservó por miedo está perdiendo valor con el tiempo.",
          en: "Emotionally, a relationship is stopped at a point neither leaves: both know something has to be decided and both postpone it. Financially, there is capital sitting still, savings without use, opportunities let through from excess caution. What was set aside out of fear is losing value with time."
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
        corto: {
          es: "Algo termina. Lo que termina hace lugar para lo que viene.",
          en: "Something ends. What ends makes room for what comes."
        },
        largo: {
          es: "Hay un final que ya está en marcha, querido o no. La carta nombra una transformación profunda: una etapa, una identidad, una forma de relacionarse que cierra. El miedo al cambio es comprensible, pero resistir alarga el dolor sin cambiar el resultado. Soltar abre lugar para lo que aún no se ha mostrado.",
          en: "An ending is already underway, wanted or not. The card names a deep transformation: a stage, an identity, a way of relating that is closing. Fear of change is understandable, but resistance lengthens the pain without changing the outcome. Letting go opens room for what has not yet shown itself."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un cierre que reordena todo lo demás. En lo material, una pérdida que despeja espacio para algo nuevo.",
          en: "In love, a closure that rearranges everything else. Materially, a loss that clears space for something new."
        },
        largo: {
          es: "Afectivamente, una relación llega a su final, o cambia de forma de manera profunda. Aceptarlo es más útil que sostener algo que ya terminó. En lo financiero, hay una pérdida material que duele: trabajo, propiedad, recurso esperado. Esta pérdida también es transformación: empuja a redefinir qué es realmente importante.",
          en: "Emotionally, a relationship reaches its end, or changes form in a deep way. Accepting it is more useful than sustaining something already over. Financially, there is a material loss that hurts: a job, a property, an expected resource. This loss is also transformation: it pushes a redefinition of what truly matters."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay resistencia a un cambio que ya pasó. Sostener lo terminado consume sin dar.",
          en: "There is resistance to a change that has already happened. Holding what is over consumes without giving."
        },
        largo: {
          es: "Lo que ya cerró está siendo sostenido como si todavía estuviera vivo. La carta invertida marca el costo de no aceptar el final: el cuerpo, la energía, el tiempo se gastan en mantener una ilusión. La transformación está esperando, pero no puede empezar mientras lo viejo siga ocupando el lugar. El miedo al vacío posterior es comprensible, y el vacío es la condición para lo nuevo.",
          en: "What has already closed is being sustained as if still alive. Reversed, the card marks the cost of not accepting the end: the body, the energy, the time get spent on keeping an illusion alive. Transformation is waiting, but it cannot begin while the old keeps holding the place. The fear of the emptiness afterward is understandable, and the emptiness is the condition for the new."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un duelo postergado que pide ser hecho. En lo material, una decisión de cambio que se evita.",
          en: "In love, a postponed mourning asking to be done. Materially, a decision of change being avoided."
        },
        largo: {
          es: "Afectivamente, hay una despedida que no se completó: una relación que terminó pero que sigue ocupando espacio mental, un duelo que se intentó saltar, un patrón emocional que ya no sirve. En lo financiero, hay una decisión de cambio que se posterga (renunciar, vender, terminar un proyecto) y el postergarla está costando más que tomarla. El paso difícil es también el paso necesario.",
          en: "Emotionally, there is a goodbye not completed: a relationship that ended but still occupies mental space, a mourning someone tried to skip, an emotional pattern that no longer serves. Financially, there is a decision of change being postponed (resigning, selling, ending a project) and postponing it is costing more than making it. The hard step is also the necessary step."
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
          en: "The virtue here lives in the right blend, far from any extreme. Patience works as an active strategy."
        },
        largo: {
          es: "Hay un equilibrio en juego entre fuerzas que parecen opuestas pero se necesitan. La carta sugiere combinar antes que elegir, integrar antes que separar. Lo que pide la situación es paciencia: dejar que las cosas decanten, ajustar de a poco, sin forzar. La templanza opera como maestría del ritmo: actuar despacio sin dejar de actuar.",
          en: "There is a balance in play between forces that look opposite but need each other. The card suggests blending rather than choosing, integrating rather than separating. What the situation asks is patience: letting things settle, adjusting little by little, without forcing. Temperance operates as mastery of rhythm: acting slowly without ceasing to act."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación que sostiene tensiones sin romperse. En lo material, un balance financiero ganado con disciplina suave.",
          en: "In love, a relationship that holds tensions without breaking. Materially, a financial balance earned through gentle discipline."
        },
        largo: {
          es: "Afectivamente, hay un vínculo que combina diferencias sin pelear: dos personalidades distintas encuentran su modo de funcionar juntas. La paciencia mutua sostiene más que la afinidad inicial. En lo financiero, hay un manejo cuidadoso: ahorrar sin austeridad extrema, gastar sin imprudencia, mantener proporciones sostenibles en el tiempo. El equilibrio que se construye despacio es el que dura.",
          en: "Emotionally, there is a bond that blends differences without fighting: two distinct personalities find their way of working together. Mutual patience holds more than the initial affinity. Financially, there is careful handling: saving without extreme austerity, spending without recklessness, keeping proportions sustainable over time. The balance built slowly is the one that lasts."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Algo está fuera de proporción. Un extremo está jalando con fuerza desbalanceada.",
          en: "Something is out of proportion. One extreme is pulling with unbalanced force."
        },
        largo: {
          es: "Hay un desbalance interno que se proyecta hacia afuera. La templanza invertida marca exceso (de trabajo, de afecto, de gasto, de control) o defecto (apatía, falta de cuidado, inacción). La armonía pide mirar dónde se está cargando demasiado y dónde se está dejando vacío. Pequeños ajustes sostenidos importan más que grandes correcciones bruscas.",
          en: "There is an inner imbalance projecting outward. Reversed, Temperance marks excess (of work, of affection, of spending, of control) or deficiency (apathy, lack of care, inaction). Harmony asks for looking at where you are loading too much and where you are leaving empty. Small sustained adjustments matter more than large abrupt corrections."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, conflicto sin mediación posible aún. En lo material, finanzas en desorden por urgencia o desidia.",
          en: "In love, conflict without mediation possible yet. Materially, finances in disorder through urgency or neglect."
        },
        largo: {
          es: "Afectivamente, dos personas no logran encontrar el ritmo común: cada una opera en su tiempo y la pareja se desencuentra. En lo financiero, hay desorden: gasto compulsivo, ahorro extremo que paraliza, o falta de planificación que deja todo a la improvisación. Recuperar la mezcla justa pide tiempo y aceptar que el cambio será gradual.",
          en: "Emotionally, two people cannot find the shared rhythm: each operates in their own time and the pair misses each other. Financially, there is disorder: compulsive spending, extreme saving that paralyzes, or lack of planning that leaves everything to improvisation. Recovering the right blend asks for time and the acceptance that the change will be gradual."
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
        corto: {
          es: "Hay una atadura que se confunde con elección. Lo que parece libertad puede ser hábito.",
          en: "There is a binding being confused with a choice. What looks like freedom may be habit."
        },
        largo: {
          es: "La carta nombra una dependencia: a una sustancia, a una persona, a una forma de pensar, a un patrón material. La cadena en la imagen es importante porque está suelta: las amarras son menos sólidas de lo que parecen. Hay placer en lo conocido y eso lo hace difícil de soltar. Reconocer la atadura es el primer movimiento hacia desatarla.",
          en: "The card names a dependence: on a substance, a person, a way of thinking, a material pattern. The chain in the image matters because it hangs loose: the bindings are less solid than they appear. There is pleasure in the familiar and that makes it hard to let go. Recognizing the binding is the first move toward undoing it."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, deseo intenso que puede confundirse con amor. En lo material, gasto compulsivo o atadura financiera disfrazada.",
          en: "In love, intense desire that can be mistaken for love. Materially, compulsive spending or a disguised financial binding."
        },
        largo: {
          es: "Afectivamente, hay una relación marcada por la pasión más que por el cuidado. La intensidad puede esconder dependencia, posesividad, o un vínculo que solo se sostiene por costumbre física. En lo financiero, hay deudas que se prolongan, gastos que se justifican como necesidades, una atadura material que limita opciones. Soltar implica nombrar la atadura primero.",
          en: "Emotionally, there is a relationship marked by passion more than by care. The intensity can hide dependence, possessiveness, or a bond held only by physical habit. Financially, there are debts that drag on, expenses justified as needs, a material binding that limits options. Letting go starts with naming the binding."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Una cadena se está aflojando. Lo que parecía imposible de dejar está empezando a soltarse.",
          en: "A chain is loosening. What seemed impossible to leave is beginning to come undone."
        },
        largo: {
          es: "La carta invertida marca un momento de despertar. Lo que tenía a la persona atada (sea el hábito, el vínculo o el patrón material) está perdiendo fuerza. Romper con eso implica incomodidad inicial pero abre espacio nuevo. La libertad recuperada se siente al principio como vacío, después como aire.",
          en: "Reversed, the card marks a moment of awakening. What had the person bound (whether the habit, the bond, or the material pattern) is losing force. Breaking with it brings initial discomfort but opens new space. Freedom recovered feels at first like emptiness, then like air."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, salida de una relación que ataba más que nutría. En lo material, alivio de una deuda o atadura financiera.",
          en: "In love, the exit from a relationship that bound more than it nourished. Materially, relief from a debt or financial binding."
        },
        largo: {
          es: "Afectivamente, hay una relación tóxica en proceso de cierre. La distancia que asustaba está empezando a sentirse como descanso. En lo financiero, una deuda se salda, una dependencia económica se rompe, un compromiso material que limitaba se afloja. La reconquista de la propia autonomía pide sostener el nuevo estado sin recaer en el viejo.",
          en: "Emotionally, a toxic relationship is in the process of closing. The distance that used to scare is beginning to feel like rest. Financially, a debt is settled, an economic dependence is broken, a material commitment that limited loosens. Reclaiming your own autonomy asks for sustaining the new state without slipping back into the old."
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
        corto: {
          es: "Algo cae. Lo que se rompe estaba mal sostenido desde el principio.",
          en: "Something falls. What breaks was poorly held from the start."
        },
        largo: {
          es: "La carta describe un derrumbe brusco. Una estructura se viene abajo, y aunque duele, lo que cae no era sostenible. La crisis es información: muestra dónde estaban los errores. Después del derrumbe queda espacio para construir sobre algo más firme.",
          en: "The card describes a sudden collapse. A structure comes down, and though it hurts, what falls was not sustainable. The crisis is information: it shows where the errors lived. After the collapse, there is space to build on firmer ground."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una ruptura que reorganiza todo. En lo material, una pérdida abrupta o un revés inesperado.",
          en: "Emotionally, a break that reorganizes everything. Materially, an abrupt loss or an unexpected setback."
        },
        largo: {
          es: "Afectivamente, hay una relación o ilusión que se desmorona de golpe. La caída deja la verdad expuesta; lo que era falso ya no se puede sostener. En lo financiero, hay un golpe imprevisto: pérdida de empleo, fracaso de proyecto, problema de salud que afecta lo material. Reconstruir empieza por aceptar lo que ya no está.",
          en: "In love, a relationship or illusion crumbles all at once. The fall leaves the truth exposed; what was false can no longer hold. Financially, an unforeseen blow lands: a lost job, a failed project, a health problem that touches material life. Rebuilding begins by accepting what is gone."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay una crisis que se intuye pero aún no estalló. Algo se está sosteniendo con alfileres.",
          en: "A crisis is sensed but has not broken yet. Something is hanging by a thread."
        },
        largo: {
          es: "La carta invertida nombra el momento previo a la caída. Hay una estructura interna o externa que ya sabe que no se sostiene, pero que se está prolongando con esfuerzo. Postergar el derrumbe solo aumenta el costo cuando finalmente ocurra. Aceptar la caída con anticipación duele menos que sostener la mentira.",
          en: "Reversed, the card marks the moment before the fall. A structure, inner or outer, already knows it cannot hold, yet it is being prolonged through effort. Delaying the collapse only raises the cost when it eventually arrives. Accepting the fall in advance hurts less than sustaining the lie."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja agonizando que ninguno quiere terminar. En lo material, un negocio o trabajo insostenible que se sigue forzando.",
          en: "In love, a relationship dying that neither side will end. Materially, an unsustainable business or job that keeps being pushed."
        },
        largo: {
          es: "Afectivamente, hay una relación que ya no funciona pero que ninguna de las partes nombra. La energía gastada en mantener apariencias deja a las dos vacías. En lo financiero, hay un proyecto, trabajo o sociedad que está fallando y se sigue intentando con métodos que no funcionan. Cortar antes evita que el daño se acumule.",
          en: "On the emotional side, a relationship that no longer works but neither party names. The energy spent on appearances leaves both empty. Financially, a project, job, or partnership is failing while the same methods that do not work keep getting tried. Cutting early prevents the damage from compounding."
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
          en: "In the middle of difficulty, a luminous calm. Hope returns without needing to be summoned."
        },
        largo: {
          es: "La carta señala un momento de renovación interior. Lo peor de la tormenta se va aflojando y queda espacio para la respiración honda. La fe (en uno mismo, en lo que viene, en el sentido de lo que pasó) se restablece despacio. La paciencia con el propio proceso es la mejor compañía aquí.",
          en: "The card marks a moment of inner renewal. The worst of the storm loosens and there is room for deep breathing. Faith (in yourself, in what is coming, in the meaning of what happened) is restored slowly. Patience with your own process is the best company here."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo se sana o uno nuevo aparece con suavidad. En lo material, un alivio después de aprietos.",
          en: "In love, a bond heals or a new one appears with softness. Materially, relief after a tight stretch."
        },
        largo: {
          es: "Afectivamente, una relación entra en un período de armonía: las heridas se procesan, la confianza se reconstruye, hay espacio para mostrarse sin máscara. En lo financiero, las cosas empiezan a destrabarse: una oferta que llega, una solución que aparece, un alivio en lo que pesaba. Lo bueno de este momento se construye sobre lo aprendido.",
          en: "Emotionally, a relationship enters a stretch of harmony: wounds get processed, trust rebuilds, there is space to show up without a mask. Financially, things begin to come unstuck: an offer that arrives, a solution that appears, relief from what was weighing. The good of this moment builds on what was learned."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La esperanza está flaqueando. Algo nubló la posibilidad de mejor.",
          en: "Hope is faltering. Something has clouded the possibility of better."
        },
        largo: {
          es: "Hay un momento de desánimo donde la fe en lo que viene se debilitó. La carta invertida marca dificultad temporal de ver la salida más que ausencia de ella. Lo que falta es la perspectiva, y se restituye con tiempo. Recuperar el horizonte pide volver a lo pequeño que sí funciona.",
          en: "There is a stretch of discouragement where faith in what is coming has weakened. Reversed, the card marks a temporary difficulty in seeing the way out, more than the absence of one. What is missing is perspective, and it returns with time. Recovering the horizon goes through coming back to the small things that do work."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, desencanto que aún no termina de levantarse. En lo material, expectativas defraudadas.",
          en: "In love, disenchantment that has not quite lifted. Materially, expectations let down."
        },
        largo: {
          es: "Afectivamente, una decepción está teniendo más peso que la esperanza. La confianza se quebró en algún punto y no termina de regenerarse. En lo financiero, expectativas que parecían firmes se desinflaron: una oferta no concretada, un negocio que no rinde, un retorno menor al esperado. Reordenar pide aceptar la decepción sin dejar que defina todo lo que viene.",
          en: "Emotionally, a disappointment is weighing more than hope. Trust broke at some point and does not quite regenerate. Financially, expectations that seemed firm have deflated: an offer not finalized, a business not yielding, a smaller return than expected. Reordering asks for accepting the disappointment without letting it define everything that follows."
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
        corto: {
          es: "No todo es lo que parece. Lo que ves es solo parte de lo que pasa.",
          en: "Not everything is as it seems. What you see is only part of what is happening."
        },
        largo: {
          es: "La carta marca un momento de incertidumbre y confusión. Lo aparente y lo real no coinciden. Las emociones tiñen la lectura de la situación, y miedos viejos pueden estar mezclándose con datos del presente. La intuición es más confiable aquí que el análisis: percibir antes que decidir.",
          en: "The card marks a moment of uncertainty and confusion. The apparent and the real do not coincide. Emotions are tinting the reading of the situation, and old fears may be mixing with present data. Intuition is more reliable here than analysis: perceive before deciding."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, hay algo que no se está viendo claramente. En lo material, decisiones financieras pendientes con información incompleta.",
          en: "In love, something is not being seen clearly. Materially, financial decisions pending with incomplete information."
        },
        largo: {
          es: "Afectivamente, hay una bruma sobre el vínculo: malentendidos, sospechas no confirmadas, sentimientos confusos. Forzar claridad en este momento es contraproducente; conviene esperar que la situación se aclare por sí sola. En lo financiero, no es buen momento para grandes decisiones: faltan datos, los números no terminan de cuadrar, alguien retiene información. La paciencia evita errores de los que después cuesta volver.",
          en: "Emotionally, there is a fog over the bond: misunderstandings, unconfirmed suspicions, confused feelings. Forcing clarity in this moment is counterproductive; it is worth waiting for the situation to clear by itself. Financially, this is not a good moment for big decisions: data is missing, numbers do not quite add up, someone is withholding information. Patience prevents errors that are costly to come back from."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La niebla empieza a despejarse. Lo que estaba escondido se vuelve visible.",
          en: "The fog begins to lift. What was hidden becomes visible."
        },
        largo: {
          es: "La carta invertida marca el momento en que la confusión empieza a disiparse. Las dudas que pesaban encuentran respuesta, las sospechas se confirman o se descartan. Lo que estaba escondido (por uno mismo o por otro) sale a la superficie. Con la información completa, las decisiones se vuelven manejables.",
          en: "Reversed, the card marks the moment when confusion begins to dissipate. The doubts that weighed find answers, the suspicions are confirmed or set aside. What was hidden (by yourself or by another) comes to the surface. With complete information, decisions become manageable."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, salen a la luz cosas que estaban opacas. En lo material, claridad sobre lo que estaba turbio en cuentas o acuerdos.",
          en: "In love, things that were opaque come into view. Materially, clarity over what was murky in accounts or agreements."
        },
        largo: {
          es: "Afectivamente, lo que se intuía se confirma: una mentira sale a la luz, un secreto se nombra, un malentendido se aclara. La verdad puede doler pero deja de drenar energía. En lo financiero, los números empiezan a tener sentido: lo que parecía un misterio (gasto, deuda, pago no recibido) se explica. Con la información a mano, lo que toca es decidir.",
          en: "Emotionally, what was sensed gets confirmed: a lie comes to light, a secret is named, a misunderstanding is cleared. The truth may hurt but it stops draining energy. Financially, the numbers begin to make sense: what seemed a mystery (an expense, a debt, an unreceived payment) gets explained. With the information at hand, what is called for is to decide."
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
        corto: {
          es: "Hay claridad y calor disponibles. Lo que estaba en sombra se ilumina.",
          en: "There is clarity and warmth available. What was in shadow lights up."
        },
        largo: {
          es: "La carta marca un momento de plenitud. Las cosas funcionan, hay energía, hay claridad sobre lo que se quiere. La alegría aquí tiene fundamento: viene de haber atravesado lo difícil. Lo logrado pide ser disfrutado y compartido con quienes acompañaron.",
          en: "The card marks a moment of fullness. Things work, there is energy, there is clarity about what is wanted. The joy here has ground: it comes from having crossed the difficult. What was achieved asks to be enjoyed and shared with those who came along."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación radiante o un encuentro luminoso. En lo material, una recompensa concreta y bien ganada.",
          en: "In love, a radiant relationship or a luminous encounter. Materially, a concrete and well-earned reward."
        },
        largo: {
          es: "Afectivamente, hay un período donde el vínculo florece: confianza, alegría, presencia compartida, planes hechos juntos. La pareja (o la posibilidad de pareja) se siente sin esfuerzo. En lo financiero, llega un fruto: un ascenso, una venta, una recompensa por trabajo hecho con paciencia. La abundancia se nota más cuando se reconoce y se agradece.",
          en: "Emotionally, there is a stretch where the bond flowers: trust, joy, shared presence, plans made together. The couple (or the possibility of one) feels effortless. Financially, a fruit arrives: a promotion, a sale, a reward for work done with patience. Abundance shows itself more when it is recognized and met with gratitude."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Algo de la alegría está nublado. Lo que debería brillar está parcialmente cubierto.",
          en: "Some of the joy is clouded. What should shine is partly covered."
        },
        largo: {
          es: "La carta invertida marca un momento donde la felicidad disponible no termina de llegar. Hay logros pero algo los empaña: cansancio, duda, la sensación de que falta algo. A veces es exceso de optimismo desmedido lo que oculta problemas reales; otras es pesimismo crónico tapando éxitos válidos. Reconocer lo que sí está funcionando es el primer paso para que se note.",
          en: "Reversed, the card marks a moment where the available happiness does not quite arrive. There are achievements but something dims them: tiredness, doubt, the sense that something is missing. Sometimes it is excess optimism hiding real problems; other times it is chronic pessimism covering valid successes. Recognizing what is working is the first step toward noticing it."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una alegría parcial o postergada. En lo material, un éxito menor al esperado.",
          en: "In love, a partial or delayed joy. Materially, a smaller success than expected."
        },
        largo: {
          es: "Afectivamente, una relación tiene buenos momentos pero algo los limita: tiempo escaso, distancia, circunstancias externas. En lo financiero, hay un logro pero menor de lo proyectado: el aumento es chico, la venta es buena pero no excelente, el bono llega pero recortado. Lo que toca es reconocer lo que sí está, sin amargarse por lo que no.",
          en: "Emotionally, a relationship has good moments but something limits them: scarce time, distance, outer circumstances. Financially, there is an achievement smaller than projected: the raise is modest, the sale is good but not excellent, the bonus arrives cut down. What is called for is recognizing what is there, without bitterness about what is not."
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
        corto: {
          es: "Una nueva claridad sobre el propio camino. Lo que había que cambiar se vuelve obvio.",
          en: "A new clarity about your own path. What had to change becomes obvious."
        },
        largo: {
          es: "La carta describe un momento de despertar interior. Algo que estaba dormido se reactiva, algo que se evitaba mirar se vuelve evidente. Hay una llamada a tomar perspectiva sobre la propia historia y decidir qué se conserva y qué se suelta. Es un punto de inflexión silencioso pero profundo.",
          en: "The card describes a moment of inner awakening. Something asleep reactivates, something avoided becomes evident. There is a call to take perspective on your own history and decide what to keep and what to release. It is a quiet but deep turning point."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una conversación que cambia la dirección de una relación. En lo material, un balance honesto sobre la propia situación financiera.",
          en: "In love, a conversation that changes the direction of a relationship. Materially, an honest balance of your own financial situation."
        },
        largo: {
          es: "Afectivamente, hay un momento de claridad sobre lo que la relación necesita: una conversación honesta, una decisión postergada, una redefinición de acuerdos. La verdad compartida abre espacio para algo nuevo. En lo financiero, el balance honesto sobre lo que se gana, se gasta y se debe permite cambiar lo que estaba mal. La conciencia de la propia situación es ya parte de la solución.",
          en: "Emotionally, there is a moment of clarity about what the relationship needs: an honest conversation, a postponed decision, a redefinition of agreements. The shared truth opens space for something new. Financially, the honest accounting of what is earned, spent, and owed allows changing what was off. Awareness of your own situation is already part of the solution."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay autocrítica desmedida o, al revés, falta de mirar lo propio. El balance interno está fuera de foco.",
          en: "There is self-criticism gone too far, or the reverse, a refusal to look at yourself. The inner balance is out of focus."
        },
        largo: {
          es: "La carta invertida marca dos extremos posibles: o demasiada culpa que paraliza, o falta de honestidad sobre lo que sí necesita cambiar. La salida pasa por mirar las propias acciones sin demonizarlas y sin justificarlas. Lo importante es aprender más que condenar. La oportunidad de cambio sigue disponible cuando se la mira sin defensa.",
          en: "Reversed, the card marks two possible extremes: either too much guilt that paralyzes, or a lack of honesty about what does need to change. The way out goes through looking at your own actions without demonizing them and without justifying them. What matters is learning more than condemning. The opportunity for change stays available when it is met without defense."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, autocrítica que se proyecta en el vínculo. En lo material, postergar enfrentar lo que ya hay que enfrentar.",
          en: "In love, self-criticism projected onto the bond. Materially, postponing what already needs to be faced."
        },
        largo: {
          es: "Afectivamente, hay un patrón donde la inseguridad propia se traduce en exigencia hacia el otro. La culpa o la duda se descargan en el vínculo en vez de procesarse adentro. En lo financiero, hay decisiones pendientes que se siguen postergando: deudas no enfrentadas, presupuestos no hechos, ingresos no revisados. El despertar empieza por mirar lo que se viene evitando.",
          en: "Emotionally, there is a pattern where your own insecurity translates into demands on the other. Guilt or doubt gets discharged onto the bond rather than processed inside. Financially, there are pending decisions that keep getting postponed: debts unfaced, budgets undone, income unreviewed. The awakening begins by looking at what has been avoided."
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
        corto: {
          es: "Algo se completa. Las piezas del proceso encajan finalmente.",
          en: "Something completes. The pieces of the process finally fit."
        },
        largo: {
          es: "La carta marca el cierre exitoso de un ciclo. El proceso largo encuentra finalmente su forma definitiva. Hay una integración de todo lo aprendido en el camino. Esta plenitud es la base sobre la cual empieza el ciclo siguiente.",
          en: "The card marks the successful closing of a cycle. The long process finds its definitive form at last. There is an integration of everything learned along the way. This fullness is the ground on which the next cycle begins."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación llega a un nivel de plenitud o paso importante. En lo material, una meta financiera se alcanza.",
          en: "In love, a relationship reaches a level of fullness or an important step. Materially, a financial goal is reached."
        },
        largo: {
          es: "Afectivamente, hay un cierre que se siente como logro: una pareja consolida, un proceso difícil se resuelve, una etapa de la vida juntos cierra bien. En lo financiero, una meta importante se concreta: deuda saldada, casa comprada, proyecto entregado, retiro alcanzado. La satisfacción acá pide ser registrada antes de saltar a la siguiente meta.",
          en: "Emotionally, there is a closure that feels like achievement: a couple consolidates, a difficult process resolves, a stage of life lived together closes well. Financially, an important goal takes shape: a debt settled, a home bought, a project delivered, retirement reached. The satisfaction here asks to be registered before jumping to the next goal."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Falta una pieza para cerrar. El cuadro está casi completo pero algo se resiste.",
          en: "A piece is missing for the close. The picture is almost complete but something resists."
        },
        largo: {
          es: "La carta invertida marca un ciclo que está a punto de cerrar pero no termina de hacerlo. Hay una pieza pendiente: una conversación, una decisión, un trámite, una aceptación interna. Lo que se evita cerrar mantiene abierta una energía que no termina de descansar. Completar lo que falta libera para lo siguiente.",
          en: "Reversed, the card marks a cycle about to close that does not quite finish. There is a pending piece: a conversation, a decision, a paperwork item, an inner acceptance. What is left unfinished keeps an energy open that does not get to rest. Completing what is missing releases for what comes next."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación que casi llega a destino pero algo la frena. En lo material, una meta a la que le falta el último paso.",
          en: "In love, a relationship almost arrived but something holds it back. Materially, a goal missing the last step."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde el siguiente paso (vivir juntos, casarse, dejar de hacerlo, formar familia) no termina de darse aunque todo lo apunta. La indecisión deja al vínculo en suspenso. En lo financiero, hay una meta casi alcanzada que falta cerrar: un trámite final, un pago último, una venta a punto de concretarse. Sostener el esfuerzo final es lo que da el cierre.",
          en: "Emotionally, there is a bond where the next step (moving in together, marrying, ending things, starting a family) does not quite happen even though everything points to it. The indecision leaves the bond suspended. Financially, there is a goal nearly reached that needs closing: a final paperwork item, a last payment, a sale on the verge. Sustaining the final effort is what brings the closure."
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
          en: "Something moves you, and you are not sure why. That feeling is the signal that something new is opening."
        },
        largo: {
          es: "Hay una corriente afectiva que se abre paso después de un silencio largo. Puede ser una persona, un proyecto, una sensación olvidada. Lo que importa es dejar que llegue, sin filtrar demasiado. Lo que rechaces tarda mucho en volver.",
          en: "An emotional current is making its way through after a long silence. It could be a person, a project, a forgotten sensation. What matters is letting it arrive, without filtering too much. What you turn away takes a long time to come back."
        }
      },
      relacional: {
        corto: {
          es: "Afectivamente, una nueva intimidad encuentra forma. En lo material, una entrada inesperada llega a través de gente con aprecio.",
          en: "Emotionally, a new intimacy finds shape. Materially, money arrives unexpectedly through people who care."
        },
        largo: {
          es: "Una relación se profundiza, o aparece una desde un lugar inesperado. La cercanía gana más terreno que la cautela. En el dinero, la generosidad de otros encuentra cómo manifestarse: un préstamo aprobado, una ayuda que llega, una oferta hecha desde el afecto. Recibir bien también es una habilidad.",
          en: "A relationship deepens, or one appears from somewhere unexpected. Closeness gains more ground than caution. In money matters, the generosity of others finds a way to show itself: a loan approved, help that arrives, an offer made out of affection. Receiving well is also a skill."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La fuente está, pero algo la tapa. Lo que se siente no termina de salir.",
          en: "The source is there, but something covers it. What is felt does not quite come through."
        },
        largo: {
          es: "Hay un cierre afectivo del que no eres del todo consciente. La desconfianza filtra cada gesto antes de dejarlo pasar. La emoción está adentro pero no encuentra cómo expresarse. Antes de buscar afuera, conviene revisar lo que sigue pendiente adentro.",
          en: "Something has closed off emotionally without your full awareness. Distrust filters each gesture before letting it pass. The feeling is inside but cannot find a way to surface. What stays unresolved within is worth attending to first."
        }
      },
      relacional: {
        corto: {
          es: "Una decepción afectiva te tiene en pausa todavía. Lo que toca es reparar antes de pedir.",
          en: "An emotional disappointment still holds you on pause. Repair comes before asking."
        },
        largo: {
          es: "En lo afectivo aparece distancia, malentendido, o una pérdida aún sin procesar. Forzar el contacto no ayuda; conviene dejarlo asentar. En el dinero, una ayuda esperada no llega o llega menos de lo prometido. Lo prudente es revisar dependencias antes de apoyarse en lo que todavía no está firme.",
          en: "Emotionally, distance appears, misunderstanding, or a loss still unprocessed. Forcing contact does not help; letting it settle does. In money matters, expected help fails to arrive, or arrives smaller than promised. The prudent move is reviewing dependencies before leaning on what is not yet firm."
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
          en: "A genuine connection with another person. What each one brings finds its exact match."
        },
        largo: {
          es: "Hay un encuentro de iguales en marcha. Dos partes que reconocen lo que el otro tiene y lo que aporta lo propio. La carta marca el inicio de un vínculo donde ambas partes se sostienen mutuamente sin perder lo individual. La fuerza de esta unión está en el equilibrio del intercambio.",
          en: "An encounter of equals is underway. Two parties recognize what the other has and what they themselves bring. The card marks the start of a bond where both sides hold each other without losing the individual. The strength of this union rests on the balance of exchange."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja en armonía o el inicio de una. En lo material, una sociedad o acuerdo entre dos partes que se respetan.",
          en: "In love, a couple in harmony or the start of one. Materially, a partnership or agreement between two parties who respect each other."
        },
        largo: {
          es: "Afectivamente, hay una relación donde ambas personas se eligen activamente y se cuidan con la misma intensidad. La compañía suma sin restar individualidad. En lo financiero, una sociedad o acuerdo entre dos partes encuentra equilibrio: aportes proporcionales, decisiones compartidas, beneficios distribuidos con justicia. Lo que se construye con otro tiene más raíz que lo que se construye solo.",
          en: "Emotionally, there is a relationship where both people actively choose each other and care for each other with equal intensity. The company adds without subtracting individuality. Financially, a partnership or agreement between two parties finds balance: proportional contributions, shared decisions, benefits fairly distributed. What is built with another has more root than what is built alone."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El equilibrio entre dos partes se rompió. Algo del intercambio dejó de fluir.",
          en: "The balance between two parties has broken. Something in the exchange has stopped flowing."
        },
        largo: {
          es: "La igualdad del vínculo está rota: alguien da más, alguien recibe más, o las dos partes se confundieron en una sola sin individualidad. La codependencia puede pasar por intimidad pero ahoga lentamente. Recuperar el balance pide que cada uno vuelva a tener vida propia. Sin diferencia entre dos no hay encuentro posible.",
          en: "The equality of the bond is broken: one gives more, one receives more, or both have blurred into one without individuality. Codependence can pass for intimacy but slowly suffocates. Recovering the balance asks each one to return to their own life. Without difference between two, no meeting is possible."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja desbalanceada que no termina de nombrarlo. En lo material, una sociedad donde uno aporta más y nadie lo dice.",
          en: "In love, an unbalanced couple that does not quite name it. Materially, a partnership where one contributes more and nobody says so."
        },
        largo: {
          es: "Afectivamente, hay una relación donde uno asumió el rol que el otro abandonó: cuidar, sostener, decidir. Ese desequilibrio agota a quien carga y aleja a quien recibe sin reciprocidad. En lo financiero, hay una sociedad o acuerdo entre dos donde el reparto se torció: aportes desiguales, beneficios mal distribuidos, decisiones tomadas por una sola parte. Renegociar es la salida.",
          en: "Emotionally, there is a relationship where one took on the role the other dropped: caring, sustaining, deciding. That imbalance exhausts the one who carries and pushes away the one who receives without reciprocity. Financially, there is a partnership or agreement between two where the share has gone off: unequal contributions, badly distributed benefits, decisions made by one side alone. Renegotiating is the way out."
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
          en: "A shared celebration, your own or another's. What was achieved is celebrated with those who came along."
        },
        largo: {
          es: "Hay un momento de alegría comunitaria. Algo bueno se completa y pide ser celebrado en compañía. Las amistades, los grupos, los círculos cercanos toman protagonismo. Lo que se vive con otros pesa distinto que lo que se vive en privado.",
          en: "There is a moment of communal joy. Something good completes and asks to be celebrated in company. Friendships, groups, close circles take center stage. What is lived with others weighs differently from what is lived in private."
        }
      },
      relacional: {
        corto: {
          es: "Afectivamente, una amistad importante o un grupo que sostiene. En lo material, una recompensa que coincide con un momento social.",
          en: "In close ties, an important friendship or a group that holds. Materially, a reward that coincides with a social moment."
        },
        largo: {
          es: "Afectivamente, los vínculos cercanos están en buen estado: encuentros que reconfortan, complicidad con amigos, una pareja que se nutre del entorno común. El amor también puede llegar desde un círculo de amistades. En lo financiero, hay un logro que se da en contexto colectivo: una venta, un evento, un proyecto compartido que rinde. Compartir lo bueno multiplica más que retenerlo.",
          en: "In close ties, the surrounding bonds are in good shape: encounters that comfort, complicity with friends, a couple that draws nourishment from the shared environment. Love can also arrive from a circle of friendships. Financially, an achievement comes in collective context: a sale, an event, a shared project that pays off. Sharing the good multiplies more than holding it back."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La celebración tiene gusto a poco. Algo del entorno social drena más de lo que aporta.",
          en: "The celebration tastes thin. Something in the social surroundings drains more than it gives."
        },
        largo: {
          es: "Hay exceso o desencuentro en lo grupal: fiestas que cansan, círculos donde la cercanía se siente vacía, chismes que llegan donde no deberían. La calidad de los vínculos pesa más que la cantidad. Cuando lo social agota en vez de nutrir, conviene mirar a quién se le sigue dando tiempo. No todo lo que se llama amistad lo es.",
          en: "There is excess or mismatch in the group dimension: parties that tire, circles where closeness feels empty, gossip that lands where it should not. The quality of the bonds matters more than the quantity. When the social exhausts instead of nourishing, it is worth looking at who keeps getting your time. Not everything called friendship is one."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un tercero o un grupo entrometiéndose donde no le toca. En lo material, un evento social genera más gasto que celebración.",
          en: "In love, a third party or a group meddling where it does not belong. Materially, a social event produces more cost than celebration."
        },
        largo: {
          es: "Afectivamente, hay una pareja siendo afectada por terceros: comentarios externos, una amistad que se cruza, alguien tratando de meterse donde no le compete. La defensa del vínculo se hace en privado y de a dos. En lo financiero, un compromiso social (boda, cumpleaños, viaje grupal) genera más estrés que disfrute por su costo. Lo prudente es ajustar gastos antes que ceder a la presión social.",
          en: "Emotionally, there is a couple being affected by outsiders: outside comments, a friendship cutting in, someone trying to step in where they have no place. The defense of the bond happens in private and as two. Financially, a social commitment (a wedding, a birthday, a group trip) produces more stress than enjoyment because of its cost. The prudent move is adjusting expenses before yielding to social pressure."
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
          en: "Something is being offered and the gaze is elsewhere. The opportunity is there but goes unnoticed."
        },
        largo: {
          es: "Hay un momento de retraimiento: cansancio, apatía, una sensación de que nada vale el esfuerzo. La carta señala que hay algo siendo ofrecido y la atención está demasiado puesta en lo perdido para verlo. El descontento puede ser legítimo y al mismo tiempo estar tapando lo que sí está disponible. Salir del trance pide levantar la vista del propio descontento.",
          en: "There is a moment of withdrawal: tiredness, apathy, a sense that nothing is worth the effort. The card signals that something is being offered while attention is too set on what was lost to see it. The discontent can be legitimate and at the same time can be covering what is actually available. Stepping out of the trance asks for lifting your gaze from your own discontent."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, desinterés o saturación con lo que hay. En lo material, una propuesta económica recibida con indiferencia.",
          en: "In love, disinterest or saturation with what is there. Materially, a financial proposal received with indifference."
        },
        largo: {
          es: "Afectivamente, una relación pierde brillo por costumbre o por exceso de exigencia interna. La frescura dejó de notarse aunque siga estando. En lo financiero, llega una propuesta (oferta de trabajo, oportunidad de inversión, ayuda ofrecida) y se la mira con escepticismo o cansancio. Antes de descartarla, vale revisar si la apatía está hablando por encima del juicio.",
          en: "Emotionally, a relationship loses brightness through habit or through excess inner demand. The freshness stopped being noticed though it remains. Financially, a proposal arrives (a job offer, an investment opportunity, help offered) and gets looked at with skepticism or fatigue. Before dismissing it, it is worth checking whether apathy is speaking over judgement."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La atención vuelve. Algo que se había ignorado empieza a ser visto con otros ojos.",
          en: "Attention returns. Something that was ignored begins to be seen with new eyes."
        },
        largo: {
          es: "La carta invertida marca la salida del estancamiento. Lo que se rechazaba por desinterés vuelve a interesar. Hay una reconexión con el deseo, con la posibilidad, con lo que estaba esperando ser recibido. La sensibilidad se reactiva después de un período de bloqueo.",
          en: "Reversed, the card marks the exit from stagnation. What was rejected from disinterest becomes interesting again. There is a reconnection with desire, with possibility, with what was waiting to be received. Sensitivity reactivates after a stretch of blockage."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, vuelve la apertura después de un cierre. En lo material, una oportunidad rechazada vuelve a presentarse.",
          en: "In love, openness returns after a closure. Materially, a rejected opportunity presents itself again."
        },
        largo: {
          es: "Afectivamente, una persona empieza a salir del aislamiento: vuelve a aceptar invitaciones, a mostrarse, a permitirse vínculo. El deshielo es gradual y no requiere apuro. En lo financiero, una propuesta dejada de lado vuelve a considerarse con mejor disposición. La diferencia entre rechazar por hartazgo y rechazar por convicción se vuelve clara, y permite decidir mejor.",
          en: "Emotionally, a person begins to come out of isolation: invitations get accepted again, presence resurfaces, a bond is allowed. The thaw is gradual and does not require haste. Financially, a proposal set aside comes back into consideration with better disposition. The difference between rejecting from saturation and rejecting from conviction becomes clear, and allows for a better decision."
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
        corto: {
          es: "Algo se perdió y la mirada está fija en eso. Lo que sí quedó está fuera del foco actual.",
          en: "Something has been lost and the gaze is fixed on it. What still remains is out of current focus."
        },
        largo: {
          es: "Hay un duelo en proceso. La pérdida es real y merece ser sentida, pero el dolor se está volviendo paisaje. Tres copas caídas reciben atención mientras dos siguen en pie, esperando ser vistas. Salir del lamento pide girar la cabeza despacio hacia lo que sí se conservó.",
          en: "A mourning is in process. The loss is real and deserves to be felt, but the pain is turning into landscape. Three fallen cups get attention while two still stand, waiting to be seen. Leaving the lament asks for slowly turning the head toward what was kept."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un duelo de relación o una decepción reciente. En lo material, una pérdida económica que pesa más por lo simbólico que por la cifra.",
          en: "In love, the mourning of a relationship or a recent disappointment. Materially, a financial loss that weighs more for what it symbolizes than for the figure."
        },
        largo: {
          es: "Afectivamente, una ruptura, una traición o un desencuentro están dominando la mirada. La herida es legítima y al mismo tiempo está tapando lo que aún queda: amistades, otros vínculos, capacidad propia de querer. En lo financiero, una pérdida material duele tanto por lo que representaba como por su valor concreto: un trabajo, un negocio, una expectativa. Reordenar empieza por inventariar lo que sigue en pie.",
          en: "Emotionally, a breakup, a betrayal, or a falling-out is dominating the gaze. The wound is legitimate and at the same time is hiding what remains: friendships, other bonds, your own capacity to love. Financially, a material loss hurts as much for what it represented as for its concrete value: a job, a business, an expectation. Reordering begins by taking stock of what still stands."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El duelo empieza a ceder. La mirada se levanta y encuentra lo que estaba esperando.",
          en: "The mourning begins to ease. The gaze lifts and finds what was waiting."
        },
        largo: {
          es: "La carta invertida marca la salida del lamento. Hay una aceptación silenciosa de la pérdida, sin necesidad de borrarla. Lo que sigue en pie empieza a recibir el cuidado que merecía. El paso siguiente se vuelve posible cuando el peso del pasado deja de ser referencia única.",
          en: "Reversed, the card marks the exit from the lament. There is a quiet acceptance of the loss, without needing to erase it. What still stands begins to receive the care it deserved. The next step becomes possible when the weight of the past stops being the only reference."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una herida cicatriza y abre espacio para nuevo vínculo. En lo material, recuperación después de un golpe económico.",
          en: "In love, a wound heals and opens space for a new bond. Materially, recovery after a financial blow."
        },
        largo: {
          es: "Afectivamente, lo que dolió se va integrando: una ruptura procesada, un duelo elaborado, una traición que dejó aprendizaje. La capacidad de amar vuelve sin cargar el peso anterior. En lo financiero, lo que sobrevivió a la pérdida alcanza para reconstruir otra vez. La nueva versión suele ser más realista y por eso más sólida.",
          en: "Emotionally, what hurt gets integrated: a processed breakup, an elaborated mourning, a betrayal that left a lesson. The capacity to love returns without carrying the previous weight. Financially, what survived the loss is enough to rebuild again. The new version tends to be more realistic and for that reason more solid."
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
          en: "The past returns with sweetness. A memory, a person, or a familiar place reappears and brings warmth."
        },
        largo: {
          es: "Hay una vuelta a lo familiar: gente conocida, recuerdos de infancia, espacios que sostienen sin pedir nada. La carta marca un descanso del presente exigente, un permiso para estar en lo conocido. Las raíces, las amistades viejas, la familia de origen ofrecen algo sólido. Lo que viene de lejos puede ayudar a entender lo que pasa cerca.",
          en: "There is a return to the familiar: known faces, childhood memories, spaces that hold without asking anything in return. The card marks a rest from the demanding present, a permission to be in what is known. The roots, old friendships, the family of origin offer something solid. What comes from far away can help in understanding what is happening up close."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un reencuentro con alguien del pasado o una relación que retoma calor. En lo material, una ayuda familiar o un recurso heredado aparece.",
          en: "In love, a reunion with someone from the past or a relationship that warms again. Materially, family help or an inherited resource appears."
        },
        largo: {
          es: "Afectivamente, hay una relación que recupera intimidad después de distancia, o aparece alguien del pasado con quien hay historia. La nostalgia es bienvenida si no termina de reemplazar al presente. En lo financiero, llega ayuda desde el círculo cercano: familia, amistades de toda la vida, alguien que decide acompañar materialmente. Recibir desde ese lugar tiene la calidad de la continuidad familiar más que de la deuda.",
          en: "Emotionally, there is a relationship recovering intimacy after distance, or someone from the past appears with whom there is history. Nostalgia is welcome if it does not end up replacing the present. Financially, help arrives from the close circle: family, lifelong friendships, someone deciding to accompany materially. Receiving from that place has the quality of family continuity more than of debt."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La nostalgia se volvió refugio permanente. El presente queda en segundo plano.",
          en: "Nostalgia has become a permanent shelter. The present is left in the background."
        },
        largo: {
          es: "La carta invertida marca el momento donde mirar atrás dejó de ser descanso y se volvió evasión. Hay una atadura emocional con un pasado idealizado que impide habitar el presente. El pasado se recuerda con filtro: aparece dulce porque se omitieron sus partes duras. Avanzar requiere soltar la versión dorada para poder ver lo que hay frente a uno.",
          en: "Reversed, the card marks the moment where looking back stopped being rest and became evasion. There is an emotional tie to an idealized past that prevents inhabiting the present. The past is remembered with a filter: it appears sweet because its hard parts were omitted. Moving forward requires releasing the golden version to be able to see what is in front of you."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, vínculos viejos pesando más que los actuales. En lo material, autonomía que pide salir del nido familiar.",
          en: "In love, old bonds weighing more than current ones. Materially, an autonomy that asks for stepping out of the family nest."
        },
        largo: {
          es: "Afectivamente, hay una expareja, un primer amor o un vínculo idealizado bloqueando la posibilidad de querer en el presente. La comparación constante hace imposible que algo nuevo crezca. En lo financiero, hay una madurez material que pide independizarse: dejar la casa familiar, dejar de depender económicamente, asumir responsabilidades propias. El paso es incómodo y necesario.",
          en: "Emotionally, there is an ex, a first love, or an idealized bond blocking the possibility of loving in the present. The constant comparison makes it impossible for anything new to grow. Financially, there is a material maturity asking for independence: leaving the family home, ceasing to depend economically, taking on your own responsibilities. The step is uncomfortable and necessary."
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
        corto: {
          es: "Demasiadas opciones brillan al mismo tiempo. No todas las que parecen oro lo son.",
          en: "Too many options shine at the same time. Not everything that looks like gold is."
        },
        largo: {
          es: "Hay una multiplicidad de caminos disponibles y eso confunde más de lo que ayuda. La carta nombra el momento donde la fantasía gana terreno sobre la decisión concreta. Algunas opciones son reales y otras son proyecciones del deseo. Distinguir entre las dos pide pasar de la imaginación al examen.",
          en: "A multiplicity of paths is available and that confuses more than it helps. The card names the moment where fantasy gains ground over concrete decision. Some options are real and others are projections of desire. Distinguishing between the two requires moving from imagination to examination."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, varios candidatos posibles o una fantasía dominando lo real. En lo material, propuestas tentadoras que piden segundo análisis.",
          en: "In love, several possible candidates or a fantasy overriding the real. Materially, tempting proposals that ask for a second look."
        },
        largo: {
          es: "Afectivamente, hay una situación donde aparecen varios intereses al mismo tiempo, o donde el deseo está más en la imaginación que en la persona concreta. La idealización tapa lo que sí está disponible para tocar. En lo financiero, llegan ofertas y oportunidades atractivas, pero al menos una es ilusión. Antes de elegir, conviene ver cuál sostiene la mirada al mediodía.",
          en: "Emotionally, there is a situation where several interests appear at the same time, or where desire is more in the imagination than in the concrete person. Idealization hides what is actually available to touch. Financially, attractive offers and opportunities arrive, but at least one is illusion. Before choosing, it is worth seeing which one holds the gaze at noon."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La confusión empieza a despejarse. Una opción se distingue del resto.",
          en: "Confusion begins to clear. One option stands out from the rest."
        },
        largo: {
          es: "La carta invertida marca el paso de la fantasía a la decisión. Lo que era nube se vuelve dirección. Algo del exceso de posibilidades se ordena, y queda claro qué corresponde elegir. La voluntad recupera el control sobre lo imaginado.",
          en: "Reversed, the card marks the step from fantasy to decision. What was cloud becomes direction. Some of the excess possibility orders itself, and it becomes clear which one to choose. The will recovers control over what was imagined."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una elección clara entre varias posibilidades. En lo material, foco financiero recuperado.",
          en: "In love, a clear choice among several possibilities. Materially, financial focus recovered."
        },
        largo: {
          es: "Afectivamente, alguien decide cuál relación realmente quiere sostener, dejando atrás las fantasías paralelas. La claridad sobre lo que se busca atrae lo que corresponde. En lo financiero, una decisión postergada por exceso de opciones se concreta: una inversión elegida, una compra hecha, un proyecto al que se le da prioridad. La energía dispersa vuelve a ser productiva al concentrarse.",
          en: "Emotionally, someone decides which relationship they really want to sustain, leaving the parallel fantasies behind. Clarity about what is wanted attracts what corresponds. Financially, a decision postponed by excess of options takes shape: an investment chosen, a purchase made, a project given priority. The scattered energy becomes productive again by concentrating."
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
          en: "Something familiar asks to be left behind. The way out is available for whoever decides to take it."
        },
        largo: {
          es: "Hay un momento de despedida silenciosa: una situación, una etapa, un lugar emocional ya cumplió su función. La carta nombra el coraje de irse antes que el desgaste lo decida por uno. Lo que se construyó importa, y aún así no es razón suficiente para quedarse. El próximo capítulo pide espacio que solo se libera al soltar el anterior.",
          en: "There is a moment of quiet farewell: a situation, a stage, an emotional place has already fulfilled its function. The card names the courage to leave before exhaustion decides for you. What was built matters, and even so it is not reason enough to stay. The next chapter asks for space that only opens by releasing the previous one."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión de partir de algo que ya no nutre. En lo material, dejar atrás un trabajo o proyecto agotado.",
          en: "In love, a decision to leave something that no longer nourishes. Materially, leaving behind a worn-out job or project."
        },
        largo: {
          es: "Afectivamente, hay claridad sobre que una relación llegó a su fin, aunque haya sido buena. La decisión se toma con tristeza pero sin ambigüedad. En lo financiero, hay una renuncia en marcha: dejar un empleo estable que no satisface, cerrar un negocio que se sostuvo demasiado tiempo, soltar una inversión emocional que dejó de rendir. La pérdida material se compensa con recuperar la propia vida.",
          en: "Emotionally, there is clarity that a relationship has reached its end, even if it was a good one. The decision is made with sadness but without ambiguity. Financially, a resignation is underway: leaving a stable but unsatisfying job, closing a business sustained for too long, letting go of an emotional investment that stopped paying. The material loss is offset by recovering your own life."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay impulso de irse y algo aún retiene. La indecisión prolonga el desgaste.",
          en: "There is an impulse to leave and something still holds. Indecision prolongs the wear."
        },
        largo: {
          es: "La carta invertida marca el conflicto entre saber que hay que partir y no animarse. Lo familiar pesa más que el ánimo de cambio. La permanencia por miedo a lo desconocido tiene su propio costo, que se acumula sin nombre. La decisión postergada se vuelve más cara cada día que se posterga.",
          en: "Reversed, the card marks the conflict between knowing you have to leave and not daring to. The familiar weighs more than the courage to change. Staying out of fear of the unknown has its own cost, which accumulates without name. The postponed decision becomes more expensive every day it is postponed."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien sostiene una relación por miedo a estar solo. En lo material, alguien permanece en un trabajo agotador por seguridad.",
          en: "In love, someone sustains a relationship out of fear of being alone. Materially, someone remains in an exhausting job for security."
        },
        largo: {
          es: "Afectivamente, hay una relación que dejó de funcionar y que se sostiene por costumbre, miedo a empezar de nuevo, o pena del otro. Esa permanencia agota a las dos partes sin nombrarse. En lo financiero, hay un trabajo o emprendimiento del que se debería partir y se aplaza por la seguridad económica que ofrece. El precio de la estabilidad puede ser mayor al beneficio cuando se mide en bienestar.",
          en: "Emotionally, there is a relationship that stopped working and is held together by habit, fear of starting over, or pity for the other. That permanence exhausts both sides without being named. Financially, there is a job or venture that should be left, and is postponed for the economic security it offers. The price of stability can outweigh the benefit when measured in well-being."
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
        corto: {
          es: "Lo deseado encuentra cumplimiento. Hay satisfacción material y emocional disponible.",
          en: "What was wanted finds fulfillment. Material and emotional satisfaction is available."
        },
        largo: {
          es: "Es la carta del deseo cumplido. Algo que se buscaba con ganas llega y trae la sensación de estar bien. La abundancia presente pide ser registrada, agradecida, disfrutada. Antes de saltar al siguiente deseo, vale habitar este.",
          en: "This is the card of the wish fulfilled. Something pursued with desire arrives and brings the sense of being well. The abundance at hand asks to be registered, met with gratitude, enjoyed. Before jumping to the next wish, it is worth inhabiting this one."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una satisfacción profunda con la pareja o con el estado actual. En lo material, una recompensa concreta y bien recibida.",
          en: "In love, deep satisfaction with the partner or with the current state. Materially, a concrete and well-received reward."
        },
        largo: {
          es: "Afectivamente, una relación da exactamente lo que se esperaba: cariño, presencia, alegría compartida. La pareja se siente como hogar. En lo financiero, llega un fruto material concreto: aumento, bonus, venta, retorno de inversión. La sensación de tener lo necesario, y un poco más, se hace tangible. El placer del logro pide ser registrado antes de pensar en lo próximo.",
          en: "Emotionally, a relationship gives exactly what was hoped for: affection, presence, shared joy. The pair feels like home. Financially, a concrete material fruit arrives: a raise, a bonus, a sale, a return on investment. The sense of having what is needed, and a little more, becomes tangible. The pleasure of the achievement asks to be registered before thinking about the next thing."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Lo que parecía pleno tiene gusto a poco. Hay logros sin satisfacción real.",
          en: "What seemed full tastes thin. There are achievements without real satisfaction."
        },
        largo: {
          es: "La carta invertida marca el momento donde lo aparentemente bueno no llena. Las cajas están tachadas pero algo falta. La satisfacción material o externa no compensa una insatisfacción más profunda. Vale revisar qué deseo real está siendo confundido con el deseo cumplido.",
          en: "Reversed, the card marks the moment where what looks good does not fill. The boxes are checked but something is missing. Material or external satisfaction does not compensate for a deeper dissatisfaction. It is worth reviewing what real desire is being confused with the wish fulfilled."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja que en el papel funciona pero algo la limita. En lo material, una abundancia que no se traduce en bienestar.",
          en: "In love, a couple that works on paper but something limits it. Materially, an abundance that does not translate into well-being."
        },
        largo: {
          es: "Afectivamente, una relación tiene todos los componentes esperados (estabilidad, presencia, planes) y aún así falta algo: profundidad, complicidad, deseo. La conversación honesta sobre eso es lo que puede destrabar. En lo financiero, hay holgura material que no se traduce en sensación de seguridad: dinero ahorrado pero ansiedad alta, ingresos buenos pero sin sentido de propósito. Lo material por sí solo no resuelve lo que es falta interior.",
          en: "Emotionally, a relationship has all the expected components (stability, presence, plans) and yet something is missing: depth, complicity, desire. The honest conversation about it is what can unblock things. Financially, there is material ease that does not translate into a sense of security: money saved but high anxiety, good income but no sense of purpose. The material on its own does not resolve what is an inner lack."
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
          en: "A lasting emotional fullness. Happiness here is measured in relationships more than in achievements."
        },
        largo: {
          es: "La carta describe una armonía emocional plena, sostenida en el tiempo. Hay vínculos cercanos funcionando bien: pareja, familia, amistades elegidas. La sensación de pertenencia y de hogar se hace concreta. Esta plenitud tiene la cualidad de lo construido despacio y por eso es más estable que otras formas de éxito.",
          en: "The card describes a full emotional harmony, sustained over time. Close bonds are working well: a partner, family, chosen friendships. The sense of belonging and of home becomes concrete. This fullness has the quality of what was built slowly and is for that reason more stable than other forms of success."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación o familia en su mejor momento. En lo material, estabilidad compartida con quienes importan.",
          en: "In close ties, a relationship or family at its best. Materially, stability shared with those who matter."
        },
        largo: {
          es: "Afectivamente, hay una vida en pareja o en familia que da sentido a lo demás. La cotidianidad se vive con gratitud, las decisiones grandes se piensan juntas, hay proyecto común sostenido. En lo financiero, la estabilidad económica está al servicio del bienestar compartido: una casa, un viaje juntos, recursos para los hijos o para los seres queridos. La abundancia compartida pesa más que la abundancia solitaria.",
          en: "Emotionally, there is a life as a couple or as a family that gives meaning to the rest. The everyday is lived with gratitude, the big decisions are thought through together, there is a shared project held over time. Financially, economic stability is in the service of shared well-being: a home, a trip together, resources for the children or loved ones. Abundance shared weighs more than abundance alone."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La armonía familiar tiene grietas. Algo del proyecto compartido no funciona como muestra.",
          en: "The family harmony has cracks. Something in the shared project does not work as displayed."
        },
        largo: {
          es: "La carta invertida marca disonancia entre la imagen y la realidad. La familia parece bien por fuera y duele por dentro: tensiones no nombradas, expectativas frustradas, gente cumpliendo roles sin sentir lo que el rol pide. La diferencia entre lo que se proyecta y lo que se vive empieza a hacer ruido. Sanar pasa por reconocer la grieta antes de simular cohesión.",
          en: "Reversed, the card marks dissonance between the image and the reality. The family looks fine from outside and hurts inside: unnamed tensions, frustrated expectations, people fulfilling roles without feeling what the role asks. The difference between what is projected and what is lived starts making noise. Healing passes through recognizing the crack before simulating cohesion."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, conflicto familiar o de pareja que erosiona lo cotidiano. En lo material, disputas económicas dentro de la familia.",
          en: "In love, family or couple conflict that erodes the everyday. Materially, financial disputes within the family."
        },
        largo: {
          es: "Afectivamente, hay tensión sostenida en una pareja o en el grupo familiar: intervenciones de terceros, expectativas no acordadas, viejos resentimientos que reaparecen. La unidad pide ser defendida desde adentro. En lo financiero, hay disputas dentro del círculo cercano: una herencia, un préstamo familiar no devuelto, un negocio compartido con desacuerdos. Resolver requiere separar lo afectivo de lo material para poder mirar cada cosa con claridad.",
          en: "Emotionally, there is sustained tension in a couple or in the family group: outside interventions, unagreed expectations, old resentments resurfacing. The unity asks to be defended from within. Financially, there are disputes within the close circle: an inheritance, an unreturned family loan, a shared business with disagreements. Resolving requires separating the emotional from the material in order to look at each thing with clarity."
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
        corto: {
          es: "Llega un mensaje del lado emocional. Algo nuevo se abre en lo sensible.",
          en: "A message arrives from the emotional side. Something new opens on sensitive ground."
        },
        largo: {
          es: "Hay una sensibilidad recién despierta. Una idea creativa, una intuición sorpresiva, una emoción inesperada llega y pide atención. La carta describe la apertura curiosa al propio mundo interno, sin demanda de productividad. Lo que se siente sin nombrar bien está empezando a buscar forma.",
          en: "There is a newly awakened sensitivity. A creative idea, a surprising intuition, an unexpected emotion arrives and asks for attention. The card describes a curious opening to your own inner world, without a demand for productivity. What is felt without being named well is starting to look for form."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien joven o emocionalmente fresco entra en escena. En lo material, una propuesta inicial que nace del afecto.",
          en: "In close ties, someone young or emotionally fresh enters the scene. Materially, an initial proposal born of affection."
        },
        largo: {
          es: "Afectivamente, hay un encuentro con cualidad de ternura: una persona dulce, soñadora, en proceso de descubrimiento emocional. La intimidad se construye con paciencia y curiosidad mutua. En lo financiero, llega una propuesta o invitación nacida del afecto antes que del cálculo: un proyecto entre amigos, una invitación a colaborar, una idea pequeña con potencial creativo. Las cosas pequeñas también tienen su importancia.",
          en: "Emotionally, there is an encounter with the quality of tenderness: a sweet, dreamy person, in the process of emotional discovery. Intimacy is built with patience and mutual curiosity. Financially, a proposal or invitation arrives born of affection rather than calculation: a project among friends, an invitation to collaborate, a small idea with creative potential. Small things also have their weight."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Una emoción sin canalizar se desborda. Hay sensibilidad sin sostén.",
          en: "An unchanneled emotion spills over. There is sensitivity without ground to hold it."
        },
        largo: {
          es: "La carta invertida nombra una inmadurez emocional que se manifiesta en reacciones desproporcionadas. Hay creatividad atascada porque la inseguridad pesa más que la voluntad de crear. El mundo interno demanda atención sin saber cómo pedirla. Aprender a sostener lo sentido, sin descargarlo en otros, es el trabajo pendiente.",
          en: "Reversed, the card names an emotional immaturity expressed in disproportionate reactions. There is creativity stuck because insecurity weighs more than the will to create. The inner world demands attention without knowing how to ask. Learning to hold what is felt, without discharging it onto others, is the pending work."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien (propio u otro) reacciona con drama infantil. En lo material, una propuesta poco realista que requiere bajada a tierra.",
          en: "In love, someone (yours or another's) reacts with childlike drama. Materially, an unrealistic proposal that requires being grounded."
        },
        largo: {
          es: "Afectivamente, hay una persona en juego con dificultad para regular sus emociones: rabietas, escenas, sensibilidad herida fácilmente. La paciencia tiene límite. En lo financiero, llega una propuesta entusiasta que no resiste números: una idea apasionada sin plan concreto, una promesa sentida sin cálculo. Antes de comprometerse, conviene pedir el plan escrito.",
          en: "Emotionally, there is a person in play with difficulty regulating their emotions: tantrums, scenes, sensitivity easily wounded. Patience has a limit. Financially, an enthusiastic proposal arrives that does not hold up to numbers: a passionate idea without a concrete plan, a felt promise without calculation. Before committing, it is worth asking for the plan in writing."
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
        corto: {
          es: "Una propuesta romántica o creativa se acerca. La emoción busca expresión visible.",
          en: "A romantic or creative proposal is approaching. Emotion looks for visible expression."
        },
        largo: {
          es: "Hay un movimiento que viene desde el corazón hacia afuera: una invitación, una declaración, una propuesta hecha con intención. La carta describe el momento donde lo sentido se vuelve gesto. La cualidad del Caballero es ofrecer sin exigir respuesta inmediata. Lo que se acerca pide ser recibido con apertura, sin decidir todavía.",
          en: "There is a movement coming from the heart outward: an invitation, a declaration, a proposal made with intention. The card describes the moment where what is felt becomes gesture. The quality of the Knight is to offer without demanding immediate response. What approaches asks to be received with openness, without deciding yet."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una propuesta concreta o un romance con energía. En lo material, una oferta hecha con cuidado y carisma.",
          en: "In love, a concrete proposal or a romance with energy. Materially, an offer made with care and charisma."
        },
        largo: {
          es: "Afectivamente, llega una invitación clara: una declaración de amor, una propuesta de compromiso, alguien que acerca su intención sin juego. La sinceridad del gesto pide reciprocidad o respuesta honesta. En lo financiero, aparece una propuesta presentada con encanto: una oferta de trabajo cuidadosamente hecha, una invitación a sumarse a un proyecto. Lo que se ofrece tiene fondo más allá de la forma.",
          en: "Emotionally, a clear invitation arrives: a declaration of love, a proposal of commitment, someone bringing their intention without games. The sincerity of the gesture asks for reciprocity or an honest answer. Financially, a proposal appears presented with charm: a job offer carefully made, an invitation to join a project. What is offered has substance beyond the form."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Las palabras pesan más que las acciones. Hay encanto sin sustancia.",
          en: "Words weigh more than actions. There is charm without substance."
        },
        largo: {
          es: "La carta invertida nombra al seductor: alguien que dice todo lo que se quiere oír y entrega poco. La promesa es bonita y vacía. La capacidad de presentar bien se está usando para evitar el compromiso real. Distinguir gesto de palabra es la tarea aquí.",
          en: "Reversed, the card names the seducer: someone who says everything you want to hear and delivers little. The promise is pretty and empty. The skill of presenting well is being used to avoid real commitment. Distinguishing gesture from word is the task here."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien promete sin cumplir. En lo material, una oferta brillante que no resiste lectura cuidadosa.",
          en: "In love, someone promises without delivering. Materially, a brilliant offer that does not hold up to careful reading."
        },
        largo: {
          es: "Afectivamente, hay una persona (puede ser uno mismo) que acerca con palabras dulces sin respaldo: declaraciones grandes, planes vagos, ausencias en el momento concreto. Las acciones acumuladas dan más información que cualquier discurso. En lo financiero, una propuesta llega con presentación impecable y letra chica problemática: condiciones poco claras, retornos prometidos sin base, plazos elásticos. La regla es leer dos veces antes de firmar una.",
          en: "Emotionally, there is a person (it could be yourself) approaching with sweet words without backing: grand declarations, vague plans, absences at the concrete moment. Actions accumulated give more information than any speech. Financially, a proposal arrives with impeccable presentation and problematic fine print: unclear conditions, returns promised without basis, elastic deadlines. The rule is reading twice before signing once."
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
          en: "There is a capacity to hold emotionally, your own or someone close. Empathy is available and shows."
        },
        largo: {
          es: "La carta describe una madurez emocional funcionando bien. Hay capacidad para escuchar sin imponer, para acompañar sin invadir, para sentir profundo sin perderse. Esa cualidad atrae confianza desde otros y permite que cosas delicadas encuentren cauce. El trabajo pendiente es no agotarse en el cuidado de los demás.",
          en: "The card describes an emotional maturity working well. There is capacity to listen without imposing, to accompany without invading, to feel deeply without losing yourself. That quality attracts trust from others and lets delicate things find a channel. The pending work is not exhausting yourself in the care of others."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja o vínculo donde la sensibilidad se cuida mutuamente. En lo material, una decisión tomada con cabeza y corazón en proporción justa.",
          en: "In love, a couple or bond where sensitivity is mutually cared for. Materially, a decision made with head and heart in fair proportion."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde la profundidad emocional sostiene más que la pasión inicial. La intimidad se construye en escuchar y ser escuchado sin filtro. En lo financiero, hay decisiones tomadas considerando tanto los números como las personas: ayudar a un familiar con sentido, dar un préstamo donde corresponde, gastar en quien importa. Lo material al servicio del afecto se vuelve significativo.",
          en: "Emotionally, there is a bond where emotional depth holds more than initial passion. Intimacy is built in listening and being heard without filter. Financially, there are decisions made considering both the numbers and the people: helping a relative with sense, giving a loan where it corresponds, spending on those who matter. The material in service of affection becomes meaningful."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Las emociones desbordan o se usan para manipular. La sensibilidad perdió equilibrio.",
          en: "Emotions overflow or get used to manipulate. Sensitivity has lost its balance."
        },
        largo: {
          es: "La carta invertida nombra dos extremos posibles: o demasiada emoción que se descarga sobre otros, o emocionalidad usada como herramienta para conseguir. La empatía propia, exagerada, lleva a cargar lo que no es propio. Y la empatía instrumentalizada hiere a quien confía. Recuperar el centro pide diferenciar entre sentir y reaccionar.",
          en: "Reversed, the card names two possible extremes: either too much emotion discharged onto others, or emotionality used as a tool to get something. Your own empathy, exaggerated, leads to carrying what is not yours. And empathy turned into a tool wounds whoever trusts. Recovering the center asks for distinguishing between feeling and reacting."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un vínculo donde uno se vuelve terapeuta del otro. En lo material, gasto compulsivo por incomodidad emocional.",
          en: "In love, a bond where one becomes the therapist of the other. Materially, compulsive spending out of emotional discomfort."
        },
        largo: {
          es: "Afectivamente, hay una relación donde una parte sostiene emocionalmente a la otra sin reciprocidad. La carga acumulada agota a quien acompaña y no madura a quien recibe. En lo financiero, las emociones están guiando decisiones materiales sin filtro: compras impulsivas para calmar ansiedad, regalos costosos para tapar culpa, gastos hechos por incomodidad interna. La conciencia de la conexión emoción-gasto es ya parte de la solución.",
          en: "Emotionally, there is a relationship where one side holds the other emotionally without reciprocity. The accumulated load exhausts the one who accompanies and does not mature the one who receives. Financially, emotions are guiding material decisions without filter: impulsive purchases to calm anxiety, costly gifts to cover guilt, expenses made out of inner discomfort. Awareness of the emotion-spending connection is already part of the solution."
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
          en: "Calm holds while everything else stirs. Emotions are recognized and channeled."
        },
        largo: {
          es: "La carta describe una madurez emocional probada. Hay capacidad de mantener la cabeza fría en situaciones cargadas, sin que eso signifique desconectarse de lo que se siente. La diplomacia natural permite mediar entre partes en conflicto sin tomar posición precipitada. Esta calma viene de atravesar muchas tormentas y funciona como fundamento.",
          en: "The card describes a tested emotional maturity. There is a capacity to keep a cool head in charged situations, without disconnecting from what is felt. Natural diplomacy allows mediating between parties in conflict without taking a hasty side. This calm comes from crossing many storms and works as foundation."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja con diálogo maduro y mediación equilibrada. En lo material, decisiones financieras tomadas con cabeza fría y corazón presente.",
          en: "In love, a couple with mature dialogue and balanced mediation. Materially, financial decisions made with a cool head and a present heart."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde los conflictos se procesan con palabras más que con escenas. La capacidad de escuchar sin reaccionar permite resolver lo que en otros vínculos se atasca. En lo financiero, hay equilibrio entre el cálculo y el cuidado: inversiones pensadas, gastos justificados, decisiones que combinan rentabilidad con responsabilidad afectiva. Lo profesional y lo personal se manejan sin contradicción.",
          en: "Emotionally, there is a bond where conflicts get processed in words more than in scenes. The ability to listen without reacting allows resolving what would otherwise stay stuck. Financially, there is balance between calculation and care: thoughtful investments, justified spending, decisions combining profitability with emotional responsibility. The professional and the personal are handled without contradiction."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La calma esconde algo. Bajo la superficie hay emoción reprimida o usada para controlar.",
          en: "The calm hides something. Beneath the surface there is repressed emotion or emotion used to control."
        },
        largo: {
          es: "La carta invertida nombra el costo de la represión emocional sostenida. Lo que parece serenidad puede ser desconexión, y lo que parece equilibrio puede ser manipulación bien disfrazada. Las emociones embotelladas terminan saliendo de formas indirectas: pasividad agresiva, sarcasmo, retiros silenciosos. Reconectar con lo sentido honestamente es el trabajo aquí.",
          en: "Reversed, the card names the cost of sustained emotional repression. What looks like serenity may be disconnection, and what looks like balance may be well-disguised manipulation. Bottled emotions end up coming out in indirect ways: passive aggression, sarcasm, silent withdrawals. Reconnecting with what is felt honestly is the work here."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien controla la temperatura del vínculo a su antojo. En lo material, decisiones financieras tomadas con emoción reprimida que después estalla.",
          en: "In love, someone controls the temperature of the bond at will. Materially, financial decisions made with repressed emotion that later explodes."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte mantiene la calma de manera estratégica: usa el silencio como castigo, distribuye afecto a cuentagotas, hace sentir al otro responsable de la armonía. La diplomacia se transformó en herramienta de poder. En lo financiero, hay decisiones aparentemente racionales tomadas con emoción no procesada por debajo: gastos que después generan resentimiento, inversiones que después se reprochan, compromisos asumidos por culpa. Procesar la emoción antes de decidir cambia el resultado.",
          en: "Emotionally, there is a couple where one side keeps calm strategically: uses silence as punishment, doles out affection by drops, makes the other feel responsible for the harmony. Diplomacy has been turned into a tool of power. Financially, there are seemingly rational decisions made with unprocessed emotion underneath: spending that later breeds resentment, investments later regretted, commitments taken on out of guilt. Processing the emotion before deciding changes the outcome."
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
          en: "A creative spark is asking to be turned into action. Inspiration has arrived and is waiting for an answer."
        },
        largo: {
          es: "Hay un impulso nuevo que pide manifestarse. Una idea, un proyecto, una vocación que estaba latente encuentra su momento de salir. La carta nombra el momento donde el deseo se vuelve potencia disponible. Empezar pesa más que esperar a tener todo claro.",
          en: "There is a new impulse asking to manifest. An idea, a project, a calling that was latent finds its moment to come out. The card names the moment where desire becomes available power. Starting weighs more than waiting to have everything clear."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pasión se enciende y pide ser expresada. En lo material, una iniciativa o proyecto que vale arrancar.",
          en: "In love, a passion ignites and asks to be expressed. Materially, an initiative or project worth starting."
        },
        largo: {
          es: "Afectivamente, hay un encuentro con energía sexual y emocional fuerte: una atracción nueva, un romance que se reaviva, una chispa que cambia la dinámica. Lo material y lo carnal se mezclan sin pudor. En lo financiero, llega una oportunidad concreta: una propuesta de trabajo, una idea de negocio, un proyecto que pide ser empezado. La acción decidida multiplica más que el cálculo prolongado.",
          en: "Emotionally, there is an encounter with strong sexual and emotional energy: a new attraction, a romance reigniting, a spark that shifts the dynamic. The material and the carnal mix without shame. Financially, a concrete opportunity arrives: a job proposal, a business idea, a project asking to be started. Decided action multiplies more than prolonged calculation."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La chispa está pero algo la apaga. Hay impulso sin dirección, o ganas que no encuentran cauce.",
          en: "The spark is there but something dampens it. There is impulse without direction, or willingness that finds no channel."
        },
        largo: {
          es: "La inspiración existe pero se atasca antes de volverse acción. Hay falta de claridad sobre qué hacer con la energía disponible, o miedo a empezar y fracasar. Las ideas se acumulan sin que ninguna se concrete. Recuperar el impulso pide acción pequeña antes que plan grande.",
          en: "Inspiration exists but jams before becoming action. There is a lack of clarity about what to do with the available energy, or a fear of starting and failing. Ideas accumulate without any taking shape. Recovering the impulse asks for small action before big plan."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pasión que arde y se apaga rápido. En lo material, un proyecto entusiasta que pierde fuelle.",
          en: "In love, a passion that burns and goes out fast. Materially, an enthusiastic project that runs out of fuel."
        },
        largo: {
          es: "Afectivamente, hay una atracción intensa que probablemente no dura: química inmediata sin profundidad para sostener. La emoción del comienzo se confunde con compromiso real. En lo financiero, hay un proyecto o iniciativa que arrancó con fuerza y se quedó sin combustible: ideas sin ejecución, planes sin seguimiento, energía dispersa. Concretar lo que ya está empezado vale más que arrancar lo siguiente.",
          en: "Emotionally, there is an intense attraction that probably will not last: immediate chemistry without depth to hold it. The emotion of the beginning gets confused with real commitment. Financially, there is a project or initiative that started with force and ran out of fuel: ideas without execution, plans without follow-through, scattered energy. Bringing what is already started to completion is worth more than launching the next thing."
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
          en: "There is a map to draw and the view reaches far. Big decisions become possible from here."
        },
        largo: {
          es: "Hay un momento de planificación con perspectiva amplia. La carta describe a alguien con poder para decidir su próximo movimiento, viendo el campo entero. Las opciones están disponibles y la elección depende de la propia voluntad. Lo que se planifica con visión clara tiende a concretarse.",
          en: "There is a moment of planning with broad perspective. The card describes someone with the power to decide their next move, seeing the whole field. The options are available and the choice depends on your own will. What is planned with clear vision tends to take shape."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión de pareja sobre el rumbo a futuro. En lo material, una estrategia financiera de largo plazo en formación.",
          en: "In love, a couple's decision about the path ahead. Materially, a long-term financial strategy taking form."
        },
        largo: {
          es: "Afectivamente, hay una pareja considerando un paso grande: convivencia, mudanza, hijos, casamiento, separación. La conversación pide ser hecha con visión más allá de lo inmediato. En lo financiero, hay decisiones estratégicas en juego: inversión, cambio de carrera, compra grande, plan de jubilación. Las elecciones hechas con buena información cargan menos arrepentimiento.",
          en: "Emotionally, there is a couple considering a big step: living together, moving, children, marriage, separation. The conversation asks to be held with vision beyond the immediate. Financially, there are strategic decisions at stake: investment, career change, major purchase, retirement plan. Choices made with good information carry less regret."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El plan se atasca por miedo a comprometerse con una opción. La vista amplia se vuelve parálisis.",
          en: "The plan jams from fear of committing to one option. The broad view becomes paralysis."
        },
        largo: {
          es: "La carta invertida marca el bloqueo del estratega. Hay tantas opciones disponibles que ninguna termina de ser elegida, o hay miedo a perder lo conocido por algo nuevo. La planificación se vuelve excusa para no actuar. Salir del bucle pide elegir aunque la información sea imperfecta.",
          en: "Reversed, the card marks the strategist's block. There are so many options available that none gets chosen, or there is fear of losing the familiar for something new. Planning becomes an excuse not to act. Stepping out of the loop asks for choosing even when the information is imperfect."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión de pareja postergada por miedo. En lo material, una jugada financiera evitada por incertidumbre.",
          en: "In love, a couple's decision postponed out of fear. Materially, a financial play avoided out of uncertainty."
        },
        largo: {
          es: "Afectivamente, hay una pareja sabiendo que tiene que decidir un paso grande y postergándolo por meses o años. El miedo a equivocarse cuesta más que la decisión misma. En lo financiero, hay una jugada estratégica posible (inversión, mudanza laboral, emprendimiento) que se aplaza por excesiva precaución. La oportunidad pierde valor con cada semana de demora.",
          en: "Emotionally, there is a couple knowing they have to decide a big step and postponing it for months or years. The fear of getting it wrong costs more than the decision itself. Financially, there is a possible strategic play (an investment, a job move, a venture) postponed through excess caution. The opportunity loses value with every week of delay."
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
        corto: {
          es: "Una expansión está en marcha. Lo plantado empieza a dar resultado.",
          en: "An expansion is underway. What was planted begins to yield."
        },
        largo: {
          es: "La carta describe el momento donde la inversión inicial empieza a rendir. Hay barcos que vuelven, proyectos que despegan, esfuerzo previo que toma forma. La paciencia por sostener la espera se justifica. Lo que viene es más grande que lo que se esperaba.",
          en: "The card describes the moment where the initial investment begins to pay off. Ships are coming back, projects take off, prior effort takes form. The patience to sustain the wait is justified. What is coming is bigger than what was expected."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación lista para crecer. En lo material, una recompensa por trabajo invertido.",
          en: "In love, a relationship ready to grow. Materially, a reward for invested work."
        },
        largo: {
          es: "Afectivamente, hay un vínculo entrando en una nueva fase: convivencia, hijos, proyecto compartido más grande. La base construida sostiene lo que viene. En lo financiero, lo trabajado durante meses o años empieza a producir: ascenso, retorno de inversión, negocio que estabiliza, oportunidad internacional. La expansión pide aceptar que lo cómodo queda atrás.",
          en: "Emotionally, there is a bond entering a new phase: living together, children, a larger shared project. The built base sustains what comes. Financially, what was worked on for months or years begins to produce: a promotion, a return on investment, a business stabilizing, an international opportunity. The expansion asks for accepting that the comfortable is left behind."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La expansión esperada se demora. Los barcos no vuelven en el tiempo previsto.",
          en: "The expected expansion is delayed. The ships do not return on the planned schedule."
        },
        largo: {
          es: "La carta invertida nombra demoras frustrantes. Lo planificado no llega cuando debía, o llega menor de lo esperado. Hay falta de información sobre por qué algo no avanza, lo que aumenta la ansiedad. Mientras se espera, conviene revisar si el plan original aún tiene sentido o requiere ajuste.",
          en: "Reversed, the card names frustrating delays. What was planned does not arrive when it should, or arrives smaller than expected. There is a lack of information about why something is not advancing, which increases anxiety. While waiting, it is worth reviewing whether the original plan still makes sense or requires adjustment."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión postergada de común acuerdo se demora más. En lo material, retornos esperados que no llegan en el plazo.",
          en: "In love, a postponed decision by mutual agreement is delayed further. Materially, expected returns that do not arrive on time."
        },
        largo: {
          es: "Afectivamente, hay una pareja con planes (mudarse, casarse, viajar juntos) que se postergan por circunstancias externas: trabajo, dinero, familia, salud. La espera prueba la solidez del vínculo. En lo financiero, los proyectos lanzados con expectativa no rinden lo prometido en el plazo prometido: la venta no cierra, el cliente no paga, el negocio crece más lento. Sostener pide ajustar expectativas sin abandonar el plan.",
          en: "Emotionally, there is a couple with plans (moving, marrying, traveling together) postponed by outer circumstances: work, money, family, health. The wait tests the solidity of the bond. Financially, projects launched with expectation do not yield what was promised on the promised schedule: the sale does not close, the client does not pay, the business grows slower. Sustaining asks for adjusting expectations without abandoning the plan."
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
        corto: {
          es: "Una celebración del logro alcanzado. La estructura construida pide ser reconocida.",
          en: "A celebration of the achievement reached. The structure built asks to be recognized."
        },
        largo: {
          es: "La carta marca un hito festejado en compañía. Algo construido encuentra su forma estable y permite descansar. Las raíces están puestas, la casa funciona, el grupo cercano está. Esta solidez tiene peso real: funciona como base sobre la cual se construye lo siguiente.",
          en: "The card marks a milestone celebrated in company. Something built finds its stable form and allows rest. The roots are set, the house works, the close group is present. This solidity has real weight: it works as ground on which to build what comes next."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una unión celebrada con familia y amigos. En lo material, una estabilidad económica que permite generosidad.",
          en: "In love, a union celebrated with family and friends. Materially, an economic stability that allows generosity."
        },
        largo: {
          es: "Afectivamente, hay un paso grande que se da con respaldo del entorno: matrimonio, mudanza juntos, fiesta de aniversario, presentación pública de la pareja. El amor se vuelve también acto social. En lo financiero, hay holgura para invertir en seres queridos: regalos, comidas, ayuda concreta a la familia. Compartir lo logrado le da otra dimensión.",
          en: "Emotionally, there is a big step taken with the surrounding circle in support: marriage, moving in together, an anniversary party, the public presentation of the couple. Love also becomes a social act. Financially, there is room to invest in loved ones: gifts, meals, concrete help to the family. Sharing what was achieved gives it another dimension."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La celebración prometida no termina de llegar. Algo de la estructura no está tan firme como parece.",
          en: "The promised celebration does not quite arrive. Something in the structure is not as firm as it looks."
        },
        largo: {
          es: "La carta invertida nombra una dificultad para festejar: o el logro tiene asteriscos, o el grupo cercano no acompaña, o hay tensión en la base que se intenta tapar. La armonía pública oculta fricción privada. Mirar lo que se está evitando permite reparar antes de cerrar.",
          en: "Reversed, the card names a difficulty in celebrating: either the achievement has asterisks, or the close group does not accompany, or there is tension at the base that is being papered over. The public harmony hides private friction. Looking at what is being avoided allows repairing before closing."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, conflicto familiar cuando se trata de oficializar la pareja. En lo material, gastos de celebración que pesan más que el evento.",
          en: "In love, family conflict around making the relationship official. Materially, celebration expenses that weigh more than the event."
        },
        largo: {
          es: "Afectivamente, hay una pareja con tensión sobre cuándo o cómo dar el paso público: presentar a la familia, casarse, mudarse juntos. El miedo o la falta de acuerdo pesan más de lo que se nombra. En lo financiero, una celebración (boda, gran evento, fiesta importante) genera más estrés económico que disfrute. Conviene ajustar la escala antes que ceder a expectativas externas.",
          en: "Emotionally, there is a couple with tension about when or how to take the public step: introducing the family, marrying, moving in together. The fear or lack of agreement weighs more than what gets named. Financially, a celebration (a wedding, a major event, an important party) produces more economic stress than enjoyment. It is worth adjusting the scale before yielding to outside expectations."
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
        corto: {
          es: "Hay fricción en el aire. Cada parte defiende su posición sin escucharse del todo.",
          en: "There is friction in the air. Each side holds its ground without quite listening."
        },
        largo: {
          es: "La carta describe una situación de competencia o conflicto sin un ganador claro todavía. Múltiples fuerzas chocan al mismo tiempo y la energía se gasta en defenderse. El conflicto puede ser productivo si conduce a aclarar diferencias reales. Cuando solo es ruido, agota a todos por igual.",
          en: "The card describes a situation of competition or conflict with no clear winner yet. Multiple forces collide at the same time and energy gets spent on defense. The conflict can be productive when it leads to clarifying real differences. When it is only noise, it tires everyone equally."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, peleas pequeñas que se acumulan sin gran problema de fondo. En lo material, competencia laboral o disputas por recursos.",
          en: "In love, small fights pile up without a deeper problem behind them. Materially, workplace competition or disputes over resources."
        },
        largo: {
          es: "Afectivamente, hay desacuerdos repetidos sobre cosas chicas que tapan algo más grande sin nombrarse. El roce constante desgasta sin avanzar. En lo financiero, hay competencia con otros por un puesto, por un cliente, por un recurso compartido. La rivalidad puede empujar a hacer mejor el trabajo o puede consumir energía que serviría mejor en otra parte.",
          en: "Emotionally, repeated disagreements over small things hide something larger that goes unnamed. Constant friction wears people down without progress. Financially, there is competition with others for a position, for a client, for a shared resource. Rivalry can push the work to a higher level, or it can drain energy that would serve better elsewhere."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El conflicto baja de intensidad. Hay cansancio acumulado más que resolución verdadera.",
          en: "The conflict cools. There is accumulated fatigue more than real resolution."
        },
        largo: {
          es: "La carta invertida marca el final de una pelea, sea por agotamiento o por acuerdo. La energía gastada deja huella. Lo no resuelto queda guardado y puede reaparecer si no se conversa de fondo. La calma exterior puede ser real o solo aparente.",
          en: "Reversed, the card marks the end of a fight, whether by exhaustion or by agreement. The spent energy leaves a mark. What stays unresolved gets stored away and can resurface if the deeper conversation does not happen. Outer calm can be real or only apparent."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pelea sostenida termina por cansancio. En lo material, competencia laboral resuelta sin claridad sobre quién ganó qué.",
          en: "In love, a long fight ends by exhaustion. Materially, workplace competition settles without clarity about who won what."
        },
        largo: {
          es: "Afectivamente, hay una pareja saliendo de una racha de discusiones, con tregua pero sin profundización. Lo que generaba el roce sigue ahí debajo. En lo financiero, una competencia laboral o una disputa por recursos termina, pero las relaciones quedan tensas. Reparar los vínculos pesa tanto como ganar la disputa.",
          en: "Emotionally, a couple exits a stretch of arguments with a truce but no deeper change. What was causing the friction stays beneath. Financially, a workplace competition or a dispute over resources ends, but the relationships remain tense. Repairing the bonds weighs as much as winning the dispute."
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
        corto: {
          es: "El esfuerzo recibe reconocimiento. Lo logrado se vuelve público y celebrado.",
          en: "Effort receives recognition. What was achieved becomes public and celebrated."
        },
        largo: {
          es: "La carta marca el momento del triunfo visible. Lo trabajado durante tiempo es reconocido por otros, sea con un premio, un cargo, una palabra pública. La confianza en sí mismo se refuerza con esta validación. Vale registrar el momento sin dejar que el reconocimiento defina enteramente el valor propio.",
          en: "The card marks the moment of visible triumph. What was worked on for time is recognized by others, whether with a prize, a position, a public word. Self-confidence reinforces with this validation. It is worth registering the moment without letting recognition define your own worth entirely."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja celebrada por su entorno. En lo material, un logro profesional que recibe visibilidad.",
          en: "In love, a couple celebrated by the surrounding circle. Materially, a professional achievement that receives visibility."
        },
        largo: {
          es: "Afectivamente, hay una relación que recibe reconocimiento público o que se afirma en el entorno: presentación a la familia, anuncio de compromiso, validación social del vínculo. La pareja gana solidez al ser nombrada. En lo financiero, llega un ascenso, un premio, un reconocimiento profesional. El éxito tiene forma de aplauso, y eso vale registrar antes de pasar al siguiente desafío.",
          en: "Emotionally, there is a relationship receiving public recognition or affirming itself in the environment: presentation to the family, announcement of engagement, social validation of the bond. The couple gains solidity by being named. Financially, a promotion arrives, an award, a professional recognition. Success has the shape of applause, and that is worth registering before moving on to the next challenge."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El logro pasa sin reconocimiento. Hay esfuerzo invisible o expectativa frustrada de aprobación.",
          en: "The achievement passes without recognition. There is invisible effort or frustrated expectation of approval."
        },
        largo: {
          es: "La carta invertida marca el desencuentro entre lo logrado y el reconocimiento esperado. O el éxito no llega, o llega y nadie lo nota. La validación externa se vuelve más importante de lo saludable, generando frustración o resentimiento. La satisfacción interna es la que sostiene cuando la externa falla.",
          en: "Reversed, the card marks the mismatch between what was achieved and the expected recognition. Either success does not arrive, or it arrives and no one notices. External validation becomes more important than is healthy, producing frustration or resentment. Inner satisfaction is what sustains when the outer fails."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, sensación de no ser valorado por la pareja o el entorno. En lo material, un logro que pasa sin la recompensa esperada.",
          en: "In love, a sense of not being valued by the partner or the surroundings. Materially, an achievement that passes without the expected reward."
        },
        largo: {
          es: "Afectivamente, hay una persona en la relación que siente que da más de lo que recibe en reconocimiento. La gratitud que falta se vuelve resentimiento silencioso. En lo financiero, un trabajo bien hecho no recibe el aumento, el ascenso o la mención esperada. Pedir lo que corresponde sirve más que esperar a ser visto.",
          en: "Emotionally, there is a person in the relationship who feels they give more than they receive in recognition. The gratitude that is missing turns into silent resentment. Financially, a job well done does not receive the raise, the promotion, or the mention expected. Asking for what corresponds serves better than waiting to be seen."
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
        corto: {
          es: "Hay que defender la posición lograda. Otros la disputan y la postura propia pesa.",
          en: "The position achieved has to be defended. Others contest it and your own stance weighs."
        },
        largo: {
          es: "La carta describe el momento de aguantar bajo presión. Lo conseguido es atacado, criticado, puesto en duda. Sostener requiere coraje y claridad sobre por qué vale la pena. La defensa válida nace de la convicción más que de la terquedad.",
          en: "The card describes the moment of holding under pressure. What was achieved is attacked, criticized, called into question. Sustaining requires courage and clarity about why it is worth it. Valid defense is born of conviction more than of stubbornness."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, defender la pareja frente a interferencias externas. En lo material, defender una posición laboral o un proyecto bajo crítica.",
          en: "In love, defending the couple against outside interference. Materially, defending a job position or project under criticism."
        },
        largo: {
          es: "Afectivamente, hay una pareja que tiene que sostenerse contra opiniones externas: familia que no acepta, amistades que cuestionan, situaciones que prueban el vínculo. La defensa hecha de a dos refuerza la unión. En lo financiero, hay un proyecto, un puesto o una idea siendo cuestionada por colegas, jefes o competencia. Sostener la posición pide argumentos sólidos y paciencia para repetirlos.",
          en: "Emotionally, there is a couple having to hold against outside opinions: family that does not accept, friends who question, situations that test the bond. Defense done as two reinforces the union. Financially, there is a project, a position, or an idea being questioned by colleagues, bosses, or competition. Sustaining the position asks for solid arguments and patience to repeat them."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La defensa cansa. El terreno se va perdiendo o se está soltando por agotamiento.",
          en: "The defense tires. The ground is being lost or released through exhaustion."
        },
        largo: {
          es: "La carta invertida marca el momento donde la perseverancia se vuelve obstinación inútil. Defender una posición que ya no merece ser defendida desgasta sin propósito. A veces el cansancio es información: indica que la batalla equivocada se está peleando. Distinguir entre rendirse y soltar lo que ya no aporta es la decisión.",
          en: "Reversed, the card marks the moment where perseverance turns into useless stubbornness. Defending a position that no longer merits defense drains without purpose. Sometimes the fatigue is information: it indicates that the wrong battle is being fought. Distinguishing between giving up and releasing what no longer serves is the decision."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien deja de defender la relación frente a presiones. En lo material, abandono de un proyecto que requería más fuerza para ser defendido.",
          en: "In love, someone stops defending the relationship against pressure. Materially, the abandoning of a project that required more force to be defended."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una de las partes (o las dos) deja de pelear por el vínculo bajo la presión externa o interna. La rendición puede ser madura o prematura, depende del caso. En lo financiero, un proyecto, un puesto o una idea se abandona cuando defenderlos pesaba demasiado. Vale revisar después si la decisión fue de claridad o de agotamiento.",
          en: "Emotionally, there is a couple where one (or both) sides stop fighting for the bond under outside or inner pressure. The surrender may be mature or premature, depending on the case. Financially, a project, a position, or an idea is abandoned when defending them weighed too much. It is worth reviewing afterward whether the decision came from clarity or from exhaustion."
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
        corto: {
          es: "Las cosas se mueven rápido. Lo que tardaba empieza a avanzar con velocidad sorprendente.",
          en: "Things move fast. What was lagging begins to advance with surprising speed."
        },
        largo: {
          es: "La carta marca un momento de aceleración. Decisiones que estaban trabadas se destraban, mensajes que faltaban llegan, oportunidades aparecen casi simultáneamente. Hay que estar listo para responder al ritmo. Lo que se demora en agarrar se pierde rápido también.",
          en: "The card marks a moment of acceleration. Decisions that were stuck come unstuck, messages that were missing arrive, opportunities appear almost simultaneously. Being ready to respond at the pace matters. What takes too long to grab is lost just as quickly."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, comunicación intensa o un romance que avanza rápido. En lo material, noticias importantes o movimientos financieros veloces.",
          en: "In love, intense communication or a romance moving fast. Materially, important news or rapid financial moves."
        },
        largo: {
          es: "Afectivamente, hay una conversación que se reactiva, mensajes que vuelven después de silencio, un romance que pasa de cero a cien en pocos días. La velocidad es parte del encanto y del riesgo. En lo financiero, llegan noticias rápido: una oferta de trabajo, una respuesta esperada, un movimiento de mercado. Estar disponible para responder en plazos cortos hace la diferencia.",
          en: "Emotionally, there is a conversation reactivating, messages returning after silence, a romance going from zero to a hundred in a few days. The speed is part of the charm and of the risk. Financially, news arrives fast: a job offer, an awaited response, a market move. Being available to respond in short windows makes the difference."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El movimiento se traba. La comunicación se enreda y los mensajes se cruzan mal.",
          en: "The movement jams. Communication tangles and messages cross badly."
        },
        largo: {
          es: "La carta invertida marca el atasco después del momentum. Lo que iba rápido se demora, los mensajes se interpretan mal, las decisiones tomadas con prisa muestran sus errores. Hay sensación de impotencia frente al ritmo perdido. Vale recuperar el aire antes de seguir empujando contra la inercia.",
          en: "Reversed, the card marks the jam after the momentum. What was going fast slows down, messages get misinterpreted, decisions made in haste show their errors. There is a sense of helplessness in front of the lost rhythm. It is worth catching breath before continuing to push against the inertia."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, malentendidos por comunicación apurada. En lo material, decisiones financieras precipitadas que muestran su costo.",
          en: "In love, misunderstandings from rushed communication. Materially, hasty financial decisions showing their cost."
        },
        largo: {
          es: "Afectivamente, hay una pareja con malentendidos por mensajes mal interpretados, respuestas tardías o conversaciones inconclusas. La velocidad de los chats no compensa la falta de profundidad. En lo financiero, decisiones tomadas con apuro muestran sus huecos: un contrato firmado sin leer entero, una compra precipitada, una respuesta dada antes de pensar. Lo prudente es desacelerar para reparar.",
          en: "Emotionally, there is a couple with misunderstandings from misread messages, late responses, or unfinished conversations. The speed of chat does not compensate for the lack of depth. Financially, decisions made in haste show their gaps: a contract signed without being read in full, a rushed purchase, a response given before thinking. The prudent move is slowing down to repair."
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
          en: "What was achieved holds despite the fatigue. There is a tested resilience that endures one more effort."
        },
        largo: {
          es: "La carta describe a alguien que ha pasado por mucho y aún se mantiene en pie. El cansancio acumulado no apaga la determinación. La carta nombra esa cualidad de sostener cuando otros ya se rindieron. Lo que falta del camino es menos largo de lo que parece.",
          en: "The card describes someone who has been through much and is still standing. The accumulated fatigue does not put out determination. The card names that quality of holding when others have already given up. What remains of the road is shorter than it seems."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja que sobrevivió pruebas y se sostiene firme. En lo material, un proyecto que aguantó dificultades y está cerca de rendir.",
          en: "In love, a couple that survived trials and holds firm. Materially, a project that endured difficulties and is close to paying off."
        },
        largo: {
          es: "Afectivamente, hay un vínculo que pasó por turbulencia y emerge más sólido. La fidelidad probada vale más que la promesa fácil. En lo financiero, hay un trabajo, negocio o inversión que atravesó dificultades y aún se sostiene cerca de su recompensa. Falta menos camino del que el cansancio sugiere.",
          en: "Emotionally, there is a bond that passed through turbulence and emerges more solid. Tested fidelity weighs more than the easy promise. Financially, there is a job, business, or investment that crossed difficulties and still holds, close to its reward. There is less road left than the fatigue suggests."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La defensa se volvió desconfianza generalizada. Hay agotamiento que se disfraza de cautela.",
          en: "Defense has turned into generalized distrust. There is exhaustion disguised as caution."
        },
        largo: {
          es: "La carta invertida marca el costo emocional de tantas batallas. La persona desconfía hasta de quien ofrece ayuda, levanta muros donde no hace falta, ve amenaza en lo que es solo cercanía. La paranoia o la rigidez se justifican en la propia historia. Bajar la guardia con quien sí merece confianza es el trabajo aquí.",
          en: "Reversed, the card marks the emotional cost of so many battles. The person distrusts even those offering help, raises walls where none are needed, sees threat in what is only closeness. Paranoia or rigidity is justified in your own history. Lowering the guard with those who do deserve trust is the work here."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien levantó tantos muros que la cercanía no encuentra cómo entrar. En lo material, defensa exagerada de recursos por miedo a perderlos.",
          en: "In love, someone has raised so many walls that closeness cannot find a way in. Materially, exaggerated defense of resources out of fear of losing them."
        },
        largo: {
          es: "Afectivamente, hay una persona herida por relaciones anteriores que dificulta dejar entrar a quien podría querer en serio. La cautela que protegía empieza a aislar. En lo financiero, hay una avaricia defensiva: agarrar todo por miedo a la escasez, no compartir por temor a perder, no invertir por miedo a fracasar. La protección excesiva impide el crecimiento que sí está disponible.",
          en: "Emotionally, there is a person wounded by earlier relationships who finds it hard to let in someone who could love in earnest. The caution that protected begins to isolate. Financially, there is a defensive avarice: grabbing everything out of fear of scarcity, not sharing out of fear of losing, not investing out of fear of failing. Excessive protection prevents the growth that is available."
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
        corto: {
          es: "Hay demasiado peso encima. Lo logrado se volvió carga difícil de cargar solo.",
          en: "There is too much weight on top. What was achieved has become a load hard to carry alone."
        },
        largo: {
          es: "La carta describe a alguien cargando responsabilidades que excedieron lo manejable. El éxito mismo trajo más obligaciones de las anticipadas. Hay sensación de no poder bajar la guardia ni un momento. Aliviar empieza por reconocer cuánto se está cargando, antes de pedir ayuda o soltar lo que sobra.",
          en: "The card describes someone carrying responsibilities that have exceeded the manageable. Success itself brought more obligations than anticipated. There is a sense of not being able to lower the guard for a moment. Relief begins by recognizing how much is being carried, before asking for help or releasing what is excess."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona sostiene sola lo que debería ser compartido. En lo material, exceso de responsabilidades laborales o financieras.",
          en: "In love, a person sustains alone what should be shared. Materially, excess of work or financial responsibilities."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde una parte carga emocionalmente con todo: las preocupaciones, las decisiones, el trabajo doméstico, la planificación. El desbalance agota a quien sostiene y hace pasivo a quien no. En lo financiero, hay exceso de responsabilidades materiales: deudas múltiples, varios trabajos, presión por sostener a otros. El bienestar pide redistribuir o reducir antes que aguantar más.",
          en: "Emotionally, there is a bond where one side emotionally carries everything: the worries, the decisions, the housework, the planning. The imbalance exhausts the one who sustains and makes passive the one who does not. Financially, there is an excess of material responsibilities: multiple debts, several jobs, pressure to support others. Well-being asks for redistributing or reducing rather than enduring more."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Algo de la carga se suelta. Lo que no era propio empieza a ser devuelto.",
          en: "Some of the load is released. What was not yours begins to be given back."
        },
        largo: {
          es: "La carta invertida marca el alivio. Hay una decisión de dejar caer lo que se cargaba sin necesidad: una obligación asumida por compromiso, una culpa heredada, un proyecto que ya no compete. La liviandad recuperada permite ver con más claridad lo que sí toca cargar. La generosidad excesiva deja de ser virtud cuando enferma.",
          en: "Reversed, the card marks the relief. There is a decision to let drop what was being carried unnecessarily: an obligation taken on out of commitment, an inherited guilt, a project that no longer concerns you. Lightness recovered allows seeing more clearly what does need to be carried. Excessive generosity stops being a virtue when it makes you sick."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, redistribución de roles o pedido de ayuda concreta. En lo material, alivio financiero por delegar, vender o cerrar lo que pesaba.",
          en: "In love, redistribution of roles or a concrete request for help. Materially, financial relief through delegating, selling, or closing what was weighing."
        },
        largo: {
          es: "Afectivamente, hay una conversación necesaria sobre cómo se reparten cargas en una pareja o familia. Pedir ayuda funciona como redistribución necesaria del peso. En lo financiero, hay decisiones de reducir el peso material: cerrar un negocio que drenaba, vender una propiedad que costaba más mantener que vendiéndola, terminar un compromiso económico que no aporta. Soltar libera energía para lo que sí merece sostenerse.",
          en: "Emotionally, there is a necessary conversation about how loads get divided in a couple or family. Asking for help works as a necessary redistribution of weight. Financially, there are decisions to reduce the material load: closing a business that was draining, selling a property that cost more to keep than to sell, ending an economic commitment that does not contribute. Letting go releases energy for what does deserve to be sustained."
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
          en: "A new idea or proposal enters with enthusiasm. There is desire to explore what is not yet mapped."
        },
        largo: {
          es: "La carta describe una energía juvenil dispuesta a probar. Una idea, un proyecto, una invitación llega con cualidad de aventura. Falta experiencia y sobra entusiasmo. Lo que se intenta aquí, sin garantías, abre caminos que la cautela bloquearía.",
          en: "The card describes a youthful energy ready to try. An idea, a project, an invitation arrives with the quality of adventure. Experience is missing and enthusiasm overflows. What gets attempted here, without guarantees, opens paths that caution would block."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien con espíritu libre y curioso entra en escena. En lo material, una propuesta nueva con potencial pero sin trayectoria probada.",
          en: "In close ties, someone with a free and curious spirit enters the scene. Materially, a new proposal with potential but without a proven track record."
        },
        largo: {
          es: "Afectivamente, hay un encuentro con cualidad exploratoria: alguien aventurero, juguetón, con energía joven independientemente de su edad. La intensidad inicial puede sostenerse o desinflarse, depende. En lo financiero, llega una propuesta de proyecto, emprendimiento o cambio de rumbo con mucha promesa y poca historia. Vale arriesgar algo, sin apostar todo.",
          en: "Emotionally, there is an encounter with an exploratory quality: someone adventurous, playful, with youthful energy regardless of their age. The initial intensity may sustain itself or deflate, depending. Financially, a project proposal, a venture, or a change of course arrives with much promise and little history. It is worth risking something, without betting everything."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El entusiasmo se dispersa antes de llegar a hacer algo. Hay impaciencia que sabotea su propio interés.",
          en: "The enthusiasm scatters before getting anything done. There is impatience sabotaging its own interest."
        },
        largo: {
          es: "La carta invertida nombra una energía sin foco. Las ideas se acumulan, los proyectos se empiezan y se abandonan, el entusiasmo se gasta antes de la primera ejecución. Falta paciencia para sostener lo iniciado. Aprender a terminar lo que se empieza es el trabajo pendiente.",
          en: "Reversed, the card names an unfocused energy. Ideas accumulate, projects get started and abandoned, enthusiasm gets spent before the first execution. Patience to sustain what was begun is missing. Learning to finish what is begun is the pending work."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien que enamora rápido y huye más rápido. En lo material, una propuesta entusiasta sin sustento concreto.",
          en: "In love, someone who falls in love fast and flees faster. Materially, an enthusiastic proposal without concrete support."
        },
        largo: {
          es: "Afectivamente, hay una persona (puede ser uno mismo) con dificultad para sostener compromiso: enamoramientos breves, abandonos sin explicación, intensidad que se evapora. La paciencia encuentra mejor pareja en otro lado. En lo financiero, una propuesta llega con presentación entusiasta pero sin números, sin plan, sin trayectoria. Antes de comprometer dinero, conviene pedir lo concreto.",
          en: "Emotionally, there is a person (it could be yourself) with difficulty in sustaining commitment: brief infatuations, unexplained disappearances, intensity that evaporates. Patience finds a better partner elsewhere. Financially, a proposal arrives with enthusiastic presentation but without numbers, without a plan, without a track record. Before committing money, it is worth asking for the concrete."
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
        corto: {
          es: "Hay un avance decidido y rápido. La energía pone manos a la obra sin demoras.",
          en: "There is a decided and fast advance. Energy gets to work without delay."
        },
        largo: {
          es: "La carta describe acción decidida con carisma. Alguien (uno mismo o cercano) lanza un proyecto, lidera una iniciativa, pone el cuerpo en lo que cree. La velocidad y la confianza atraen a otros. Lo único que falta es alguien que pondere si hace falta más cálculo antes de avanzar.",
          en: "The card describes decided action with charisma. Someone (yourself or someone close) launches a project, leads an initiative, puts the body into what they believe. Speed and confidence attract others. The only thing missing is someone who weighs whether more calculation is needed before moving forward."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, un romance pasional o una declaración audaz. En lo material, acción decidida en negocios o proyectos.",
          en: "In love, a passionate romance or a daring declaration. Materially, decided action in business or projects."
        },
        largo: {
          es: "Afectivamente, hay una atracción intensa que se traduce en acción rápida: alguien declara, propone, cambia su vida por la otra persona. La pasión se nota. En lo financiero, hay alguien tomando riesgos calculados con energía: un emprendimiento lanzado, un cambio de país, una inversión audaz. La fortuna favorece la acción decidida si la información es razonable.",
          en: "Emotionally, there is an intense attraction that translates into rapid action: someone declares, proposes, changes their life for the other person. Passion shows. Financially, there is someone taking calculated risks with energy: a venture launched, a move abroad, a daring investment. Fortune favors decided action when the information is reasonable."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La acción se vuelve impulso ciego. Hay velocidad sin dirección, o agresividad disfrazada de coraje.",
          en: "Action becomes blind impulse. There is speed without direction, or aggression disguised as courage."
        },
        largo: {
          es: "La carta invertida marca el costo del impulso sin freno. Decisiones tomadas en caliente que después generan arrepentimiento, palabras dichas en enojo que dañan vínculos, proyectos lanzados sin plan que se estrellan. La energía existe pero falta gobierno propio. Bajar la velocidad, una vez, antes de actuar cambia el resultado.",
          en: "Reversed, the card marks the cost of unbraked impulse. Decisions made hot that later breed regret, words said in anger that damage bonds, projects launched without a plan that crash. The energy exists but self-governance is missing. Slowing down once before acting changes the outcome."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pasión que arrasa con todo y se va igual de rápido. En lo material, decisiones impulsivas con consecuencias visibles.",
          en: "In love, a passion that sweeps through everything and leaves just as fast. Materially, impulsive decisions with visible consequences."
        },
        largo: {
          es: "Afectivamente, hay una persona (o uno mismo) que entra en relaciones con intensidad y se va con la misma fuerza, dejando promesas incumplidas. La pasión sin compromiso lastima a los dos. En lo financiero, hay decisiones tomadas sin pensar: una renuncia abrupta, una compra grande sin consultar, un negocio iniciado sin planificación. Reparar el desorden cuesta más tiempo que el ahorrado por actuar rápido.",
          en: "Emotionally, there is a person (or yourself) who enters relationships with intensity and leaves with the same force, leaving broken promises. Passion without commitment hurts both. Financially, there are decisions made without thinking: an abrupt resignation, a big purchase without consulting, a business started without planning. Repairing the disorder costs more time than was saved by acting quickly."
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
        corto: {
          es: "Hay carisma y voluntad funcionando juntos. La presencia propia abre puertas sin esfuerzo.",
          en: "Charisma and will work together. Your own presence opens doors without effort."
        },
        largo: {
          es: "La carta describe a alguien con magnetismo natural y propósito claro. La energía propia atrae oportunidades, gente, posibilidades, simplemente por mostrarse como se es. Hay independencia que no necesita aprobación externa. Lo que esta cualidad pide cuidar es no usarse para abrumar a quienes son más callados.",
          en: "The card describes someone with natural magnetism and clear purpose. Your own energy attracts opportunities, people, possibilities, simply by showing up as you are. There is an independence that does not need outside approval. What this quality asks for in return is not using itself to overwhelm those who are quieter."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona segura de sí que atrae sin esfuerzo. En lo material, decisiones financieras tomadas con confianza y buen criterio.",
          en: "In love, a self-assured person who attracts without effort. Materially, financial decisions made with confidence and good judgment."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde una parte (o las dos) aporta calidez, decisión y carisma. La pareja funciona porque ninguna se anula a la otra. En lo financiero, hay manejo confiado de los recursos: decisiones tomadas con criterio, inversiones evaluadas, oportunidades aprovechadas. La intuición sobre dinero está bien calibrada y vale escucharla.",
          en: "Emotionally, there is a bond where one side (or both) brings warmth, decisiveness, and charisma. The pair works because neither cancels the other. Financially, there is confident handling of resources: decisions made with judgment, investments evaluated, opportunities taken. Intuition about money is well calibrated and worth listening to."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La confianza se volvió arrogancia. La intensidad propia empieza a quemar a los demás.",
          en: "Confidence has turned to arrogance. Your own intensity begins to burn others."
        },
        largo: {
          es: "La carta invertida marca el desbalance entre seguridad y consideración. Hay alguien (uno mismo o cercano) imponiéndose donde debería escuchar, exigiendo donde debería pedir, dominando donde debería compartir. La fuerza personal se está usando para anular a otros. La inseguridad bajo la apariencia de fuerza es la raíz que pide ser mirada.",
          en: "Reversed, the card marks the imbalance between confidence and consideration. There is someone (yourself or someone close) imposing where they should listen, demanding where they should ask, dominating where they should share. Personal strength is being used to cancel others. The insecurity beneath the appearance of strength is the root that asks to be looked at."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, celos posesivos o exigencia desmedida. En lo material, decisiones financieras tomadas con orgullo en vez de criterio.",
          en: "In love, possessive jealousy or excessive demand. Materially, financial decisions made out of pride rather than judgment."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte demanda atención permanente, controla movimientos, marca celos donde no toca. La inseguridad se traduce en posesividad. En lo financiero, hay decisiones materiales tomadas para demostrar (consumo conspicuo, gastos para impresionar) en lugar de para servir el plan real. El reconocimiento externo cuesta caro cuando se compra.",
          en: "Emotionally, there is a couple where one side demands permanent attention, controls movements, marks jealousy where there is no place for it. Insecurity translates into possessiveness. Financially, there are material decisions made to demonstrate (conspicuous consumption, spending to impress) rather than to serve the real plan. External recognition is expensive when bought."
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
          en: "There is capacity to lead and to bring your own idea into reality. Vision translates into concrete action."
        },
        largo: {
          es: "La carta describe a un líder maduro: alguien que ve hacia dónde ir y sabe cómo movilizar recursos para llegar. La autoridad acá viene de la experiencia probada. Otros se suman porque confían en el rumbo. Lo que pide cuidar es sostener tanto el plan como la ejecución.",
          en: "The card describes a mature leader: someone who sees where to go and knows how to mobilize resources to get there. The authority here comes from tested experience. Others join because they trust the course. What it asks for in return is sustaining both the plan and the execution."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja donde una parte sostiene visión de largo plazo. En lo material, una iniciativa empresarial o profesional bien ejecutada.",
          en: "In love, a couple where one side carries long-term vision. Materially, an entrepreneurial or professional initiative well executed."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde alguien aporta dirección y proyecto a largo plazo. La pareja funciona porque hay un horizonte compartido y alguien dispuesto a trabajarlo. En lo financiero, hay un proyecto, negocio o carrera siendo llevado adelante con liderazgo y visión. La autoridad propia se ejerce con responsabilidad. Lo que se construye con esta energía suele perdurar.",
          en: "Emotionally, there is a bond where someone brings direction and long-term project. The couple works because there is a shared horizon and someone willing to work it. Financially, there is a project, business, or career being carried forward with leadership and vision. Your own authority is exercised with responsibility. What is built with this energy tends to last."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El liderazgo se volvió autoritarismo. Hay imposición donde debería haber escucha.",
          en: "Leadership has turned to authoritarianism. There is imposition where there should be listening."
        },
        largo: {
          es: "La carta invertida marca el abuso de poder. Lo que era visión se transformó en imposición de criterio único, lo que era confianza se volvió arrogancia, lo que era acción se volvió atropello. Otros se alejan, los proyectos pierden gente clave, las decisiones empiezan a tomarse en soledad cada vez más estrecha. Recuperar el balance pide volver a escuchar antes que decidir.",
          en: "Reversed, the card marks the abuse of power. What was vision turned into the imposition of a single judgment, what was confidence turned to arrogance, what was action turned to running over. Others step away, the projects lose key people, decisions start being made in increasingly narrow solitude. Recovering the balance asks for returning to listening before deciding."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja donde uno impone su agenda sin consultar. En lo material, decisiones empresariales tomadas con arrogancia que costaron oportunidades.",
          en: "In love, a couple where one imposes their agenda without consulting. Materially, business decisions made with arrogance that cost opportunities."
        },
        largo: {
          es: "Afectivamente, hay una persona (o uno mismo) acostumbrada a decidir por dos, marcar el ritmo, definir prioridades sin consultar. La pareja se vuelve subordinación. En lo financiero, hay decisiones de negocio o carrera tomadas con tanta confianza que se ignoraron señales: una sociedad mal evaluada, una expansión sin pruebas, un cambio de rumbo desoyendo asesores. La humildad de revisar lo que no funcionó es la salida.",
          en: "Emotionally, there is a person (or yourself) accustomed to deciding for two, setting the pace, defining priorities without consulting. The couple becomes subordination. Financially, there are business or career decisions made with such confidence that signs were ignored: a badly evaluated partnership, an expansion without testing, a course change ignoring advisors. The humility of reviewing what did not work is the way out."
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
        corto: {
          es: "Una claridad mental rompe la confusión. Lo que estaba turbio se vuelve nítido.",
          en: "A mental clarity cuts through the confusion. What was murky becomes sharp."
        },
        largo: {
          es: "La carta nombra un momento de quiebre intelectual. Una verdad que estaba cubierta sale a la luz, una decisión que pedía ser tomada se vuelve obvia. La mente corta lo accesorio y deja ver lo esencial. Esta lucidez tiene cualidad de filo: pesa, pero abre camino.",
          en: "The card names a moment of intellectual breakthrough. A truth that was covered comes to light, a decision that was asking to be made becomes obvious. The mind cuts what is incidental and lets the essential show. This lucidity has the quality of a blade: it weighs, but it opens the road."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una conversación honesta destraba lo que estaba enredado. En lo material, una decisión financiera tomada con cabeza fría.",
          en: "In love, an honest conversation unblocks what was tangled. Materially, a financial decision made with a cool head."
        },
        largo: {
          es: "Afectivamente, hay una conversación necesaria que destraba lo que el silencio enredaba: la verdad dicha bien duele menos que la incertidumbre prolongada. En lo financiero, hay una decisión que pide racionalidad por encima del sentimiento: un préstamo a un familiar, una sociedad con un amigo, una compra grande. La regla acá es escuchar la cabeza antes que el corazón. La claridad ahorra problemas que después cuestan caros.",
          en: "Emotionally, there is a necessary conversation that unties what silence was tangling: the truth told well hurts less than prolonged uncertainty. Financially, there is a decision asking for rationality over sentiment: a loan to a relative, a partnership with a friend, a major purchase. The rule here is listening to the head before the heart. Clarity saves problems that later turn expensive."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Hay confusión mental o palabras que cortaron donde no deberían. La claridad se vuelve agresividad.",
          en: "There is mental confusion or words that cut where they should not have. Clarity has turned to aggression."
        },
        largo: {
          es: "La carta invertida nombra el filo usado mal. Las decisiones tomadas con la cabeza demasiado caliente, las palabras dichas con tono cortante, los argumentos lanzados para herir más que para aclarar. Falta información, o sobra ego en la forma de plantearla. Bajar el ritmo y revisar antes de hablar evita rupturas innecesarias.",
          en: "Reversed, the card names the blade used badly. Decisions made with the head too hot, words said in a cutting tone, arguments thrown to wound more than to clarify. Information is missing, or there is too much ego in the way of putting it. Slowing down and reviewing before speaking prevents unnecessary ruptures."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pelea verbal donde las palabras hicieron más daño del necesario. En lo material, decisiones tomadas con información incompleta o sesgada.",
          en: "In love, a verbal fight where words did more damage than was necessary. Materially, decisions made on incomplete or biased information."
        },
        largo: {
          es: "Afectivamente, hay una discusión donde se dijeron cosas que después cuesta retirar. La razón puede tener razón sin tener tacto. En lo financiero, hay decisiones tomadas sin leer toda la letra: contratos firmados sin entender, acuerdos cerrados sin consultar, números asumidos sin verificar. Volver a revisar lo firmado y aclarar lo dudoso antes de seguir es lo prudente.",
          en: "Emotionally, there is an argument where things were said that are hard to take back. Reason can be right without being tactful. Financially, there are decisions made without reading the full text: contracts signed without understanding, agreements closed without consulting, numbers assumed without verifying. Going back to review what was signed and clarifying the doubts before continuing is the prudent move."
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
          en: "A decision is blocked because both options cost. Keeping the eyes closed is no longer possible."
        },
        largo: {
          es: "La carta describe una situación de impasse. Dos fuerzas chocan y la persona en el medio elige no elegir, pensando que así evita el costo. La parálisis tiene su propio precio: el tiempo decide por uno cuando uno no decide. Aceptar que cualquier elección implica perder algo es el primer paso para hacerla.",
          en: "The card describes an impasse. Two forces clash and the person in the middle chooses not to choose, thinking that avoids the cost. Paralysis has its own price: time decides for you when you do not. Accepting that any choice means losing something is the first step toward making it."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una decisión postergada en pareja por miedo a herir. En lo material, una elección entre dos opciones financieras, ambas con costo.",
          en: "In love, a couple's decision postponed out of fear of hurting. Materially, a choice between two financial options, both with cost."
        },
        largo: {
          es: "Afectivamente, hay una decisión que dos personas saben que tienen que tomar y postergan: separarse, comprometerse, mudarse, dejar de mudarse. El silencio cómodo se vuelve cárcel. En lo financiero, hay dos opciones disponibles y elegir una significa renunciar a la otra: un trabajo nuevo o el actual, una compra o el ahorro, una inversión o otra. La indecisión cuesta el costo de oportunidad de las dos.",
          en: "Emotionally, there is a decision two people know they have to make and keep postponing: separating, committing, moving, not moving. The comfortable silence becomes a cell. Financially, two options are available and choosing one means giving up the other: a new job or the current one, a purchase or savings, one investment or another. Indecision costs the opportunity cost of both."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La venda se cae. La verdad que se evitaba se vuelve visible.",
          en: "The blindfold falls. The truth that was being avoided becomes visible."
        },
        largo: {
          es: "La carta invertida marca el momento donde el bloqueo se rompe. Lo que se evitaba mirar se hace ineludible, y la decisión pendiente se concreta. Puede haber tensión al aceptar la realidad después de tanto tiempo en negación. La claridad recuperada permite avanzar, aunque sea hacia un camino incómodo.",
          en: "Reversed, the card marks the moment where the block breaks. What was being avoided becomes unavoidable, and the pending decision takes shape. There may be tension in accepting reality after so much time in denial. The clarity recovered allows moving forward, even toward an uncomfortable path."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una verdad sale a la luz y reordena la pareja. En lo material, una decisión financiera bloqueada se concreta.",
          en: "In love, a truth surfaces and rearranges the couple. Materially, a blocked financial decision takes shape."
        },
        largo: {
          es: "Afectivamente, lo no dicho se nombra finalmente: una infidelidad reconocida, una decisión de separación o compromiso tomada, una expectativa puesta sobre la mesa. La conversación duele y al mismo tiempo libera. En lo financiero, una decisión postergada se toma: vender la propiedad, aceptar la oferta, terminar la sociedad. Lo que estaba congelado vuelve a moverse.",
          en: "Emotionally, what was unsaid finally gets named: an infidelity acknowledged, a decision of separation or commitment made, an expectation put on the table. The conversation hurts and at the same time releases. Financially, a postponed decision gets made: selling the property, accepting the offer, ending the partnership. What was frozen begins to move again."
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
        corto: {
          es: "Hay dolor real, no exagerado. Una herida atraviesa el centro y pide ser sentida.",
          en: "There is real pain, not exaggerated. A wound crosses the center and asks to be felt."
        },
        largo: {
          es: "La carta nombra el dolor sin disfraz. Una pérdida, una traición, una verdad dura está atravesando lo emocional. El sufrimiento es legítimo y la carta no pide minimizarlo. Atravesarlo despacio, sin huida, es lo que permite que cure en su tiempo.",
          en: "The card names pain without disguise. A loss, a betrayal, a hard truth is crossing the emotional ground. The suffering is legitimate and the card does not ask to minimize it. Crossing it slowly, without flight, is what allows it to heal in its own time."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una traición o ruptura que duele profundo. En lo material, una pérdida económica que llega con peso emocional.",
          en: "In love, a betrayal or breakup that hurts deeply. Materially, an economic loss arriving with emotional weight."
        },
        largo: {
          es: "Afectivamente, hay una traición confirmada, una infidelidad, una ruptura inesperada, o el final doloroso de un vínculo importante. El dolor es proporcional a lo que el vínculo significaba. En lo financiero, una pérdida material golpea también lo emocional: un divorcio que parte bienes, un negocio que cae, una expectativa de herencia que no se cumple. Hay que sentir lo que duele antes de tomar las próximas decisiones.",
          en: "Emotionally, there is a confirmed betrayal, an infidelity, an unexpected breakup, or the painful end of an important bond. The pain is proportional to what the bond meant. Financially, a material loss strikes the emotional as well: a divorce that splits assets, a business that falls, an inheritance expectation unfulfilled. Feeling what hurts comes before making the next decisions."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La herida empieza a curar. El dolor sigue ahí pero ya no domina la mirada.",
          en: "The wound begins to heal. The pain is still there but no longer dominates the gaze."
        },
        largo: {
          es: "La carta invertida marca el comienzo de la cicatrización. La pena baja de intensidad sin desaparecer del todo. Si el duelo se está procesando bien, hay una integración paulatina del aprendizaje. Si se está reprimiendo, lo guardado puede reaparecer en otros vínculos hasta que se dé el espacio para sentirlo.",
          en: "Reversed, the card marks the start of scarring. The grief lowers in intensity without disappearing entirely. If the mourning is being processed well, there is a gradual integration of the lesson. If it is being repressed, what is held back can resurface in other bonds until space is made to feel it."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una herida vieja se va integrando. En lo material, recuperación lenta después de una pérdida.",
          en: "In love, an old wound is being integrated. Materially, slow recovery after a loss."
        },
        largo: {
          es: "Afectivamente, hay una persona saliendo de una traición o ruptura, con cicatrices visibles. La capacidad de confiar de nuevo se reconstruye despacio. En lo financiero, una pérdida material pasada empieza a quedar atrás: el divorcio se zanja, las deudas se reordenan, los proyectos vuelven a moverse. Tomar lo aprendido del golpe sirve para no volver a caer en lo mismo.",
          en: "Emotionally, there is a person coming out of a betrayal or breakup, with visible scars. The capacity to trust again rebuilds slowly. Financially, a past material loss begins to be left behind: the divorce gets settled, the debts get reordered, the projects move again. Taking what was learned from the blow helps you avoid falling into the same again."
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
        corto: {
          es: "Hay que parar antes de seguir. La pausa es parte del trabajo.",
          en: "Stopping has to come before continuing. The pause is part of the work."
        },
        largo: {
          es: "La carta describe un retiro necesario. Después de mucho movimiento, el cuerpo y la mente piden silencio. La carta sugiere descanso real, sin continuar con menos intensidad. Lo que se intente hacer sin recuperarse primero saldrá peor de lo que merece.",
          en: "The card describes a necessary retreat. After much movement, the body and mind ask for silence. The card suggests real rest, not continuing at lower intensity. What gets attempted without recovering first will come out worse than it deserves."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja necesita espacio individual para volver a encontrarse. En lo material, una pausa estratégica antes de la siguiente jugada.",
          en: "In love, a couple needs individual space to find each other again. Materially, a strategic pause before the next play."
        },
        largo: {
          es: "Afectivamente, hay una pareja que se beneficia de un poco de distancia: vacaciones, fines de semana solos, espacio para procesar individual. La intimidad se renueva al darse aire. En lo financiero, hay un momento donde lo prudente es no hacer nada nuevo: pausar inversiones, no tomar decisiones grandes, dejar que la situación se asiente. La quietud estratégica vale tanto como la acción.",
          en: "Emotionally, there is a couple that benefits from some distance: vacations, weekends apart, space to process individually. Intimacy renews itself when given air. Financially, there is a moment where the prudent move is doing nothing new: pausing investments, not making big decisions, letting the situation settle. Strategic stillness is worth as much as action."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El descanso no llega aunque hace falta. La inquietud propia bloquea la recuperación.",
          en: "Rest does not arrive even when needed. Your own restlessness blocks the recovery."
        },
        largo: {
          es: "La carta invertida marca la dificultad para parar. Hay urgencia interna de seguir produciendo, decidiendo, moviéndose, aunque el cuerpo y la mente pidan tregua. La inquietud se confunde con productividad. Sin pausa, los errores y el agotamiento se acumulan hasta forzar la pausa de manera más cara.",
          en: "Reversed, the card marks the difficulty of stopping. There is inner urgency to keep producing, deciding, moving, even when the body and mind ask for a truce. Restlessness gets confused with productivity. Without pause, errors and exhaustion accumulate until they force a more expensive pause."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien empuja al otro sin respetar su necesidad de espacio. En lo material, decisiones tomadas en agotamiento que costaron.",
          en: "In love, someone pushes the other without respecting their need for space. Materially, decisions made in exhaustion that came at a cost."
        },
        largo: {
          es: "Afectivamente, hay una persona que persigue a otra sin notar que está pidiendo distancia: mensajes constantes, planes impuestos, presencia que no deja respirar. El acoso bien intencionado aleja. En lo financiero, hay decisiones tomadas en exceso de cansancio: contratos firmados sin energía para leer, compras hechas para calmar la ansiedad, inversiones aceptadas sin evaluar. Lo decidido en agotamiento suele cobrarse después.",
          en: "Emotionally, there is a person chasing another without noticing they are asking for distance: constant messages, plans imposed, presence that does not let breathe. The well-meant pursuit pushes away. Financially, there are decisions made in excess fatigue: contracts signed without energy to read, purchases made to calm anxiety, investments accepted without evaluation. What is decided in exhaustion tends to come due later."
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
          en: "There is a fight won at high cost. The victory weighs more for what it cost than for what it gave."
        },
        largo: {
          es: "La carta describe un conflicto donde nadie sale bien. Una persona puede haber tenido razón pero perdió aliados al imponerla. El ego ganó la batalla y perdió el vínculo. Vale revisar si la pelea valía lo que se pagó por ganarla, o si soltar habría sido más sabio.",
          en: "The card describes a conflict where no one comes out well. A person may have been right but lost allies in imposing it. The ego won the battle and lost the bond. It is worth reviewing whether the fight was worth what was paid to win it, or whether letting go would have been wiser."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una discusión ganada que dejó la relación dañada. En lo material, una negociación dura que aisló.",
          en: "In love, an argument won that left the relationship damaged. Materially, a hard negotiation that isolated."
        },
        largo: {
          es: "Afectivamente, hay una pareja saliendo de una pelea fuerte donde uno (o los dos) se aferró a tener razón a costa del vínculo. La razón puede ser cierta y aun así no compensar. En lo financiero, hay una negociación o disputa donde se ganó el punto y se perdió la relación: un cliente que ya no vuelve, un socio que se aleja, un colega que recuerda. Considerar si hubo otras maneras de defender la posición es trabajo retroactivo útil.",
          en: "Emotionally, there is a couple coming out of a strong fight where one (or both) clung to being right at the cost of the bond. Reason can be right and still not compensate. Financially, there is a negotiation or dispute where the point was won and the relationship was lost: a client who does not return, a partner stepping away, a colleague who remembers. Considering whether there were other ways to defend the position is useful retroactive work."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La pelea baja de intensidad. Hay aprendizaje sobre lo que la disputa costó realmente.",
          en: "The fight cools. There is learning about what the dispute really cost."
        },
        largo: {
          es: "La carta invertida marca el momento posterior al conflicto. Hay reconocimiento de los daños colaterales de haber peleado así. La sensación de victoria se va diluyendo y queda la cuenta de lo perdido en el proceso. La salida pasa por reparar lo que se pueda y aprender qué peleas no tomar la próxima vez.",
          en: "Reversed, the card marks the moment after the conflict. There is recognition of the collateral damage of having fought that way. The sense of victory thins out and what remains is the count of what was lost in the process. The way out goes through repairing what can be repaired and learning which fights not to take next time."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, reconciliación tentativa después de una pelea fuerte. En lo material, recuperación de relaciones laborales dañadas en una disputa.",
          en: "In love, tentative reconciliation after a strong fight. Materially, recovery of work relationships damaged in a dispute."
        },
        largo: {
          es: "Afectivamente, hay una pareja intentando recomponer después de una pelea que dejó marcas. La disculpa sincera vale más que el argumento perfecto. En lo financiero, hay reparación de vínculos profesionales o comerciales que sufrieron en una negociación dura: pedir disculpas, ofrecer compensación, recuperar credibilidad despacio. La reputación lleva tiempo de reconstruir y vale invertirlo.",
          en: "Emotionally, there is a couple trying to recompose after a fight that left marks. The sincere apology is worth more than the perfect argument. Financially, there is repair of professional or commercial bonds that suffered in a hard negotiation: apologizing, offering compensation, slowly recovering credibility. Reputation takes time to rebuild and is worth investing it."
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
        corto: {
          es: "Un movimiento gradual hacia mejor terreno. La transición no es heroica, es necesaria.",
          en: "A gradual movement toward better ground. The transition is necessary rather than heroic."
        },
        largo: {
          es: "La carta describe el paso lento desde una situación difícil hacia algo más calmo. La travesía pide paciencia, sin esperar escapes brillantes. Hay tristeza por lo que se deja atrás y al mismo tiempo claridad sobre la necesidad de hacerlo. El destino aún no se ve del todo, y avanzar pide confiar en el rumbo elegido.",
          en: "The card describes the slow step from a difficult situation toward something calmer. The crossing asks for patience, without expecting brilliant escapes. There is sadness for what is left behind and at the same time clarity about the need to do it. The destination is not yet fully visible, and moving forward asks for trusting the chosen course."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación que sale de una crisis o termina con dignidad. En lo material, un cambio de rumbo financiero que mejora la situación.",
          en: "In love, a relationship coming out of a crisis or ending with dignity. Materially, a course change in finances that improves the situation."
        },
        largo: {
          es: "Afectivamente, hay una pareja superando una etapa difícil con conversación y trabajo, o una despedida hecha con respeto y poco drama. El alivio llega despacio. En lo financiero, hay un cambio que aleja del problema: mudanza por costos, cambio de trabajo por mejor sueldo, cierre de un negocio que drenaba. Lo que viene es mejor que lo que queda atrás, aunque el ajuste tome tiempo.",
          en: "Emotionally, there is a couple getting through a difficult stage with conversation and work, or a goodbye made with respect and little drama. Relief arrives slowly. Financially, there is a change moving away from the problem: relocating because of costs, changing jobs for better pay, closing a business that was draining. What is coming is better than what is left behind, even if the adjustment takes time."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La transición se traba. Algo del pasado retiene cuando ya tocaba avanzar.",
          en: "The transition jams. Something from the past holds back when it was time to move forward."
        },
        largo: {
          es: "La carta invertida marca la dificultad para soltar lo que ya no sirve. Hay un movimiento iniciado que se devuelve a la mitad por miedo, nostalgia o costumbre. Lo conocido pesa más que la promesa de mejora. Avanzar pide reconocer qué retiene y soltarlo de a poco, sin negar el costo emocional del cambio.",
          en: "Reversed, the card marks the difficulty of releasing what no longer serves. There is a movement begun that gets reversed halfway out of fear, nostalgia, or habit. The familiar weighs more than the promise of improvement. Moving forward asks for recognizing what holds you back and releasing it gradually, without denying the emotional cost of change."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien vuelve a una relación que ya había decidido dejar. En lo material, un cambio de trabajo o ciudad que se posterga indefinidamente.",
          en: "In love, someone returns to a relationship they had decided to leave. Materially, a job or city change postponed indefinitely."
        },
        largo: {
          es: "Afectivamente, hay una persona regresando a una relación tóxica que había decidido cerrar, o sosteniendo una pareja que ya emocionalmente terminó. La nostalgia confunde lo que ya estaba claro. En lo financiero, hay una decisión de cambio (mudanza, renuncia, venta) que se pospone por enésima vez. Cada nueva postergación tiene su costo en energía y oportunidad.",
          en: "Emotionally, there is a person returning to a toxic relationship they had decided to close, or sustaining a couple that emotionally already ended. Nostalgia confuses what was already clear. Financially, there is a decision of change (a move, a resignation, a sale) postponed for the umpteenth time. Each new postponement has its cost in energy and opportunity."
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
        corto: {
          es: "Algo se está moviendo por debajo. O lo haces tú, o te lo están haciendo.",
          en: "Something is moving underneath. Either you are doing it, or it is being done to you."
        },
        largo: {
          es: "Hay una estrategia en juego que evita la confrontación directa. Conseguir algo sin pedirlo abiertamente puede funcionar a corto plazo, pero deja un costo que se cobra después. Si la maniobra es propia, vale considerar qué cambiaría al poner la carta sobre la mesa. Si la maniobra es ajena, la intuición ya lo sabe.",
          en: "There is a strategy at play that avoids direct confrontation. Getting something without asking for it openly may work in the short term, but leaves a cost that comes due later. If the maneuver is your own, it is worth considering what would change by putting the card on the table. If the maneuver is someone else's, intuition already knows."
        }
      },
      relacional: {
        corto: {
          es: "Una omisión, una verdad a medias. En lo material, una promesa hecha con asteriscos que no se mencionan.",
          en: "An omission, a half-truth. Materially, a promise made with asterisks that go unmentioned."
        },
        largo: {
          es: "Afectivamente, alguien (puede ser uno mismo) guarda información que cambiaría las cosas. Lo no dicho pesa aunque no se nombre. En lo financiero, conviene mirar dos veces los acuerdos donde lo importante quedó fuera del papel: ofertas demasiado convenientes, préstamos con letra chica, dinero prestado a alguien que ya esquiva el tema. Lo que parece una salida lateral suele salir caro.",
          en: "Emotionally, someone (it could be yourself) is keeping information that would change things. What is unsaid weighs even when not named. Financially, it is worth looking twice at agreements where the important part was left off the paper: offers too convenient, loans with fine print, money lent to someone already dodging the topic. What looks like a side exit usually comes out expensive."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Algo escondido sale a la luz. La opción es confesar antes que te confiesen.",
          en: "Something hidden comes to light. The option is confessing before being confessed."
        },
        largo: {
          es: "Lo que estaba sostenido a escondidas ya no puede sostenerse. Hay un alivio en dejar de cargarlo, aunque venga acompañado de consecuencias. Quien oculta tiene una ventana para hablar antes que el otro. Quien queda fuera de la información empieza a verla con claridad.",
          en: "What was being held in secret can no longer be sustained. There is relief in stopping carrying it, even if it comes with consequences. Whoever hides has a window to speak before the other does. Whoever was kept out of the information starts seeing it with clarity."
        }
      },
      relacional: {
        corto: {
          es: "Sale a flote lo que estaba debajo. La salida pasa por reparar lo que se rompió.",
          en: "What was beneath surfaces. The way out goes through repairing what was broken."
        },
        largo: {
          es: "En lo afectivo, una verdad postergada se hace evidente y exige respuesta. La pregunta útil es qué se hace con esa verdad. En lo material, hay irregularidades pidiendo orden: impuestos pendientes, deudas no reconocidas, cuentas turbias con alguien. Lo desordenado, una vez puesto en su sitio, deja respirar.",
          en: "In love, a postponed truth becomes evident and demands a response. The useful question is what to do with that truth. Materially, there are irregularities asking for order: pending taxes, unacknowledged debts, murky accounts with someone. The disordered, once put in its place, lets things breathe."
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
          en: "There is a sense of being trapped, but the bindings are less solid than they look. The way out exists."
        },
        largo: {
          es: "La carta describe un encierro donde la persona se ve atada y los nudos están sueltos. La parálisis es más mental que real. El miedo o la idea fija de no tener opciones bloquea ver las opciones que sí están. Salir empieza por mirar el atado con más cuidado.",
          en: "The card describes a confinement where the person sees themselves tied and the knots are loose. The paralysis is more mental than real. Fear or the fixed idea of having no options blocks seeing the options that are there. Stepping out begins by looking at the binding more carefully."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien se siente atrapado en una relación pensando que no puede irse. En lo material, miedo a cambiar de trabajo o situación financiera.",
          en: "In love, someone feels trapped in a relationship thinking they cannot leave. Materially, fear of changing jobs or financial situation."
        },
        largo: {
          es: "Afectivamente, hay una persona en un vínculo que se siente sin salida: cree que no puede irse por dependencia, miedo, costo, o por convencimiento de que no merece otra cosa. La cárcel es real y al mismo tiempo construida. En lo financiero, hay miedo a cambiar de trabajo, a reclamar lo que corresponde, a salir de una situación material que limita. La sensación de no tener opciones suele preceder a la decisión de mirarlas.",
          en: "Emotionally, there is a person in a bond that feels without exit: they believe they cannot leave because of dependence, fear, cost, or conviction that they do not deserve anything else. The cell is real and at the same time built. Financially, there is fear of changing jobs, of claiming what corresponds, of leaving a material situation that limits. The sense of having no options usually precedes the decision to look at them."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Las ataduras se aflojan. Lo que parecía imposible empieza a ser visto como elegible.",
          en: "The bindings loosen. What seemed impossible begins to be seen as choosable."
        },
        largo: {
          es: "La carta invertida marca el momento en que la venda se cae. Lo que parecía sin salida muestra puertas que estaban ocultas por el miedo. Hay reconocimiento de la propia agencia: uno no es solo víctima de las circunstancias, también participa de ellas. La libertad recuperada empieza tímida y se afirma con cada movimiento.",
          en: "Reversed, the card marks the moment when the blindfold falls. What seemed without exit shows doors that were hidden by fear. There is recognition of your own agency: you are not only victim of the circumstances, you also participate in them. The freedom recovered begins timid and asserts itself with each movement."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien decide salir de un vínculo donde se sentía sin opciones. En lo material, búsqueda activa de cambio después de mucho tiempo de pasividad.",
          en: "In love, someone decides to leave a bond where they felt without options. Materially, an active search for change after long passivity."
        },
        largo: {
          es: "Afectivamente, hay una persona empezando a ejercer su propia agencia: poner límites, decir no, considerar dejar lo que no nutre. El movimiento puede ser pequeño y aun así marca el cambio. En lo financiero, hay búsqueda concreta de cambio: postular a otros trabajos, preguntar por opciones financieras, hablar con asesores. La parálisis se desarma cuando empieza a haber acción.",
          en: "Emotionally, there is a person beginning to exercise their own agency: setting limits, saying no, considering leaving what does not nourish. The movement may be small and still mark the change. Financially, there is concrete searching for change: applying to other jobs, asking about financial options, talking to advisors. The paralysis dismantles when action begins."
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
        corto: {
          es: "Hay angustia sostenida. Los miedos se hacen más grandes en la cabeza que en la realidad.",
          en: "There is sustained anguish. Fears get larger in the head than in reality."
        },
        largo: {
          es: "La carta describe la noche del alma: las preocupaciones que no dejan dormir, los pensamientos que vuelven en bucle, el peso emocional que se siente desproporcionado. La mente está amplificando los miedos. La realidad suele ser menos terrible que la versión imaginada. Buscar perspectiva externa ayuda a calibrar.",
          en: "The card describes the dark night of the soul: the worries that do not let one sleep, the thoughts that return in loop, the emotional weight that feels disproportionate. The mind is amplifying the fears. Reality tends to be less terrible than the imagined version. Seeking outside perspective helps to calibrate."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, ansiedad sobre la pareja que crece más por dentro que por fuera. En lo material, miedos financieros que paralizan.",
          en: "In love, anxiety about the partner that grows more inside than outside. Materially, financial fears that paralyze."
        },
        largo: {
          es: "Afectivamente, hay una persona dando vueltas mentales sobre la pareja: dudas, sospechas, ansiedad sobre lo que el otro siente, escenarios catastróficos imaginados. Compartir el miedo con el otro suele bajar su tamaño. En lo financiero, hay angustia sobre el dinero que no calza con la situación real: ansiedad por cuentas que están bien, miedo a perder lo que no está en riesgo. Una mirada externa al estado real de las cosas devuelve perspectiva.",
          en: "Emotionally, there is a person turning over and over mentally about the partner: doubts, suspicions, anxiety about what the other feels, catastrophic scenarios imagined. Sharing the fear with the other usually lowers its size. Financially, there is anguish about money that does not match the real situation: anxiety over accounts that are fine, fear of losing what is not at risk. An outside look at the real state of things returns perspective."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La angustia empieza a aflojar. Lo temido se mira de cerca y resulta menos grave.",
          en: "The anguish begins to ease. What was feared looks closer and turns out less serious."
        },
        largo: {
          es: "La carta invertida marca el amanecer después de la noche larga. Las preocupaciones empiezan a verse en proporción. Hay alivio cuando lo que se temía resulta manejable o, al ser nombrado, pierde fuerza. El descanso recuperado permite pensar con más claridad.",
          en: "Reversed, the card marks dawn after the long night. The worries begin to be seen in proportion. There is relief when what was feared turns out manageable or, when named, loses force. The sleep recovered allows thinking with more clarity."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alivio después de una conversación honesta que disipó miedos. En lo material, claridad financiera que desactiva la ansiedad.",
          en: "In love, relief after an honest conversation that dispelled fears. Materially, financial clarity that defuses anxiety."
        },
        largo: {
          es: "Afectivamente, hay una persona saliendo de un período de inseguridad después de hablar con su pareja: las dudas se aclararon, las sospechas se descartaron, o se confirmó algo que ya se intuía. La verdad libera más que la duda crónica. En lo financiero, mirar de frente la situación devuelve sensación de control: hacer el presupuesto, llamar al banco, hablar con un asesor. La angustia sobre dinero baja cuando hay datos en lugar de fantasías.",
          en: "Emotionally, there is a person coming out of a stretch of insecurity after talking with their partner: the doubts cleared, the suspicions were dismissed, or something already sensed got confirmed. The truth releases more than chronic doubt. Financially, looking the situation in the face returns a sense of control: doing the budget, calling the bank, talking to an advisor. The anguish about money lowers when there is data instead of fantasy."
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
        corto: {
          es: "Algo tocó fondo. Lo difícil ya no puede empeorar más.",
          en: "Something hit bottom. What was hard cannot get worse."
        },
        largo: {
          es: "La carta describe el final doloroso de un ciclo. Algo se terminó de la peor manera, dejando agotamiento y heridas. La consolación posible es que desde acá solo se sube. El final, aunque traumático, libera para que algo nuevo pueda empezar.",
          en: "The card describes the painful end of a cycle. Something ended in the worst way, leaving exhaustion and wounds. The possible consolation is that from here only up. The end, though traumatic, frees something for new to begin."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una ruptura definitiva o una traición que cierra el vínculo. En lo material, una pérdida grande o un fracaso visible.",
          en: "In love, a definitive breakup or a betrayal that closes the bond. Materially, a big loss or a visible failure."
        },
        largo: {
          es: "Afectivamente, hay una relación terminada en condiciones duras: traición, mentira sostenida, ruptura unilateral, abandono. El golpe deja marca y al mismo tiempo cierra capítulo. En lo financiero, hay una pérdida grande o un fracaso público: bancarrota, despido, proyecto colapsado, inversión que se hundió. Reconstruir empieza por aceptar el final sin negarlo.",
          en: "Emotionally, there is a relationship ended in hard conditions: betrayal, sustained lying, unilateral breakup, abandonment. The blow leaves a mark and at the same time closes a chapter. Financially, there is a big loss or a public failure: bankruptcy, dismissal, a project collapsed, an investment that sank. Rebuilding begins by accepting the end without denying it."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Algo del fondo empieza a ceder. Hay primeras señales de recuperación.",
          en: "Something at the bottom begins to give. There are first signs of recovery."
        },
        largo: {
          es: "La carta invertida marca el rebote después del golpe. Lo peor ya pasó y queda el trabajo lento de levantarse. La fortaleza encontrada en el proceso suele ser mayor a la que se creía tener. La cicatriz queda y al mismo tiempo es prueba de que se sobrevivió.",
          en: "Reversed, the card marks the rebound after the blow. The worst is past and the slow work of getting up remains. The strength found in the process is usually greater than the one believed to be there. The scar remains and at the same time is proof that you survived."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, recuperación después de una ruptura traumática. En lo material, reconstrucción después de un colapso financiero.",
          en: "In love, recovery after a traumatic breakup. Materially, rebuilding after a financial collapse."
        },
        largo: {
          es: "Afectivamente, hay una persona reconstruyendo su capacidad de querer después de un golpe duro: terapia, tiempo, vínculos cuidados, espacio para sentir y procesar. La confianza vuelve gradualmente. En lo financiero, hay recuperación después de un fracaso material: nuevo trabajo, deudas reorganizadas, proyectos revisados. Lo aprendido del fondo es lo que evita volver a tocarlo.",
          en: "Emotionally, there is a person rebuilding their capacity to love after a hard blow: therapy, time, cared-for bonds, space to feel and process. Trust returns gradually. Financially, there is recovery after a material failure: a new job, debts reorganized, projects revisited. What is learned at the bottom is what prevents touching it again."
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
        corto: {
          es: "Hay una mente curiosa lista para investigar. Las preguntas pesan más que las respuestas.",
          en: "There is a curious mind ready to investigate. The questions weigh more than the answers."
        },
        largo: {
          es: "La carta describe energía intelectual joven y alerta. Hay ganas de aprender, de comunicar, de probar ideas. La curiosidad abre puertas que la cautela cerraba. Lo que falta es paciencia para sostener un tema antes de saltar al siguiente.",
          en: "The card describes young, alert intellectual energy. There is desire to learn, to communicate, to test ideas. Curiosity opens doors that caution closed. What is missing is patience to sustain a topic before jumping to the next."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien con cabeza ágil y conversación interesante entra en escena. En lo material, una idea o información nueva que conviene investigar.",
          en: "In love, someone with an agile mind and interesting conversation enters the scene. Materially, an idea or new information worth investigating."
        },
        largo: {
          es: "Afectivamente, hay un encuentro o vínculo donde el atractivo principal es intelectual: conversaciones largas, debates, ideas compartidas. La intimidad emocional puede tardar más en aparecer. En lo financiero, llega información valiosa: una pista de inversión, un dato que cambia el panorama, una pregunta que conviene hacer antes de decidir. Vale investigar antes de actuar.",
          en: "Emotionally, there is an encounter or bond where the main attraction is intellectual: long conversations, debates, shared ideas. Emotional intimacy may take longer to appear. Financially, valuable information arrives: an investment lead, a piece of data that changes the picture, a question worth asking before deciding. It is worth investigating before acting."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La mente está dispersa o las palabras hieren. La inteligencia se usa mal.",
          en: "The mind is scattered or words wound. Intelligence is being used badly."
        },
        largo: {
          es: "La carta invertida nombra el costo de la sutileza convertida en cinismo. Comentarios sarcásticos que hieren, chismes que dañan, palabras agudas usadas para humillar. La capacidad verbal está al servicio del ego más que al de la verdad. Reconectar con cuidar a quien escucha cambia el efecto de lo que se dice.",
          en: "Reversed, the card names the cost of subtlety turned into cynicism. Sarcastic comments that wound, gossip that damages, sharp words used to humiliate. The verbal capacity is in service of the ego more than of the truth. Reconnecting with caring for the listener changes the effect of what is said."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien se vuelve crítico mordaz en lugar de comunicarse de verdad. En lo material, información poco confiable que conviene contrastar.",
          en: "In love, someone becomes a biting critic instead of really communicating. Materially, unreliable information worth contrasting."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte usa palabras para herir más que para resolver: ironía, comentarios cortantes, comparaciones humillantes. La tregua verbal es condición para reparar. En lo financiero, hay información que llega con apariencia de dato pero sin verificación: un consejo apresurado, una recomendación interesada, un rumor presentado como hecho. Antes de actuar, vale chequear la fuente.",
          en: "Emotionally, there is a couple where one side uses words to wound more than to resolve: irony, cutting comments, humiliating comparisons. The verbal truce is the condition for repair. Financially, there is information arriving with the look of data but without verification: a hasty piece of advice, a self-interested recommendation, a rumor presented as fact. Before acting, it is worth checking the source."
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
        corto: {
          es: "Hay acción decidida y rápida. La cabeza marca el rumbo y el cuerpo ejecuta sin demora.",
          en: "There is decided and rapid action. The head sets the course and the body executes without delay."
        },
        largo: {
          es: "La carta describe avance frontal con convicción. Las decisiones se toman con claridad mental y se ejecutan sin titubeo. La velocidad es virtud y al mismo tiempo riesgo. Lo que falta a veces es considerar el efecto en otros antes de cortar.",
          en: "The card describes frontal advance with conviction. Decisions get made with mental clarity and executed without hesitation. Speed is virtue and at the same time risk. What is sometimes missing is considering the effect on others before cutting."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien actúa con decisión sin demasiado romanticismo. En lo material, una jugada audaz y rápida en negocios.",
          en: "In love, someone acts with decision without much romance. Materially, a daring and rapid play in business."
        },
        largo: {
          es: "Afectivamente, hay una persona que va al grano: declara, propone, decide, sin alargar la conversación. El estilo puede chocar con quien necesita más tiempo. En lo financiero, hay acción decidida: una negociación llevada con dureza, una inversión hecha sin consultar mucho, un cambio de trabajo aceptado al toque. La velocidad funciona si la información es buena.",
          en: "Emotionally, there is a person who goes straight to the point: declares, proposes, decides, without dragging out the conversation. The style may clash with whoever needs more time. Financially, there is decided action: a negotiation carried with toughness, an investment made without much consultation, a job change accepted on the spot. The speed works when the information is good."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La acción se vuelve agresión. Hay imposición disfrazada de eficiencia.",
          en: "Action becomes aggression. There is imposition disguised as efficiency."
        },
        largo: {
          es: "La carta invertida marca el costo de la prisa sin filtro. Decisiones tomadas para imponer más que para resolver, palabras dichas para callar al otro, jugadas hechas para demostrar fuerza. La mente cortante actúa como arma más que como herramienta. Bajar el ritmo y considerar quién queda lastimado en el camino cambia el efecto.",
          en: "Reversed, the card marks the cost of haste without filter. Decisions made to impose more than to solve, words said to silence the other, plays made to demonstrate strength. The cutting mind acts as weapon more than as tool. Slowing down and considering who gets wounded along the way changes the effect."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien atropella al otro con argumentos en lugar de escucharlo. En lo material, decisiones impulsivas que dañan vínculos profesionales.",
          en: "In love, someone runs over the other with arguments instead of listening. Materially, impulsive decisions that damage professional bonds."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte gana las discusiones a costa de la otra: dialéctica afilada usada para anular, sin resolver. La razón puede ser correcta y aun así dañar. En lo financiero, hay decisiones tomadas con dureza que después generan resentimiento: jefes despedidos sin tacto, clientes maltratados, socios atropellados. La eficiencia que pierde gente cuesta caro a largo plazo.",
          en: "Emotionally, there is a couple where one wins the arguments at the cost of the other: sharp dialectic used to cancel, without resolving. Reason can be correct and still wound. Financially, there are decisions made with toughness that later breed resentment: bosses dismissed without tact, clients mistreated, partners run over. The efficiency that loses people is expensive in the long run."
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
        corto: {
          es: "Hay una claridad madura nacida de la experiencia. La mente ve sin filtros.",
          en: "There is a mature clarity born of experience. The mind sees without filters."
        },
        largo: {
          es: "La carta describe a una persona con mente aguda y poco margen para la ingenuidad. Las decisiones se toman con información completa, las relaciones se eligen con cuidado, los errores propios y ajenos se reconocen sin negación. La frialdad aparente cubre una sensibilidad real que aprendió a protegerse. La autonomía es el rasgo distintivo.",
          en: "The card describes a person with a sharp mind and little margin for naivety. Decisions get made with complete information, relationships get chosen with care, your own and others' errors get acknowledged without denial. The apparent coldness covers a real sensitivity that learned to protect itself. Autonomy is the distinctive trait."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona honesta y discernidora elige con cuidado. En lo material, decisiones financieras tomadas con cabeza y experiencia.",
          en: "In love, an honest and discerning person chooses with care. Materially, financial decisions made with head and experience."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde la honestidad pesa más que el romanticismo. La pareja funciona porque hay respeto y conversación clara, sin dramas ni juegos. En lo financiero, hay manejo experto de los recursos: presupuesto claro, criterio para préstamos a otros, diferenciación entre necesidad y deseo. Lo que se decide acá rara vez se arrepiente.",
          en: "Emotionally, there is a bond where honesty weighs more than romanticism. The couple works because there is respect and clear conversation, without drama or games. Financially, there is expert handling of resources: clear budget, judgment for loans to others, distinction between need and desire. What is decided here is rarely regretted."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La claridad se volvió frialdad o resentimiento. La mente afilada corta donde no toca.",
          en: "Clarity has turned to coldness or resentment. The sharp mind cuts where it should not."
        },
        largo: {
          es: "La carta invertida marca el costo de la guardia mantenida demasiado tiempo. La sensibilidad se cubrió tanto que ya no encuentra cómo salir. Hay amargura por heridas viejas, juicio severo sobre los demás como protección, distancia que aísla. Volver a permitir vulnerabilidad es el trabajo aquí.",
          en: "Reversed, the card marks the cost of the guard kept up too long. Sensitivity covered itself so much that it no longer finds a way out. There is bitterness from old wounds, severe judgment of others as protection, distance that isolates. Allowing vulnerability again is the work here."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona herida se cierra al cariño que sí está disponible. En lo material, decisiones financieras tomadas con desconfianza generalizada.",
          en: "In love, a wounded person closes off to the affection that is available. Materially, financial decisions made with generalized distrust."
        },
        largo: {
          es: "Afectivamente, hay una persona que sufrió y ahora trata a cada nueva posibilidad con la sospecha de la anterior. La autoprotección entendible se convirtió en barrera que aleja a quien no merece sospecha. En lo financiero, hay desconfianza extrema: no prestar nunca, no compartir información financiera con la pareja, no invertir por temor. La cautela que protege también puede paralizar.",
          en: "Emotionally, there is a person who suffered and treats every new possibility with the suspicion of the previous one. The understandable self-protection turned into a barrier that pushes away whoever does not deserve suspicion. Financially, there is extreme distrust: never lending, not sharing financial information with the partner, not investing out of fear. The caution that protects can also paralyze."
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
          en: "There is mental authority based on principles. Decisions rest on logic and on ethics."
        },
        largo: {
          es: "La carta describe a alguien que combina inteligencia con integridad. La capacidad de analizar se acompaña de la responsabilidad de hacer lo correcto. Otros buscan su consejo porque pesan tanto la cabeza como la palabra. El poder se ejerce con criterio y con templanza.",
          en: "The card describes someone who combines intelligence with integrity. The capacity to analyze is accompanied by the responsibility of doing what is right. Others seek their counsel because both the head and the word weigh. Power gets exercised with judgment and with temperance."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja donde el respeto y la honestidad mandan. En lo material, decisiones financieras tomadas con principios sólidos.",
          en: "In love, a couple where respect and honesty rule. Materially, financial decisions made with solid principles."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde los acuerdos se respetan, la palabra se cumple, los conflictos se resuelven con conversación clara. La pasión convive con la estructura. En lo financiero, hay manejo ético del dinero: contratos transparentes, deudas pagadas, compromisos honrados, asesoría profesional buscada cuando hace falta. La reputación construida así se vuelve activo concreto.",
          en: "Emotionally, there is a bond where agreements are respected, the word gets kept, conflicts get resolved through clear conversation. Passion lives alongside structure. Financially, there is ethical handling of money: transparent contracts, debts paid, commitments honored, professional advice sought when needed. The reputation built this way becomes a concrete asset."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La autoridad se volvió manipulación. La inteligencia se usa para imponer más que para esclarecer.",
          en: "Authority has turned to manipulation. Intelligence is used to impose more than to clarify."
        },
        largo: {
          es: "La carta invertida marca el abuso del intelecto. La capacidad mental se pone al servicio del propio interés sin consideración por otros, las decisiones se justifican con argumentos brillantes pero injustos, la palabra se quiebra cuando conviene. La frialdad sin ética es destructiva. Recuperar el balance pide volver a los principios antes que a las jugadas.",
          en: "Reversed, the card marks the abuse of intellect. Mental capacity is put in service of self-interest without consideration for others, decisions get justified with brilliant but unjust arguments, the word gets broken when convenient. Coldness without ethics is destructive. Recovering balance asks for returning to the principles before the plays."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona usa su inteligencia para controlar al otro. En lo material, decisiones financieras hechas con cinismo o ilegalidad.",
          en: "In love, a person uses their intelligence to control the other. Materially, financial decisions made with cynicism or illegality."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte manipula con palabras: gaslighting, argumentación tramposa, uso de la lógica para hacer dudar al otro de su propia experiencia. El abuso intelectual es real aunque no deje marcas visibles. En lo financiero, hay decisiones donde se cruzaron líneas éticas: contratos turbios, evasión, aprovechamiento de información privilegiada. Las cuentas pendientes con la propia conciencia se cobran con tiempo.",
          en: "Emotionally, there is a couple where one side manipulates with words: gaslighting, deceptive argumentation, use of logic to make the other doubt their own experience. The intellectual abuse is real even when it leaves no visible marks. Financially, there are decisions where ethical lines were crossed: murky contracts, evasion, taking advantage of insider information. The accounts pending with your own conscience get paid with time."
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
        corto: {
          es: "Una oportunidad concreta se presenta. Hay una semilla material lista para ser sembrada.",
          en: "A concrete opportunity is presenting itself. There is a material seed ready to be planted."
        },
        largo: {
          es: "La carta nombra un nuevo comienzo en lo material. Algo tangible se ofrece: un trabajo, una salud que se recupera, un recurso que aparece, una posibilidad de crecimiento sólida. La condición es estar dispuesto a trabajarlo. Lo que se planta con cuidado en este momento puede sostener mucho tiempo.",
          en: "The card names a new beginning in the material. Something tangible is offered: a job, a health that returns, a resource that appears, a solid possibility of growth. The condition is being willing to work it. What is planted with care in this moment can sustain a long time."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación con cualidad estable y nutritiva. En lo material, un ingreso, oferta o recurso nuevo aparece.",
          en: "In love, a relationship with stable and nourishing quality. Materially, a new income, offer, or resource appears."
        },
        largo: {
          es: "Afectivamente, hay una relación que combina afecto con estabilidad: una pareja que ofrece base concreta, no solo emoción intensa. La generosidad se traduce en gestos cotidianos. En lo financiero, llega una oportunidad material concreta: un trabajo, un negocio, una herencia, un préstamo aprobado. La clave es construir sobre eso despacio y con cabeza.",
          en: "Emotionally, there is a relationship that combines affection with stability: a partner offering concrete base, not only intense emotion. Generosity translates into everyday gestures. Financially, a concrete material opportunity arrives: a job, a business, an inheritance, a loan approved. The key is building on it slowly and with the head."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La oportunidad pasa o llega con asteriscos. Hay falta de planeamiento donde se necesitaba.",
          en: "The opportunity passes or arrives with asterisks. There is a lack of planning where it was needed."
        },
        largo: {
          es: "La carta invertida marca un comienzo material que se complica o no llega. Una oferta atractiva resulta menos buena de lo que parecía, o una oportunidad pasa por falta de preparación. Hay aprendizaje sobre revisar antes de aceptar. La escasez momentánea pide ajuste antes que pánico.",
          en: "Reversed, the card marks a material beginning that complicates or does not arrive. An attractive offer turns out less good than it seemed, or an opportunity passes for lack of preparation. There is learning about reviewing before accepting. Momentary scarcity asks for adjustment rather than panic."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación con problemas materiales que generan tensión. En lo material, una oportunidad financiera que conviene mirar dos veces.",
          en: "In love, a relationship with material problems generating tension. Materially, a financial opportunity worth looking at twice."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde lo material está creando tensión: ingresos desbalanceados, decisiones financieras no compartidas, ansiedad por la situación económica común. Conversar lo concreto desactiva mucho. En lo financiero, hay una oferta atractiva con detalles preocupantes: un negocio que promete demasiado, una inversión sin garantías, un trabajo con condiciones turbias. La precaución acá protege.",
          en: "Emotionally, there is a couple where the material is creating tension: unbalanced incomes, unshared financial decisions, anxiety about the shared economic situation. Talking about the concrete defuses much. Financially, there is an attractive offer with worrying details: a business promising too much, an investment without guarantees, a job with murky conditions. Caution here protects."
        }
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
        corto: {
          es: "Hay varias cosas en el aire al mismo tiempo. La adaptación constante es la habilidad necesaria.",
          en: "There are several things in the air at the same time. Constant adaptation is the necessary skill."
        },
        largo: {
          es: "La carta describe el malabarismo necesario para manejar múltiples responsabilidades. Trabajo, casa, vínculos, salud, dinero, todo pide atención simultánea. La habilidad acá es priorizar sin soltar lo importante. Lo que se sostiene con balance no se cae aunque la situación sea inestable.",
          en: "The card describes the juggling necessary to handle multiple responsibilities. Work, home, bonds, health, money, all asking for attention at once. The skill here is prioritizing without dropping the important. What is held with balance does not fall even when the situation is unstable."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, la pareja se mantiene con esfuerzo entre otras demandas. En lo material, presupuesto ajustado pero funcionando con cuidado.",
          en: "In love, the couple holds with effort between other demands. Materially, a tight budget that works with care."
        },
        largo: {
          es: "Afectivamente, hay una pareja que sostiene su vínculo entre presiones externas: trabajo, familia, hijos, salud. La pareja funciona porque ambos hacen el malabar consciente. En lo financiero, las cuentas se cierran ajustadas pero se cierran: pagar todas las facturas, cubrir lo necesario, dejar algo para emergencias. La adaptabilidad es lo que mantiene el equilibrio.",
          en: "Emotionally, there is a couple holding their bond between outside pressures: work, family, children, health. The pair works because both do the conscious juggling. Financially, the accounts close tight but they close: paying every bill, covering the necessary, leaving something for emergencies. Adaptability is what keeps the balance."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Demasiadas cosas a la vez se vuelven inmanejables. Algo se está soltando sin notarlo.",
          en: "Too many things at once become unmanageable. Something is being dropped without notice."
        },
        largo: {
          es: "La carta invertida marca el momento donde el malabar excede la capacidad. Las demandas se acumulan y algo empieza a caer: salud, vínculos, deberes, sueño. La sensación de no llegar a todo se vuelve crónica. Reducir la carga, aunque cueste decir que no, es lo que evita el colapso.",
          en: "Reversed, the card marks the moment where the juggle exceeds capacity. Demands accumulate and something starts falling: health, bonds, duties, sleep. The sense of not getting to everything turns chronic. Reducing the load, even when it costs to say no, is what prevents collapse."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, la pareja queda al final de la lista de prioridades. En lo material, las cuentas no cierran y la presión aumenta.",
          en: "In love, the couple ends up at the bottom of the priority list. Materially, the accounts do not close and pressure rises."
        },
        largo: {
          es: "Afectivamente, hay una pareja descuidada por exceso de demandas externas. El otro empieza a sentirse último en la lista, y el resentimiento se acumula sin nombrarse. En lo financiero, los ingresos no alcanzan a cubrir lo que sale: deudas que crecen, gastos imprevistos, ahorros que se gastan en lo cotidiano. Reordenar pide reducir o aumentar, sin seguir igual esperando que mejore.",
          en: "Emotionally, there is a couple neglected by excess of outside demands. The other begins to feel last on the list, and resentment accumulates without being named. Financially, income does not cover what goes out: debts that grow, unforeseen expenses, savings spent on the everyday. Reordering asks for reducing or increasing, without continuing the same hoping it will improve."
        }
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
        corto: {
          es: "Hay un trabajo en equipo funcionando. La suma de habilidades produce más que cada parte sola.",
          en: "There is teamwork operating. The sum of skills produces more than each part alone."
        },
        largo: {
          es: "La carta describe colaboración productiva. Cada parte aporta su habilidad y el resultado supera a lo que podrían hacer separados. Hay reconocimiento mutuo del valor que cada uno trae. La maestría se construye trabajando, sin esperar a tenerla antes de empezar.",
          en: "The card describes productive collaboration. Each side contributes their skill and the result exceeds what they could do separately. There is mutual recognition of the value each brings. Mastery gets built by working, without waiting to have it before starting."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja que funciona como equipo en lo cotidiano. En lo material, un proyecto colectivo que rinde por la cooperación.",
          en: "In love, a couple that works as a team in the everyday. Materially, a collective project that pays off through cooperation."
        },
        largo: {
          es: "Afectivamente, hay una relación donde las decisiones grandes se piensan juntas y las tareas se reparten con criterio. La pareja funciona como sociedad, sin dejar de ser afecto. En lo financiero, hay un proyecto, sociedad o trabajo colectivo donde la complementariedad de habilidades produce resultado real. Buscar consejo de quien sabe más vale más que insistir solo.",
          en: "Emotionally, there is a relationship where the big decisions are thought through together and the tasks get distributed with judgment. The couple works as a partnership, without ceasing to be affection. Financially, there is a project, partnership, or collective work where the complementarity of skills produces real result. Seeking advice from those who know more is worth more than insisting alone."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La colaboración no funciona. Hay competencia donde debería haber suma de fuerzas.",
          en: "Collaboration does not work. There is competition where there should be a sum of forces."
        },
        largo: {
          es: "La carta invertida marca el desencuentro de equipo. Las habilidades chocan en lugar de complementarse, alguien acapara mientras otros se desentienden, o falta el respeto básico para escuchar al que sabe distinto. El proyecto avanza menos de lo que podría. Restablecer la cooperación pide reconocer qué aporta cada parte.",
          en: "Reversed, the card marks the team mismatch. Skills clash instead of complementing, someone hoards while others disengage, or the basic respect to listen to whoever knows differently is missing. The project advances less than it could. Restoring cooperation asks for recognizing what each side contributes."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja que no logra repartirse las tareas con justicia. En lo material, conflicto en un proyecto compartido por falta de claridad de roles.",
          en: "In love, a couple that cannot divide tasks fairly. Materially, conflict in a shared project from lack of role clarity."
        },
        largo: {
          es: "Afectivamente, hay una pareja con tensiones por reparto de cargas: tareas domésticas, decisiones financieras, cuidado de la familia. Lo no negociado explícitamente se distribuye desigual. En lo financiero, hay un proyecto compartido (sociedad, emprendimiento, trabajo) donde los roles no están claros y eso genera fricción. Sentarse a definir quién hace qué destraba lo que la ambigüedad estanca.",
          en: "Emotionally, there is a couple with tensions over the division of loads: housework, financial decisions, family care. What is not explicitly negotiated gets distributed unevenly. Financially, there is a shared project (a partnership, a venture, a job) where roles are not clear and that creates friction. Sitting down to define who does what unblocks what ambiguity stalls."
        }
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
        corto: {
          es: "Hay una guardia puesta sobre lo que se logró. La protección puede volverse cárcel si se exagera.",
          en: "There is a guard set over what was achieved. The protection can become a cell when overdone."
        },
        largo: {
          es: "La carta describe el momento de aferrarse a lo conseguido. Hay miedo a perder lo construido y eso se traduce en control firme sobre los recursos. La estabilidad está bien cuidada y al mismo tiempo puede impedir crecer. La diferencia entre proteger y acaparar es tema de calibración.",
          en: "The card describes the moment of holding tight to what was won. There is fear of losing what was built and that translates into firm control over resources. Stability is well guarded and at the same time can prevent growth. The difference between protecting and hoarding is a matter of calibration."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona se aferra al vínculo por miedo a perderlo. En lo material, conservadurismo financiero que da seguridad pero limita.",
          en: "In love, a person clings to the bond out of fear of losing it. Materially, financial conservatism that gives security but limits."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde la posesividad ocupa más espacio que la confianza: celos, control sobre el tiempo del otro, miedo permanente al abandono. La protección excesiva ahoga lo que pretende cuidar. En lo financiero, hay un manejo conservador del dinero: ahorro alto, gasto mínimo, aversión al riesgo. Funciona como base estable y deja poco para crecer o disfrutar.",
          en: "Emotionally, there is a couple where possessiveness occupies more space than trust: jealousy, control over the other's time, permanent fear of abandonment. Excessive protection smothers what it claims to care for. Financially, there is conservative handling of money: high savings, minimal spending, aversion to risk. It works as stable base and leaves little for growth or enjoyment."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "O la guardia se afloja y aparece liberación, o la avaricia se vuelve más cerrada.",
          en: "Either the guard loosens and release appears, or avarice closes tighter."
        },
        largo: {
          es: "La carta invertida marca dos extremos posibles. Por un lado, hay una persona empezando a soltar el control: aprende a compartir, a confiar, a gastar lo que merece gastar. Por otro, la inseguridad se profundiza en avaricia o en gasto compulsivo descontrolado. La dirección depende del trabajo interno con la propia escasez sentida.",
          en: "Reversed, the card marks two possible extremes. On one side, there is a person beginning to release control: learning to share, to trust, to spend what is worth spending. On the other, insecurity deepens into avarice or into uncontrolled compulsive spending. The direction depends on the inner work with your own felt scarcity."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien suelta los celos o, al revés, se vuelve más posesivo. En lo material, generosidad recuperada o gasto descontrolado.",
          en: "In love, someone releases jealousy or, on the contrary, becomes more possessive. Materially, generosity recovered or uncontrolled spending."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte aprendió a dejar respirar al otro, o, al revés, profundizó el control. La diferencia se nota en si los dos pueden tener vida propia sin ansiedad. En lo financiero, hay momento de revisar la relación con el dinero: empezar a compartir lo que se acumulaba, donar, invertir en uno mismo, o perder el control y gastar sin medida. Reconocer qué emoción mueve la decisión cambia el resultado.",
          en: "Emotionally, there is a couple where one side learned to let the other breathe, or, the reverse, deepened the control. The difference shows in whether both can have their own life without anxiety. Financially, there is a moment to review the relationship with money: starting to share what was being accumulated, donating, investing in yourself, or losing control and spending without measure. Recognizing what emotion drives the decision changes the outcome."
        }
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
        corto: {
          es: "Hay un período de dificultad material o emocional. La sensación de exclusión se hace presente.",
          en: "There is a stretch of material or emotional difficulty. The sense of being excluded becomes present."
        },
        largo: {
          es: "La carta describe un momento de carencia: económica, afectiva, o de salud. La sensación de estar fuera mientras otros están adentro pesa. La carta invita a notar que la puerta está más cerca de lo que parece. Pedir ayuda es la decisión que más cuesta y más alivia.",
          en: "The card describes a moment of lack: economic, affective, or of health. The sensation of being outside while others are inside weighs. The card invites noticing that the door is closer than it seems. Asking for help is the decision that costs the most and relieves the most."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, soledad o sensación de estar excluido. En lo material, dificultad económica que aprieta.",
          en: "In love, solitude or the sense of being excluded. Materially, economic difficulty that squeezes."
        },
        largo: {
          es: "Afectivamente, hay una persona atravesando un período de soledad o de sentirse afuera de lo que otros viven: parejas formándose, familias funcionando, amistades cercanas. La envidia y la tristeza se mezclan. En lo financiero, hay aprietos concretos: ingresos insuficientes, deudas acumuladas, gastos imprevistos. Buscar redes de apoyo (familia, amistades, programas de ayuda) baja el peso del orgullo.",
          en: "Emotionally, there is a person crossing a stretch of solitude or of feeling outside what others live: couples forming, families functioning, close friendships. Envy and sadness mix. Financially, there are concrete tight spots: insufficient income, accumulated debts, unforeseen expenses. Seeking support networks (family, friendships, assistance programs) lowers the weight of pride."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El período difícil empieza a aflojar. Hay primeros signos de salida.",
          en: "The difficult stretch begins to ease. There are first signs of getting out."
        },
        largo: {
          es: "La carta invertida marca el comienzo de la recuperación. La situación más dura empieza a quedar atrás, sea por ayuda recibida, por decisión propia, o por simple paso del tiempo. La cicatriz queda y la fuerza también. Aceptar lo que se necesitó pedir es parte del aprendizaje.",
          en: "Reversed, the card marks the start of the recovery. The hardest situation begins to be left behind, whether through help received, through your own decision, or through simple passing of time. The scar remains and the strength as well. Accepting what had to be asked for is part of the learning."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una conexión nueva o reparada saca de la soledad. En lo material, recuperación financiera después de un período duro.",
          en: "In love, a new or repaired connection lifts solitude. Materially, financial recovery after a hard stretch."
        },
        largo: {
          es: "Afectivamente, hay una persona saliendo del aislamiento: una nueva amistad, una pareja que aparece, una familia que se reconecta. La capacidad de recibir afecto, después de un tiempo sin, vuelve despacio. En lo financiero, hay recuperación gradual: deudas reduciéndose, ingresos estabilizándose, gastos bajo control. La gratitud por lo que se sobrevivió evita la repetición.",
          en: "Emotionally, there is a person coming out of isolation: a new friendship, a partner appearing, a family reconnecting. The capacity to receive affection, after a stretch without, returns slowly. Financially, there is gradual recovery: debts being reduced, income stabilizing, expenses under control. Gratitude for what was survived prevents the repetition."
        }
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
        corto: {
          es: "Hay un intercambio equilibrado: dar y recibir circulan sin trabas. La generosidad encuentra su forma justa.",
          en: "There is a balanced exchange: giving and receiving circulate without obstacles. Generosity finds its fair form."
        },
        largo: {
          es: "La carta describe el momento donde los recursos circulan bien. Quien tiene da lo que puede sin perder, quien necesita recibe sin humillación. El equilibrio entre generosidad y cuidado propio se sostiene. Lo que se comparte vuelve, en general, en alguna forma.",
          en: "The card describes the moment where resources circulate well. Whoever has gives what they can without losing, whoever needs receives without humiliation. The balance between generosity and self-care holds. What is shared comes back, generally, in some form."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación donde dar y recibir están en proporción justa. En lo material, ayuda mutua que funciona limpiamente.",
          en: "In love, a relationship where giving and receiving are in fair proportion. Materially, mutual help that works cleanly."
        },
        largo: {
          es: "Afectivamente, hay una pareja o un vínculo cercano donde el cuidado va y vuelve sin contar puntos. La reciprocidad se nota en lo cotidiano. En lo financiero, hay un momento donde la generosidad propia o ajena fluye limpio: prestar a quien devuelve, recibir ayuda sin culpa, donar sin esperar nada. Lo que circula se mantiene en movimiento.",
          en: "Emotionally, there is a couple or a close bond where care goes back and forth without counting points. The reciprocity shows in the everyday. Financially, there is a moment where your own or someone else's generosity flows clean: lending to someone who returns, receiving help without guilt, donating without expecting anything. What circulates stays in motion."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El intercambio se rompió. Alguien da más, otro recibe más, y nadie lo nombra.",
          en: "The exchange has broken. One gives more, one receives more, and nobody names it."
        },
        largo: {
          es: "La carta invertida marca el desbalance crónico en el intercambio. Una parte sostiene económica o emocionalmente a la otra sin reciprocidad real. Las deudas, los favores, las ayudas vienen con condiciones implícitas. La generosidad genuina se distingue de la transacción disfrazada por su ausencia de cobro posterior.",
          en: "Reversed, the card marks chronic imbalance in the exchange. One side sustains the other economically or emotionally without real reciprocity. The debts, the favors, the helps come with implicit conditions. Genuine generosity is distinguished from disguised transaction by its absence of later collection."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona sostiene materialmente a la otra y eso desbalanza el vínculo. En lo material, deudas o favores con costo emocional oculto.",
          en: "In love, one person sustains the other materially and that unbalances the bond. Materially, debts or favors with hidden emotional cost."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde una parte aporta significativamente más recursos materiales y eso modifica la dinámica de poder. La gratitud forzada es resentimiento en cámara lenta. En lo financiero, hay préstamos no devueltos, ayudas dadas con expectativa no nombrada, o favores aceptados que después se cobran emocionalmente. Aclarar las condiciones de un acuerdo material protege el vínculo.",
          en: "Emotionally, there is a couple where one side contributes significantly more material resources and that modifies the dynamic of power. Forced gratitude is resentment in slow motion. Financially, there are unreturned loans, helps given with unnamed expectation, or favors accepted that later get charged emotionally. Clarifying the conditions of a material agreement protects the bond."
        }
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
        corto: {
          es: "Hay un momento de esperar y evaluar. Lo plantado todavía está creciendo.",
          en: "There is a moment of waiting and evaluating. What was planted is still growing."
        },
        largo: {
          es: "La carta describe el período de paciencia entre el esfuerzo y el resultado. Lo trabajado durante meses o años empieza a mostrar señales de avance, sin dar todavía la cosecha completa. La impaciencia es enemiga del proceso. Sostener el cuidado un poco más permite que rinda lo que ya está casi listo.",
          en: "The card describes the period of patience between the effort and the result. What was worked on for months or years begins to show signs of progress, without giving the full harvest yet. Impatience is the enemy of the process. Sustaining the care a little longer allows what is almost ready to yield."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación que crece despacio y vale el tiempo. En lo material, una inversión o proyecto que rinde con paciencia.",
          en: "In love, a relationship that grows slowly and is worth the time. Materially, an investment or project that pays off with patience."
        },
        largo: {
          es: "Afectivamente, hay un vínculo en construcción lenta: amistad que se profundiza con el tiempo, pareja en proceso de afianzar confianza, relación familiar que se repara despacio. La paciencia es la mejor inversión. En lo financiero, hay un trabajo, ahorro o inversión que requiere meses o años para mostrar resultado completo. La consistencia sostenida vence a las apuestas brillantes que no rinden.",
          en: "Emotionally, there is a bond in slow construction: friendship deepening with time, a couple in the process of solidifying trust, a family relationship being repaired slowly. Patience is the best investment. Financially, there is a job, savings, or investment that requires months or years to show full result. Sustained consistency beats brilliant bets that do not pay off."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El esfuerzo invertido no rinde lo esperado. Hay aprendizaje sobre dónde poner energía la próxima vez.",
          en: "The invested effort does not yield as expected. There is learning about where to put energy next time."
        },
        largo: {
          es: "La carta invertida marca la frustración de no recibir lo proporcional al esfuerzo dado. Algo no rindió: el trabajo, la relación, el proyecto, la inversión. Vale revisar si la causa fue mala elección, mala ejecución, o simplemente mala suerte. Lo aprendido del fracaso vale más que el costo del fracaso si se procesa bien.",
          en: "Reversed, the card marks the frustration of not receiving the proportional to the effort given. Something did not yield: the work, the relationship, the project, the investment. It is worth reviewing whether the cause was poor choice, poor execution, or simply bad luck. What is learned from the failure is worth more than the cost of the failure when it is processed well."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una relación trabajada que no creció lo esperado. En lo material, una inversión que no rindió lo proyectado.",
          en: "In love, a worked-on relationship that did not grow as expected. Materially, an investment that did not yield as projected."
        },
        largo: {
          es: "Afectivamente, hay una persona que invirtió tiempo y emoción en un vínculo que no llegó a corresponder al esfuerzo. La decisión es seguir esperando o aceptar que no va a rendir. En lo financiero, hay un proyecto, inversión o trabajo que después de mucho tiempo dio menos de lo planeado. Cortar las pérdidas a tiempo evita perder más, aunque duela admitirlo.",
          en: "Emotionally, there is a person who invested time and emotion in a bond that did not match the effort. The decision is whether to keep waiting or accept that it will not pay off. Financially, there is a project, investment, or job that after long time gave less than planned. Cutting losses on time prevents losing more, even when it hurts to admit."
        }
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
        corto: {
          es: "Hay foco en mejorar lo que se hace. La habilidad se construye con repetición cuidada.",
          en: "There is focus on improving what gets done. Skill is built through cared-for repetition."
        },
        largo: {
          es: "La carta describe la dedicación al oficio. Cada repetición pule un poco más, cada error enseña qué ajustar la próxima. La maestría se construye sin atajos. Lo que se hace con atención sostenida se distingue de lo que se hace por inercia.",
          en: "The card describes dedication to the craft. Each repetition polishes a little more, each error teaches what to adjust next. Mastery is built without shortcuts. What is done with sustained attention distinguishes itself from what is done out of inertia."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien aprende a relacionarse mejor con paciencia. En lo material, dedicación al trabajo que da frutos visibles.",
          en: "In love, someone learns to relate better with patience. Materially, dedication to work that yields visible fruits."
        },
        largo: {
          es: "Afectivamente, hay una persona afinando su capacidad de querer: aprende a comunicar mejor, a escuchar, a poner límites, a ofrecer presencia. La pareja se beneficia del trabajo personal. En lo financiero, hay dedicación profesional que rinde: especialización en un oficio, mejora de habilidades, calidad consistente del trabajo. La reputación construida así genera oportunidades.",
          en: "Emotionally, there is a person refining their capacity to love: learning to communicate better, to listen, to set limits, to offer presence. The couple benefits from the personal work. Financially, there is professional dedication that pays off: specialization in a craft, improvement of skills, consistent quality of work. The reputation built this way generates opportunities."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "O hay descuido en la calidad o, al revés, perfeccionismo que paraliza.",
          en: "Either there is carelessness in quality or, on the contrary, paralyzing perfectionism."
        },
        largo: {
          es: "La carta invertida marca dos errores opuestos. Por un lado, descuido: trabajo apurado, sin atención al detalle, hecho para salir del paso. Por otro, perfeccionismo paralizante: nada se entrega porque nada está suficientemente bien. La maestría real vive entre los extremos: cuidado sin parálisis.",
          en: "Reversed, the card marks two opposite errors. On one side, carelessness: rushed work, without attention to detail, done to get through. On the other, paralyzing perfectionism: nothing gets delivered because nothing is good enough. Real mastery lives between the extremes: care without paralysis."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien hace los gestos sin atención real. En lo material, trabajo descuidado o perfeccionismo que bloquea entregar.",
          en: "In love, someone goes through the gestures without real attention. Materially, careless work or perfectionism that blocks delivery."
        },
        largo: {
          es: "Afectivamente, hay una persona que cumple los gestos del vínculo sin presencia real: presente físicamente y ausente emocionalmente, atento por inercia más que por interés. El otro lo nota antes de poder nombrarlo. En lo financiero, hay un trabajo donde la calidad bajó por exceso de carga, desgano o desmotivación. La salida pasa por reconectar con por qué se hace lo que se hace.",
          en: "Emotionally, there is a person fulfilling the gestures of the bond without real presence: physically present and emotionally absent, attentive out of inertia rather than out of interest. The other notices it before being able to name it. Financially, there is a job where quality dropped through excess load, listlessness, or demotivation. The way out goes through reconnecting with why what is being done is being done."
        }
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
        corto: {
          es: "Hay autosuficiencia ganada con esfuerzo. La libertad concreta es resultado del trabajo invertido.",
          en: "There is self-sufficiency earned through effort. Concrete freedom is the result of invested work."
        },
        largo: {
          es: "La carta describe la cosecha personal de un largo trabajo. Hay independencia material y emocional, capacidad de disfrutar lo construido sin depender de otros para ser feliz. La libertad acá viene de la autosuficiencia más que del aislamiento. Lo logrado pide ser saboreado antes de pensar en lo siguiente.",
          en: "The card describes the personal harvest of long work. There is material and emotional independence, capacity to enjoy what was built without depending on others to be happy. Freedom here comes from self-sufficiency more than from isolation. What was achieved asks to be savored before thinking about the next thing."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona completa que elige el vínculo sin necesitarlo para existir. En lo material, prosperidad material disfrutada con conciencia.",
          en: "In love, a complete person who chooses the bond without needing it to exist. Materially, prosperity enjoyed with awareness."
        },
        largo: {
          es: "Afectivamente, hay una persona que llega al vínculo desde la plenitud propia, sin el vacío que pide ser llenado. La pareja se elige libremente. En lo financiero, hay holgura material concreta: ahorros consolidados, propiedades, recursos suficientes para vivir bien. La gratitud por lo logrado se traduce en disfrute sin culpa.",
          en: "Emotionally, there is a person who arrives at the bond from their own fullness, without the void asking to be filled. The partner is freely chosen. Financially, there is concrete material ease: consolidated savings, properties, sufficient resources to live well. Gratitude for what was achieved translates into enjoyment without guilt."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La autosuficiencia se volvió aislamiento. Hay independencia que pesa más de lo que aporta.",
          en: "Self-sufficiency has turned into isolation. There is independence weighing more than it gives."
        },
        largo: {
          es: "La carta invertida marca el lado oscuro de la autonomía. La persona se construyó tan independiente que ya no sabe cómo dejar entrar a otros. La libertad se confundió con soledad, la autosuficiencia con desconfianza generalizada. Recuperar el balance pide aceptar recibir como práctica saludable.",
          en: "Reversed, the card marks the dark side of autonomy. The person built themselves so independent that they no longer know how to let others in. Freedom got confused with solitude, self-sufficiency with generalized distrust. Recovering balance asks for accepting receiving as a healthy practice."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien usa la autonomía como excusa para no comprometerse. En lo material, lujo aparente sostenido por deuda o dependencia oculta.",
          en: "In love, someone uses autonomy as an excuse not to commit. Materially, apparent luxury sustained by debt or hidden dependence."
        },
        largo: {
          es: "Afectivamente, hay una persona que prefiere la independencia a profundizar un vínculo, o que usa la frase no necesito a nadie como escudo contra la vulnerabilidad. La elección es legítima si es consciente; si es defensa, conviene mirarla. En lo financiero, hay un nivel de vida que aparenta ser holgura pero se sostiene con tarjetas, préstamos o ayuda no reconocida. Aclarar la situación real es lo que permite ajustar.",
          en: "Emotionally, there is a person who prefers independence to deepening a bond, or who uses the phrase 'I do not need anyone' as a shield against vulnerability. The choice is legitimate when conscious; if it is defense, it is worth looking at. Financially, there is a standard of living that appears to be ease but is sustained with cards, loans, or unacknowledged help. Clarifying the real situation is what allows adjustment."
        }
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
        corto: {
          es: "Hay solidez material que trasciende lo individual. Lo construido beneficia a más de uno y por más tiempo.",
          en: "There is material solidity that goes beyond the individual. What was built benefits more than one and for more time."
        },
        largo: {
          es: "La carta describe la prosperidad heredable. Lo que se logró tiene carácter de legado: una casa familiar, un negocio que pasa generaciones, una tradición que sostiene. La satisfacción acá es colectiva más que individual. Lo que se construye con visión de largo plazo deja huella concreta.",
          en: "The card describes inheritable prosperity. What was achieved has the character of legacy: a family home, a business that crosses generations, a tradition that sustains. The satisfaction here is collective more than individual. What is built with long-term vision leaves a concrete mark."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una familia funcionando con armonía y proyecto compartido. En lo material, estabilidad consolidada que beneficia a varios.",
          en: "In love, a family functioning with harmony and shared project. Materially, consolidated stability that benefits several."
        },
        largo: {
          es: "Afectivamente, hay una vida familiar plena: pareja, hijos, abuelos, círculo cercano funcionando como tejido. El sentido de pertenencia a algo más grande que uno mismo está activo. En lo financiero, hay solidez compartida: casa propia, ahorros para los hijos, plan de jubilación, herencia preparada. Lo construido funciona como red para varias generaciones.",
          en: "Emotionally, there is a full family life: partner, children, grandparents, close circle functioning as fabric. The sense of belonging to something larger than yourself is active. Financially, there is shared solidity: home owned, savings for the children, retirement plan, inheritance prepared. What was built works as a net for several generations."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "Lo que parecía sólido tiene grietas. La estabilidad familiar o material muestra problemas no resueltos.",
          en: "What looked solid has cracks. Family or material stability shows unresolved problems."
        },
        largo: {
          es: "La carta invertida marca disputas en lo que debería ser refugio. Familia con conflictos por dinero, herencias peleadas, negocios familiares que se rompen. Lo que se construyó como base se vuelve campo de batalla. Reparar requiere separar el afecto de la cuenta, sin negar ninguno.",
          en: "Reversed, the card marks disputes in what should be shelter. Family with conflicts over money, fought-over inheritances, family businesses that break. What was built as base becomes battlefield. Repairing requires separating the affection from the account, without denying either."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, conflicto familiar serio por dinero o herencia. En lo material, pérdida de patrimonio o negocio familiar en problemas.",
          en: "In love, serious family conflict over money or inheritance. Materially, loss of patrimony or family business in trouble."
        },
        largo: {
          es: "Afectivamente, hay una familia con tensiones serias por la cuestión material: una herencia disputada, un préstamo no devuelto entre hermanos, un negocio compartido que se rompe. Lo afectivo se daña al confundirse con lo financiero. En lo financiero, hay riesgo o pérdida del patrimonio acumulado: deudas que comprometen lo familiar, mala gestión de un negocio que viene generaciones, decisiones impulsivas que dilapidan. Volver a la cabeza fría sobre números es lo que protege.",
          en: "Emotionally, there is a family with serious tensions over the material question: a disputed inheritance, an unreturned loan among siblings, a shared business that breaks. The emotional gets damaged by being confused with the financial. Financially, there is risk or loss of the accumulated patrimony: debts that compromise the family, mismanagement of a business that runs for generations, impulsive decisions that squander. Going back to a cool head about numbers is what protects."
        }
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
        corto: {
          es: "Hay una etapa de aprendizaje activo. La curiosidad apunta a algo concreto y útil.",
          en: "There is a stage of active learning. Curiosity points to something concrete and useful."
        },
        largo: {
          es: "La carta describe el momento de empezar a estudiar algo en serio. Hay ambición sana de mejorar, de aprender un oficio, de prepararse para algo más grande. La paciencia para sostener el aprendizaje es lo que distingue al que llega del que abandona. Cada paso pequeño cuenta más de lo que parece.",
          en: "The card describes the moment of starting to study something seriously. There is healthy ambition to improve, to learn a craft, to prepare for something larger. Patience to sustain the learning is what distinguishes the one who arrives from the one who quits. Each small step counts more than it seems."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien con disposición de aprender a ser pareja entra en escena. En lo material, una propuesta o noticia material concreta llega.",
          en: "In close ties, someone willing to learn how to be a partner enters the scene. Materially, a concrete proposal or piece of news arrives."
        },
        largo: {
          es: "Afectivamente, hay una persona joven o nueva en lo emocional, dispuesta a aprender lo que el vínculo requiere: paciencia, compromiso, presencia. La intimidad se construye despacio, con disposición a equivocarse y corregir. En lo financiero, llega una noticia o propuesta concreta: una oferta de trabajo, una oportunidad de estudio remunerado, una pista de inversión. Vale investigarla con cuidado antes de actuar.",
          en: "Emotionally, there is a person young or new to the emotional, willing to learn what the bond requires: patience, commitment, presence. Intimacy is built slowly, with willingness to make mistakes and correct. Financially, a concrete proposal or piece of news arrives: a job offer, a paid study opportunity, an investment lead. It is worth investigating it carefully before acting."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "El foco se dispersa antes de profundizar. Hay ambición sin sostén.",
          en: "The focus scatters before going deep. There is ambition without ground."
        },
        largo: {
          es: "La carta invertida marca la dificultad para mantener la atención en una sola dirección. Cada idea nueva desplaza a la anterior, cada estudio se abandona antes de rendir. La energía está pero falta disciplina. Comprometerse con una sola cosa el tiempo suficiente para que dé fruto es el trabajo pendiente.",
          en: "Reversed, the card marks the difficulty of holding attention in a single direction. Each new idea displaces the previous, each course of study gets abandoned before yielding. The energy is there but discipline is missing. Committing to a single thing long enough for it to bear fruit is the pending work."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien que muestra interés y luego desaparece. En lo material, una propuesta entusiasta que después no se concreta.",
          en: "In love, someone who shows interest and then disappears. Materially, an enthusiastic proposal that later does not materialize."
        },
        largo: {
          es: "Afectivamente, hay una persona en juego que muestra entusiasmo inicial y después se distrae: empieza relaciones y las abandona, hace promesas que olvida, atención que se evapora. La consistencia falta. En lo financiero, una propuesta llega con presentación atractiva y después no se materializa: el trabajo no se concreta, la oferta tenía letra chica, la oportunidad se enfrió. Verificar antes de comprometer protege.",
          en: "Emotionally, there is a person in play who shows initial enthusiasm and then gets distracted: starts relationships and abandons them, makes promises and forgets them, attention that evaporates. Consistency is missing. Financially, a proposal arrives with attractive presentation and later does not materialize: the job does not close, the offer had fine print, the opportunity cooled. Verifying before committing protects."
        }
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
        corto: {
          es: "Hay paciencia y consistencia funcionando. El avance es lento y constante, sin aspavientos.",
          en: "There is patience and consistency at work. The advance is slow and constant, without fanfare."
        },
        largo: {
          es: "La carta describe el trabajo metódico y confiable. La velocidad y el brillo no son la fuerza de esta carta: lo es el cumplimiento sostenido. La rutina bien hecha produce más que el impulso brillante que se apaga rápido. Lo aburrido del compromiso es también su fuerza.",
          en: "The card describes methodical and reliable work. Speed and brilliance are not the strength of this card: sustained delivery is. The well-done routine produces more than the brilliant impulse that fades fast. The boring quality of commitment is also its strength."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja estable y previsible que cumple lo que promete. En lo material, manejo financiero conservador y consistente.",
          en: "In love, a stable and predictable couple that delivers what they promise. Materially, conservative and consistent financial handling."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde la confianza viene de la consistencia: el otro está cuando dice que va a estar, hace lo que dice que va a hacer, sostiene lo cotidiano sin drama. La estabilidad puede leerse como aburrida y sostiene mejor que cualquier intensidad. En lo financiero, hay manejo conservador del dinero: ahorrar de a poco, evitar riesgos, planificar a largo plazo. Lo que crece despacio resiste mejor que lo que crece rápido.",
          en: "Emotionally, there is a bond where trust comes from consistency: the other is there when they say they will be, does what they say they will do, sustains the everyday without drama. Stability can read as boring and holds better than any intensity. Financially, there is conservative handling of money: saving little by little, avoiding risk, planning long term. What grows slowly resists better than what grows fast."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La rutina se volvió encierro. Hay estancamiento donde antes había constancia.",
          en: "Routine has turned into confinement. There is stagnation where there used to be steadiness."
        },
        largo: {
          es: "La carta invertida marca el momento donde la consistencia se transformó en rigidez. La rutina protege de la incertidumbre y al mismo tiempo bloquea cualquier crecimiento. Hay aburrimiento sin nombrar, falta de chispa, sensación de estar repitiendo sin avanzar. Romper algo del patrón devuelve aire a lo cotidiano.",
          en: "Reversed, the card marks the moment where consistency turned into rigidity. Routine protects from uncertainty and at the same time blocks any growth. There is unnamed boredom, lack of spark, sense of repeating without advancing. Breaking some of the pattern returns air to the everyday."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una pareja se volvió previsible al punto de aburrir. En lo material, trabajo sostenido sin alegría que pesa más que aporta.",
          en: "In love, a couple has become predictable to the point of dullness. Materially, sustained work without joy that weighs more than it gives."
        },
        largo: {
          es: "Afectivamente, hay una pareja que perdió la chispa por exceso de rutina: las mismas conversaciones, los mismos planes, la misma cama, sin que nada nuevo entre. La estabilidad protege y también puede asfixiar. En lo financiero, hay un trabajo que se sostiene por necesidad pero ya no aporta nada más allá del sueldo: aburrimiento, agotamiento sutil, sensación de pérdida de tiempo. Vale evaluar si conviene cambiar o reactivar lo que está.",
          en: "Emotionally, there is a couple that lost the spark through excess routine: the same conversations, the same plans, the same bed, without anything new entering. Stability protects and can also suffocate. Financially, there is a job sustained out of necessity but no longer giving anything beyond the salary: boredom, subtle exhaustion, sense of wasting time. It is worth evaluating whether to change or to reactivate what is there."
        }
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
          en: "You are in a position to produce and to care at the same time. What you make becomes shelter, for yourself and for others."
        },
        largo: {
          es: "Hay una capacidad concreta funcionando bien: manejas lo material sin perder el aire para lo emocional. La casa, el cuerpo, las cuentas, cada cosa en su lugar sin que parezca esfuerzo. La fuerza acá es útil sin necesidad de ser ostentosa. Otros se acercan porque saben que contigo las cosas funcionan.",
          en: "A concrete capacity is working well: you handle the material side without running out of air for the emotional one. The home, the body, the accounts, each in its place without strain. The strength here is useful without needing to be showy. Others gravitate because with you, things work."
        }
      },
      relacional: {
        corto: {
          es: "Estabilidad y nutrición en lo afectivo. En lo material, una seguridad ganada con paciencia.",
          en: "Stability and nourishment in love. Materially, a security earned through patience."
        },
        largo: {
          es: "En lo afectivo, lo que sostiene es la consistencia, sin necesidad de dramatismo. El cuidado mutuo aparece en lo cotidiano: tiempo, presencia, tareas compartidas. En lo financiero, una meta de seguridad se concreta. Lo construido pide ser disfrutado sin culpa.",
          en: "In love, what holds is consistency, with no need for drama. Mutual care shows up in the everyday: time, presence, shared tasks. Financially, a goal of security takes concrete shape. What has been built asks to be enjoyed without guilt."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La capacidad sigue ahí, pero el cuidado está desbalanceado. Mucho volcado hacia afuera, poco hacia el centro propio.",
          en: "The capacity remains, but the care is unbalanced. Much poured outward, little kept for the self."
        },
        largo: {
          es: "La generosidad se inclina más hacia los demás y deja poco para uno mismo. O al revés: hay un cierre que hace que todo lo material se sienta como amenaza. El desbalance está entre lo que se da y lo que se reserva. La salida pasa por revisar a dónde se va lo que ya hay: tiempo, dinero, energía.",
          en: "Generosity tilts toward others and leaves little for the self. Or the reverse: a closing-off that makes anything material feel like a threat. The imbalance lives between what is given and what is kept back. The way out goes through tracking where what is already there ends up: time, money, energy."
        }
      },
      relacional: {
        corto: {
          es: "Inseguridad disfrazada de control. En el dinero, la cuenta no cuadra entre lo que entra y lo que se va.",
          en: "Insecurity dressed as control. In money matters, the numbers do not add up between what comes in and what goes out."
        },
        largo: {
          es: "En lo afectivo, los celos, la posesividad o la dependencia material rompen el flujo natural de la cercanía. El origen está en una inseguridad propia que se proyecta hacia afuera. En lo financiero, hay desorden: gastos impulsivos por incomodidad emocional, o avaricia que aleja a la gente que importa. Reordenar pide mirar primero qué falta de verdad adentro.",
          en: "In love, jealousy, possessiveness, or material dependence break the natural flow of closeness. The source lies in your own insecurity projected outward. Financially, there is disorder: impulsive spending out of emotional discomfort, or hoarding that pushes away the people who matter. Reordering starts with looking at what is genuinely missing within."
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
        corto: {
          es: "Hay maestría material lograda con esfuerzo. La abundancia se ejerce con responsabilidad y cuidado del entorno.",
          en: "There is material mastery achieved through effort. Abundance gets exercised with responsibility and care for the surroundings."
        },
        largo: {
          es: "La carta describe la culminación del trabajo material. Hay éxito concreto, generosidad ejercida, capacidad de proteger y proveer al círculo cercano. La autoridad acá viene de haber construido desde abajo. Lo logrado se sostiene porque se entiende cómo se construyó.",
          en: "The card describes the culmination of material work. There is concrete success, generosity exercised, capacity to protect and provide for the close circle. The authority here comes from having built from below. What was achieved sustains itself because it is understood how it got built."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, una persona que provee y cuida con responsabilidad. En lo material, prosperidad consolidada y generosidad bien ejercida.",
          en: "In love, a person who provides and cares with responsibility. Materially, consolidated prosperity and well-exercised generosity."
        },
        largo: {
          es: "Afectivamente, hay un vínculo donde una parte (o las dos) ofrece base material y emocional sólida: presencia confiable, recursos compartidos sin alardes, decisiones tomadas pensando en lo común. En lo financiero, hay maestría con el dinero: inversiones bien evaluadas, generosidad calibrada con quien la merece, capacidad de hacer rendir lo que se tiene. La reputación construida funciona como capital propio.",
          en: "Emotionally, there is a bond where one side (or both) offers solid material and emotional ground: reliable presence, shared resources without showing off, decisions made considering the common good. Financially, there is mastery with money: well-evaluated investments, generosity calibrated with whoever deserves it, capacity to make what is held yield. The reputation built works as your own capital."
        }
      }
    },
    invertida: {
      general: {
        corto: {
          es: "La maestría se volvió avaricia o materialismo sin alma. El éxito perdió su sentido.",
          en: "Mastery has turned into avarice or soulless materialism. Success has lost its meaning."
        },
        largo: {
          es: "La carta invertida marca el costo de medir todo en lo material. Hay prosperidad que dejó de generar bienestar: lujo sin disfrute, acumulación sin generosidad, éxito sin propósito más allá del éxito. La avaricia o la corrupción aparecen cuando el dinero pasa de ser medio a ser fin. Volver a preguntarse para qué se trabaja es el ajuste necesario.",
          en: "Reversed, the card marks the cost of measuring everything in the material. There is prosperity that has stopped generating well-being: luxury without enjoyment, accumulation without generosity, success without purpose beyond success. Avarice or corruption appears when money goes from being means to being end. Asking again what one works for is the necessary adjustment."
        }
      },
      relacional: {
        corto: {
          es: "En lo afectivo, alguien usa el dinero para controlar al otro. En lo material, decisiones financieras turbias o avaricia que aleja a la gente.",
          en: "In love, someone uses money to control the other. Materially, murky financial decisions or avarice that pushes people away."
        },
        largo: {
          es: "Afectivamente, hay una pareja donde uno ejerce poder a través de los recursos: distribuye o retiene dinero según conveniencia, marca jerarquía con la cuenta, genera dependencia material. El cuidado se transforma en manipulación. En lo financiero, hay decisiones donde la ambición pasó por encima de la ética: negocios sucios, acuerdos al límite de lo legal, avaricia que perjudica a otros. Las cuentas con la propia integridad son las que después pesan más.",
          en: "Emotionally, there is a couple where one exercises power through resources: distributing or withholding money according to convenience, marking hierarchy through the account, generating material dependence. Care turns into manipulation. Financially, there are decisions where ambition stepped over ethics: dirty businesses, agreements at the limit of what is legal, avarice that harms others. The accounts with your own integrity are what later weigh the most."
        }
      }
    },
    fuentes_consultadas: ["Waite 1910", "Labyrinthos", "Biddy Tarot"]
  }
];
