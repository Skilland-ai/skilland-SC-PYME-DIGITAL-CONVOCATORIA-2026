# Arquitectura de skills upstream reutilizables

## 1. Objetivo de esta arquitectura

Definir la primera cadena reusable de skills para pasar de `documentación bruta / idea de oportunidad` a:

- lectura estratégica;
- context/knowledge pack;
- arquitectura de oferta;
- lógica de elegibilidad y cualificación comercial;
- segmentación ICP;
- QA/compliance;
- readiness para funnel y artefactos.

Esta arquitectura no busca crear todavía las skills finales en `shared/skills/`.

Busca fijar:

- orden correcto de fases;
- contratos de input/output;
- checkpoints obligatorios con el usuario;
- límites de alcance;
- puntos donde una skill debe parar y no invadir la siguiente.

## 2. Qué queda dentro y qué queda fuera

### Dentro

- `project-opportunity-intake`
- `strategic-opportunity-mapper`
- `context-knowledge-pack-builder`
- `offer-architect`
- `eligibility-and-commercial-qualifier`
- `icp-and-segmentation`
- `compliance-qa-reviewer`

### Fuera

- diseño detallado de funnel;
- builders de one pager, landing o copy;
- adaptadores de marca/voice de `Skilland`;
- deploy, publicación o automatización operativa;
- creación real de files en `shared/skills/` o `shared/agents/`;
- rediseño del repo.

Principio rector:

- primero se estabiliza la máquina upstream de decisión;
- después se construyen funnel y builders downstream.

## 3. Pipeline propuesto

```text
raw opportunity docs / user idea
→ project-opportunity-intake
→ strategic-opportunity-mapper
→ compliance-qa-reviewer (Gate 1: strategy)
→ context-knowledge-pack-builder
→ offer-architect
→ compliance-qa-reviewer (Gate 2: offer)
→ eligibility-and-commercial-qualifier
→ icp-and-segmentation
→ compliance-qa-reviewer (Gate 3: readiness)
→ readiness for funnel/artifacts
```

Notas de arquitectura:

- `project-opportunity-intake` absorbe y encuadra; no formula todavía tesis estratégica.
- `strategic-opportunity-mapper` decide cuál es el juego que merece la pena jugar.
- `context-knowledge-pack-builder` convierte la fuente y la estrategia validada en un pack factual y operativo para downstream.
- `offer-architect` aterriza la oportunidad en propuesta comercial y límites.
- `eligibility-and-commercial-qualifier` diseña la lógica de filtrado de casos.
- `icp-and-segmentation` define a quién priorizar comercialmente como patrón repetible.
- `compliance-qa-reviewer` no es una fase lineal única; es un gate lateral recurrente.

## 4. Tabla resumen de skills

| Skill | Propósito | Inputs | Outputs | Checkpoint de usuario | No debe hacer | Siguiente skill |
|---|---|---|---|---|---|---|
| `project-opportunity-intake` | Convertir material bruto en intake estructurado | docs brutos, notas del usuario, links, idea inicial | intake brief, inventario de fuentes, unknowns, preguntas mínimas | validar qué oportunidad y qué outcome se persigue | diseñar oferta, ICP o funnel | `strategic-opportunity-mapper` |
| `strategic-opportunity-mapper` | Formular la tesis estratégica del caso | intake brief, fuentes principales, restricciones conocidas | strategic opportunity brief, hipótesis, riesgos, no-go estratégicos | validar postura, actores, no negociables y criterio de éxito | resumir normativa sin decidir nada, bajar a packs | `compliance-qa-reviewer` |
| `context-knowledge-pack-builder` | Producir el pack factual/operativo que necesitará downstream | strategy validada, raw docs, facts/constraints disponibles | context master brief, facts register, constraints matrix, FAQ/risk annex si aplica | validar que el pack cubre las preguntas reales de negocio/operación | rehacer estrategia u ofrecer packs | `offer-architect` |
| `offer-architect` | Traducir estrategia + context pack a oferta, packs y guardrails | strategy brief, context/knowledge pack, objetivos de negocio | offer architecture brief, packs, pricing logic, claims permitidos, no-go | validar hero offer, framing, límites y promesas | diseñar funnel o builders | `compliance-qa-reviewer` |
| `eligibility-and-commercial-qualifier` | Diseñar la lógica de filtrado de casos y avance comercial | context pack, offer architecture, criterios del caso | qualification matrix, hard gates, soft gates, go/no-go logic, preguntas al lead | validar umbrales de `No-go / Go con cautelas / Go preliminar` | definir ICP de mercado o priorizar segmentos escalables | `icp-and-segmentation` |
| `icp-and-segmentation` | Definir segmentos prioritarios, beachhead y anti-ICP | offer architecture, qualification matrix, hipótesis de mercado, señales conocidas | ICP segmentation brief, segmentos, señales, anti-ICP, beachhead recomendado | validar segmento prioritario y criterios de exclusión | absorber la lógica legal de elegibilidad o escribir copy final | `compliance-qa-reviewer` |
| `compliance-qa-reviewer` | Revisar claims, coherencia, riesgo y readiness entre fases | artifacts de estrategia, oferta, qual/ICP según gate | QA/compliance report, bloqueos, ajustes mínimos, autorización o stop | validar líneas rojas y riesgos aceptables | reescribir estrategia u oferta en silencio, construir builders | readiness o siguiente gate |

## 5. Contrato de cada skill

### Nombre

`project-opportunity-intake`

### Rol

Convertir una oportunidad todavía caótica en un brief de intake usable por el resto del pipeline.

### Cuándo se invoca

- cuando el usuario trae documentación bruta;
- cuando el caso arranca solo con una idea y varios documentos dispersos;
- cuando todavía no está claro cuál es el outcome real del proyecto.

### Inputs obligatorios

- documento bruto o idea inicial del usuario;
- cualquier fuente primaria disponible;
- objetivo preliminar del usuario, aunque sea borroso.

### Inputs opcionales

- notas estratégicas previas;
- repos externos de referencia como contexto opcional;
- restricciones conocidas de plazo, canal o marca.

### Outputs esperados

- `opportunity intake brief`;
- inventario de fuentes;
- mapa inicial de actores;
- unknowns críticos;
- lista mínima de preguntas;
- propuesta de siguiente fase.

### Preguntas que debe hacer al usuario

- ¿Qué oportunidad estás intentando explotar realmente?
- ¿Cuál sería el outcome útil de este caso si sale bien?
- ¿Hay alguna restricción dura que no aparezca en los documentos?

Debe preguntar solo si no puede inferirlo de las fuentes.

### Criterios de calidad

- entiende el caso como oportunidad, no como archivo;
- distingue fuente primaria de hipótesis;
- no inventa tesis estratégica;
- deja claro qué falta para mapear estrategia.

### Anti-patterns

- resumir documentos sin encuadrar la jugada;
- saltar a oferta;
- asumir ICP;
- producir preguntas decorativas en vez de preguntas bloqueantes.

### Condición de parada

Parar cuando exista un intake brief suficiente para que otra skill pueda decidir estrategia.

### Siguiente paso recomendado

`strategic-opportunity-mapper`

---

### Nombre

`strategic-opportunity-mapper`

### Rol

Convertir el intake y las fuentes en una tesis estratégica accionable.

### Cuándo se invoca

- cuando ya existe intake brief;
- cuando hace falta decidir cómo leer la oportunidad antes de construir contexto y oferta.

### Inputs obligatorios

- intake brief;
- fuentes primarias clave;
- restricciones duras conocidas.

### Inputs opcionales

- contexto parcial existente;
- notas de negocio del usuario;
- precedentes comparables.

### Outputs esperados

- `strategic opportunity brief`;
- actor map;
- tesis central;
- ángulos de oportunidad;
- riesgos estratégicos;
- no-go estratégicos;
- decisiones abiertas;
- checkpoint de validación.

### Preguntas que debe hacer al usuario

- ¿Qué actor queremos ser en esta oportunidad?
- ¿Qué outcome de negocio estamos optimizando?
- ¿Hay una postura estratégica que ya venga decidida?

### Criterios de calidad

- fija el juego antes del detalle;
- aclara actores, incentivos y restricciones;
- distingue oportunidad, riesgo y postura;
- deja explícito qué no debe hacerse.

### Anti-patterns

- producir un memo legal sin tesis;
- bajar a packs o pricing;
- convertir la estrategia en narrativa de landing;
- esconder decisiones abiertas.

### Condición de parada

Parar cuando la tesis estratégica haya quedado validable por el usuario.

### Siguiente paso recomendado

`compliance-qa-reviewer` en modo `Gate 1: strategy`

---

### Nombre

`context-knowledge-pack-builder`

### Rol

Construir el pack factual y operativo que usarán oferta, cualificación e ICP.

### Cuándo se invoca

- después de validar la tesis estratégica;
- cuando hace falta convertir documentos largos en formatos downstream.

### Inputs obligatorios

- strategic opportunity brief validado;
- fuentes primarias;
- contexto existente si lo hay.

### Inputs opcionales

- estructura de templates previa;
- referencias externas solo como adaptadores, nunca como dependencia.

### Outputs esperados

- `context master brief`;
- `facts register`;
- `constraints matrix`;
- `glossary` si aplica;
- `links register` si aplica;
- `FAQ/risk annex` si el caso lo necesita;
- lista de unknowns vivos.

### Preguntas que debe hacer al usuario

- ¿Qué preguntas reales debe poder responder este pack downstream?
- ¿Hay alguna categoría de riesgo o restricción que quieras ver separada?

### Criterios de calidad

- convierte fuente en herramienta operativa;
- separa facts, constraints y unknowns;
- cubre la información necesaria para oferta y cualificación;
- funciona tanto para subvenciones como para B2B general.

### Anti-patterns

- duplicar el intake;
- reabrir la tesis estratégica;
- hacer un solo resumen largo;
- depender de que el usuario rellene manualmente todo lo importante.

### Condición de parada

Parar cuando el pack ya sirva como base de trabajo para oferta y gates posteriores.

### Siguiente paso recomendado

`offer-architect`

---

### Nombre

`offer-architect`

### Rol

Traducir la oportunidad ya entendida a oferta, packs, alcance y claims permitidos.

### Cuándo se invoca

- cuando estrategia y context pack ya están aprobados;
- cuando toca decidir qué se va a vender y bajo qué límites.

### Inputs obligatorios

- strategic opportunity brief validado;
- context/knowledge pack;
- outcome de negocio deseado.

### Inputs opcionales

- referencias de oferta;
- ejemplos de servicios existentes;
- límites comerciales o de delivery ya conocidos.

### Outputs esperados

- `offer architecture brief`;
- hero offer;
- familias de packs o servicios;
- lógica de alcance;
- claims permitidos y claims a evitar;
- guardrails de pricing;
- no-go comerciales.

### Preguntas que debe hacer al usuario

- ¿Qué parte de la oferta quieres que quede visible y cuál interna?
- ¿Hay límites de servicio o delivery ya decididos?
- ¿Qué promesa no estás dispuesto a hacer?

### Criterios de calidad

- convierte estrategia en producto/oferta legible;
- no promete lo que cumplimiento o delivery no soportan;
- deja visible la frontera entre núcleo, auxiliares y fuera de alcance;
- no depende todavía de funnel o diseño.

### Anti-patterns

- vender un catálogo infinito;
- pricing sin scoping;
- usar copy bonita en lugar de arquitectura de oferta;
- convertir customización extrema en default.

### Condición de parada

Parar cuando el usuario pueda validar una arquitectura de oferta y sus límites.

### Siguiente paso recomendado

`compliance-qa-reviewer` en modo `Gate 2: offer`

---

### Nombre

`eligibility-and-commercial-qualifier`

### Rol

Diseñar la lógica de filtrado de casos concretos: hard gates, soft gates y estados de avance.

### Cuándo se invoca

- cuando la oferta ya existe;
- cuando hay que decidir cómo filtrar casos o leads antes de segmentar mercado.

### Inputs obligatorios

- context/knowledge pack;
- offer architecture;
- restricciones económicas, legales u operativas relevantes.

### Inputs opcionales

- ejemplos de casos reales;
- formularios o preguntas ya usadas por el equipo;
- fricciones conocidas en venta.

### Outputs esperados

- `eligibility/commercial qualification matrix`;
- hard filters;
- soft filters;
- `No-go / Go con cautelas / Go preliminar`;
- preguntas de screening;
- señales de escalado interno;
- documentación mínima a pedir.

### Preguntas que debe hacer al usuario

- ¿Qué condiciones deben bloquear avance aunque el caso parezca atractivo?
- ¿Qué señales te hacen perder tiempo comercial casi siempre?
- ¿Qué nivel de evidencia mínima necesitas para avanzar?

### Criterios de calidad

- separa filtro duro de viabilidad comercial;
- permite decidir rápido sin falsear unknowns;
- deja claro qué casos necesitan reformulación;
- no absorbe la decisión de ICP.

### Anti-patterns

- confundir elegibilidad con segmento ideal;
- tratar cualquier case apto como buen lead;
- esconder fricciones económicas o operativas;
- diseñar preguntas demasiado largas para screening.

### Condición de parada

Parar cuando exista una matriz usable para filtrar casos individuales.

### Siguiente paso recomendado

`icp-and-segmentation`

---

### Nombre

`icp-and-segmentation`

### Rol

Definir qué tipos de empresa/persona conviene priorizar comercialmente como patrón repetible.

### Cuándo se invoca

- cuando ya existe offer architecture;
- cuando la lógica de qualificación de caso ya está clara;
- antes de funnel, mensajes y builders.

### Inputs obligatorios

- offer architecture;
- eligibility/commercial qualification matrix;
- hipótesis de mercado o señal del usuario.

### Inputs opcionales

- ejemplos de clientes reales;
- señales de mercado;
- skill/referencias ICP ya existentes.

### Outputs esperados

- `ICP segmentation brief`;
- segmentos candidatos;
- beachhead recomendado;
- señales observables;
- anti-ICP;
- criterios de descarte;
- backlog de validación de segmento.

### Preguntas que debe hacer al usuario

- ¿Qué segmento sospechas que puede cerrar más rápido o con más valor?
- ¿Qué segmentos no quieres perseguir aunque pudieran comprar?
- ¿Tienes ejemplos reales de clientes que encajen o que no encajen?

### Criterios de calidad

- separa mercado objetivo de elegibilidad legal;
- obliga a elegir un beachhead;
- produce señales utilizables downstream;
- deja claro qué sigue siendo hipótesis.

### Anti-patterns

- usar el checklist legal como ICP;
- definir segmentos vagos;
- intentar hacer mensaje o funnel final;
- elegir varios segmentos sin priorización.

### Condición de parada

Parar cuando exista un beachhead validable y criterios claros de anti-ICP.

### Siguiente paso recomendado

`compliance-qa-reviewer` en modo `Gate 3: readiness`

---

### Nombre

`compliance-qa-reviewer`

### Rol

Actuar como gate transversal de coherencia, claims, trazabilidad y riesgo.

### Cuándo se invoca

- después de estrategia;
- después de oferta;
- después de qualificación + ICP;
- antes de funnel y artifacts.

### Inputs obligatorios

- artifacts de la fase a revisar;
- facts/constraints vigentes;
- lista de decisiones ya validadas.

### Inputs opcionales

- criterios de marca o legales adicionales;
- ejemplos de claims prohibidos o zonas grises.

### Outputs esperados

- `QA/compliance report`;
- pass / caution / stop;
- lista corta de bloqueos;
- ajustes mínimos;
- risks/unknowns vivos;
- autorización o no para pasar a la siguiente fase.

### Preguntas que debe hacer al usuario

- ¿Hay alguna línea roja nueva que no esté reflejada en constraints?
- ¿Qué nivel de riesgo estás dispuesto a aceptar en esta fase?

### Criterios de calidad

- revisa sin reescribir en silencio;
- detecta claims peligrosos y huecos de trazabilidad;
- no duplica la skill previa;
- deja una decisión clara de avance o stop.

### Anti-patterns

- entrar solo al final del proceso;
- devolver opiniones genéricas sin gate;
- corregir estrategia/oferta de fondo sin explicitarlo;
- convertirse en builder.

### Condición de parada

Parar cuando deje una decisión explícita de `avanza / corrige / bloquea`.

### Siguiente paso recomendado

- tras `Gate 1`: `context-knowledge-pack-builder`
- tras `Gate 2`: `eligibility-and-commercial-qualifier`
- tras `Gate 3`: readiness para `funnel-strategist` y builders posteriores

## 6. Separación elegibilidad vs ICP comercial

La separación debe quedar así:

- `eligibility-and-commercial-qualifier`
  - decide si un caso concreto puede y merece avanzar en esta oportunidad;
  - trabaja con gates, evidencias mínimas, estados de avance y red flags.

- `icp-and-segmentation`
  - decide qué patrones de empresa o buyer conviene perseguir de forma repetible;
  - trabaja con segmentos, señales, beachhead y anti-ICP.

Diferencia operativa:

- la primera skill mira `este caso`;
- la segunda skill mira `qué tipo de casos queremos atraer y priorizar`.

### Ejemplo 1: empresa elegible pero mal ICP

- Cumple requisitos de convocatoria.
- Puede pagar y encajar técnicamente.
- Pero tiene poco dolor, ciclo lento, baja urgencia y no encaja con el segmento que queremos priorizar.

Lectura correcta:

- `eligibility-and-commercial-qualifier`: puede dar `Go con cautelas`.
- `icp-and-segmentation`: la marca como mal ICP o segmento de baja prioridad.

### Ejemplo 2: empresa no elegible pero buen ICP para otro producto

- No entra en la convocatoria o marco actual.
- Pero tiene dolor claro, presupuesto y encaje con una oferta no subvencionada.

Lectura correcta:

- `eligibility-and-commercial-qualifier`: `No-go` para esta vía.
- `icp-and-segmentation`: puede seguir siendo buen ICP para otra línea de producto.

### Ejemplo 3: empresa elegible y buen ICP

- Entra en requisitos.
- Tiene dolor, urgencia, sponsor y encaje con el beachhead.

Lectura correcta:

- `eligibility-and-commercial-qualifier`: `Go preliminar`.
- `icp-and-segmentation`: confirma que además es prioridad comercial.

### Ejemplo 4: empresa no elegible y mal ICP

- No entra en el marco.
- Tampoco tiene prioridad comercial ni dolor suficientemente interesante.

Lectura correcta:

- `eligibility-and-commercial-qualifier`: `No-go`.
- `icp-and-segmentation`: fuera de foco.

Regla de sistema:

- nunca usar `ICP` como atajo para saltarse el gate de elegibilidad;
- nunca usar `elegibilidad` como sustituto del trabajo de segmentación.

## 7. Dónde entra QA/compliance

`compliance-qa-reviewer` debe actuar como gate recurrente por cuatro razones:

- después de estrategia;
- después de oferta;
- antes de funnel;
- antes de artefactos.

### Gate después de estrategia

Comprueba:

- rol correcto del actor;
- lectura no engañosa de la oportunidad;
- límites que no deben romperse más adelante;
- supuestos peligrosos demasiado pronto.

### Gate después de oferta

Comprueba:

- claims permitidos;
- alcance defendible;
- no-go comerciales;
- pricing y framing compatibles con constraints.

### Gate antes de funnel

Comprueba:

- que la secuencia de conversión no se basa en promesas que upstream no soporta;
- que la oferta ya está cerrada lo suficiente como para no obligar al funnel a inventar posicionamiento.

### Gate antes de artefactos

Comprueba:

- que builders y copy no rompen la tesis ni los guardrails;
- que se llega a landing/one pager con decisiones ya tomadas y no al revés.

Principio:

- QA/compliance no es “última revisión estética”;
- es control de integridad del sistema.

## 8. Qué outputs deberían quedar como templates

- `intake brief`
- `strategic opportunity brief`
- `context master brief`
- `facts register`
- `constraints matrix`
- `offer architecture brief`
- `eligibility/commercial qualification matrix`
- `ICP segmentation brief`
- `QA/compliance report`

Templates secundarios que pueden vivir como anexos:

- `FAQ operativa`
- `risk matrix`
- `screening question set`
- `anti-ICP list`

## 9. Qué builders quedan para fase posterior

Quedan explícitamente fuera:

- `funnel-strategist`
- `commercial-copy-adapter`
- `one-pager-artifact-builder`
- `landing-artifact-builder`

Razón:

- si se construyen ahora, el sistema volverá a correr hacia el artefacto antes de fijar bien la máquina upstream;
- el caso SC Pyme Digital ya demostró que el valor está primero en estrategia, oferta, gates e ICP;
- los builders downstream deben heredar decisiones, no fabricarlas.

Orden lógico:

- primero cerrar `intake -> strategy -> knowledge pack -> offer -> qual -> ICP -> QA`;
- después diseñar funnel;
- después construir adapters de copy y artifact builders.

## 10. Recomendación de implementación

### 1. Cuáles crear primero

Orden recomendado:

1. `project-opportunity-intake`
2. `strategic-opportunity-mapper`
3. `context-knowledge-pack-builder`
4. `compliance-qa-reviewer`
5. `offer-architect`
6. `eligibility-and-commercial-qualifier`
7. `icp-and-segmentation`

Razonamiento:

- las tres primeras fijan el flujo base;
- `compliance-qa-reviewer` debe aparecer pronto porque gatilla estrategia y oferta;
- `offer-architect` no debería salir antes de tener QA mínimo;
- `eligibility-and-commercial-qualifier` e `icp-and-segmentation` deben construirse después para no mezclar sus fronteras.

### 2. Cuáles pueden esperar

- `icp-and-segmentation` puede esperar unas iteraciones si primero queremos estabilizar el gate de caso;
- pero no debería posponerse demasiado porque el mayor hueco del caso está ahí.

### 3. Cuál debería tener eval/checklist antes

Prioridad de eval/checklist:

1. `project-opportunity-intake`
2. `context-knowledge-pack-builder`
3. `compliance-qa-reviewer`
4. `eligibility-and-commercial-qualifier`

Motivo:

- sus outputs son más verificables;
- permiten evaluar si la skill realmente separa facts, unknowns, gates y bloqueos.

Evaluación más mixta y humana:

- `strategic-opportunity-mapper`
- `offer-architect`
- `icp-and-segmentation`

### 4. Qué documentos del post mortem usar como referencia

- `01_planning/2026-05-19_reusable_system_alignment_v1.md`
  - secciones `8`, `9`, `10`, `11`
- `01_planning/2026-05-19_operational_postmortem_v1.md`
  - secciones `4`, `10`, `11`, `12`, `13`, `15`, `16`

Referencias internas útiles:

- `shared/skills/initial-context-building/SKILL.md`
- `shared/skills/distill-context/SKILL.md`
- `shared/skills/icp-definer/SKILL.md`
- `shared/skills/qa-review/SKILL.md`

## 11. Prompt recomendado para la siguiente fase

No ejecutarlo todavía en esta tarea.

```md
# Tarea Codex — Crear la primera skill real: project-opportunity-intake

Estamos en el repo:
`skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026`

Usa como fuentes de diseño:
- `01_planning/2026-05-19_reusable_system_alignment_v1.md`
- `01_planning/2026-05-19_operational_postmortem_v1.md`
- `01_planning/2026-05-19_upstream_skills_architecture_v1.md`
- `shared/skills/initial-context-building/SKILL.md`
- `shared/skills/distill-context/SKILL.md`

Objetivo:
crear la primera skill real upstream en `shared/skills/project-opportunity-intake/`.

La skill debe:
- absorber documentación bruta o idea inicial;
- producir un intake brief estructurado;
- inventariar fuentes;
- separar facts preliminares, hipótesis y unknowns;
- hacer solo las preguntas mínimas bloqueantes;
- parar antes de estrategia, oferta, ICP o funnel.

Entrega:
- carpeta de skill completa;
- `SKILL.md`;
- recursos auxiliares solo si son realmente necesarios;
- una propuesta corta de eval/checklist para validarla después.

No crees todavía las demás skills.
No construyas funnel ni builders downstream.
```
