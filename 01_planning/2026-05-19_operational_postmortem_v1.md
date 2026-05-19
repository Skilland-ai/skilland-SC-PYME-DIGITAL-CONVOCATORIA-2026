# Post mortem operativo — SC Pyme Digital como caso reusable

## 1. Resumen ejecutivo

Este repo sí documenta un caso real de paso de `documentación bruta -> GTM operativo`, pero la granularidad de ese recorrido no está preservada por completo en el historial. El commit inicial del `2026-05-14` ya contiene, de golpe, `00_inbox`, `02_context`, `04_outputs/01_knowledge_base`, `04_outputs/02_offers` y un funnel mínimo en `04_outputs/03_funnel`. Eso significa que la primera mitad del recorrido está bien evidenciada como outputs, pero peor preservada como micro-iteraciones.

La segunda mitad sí queda mucho más visible en la historia del repo:

- `2026-05-14`: funnel mínimo y primer ciclo de one pager;
- `2026-05-14` tarde y `2026-05-15`: iteraciones de contenido, diseño y HTML/PDF del one pager;
- `2026-05-15`: giro de prioridad desde pieza PDF a landing HTML y primer bloque de deploy/QA;
- `2026-05-19`: fase meta de alineamiento reusable.

La lección principal del caso no es “cómo hacer una landing para una subvención”, sino cómo convertir una oportunidad condicionada por normativa en:

- tesis estratégica;
- oferta empaquetada;
- capa de elegibilidad y cualificación;
- funnel;
- artefactos comerciales iterativos;
- controles de claim y cumplimiento.

La separación entre `elegibilidad` e `ICP comercial` no quedó resuelta explícitamente en el caso, pero el repo ya deja sus piezas parciales. Ese hueco es uno de los aprendizajes más importantes a corregir en el sistema reusable.

## 2. Qué intentaba resolver originalmente el repo

El repo intentaba convertir la convocatoria `Pyme Digital 2026` de la Cámara de Comercio de Santa Cruz de Tenerife en una oportunidad comercial y operativa para `Skilland/Reboot/EduKami` como proveedor TIC externo.

El problema real no era solo entender la ayuda. Era evitar este escenario:

- la pyme entra “en blanco” a Fase I;
- la Cámara orienta el caso hacia otra prioridad;
- el proyecto queda poco defendible;
- el proveedor pierde posición o desaparece del recorrido.

La tesis de trabajo fue:

- la Cámara mantiene el diagnóstico y la validación;
- la pyme sigue siendo beneficiaria, solicitante y pagadora;
- `Skilland/Reboot/EduKami` debe preparar el caso para llegar con prioridad, categoría, alcance y proveedor propuesto.

Desde ahí, el repo se orientó a producir:

- base de conocimiento fiable;
- screening rápido;
- oferta paquetizada;
- funnel sencillo;
- one pager y landing;
- materiales de conversación comercial;
- guardrails de cumplimiento y justificación.

## 3. Cronología reconstruida del trabajo

### 3.1 Input bruto inicial

Evidencia fuerte:

- `00_inbox/` contiene la convocatoria, los Anexos I, II y III, `ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md`, `What is this repo about.md` y `README.md`.
- `00_inbox/README.md` define la carpeta como `drop-only zone for raw context`.

Lectura operativa:

- el caso arrancó con una mezcla de documentación normativa y dos capas humanas de interpretación:
  - `What is this repo about.md` como manifiesto del pipeline deseado;
  - `ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md` como puente entre normativa y estrategia comercial.

Inferido:

- la oportunidad no nació como ejercicio de branding o web, sino como lectura cruda de convocatoria + anexos + tesis comercial.

### 3.2 Destilación de contexto

Evidencia fuerte:

- el commit inicial `a0a1ba7` ya contiene `02_context/BRIEF.md`, `FACTS.md`, `CONSTRAINTS.md`, `GLOSSARY.md` y `LINKS.md`;
- también contiene `05_scratch/2026-05-14_initial-context-report.md`;
- el repo incluye `shared/skills/initial-context-building/` y `shared/skills/distill-context/`.

Lectura operativa:

- la primera transformación formal del caso fue pasar de `00_inbox/` a un paquete de contexto legible en `5` minutos;
- ese paso separó hechos, restricciones, términos y unknowns antes de tocar oferta y funnel.

Límite de evidencia:

- el detalle fino de cómo se hizo esa destilación no quedó versionado paso a paso;
- sí quedó muy claro el patrón de salida.

### 3.3 Base de conocimiento

Evidencia fuerte:

- el commit inicial ya contiene:
  - `04_outputs/01_knowledge_base/2026-05-14_convocatoria_master_brief_v1.md`
  - `...checklist_elegibilidad_v1.md`
  - `...faq_pyme_digital_v1.md`
  - `...matriz_riesgos_cumplimiento_v1.md`

Lectura operativa:

- el repo convirtió la convocatoria en una base usable por venta, operación y delivery;
- no se quedó en resumen legal, sino que generó formatos de consulta:
  - master brief;
  - FAQ;
  - checklist;
  - matriz de riesgos.

Patrón extraíble:

- de una fuente externa regulada conviene producir un `knowledge pack` orientado a decisión, no un resumen único.

### 3.4 Oferta y packs

Evidencia fuerte:

- el commit inicial ya contiene:
  - `catalogo_servicios_v1.md`
  - `packs_pyme_digital_v1.md`
  - `matriz_anexo_ii_packs_riesgo_v1.md`
  - `pricing_y_alcances_v1.md`
  - `sesion_prediagnostico_comercial_v1.md`
  - `objeciones_respuestas_v1.md`

Lectura operativa:

- la oportunidad se tradujo muy pronto a arquitectura de oferta;
- la lógica de packs no salió del aire: salió de cruzar restricciones del `Anexo II`, prefinanciación, claim-risk y dolor comercial.

Inferido:

- la decisión de pasar rápido a oferta indica que el objetivo nunca fue solo “entender la convocatoria”, sino crear una máquina comercial defendible.

### 3.5 Elegibilidad y cualificación

Evidencia fuerte:

- la elegibilidad quedó formalizada desde el inicio en:
  - `checklist_elegibilidad_v1.md`
  - `sesion_prediagnostico_comercial_v1.md`
  - `objeciones_respuestas_v1.md`
- el catálogo ya introduce sectores prioritarios y `No-go` duros.

Lectura operativa:

- el repo sí construyó una capa de filtrado de casos;
- esa capa mezcla tres cosas:
  - elegibilidad subvención;
  - viabilidad económica y operativa;
  - cualificación comercial.

Hueco importante:

- no aparece todavía un artefacto explícito de `ICP comercial`;
- existe el precedente técnico `shared/skills/icp-definer/` + `shared/agents/prospector/`, pero no quedó integrado en este caso.

### 3.6 Funnel

Evidencia fuerte:

- el commit inicial contiene `04_outputs/03_funnel/2026-05-14_basic_funnel_diagram_v1.md`.

Lectura operativa:

- el funnel arranca en modo mínimo y manual:
  - mensaje;
  - one pager;
  - landing;
  - Cal.com;
  - diagnóstico;
  - seguimiento manual.

Aprendizaje:

- antes de diseñar piezas complejas, el caso fijó una secuencia de conversión simple y ejecutable.

### 3.7 One pager

Evidencia fuerte:

- `6d92fc2` añade:
  - `one_pager_structure_v1.md`
  - `one_pager_content_draft_v1.md`
  - `one_pager_html_brief_v1.md`
- `567eb3c` añade:
  - `one_pager_content_draft_v2.md`
  - `one_pager_copy_design_review_v1.md`
  - `one_pager_html_brief_v2.md`
  - `one_pager_a4_v1.html`
  - `one_pager_a4_v2.html`
  - `one_pager_a4_v2.pdf`
  - `one_pager_a4_v3.html`
  - `one_pager_a4_v3.pdf`

Además, los timestamps del `2026-05-14` muestran un orden interno:

- `21:52` funnel básico;
- `22:23` estructura + contenido v1 + brief HTML v1;
- `22:39` review de copy/diseño + contenido v2 + brief HTML v2;
- `22:47` HTML v1;
- `23:12` HTML/PDF v2;
- `2026-05-15 09:02-09:03` HTML/PDF v3.

Lectura operativa:

- el one pager fue la primera gran pieza puente del funnel;
- se iteró en varias capas:
  - función;
  - copy;
  - dirección visual;
  - implementación HTML;
  - exportación a PDF.

### 3.8 Landing

Evidencia fuerte:

- `567eb3c` crea `04_outputs/03_funnel/landing_web_v1/index.html`;
- `17163bb` la refina;
- `03_specs/now/001_now.md` redefine la pieza prioritaria: “sustituir la pieza PDF como salida principal por una landing web estática”.

Lectura operativa:

- aquí se produce el cambio de dirección más claro del caso;
- el repo pasa de optimizar una pieza A4/PDF a promover una landing como activo principal de conversión.

Aprendizaje central:

- el caso no terminó donde empezó;
- la iteración del one pager fue útil, pero la pieza operativa ganadora terminó siendo la landing.

### 3.9 QA / compliance / restricciones

Evidencia fuerte:

- `CONSTRAINTS.md`, el `master brief`, la FAQ, la matriz de riesgos, la sesión de prediagnóstico y el pricing incluyen disclaimers y reglas de claim;
- el `one_pager_copy_design_review_v1.md` y la spec de la landing insisten en prudencia de lenguaje.

Lectura operativa:

- cumplimiento no fue una revisión final;
- condicionó:
  - rol de marca;
  - claims de venta;
  - pricing;
  - copy;
  - categorías de packs;
  - promesas que no podían hacerse.

### 3.10 Uso operativo y deploy

Evidencia fuerte:

- `567eb3c` crea:
  - `05_scratch/deploy_subvencion_santacruz/*`
  - `05_scratch/landing_qa/*`
  - `dist/subvencion-santacruz/*`
- la landing usa assets reales y QA visual de desktop/móvil.

Lectura operativa:

- el caso sí llegó a capa operativa;
- no se quedó en brief o maqueta;
- el repo ya contiene señales de publicación, revisión visual y preparación de uso comercial real.

## 4. Mapa de transformación

| Fase | Input usado | Transformación realizada | Output generado | Decisiones tomadas | Patrón reusable extraíble | Riesgo / unknown |
|---|---|---|---|---|---|---|
| Intake bruto | Convocatoria, anexos, `What is this repo about`, `ENFOQUE_ESTRATEGICO` | Acumulación de fuentes normativas + tesis humana | `00_inbox/` | Tratar la oportunidad como canal comercial, no como estudio legal | `opportunity-intake` | No se preserva el momento exacto en que cada fuente llegó |
| Destilación | `00_inbox/` | Separar hechos, restricciones, glosario y links | `02_context/*` | No mezclar facts con interpretación | `context-distiller` | Micro-secuencia no versionada; solo salida final |
| Base de conocimiento | `00_inbox/` + `02_context/` | Convertir normativa en formatos consultables | master brief, FAQ, checklist, matriz de riesgos | Crear knowledge pack por función, no un único resumen | `regulatory-knowledge-pack` | Sigue habiendo unknowns oficiales: BOP, demarcación exacta, anexos en sede |
| Oferta | knowledge base + enfoque estratégico | Traducir oportunidad a servicios, packs, pricing y guardrails | catálogo, packs, matriz anexo/riesgo, pricing | Priorizar 6 packs visibles y claim de implantación, no bespoke | `offer-architecture-under-constraints` | Parte de la lógica de decisión queda inferida, no conversada en historial |
| Elegibilidad / cualificación | knowledge base + oferta | Pasar de conocimiento a filtro comercial accionable | checklist, sesión de prediagnóstico, objeciones | Usar `No-go / Go con cautelas / Go preliminar` | `eligibility-plus-commercial-qualification` | ICP explícito ausente |
| Funnel mínimo | oferta + cualificación | Ordenar una secuencia simple de conversión | `basic_funnel_diagram_v1.md` | Empezar manual y pequeño | `funnel-skeleton-first` | No hay todavía scoring ni workflow interno formal |
| One pager | funnel + oferta + referencias de marca | Definir función, copy, dirección visual e implementación iterativa | estructura, drafts, reviews, briefs, HTML/PDF v1-v3 | Tratar el one pager como pieza puente y no como landing comprimida | `artifact-iteration-loop` | Riesgo de sobredimensionar pieza A4 frente a activo web |
| Landing / deploy | aprendizaje del one pager + assets reales + spec activa | Promover la pieza operativa de mayor utilidad | `landing_web_v1/`, QA screenshots, `dist/`, notas deploy | Reemplazar PDF como output principal | `promote-winning-artifact` | No hay evidencia del rendimiento comercial real posterior |
| Meta-extracción | repo ya construido + alineamiento reusable | Pasar de caso a sistema potencial | `01_planning/2026-05-19_reusable_system_alignment_v1.md` | Separar elegibilidad de ICP y priorizar checkpoints | `case-study-alignment-before-skill-design` | El sistema reusable aún no existe; solo su tesis |

## 5. Inventario de artefactos relevantes

### `00_inbox`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `00_inbox/2026_Convocatoria_Pyme Digital CCSCTF (1).md` | Fuente normativa principal | Punto de partida regulatorio | Específico | Referencia |
| `00_inbox/2026_Anexo I. Descripción del programa Pyme Digital.md` | Define Fase I/Fase II | Ancla del flujo del programa | Específico | Referencia |
| `00_inbox/2026_Anexo II. Tipología y Justificación de Gastos elegibles Fase de Ayudas (1).md` | Catálogo de categorías y gastos | Base del mapeo oferta/riesgo | Específico | Referencia |
| `00_inbox/2026_Anexo III Declaración responsable empresa Pyme Digital (2).md` | Reglas de declaraciones y minimis | Base de filtros duros | Específico | Referencia |
| `00_inbox/ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md` | Puente entre norma y estrategia | Convierte ayuda en tesis comercial | Híbrido | Template de `strategic opportunity memo` |
| `00_inbox/What is this repo about.md` | Manifiesto del caso | Define pipeline deseado y principio no one-shot | Reusable | Template de `project opportunity brief` |
| `00_inbox/README.md` | Regla de ingestión | Mantiene `00_inbox` como drop-only | Reusable | Checklist / referencia |

### `02_context`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `02_context/BRIEF.md` | Resumen ejecutivo del caso | Compactar propósito, outcome y horizonte | Reusable | Template |
| `02_context/FACTS.md` | Base factual trazable | Separar hechos, fuentes y confidence | Reusable | Template |
| `02_context/CONSTRAINTS.md` | Guardrails operativos | Fijar no negociables antes de diseñar oferta | Reusable | Template / checklist |
| `02_context/GLOSSARY.md` | Vocabulario de dominio | Evitar ambigüedad | Reusable | Template |
| `02_context/LINKS.md` | URLs fuente | Trazabilidad externa | Reusable | Template |

### `03_specs`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `03_specs/backlog.md` | Cola de trabajo | Mantener futuras líneas fuera de la spec activa | Reusable | Checklist / template |
| `03_specs/decisions.md` | Log de decisiones | Hacer explícitas tesis y límites | Reusable | Template |
| `03_specs/now/001_now.md` | Spec de ejecución activa | Cambio de prioridad hacia landing HTML | Reusable | Template |

### `04_outputs/01_knowledge_base`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `.../2026-05-14_convocatoria_master_brief_v1.md` | Resumen interno maestro | Transformar normativa en lectura rápida accionable | Híbrido | Template |
| `.../2026-05-14_faq_pyme_digital_v1.md` | Respuesta rápida | Llevar facts a conversación interna/cliente | Reusable | Template |
| `.../2026-05-14_checklist_elegibilidad_v1.md` | Screening de caso | Convertir reglas en decisión `go/no-go` | Reusable con adaptación | Checklist |
| `.../2026-05-14_matriz_riesgos_cumplimiento_v1.md` | Filtro de riesgo | Hacer operables los riesgos normativos | Reusable con adaptación | Checklist / template |

### `04_outputs/02_offers`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `.../2026-05-14_catalogo_servicios_v1.md` | Arquitectura de oferta | Fijar rol, hero offer y stack de servicios | Reusable con adaptación | Template |
| `.../2026-05-14_packs_pyme_digital_v1.md` | Catálogo visible | Traducir solución a packs vendibles | Reusable con adaptación | Template |
| `.../2026-05-14_matriz_anexo_ii_packs_riesgo_v1.md` | Mapa oferta/riesgo | Cruzar categoría, pack y cautela | Reusable con adaptación | Template / checklist |
| `.../2026-05-14_pricing_y_alcances_v1.md` | Guardrails de scoping | Bajar oferta a marco económico y alcance | Reusable con adaptación | Template |
| `.../2026-05-14_sesion_prediagnostico_comercial_v1.md` | Primera conversación | Convertir cualificación en ritual operativo | Reusable | Template / skill seed |
| `.../2026-05-14_objeciones_respuestas_v1.md` | Manejo de objeciones | Traducir constraints a conversación comercial | Reusable con adaptación | Template |

### `04_outputs/03_funnel`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `.../2026-05-14_basic_funnel_diagram_v1.md` | Funnel mínimo | Empezar por secuencia simple y manual | Reusable | Template |
| `.../2026-05-14_one_pager_structure_v1.md` | Función de la pieza | Definir qué debe hacer el one pager antes del copy | Reusable | Template |
| `.../2026-05-14_one_pager_content_draft_v1.md` y `v2.md` | Iteración de narrativa | Pasar de mensaje correcto a mensaje útil | Reusable con adaptación | Referencia / template |
| `.../2026-05-14_one_pager_copy_design_review_v1.md` | Diagnóstico de iteración | Formalizar aprendizajes de cambio de dirección | Reusable | Template de review |
| `.../2026-05-14_one_pager_html_brief_v1.md` y `v2.md` | Brief de implementación | Separar estrategia visual de construcción HTML | Reusable | Template |
| `.../2026-05-14_one_pager_a4_v1.html`, `v2.html/.pdf`, `v3.html/.pdf` | Familia de builds | Materializar iteraciones del one pager | Específico como contenido, reusable como patrón | Referencia |
| `.../landing_web_v1/` | Artefacto operativo prioritario | Promover la pieza web como output principal | Reusable como patrón, específico como copy/marca | Referencia / futuro builder |
| `.../assets/trust-logos/` | Soporte de autoridad | Añadir confianza visual a la landing | Específico | Referencia |

### `04_outputs/04_templates`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `No existe` | Hueco estructural | El repo generó outputs, pero no consolidó templates explícitos | Reusable como aprendizaje negativo | Próxima familia a crear |

### `shared/skills`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `shared/skills/initial-context-building/` | Bootstrap pesado | Formaliza la ingesta completa del caso | Reusable | Skill existente |
| `shared/skills/distill-context/` | Destilación ligera | Mantener `02_context` compacto | Reusable | Skill existente |
| `shared/skills/write-spec/` | Planificación | Convertir contexto en spec activa | Reusable | Skill existente |
| `shared/skills/ship-output/` | Producción | Ejecutar deliverables desde spec | Reusable | Skill existente |
| `shared/skills/qa-review/` | QA | Cerrar contra checklist y riesgos | Reusable | Skill existente |
| `shared/skills/icp-definer/` | Definición de ICP | Preexistente, pero no explotado en este caso | Reusable | Skill existente; integrar mejor |
| `shared/skills/skill-creator/` | Fábrica de skills | Prepara el paso futuro de extraer skills con eval loop | Reusable | Skill existente |

### `shared/agents`

| Path | Rol dentro del proyecto | Qué decisión o transformación representa | ¿Pyme Digital o reusable? | Convertir en |
|---|---|---|---|---|
| `shared/agents/distiller/AGENT.md` | Orquestador de contexto | Comprimir fuentes largas | Reusable | Subagent existente |
| `shared/agents/planner/AGENT.md` | Orquestador de spec | Bajar contexto a ejecución | Reusable | Subagent existente |
| `shared/agents/maker/AGENT.md` | Orquestador de producción | Construir deliverable desde spec | Reusable | Subagent existente |
| `shared/agents/reviewer/AGENT.md` | Orquestador de QA | Verificar aceptación antes de cierre | Reusable | Subagent existente |
| `shared/agents/prospector/AGENT.md` | Orquestador de ICP | Señal de que el sistema ya preveía targeting, aunque este caso no lo explicitó | Reusable | Subagent existente; reubicar en pipeline |

## 6. Decisiones estratégicas detectadas

### Decisiones explícitas

- El repo no trata a `Skilland/Reboot/EduKami` como beneficiario ni como gestor oficial.
- La categoría textual del `Anexo II` debe gobernar la formulación de proyecto.
- El desarrollo a medida no debe ser claim principal.
- La ayuda no puede venderse como coste cero ni como concesión garantizada.
- La marca visible prioritaria es `Skilland`.
- El catálogo visible se limita a `6` packs.
- El funnel arranca simple y manual.
- La landing sustituye a la pieza PDF como salida principal de la fase activa.

### Decisiones inferidas

- La velocidad para producir oferta importó casi tanto como la precisión normativa.
- Se prefirió convertir pronto la oportunidad en sistema de venta y no quedarse en knowledge base.
- El caso apostó por artefactos que preparan conversación y cualificación, no por automatización pesada inicial.
- Se asumió que el cliente debe llegar a Cámara con proyecto más trabajado que la media.

### Cambios de dirección

- De lectura normativa a arquitectura comercial.
- De funnel mínimo a pieza puente one pager.
- De one pager correcto a one pager reescrito desde negocio y sistema.
- De PDF/one pager como salida visible a landing HTML como activo principal.

### Decisiones todavía no cerradas

- Cómo formalizar un `ICP comercial` separado de la elegibilidad.
- Qué parte exacta del sistema reusable debe ser agnóstica de marca.
- Qué skills construir primero y cuáles dejar como templates.
- Cuándo conviene generar artefactos PDF frente a web en otros casos.

## 7. Cambios de dirección e iteraciones importantes

- Paso de documentación normativa a estrategia comercial.
  - Visible porque `ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md` y `What is this repo about.md` ya orientan el repo como canal comercial, no como archivo legal.

- Paso de funnel básico a one pager.
  - El commit inicial deja un funnel textual mínimo.
  - El siguiente commit abre la familia one pager como pieza puente.

- Iteración de copy/diseño del one pager.
  - La evidencia más clara es `one_pager_copy_design_review_v1.md`.
  - El repo no solo corrige copy; redefine intensidad, jerarquía de mensaje y gramática visual.

- Giro hacia landing HTML como pieza prioritaria.
  - `03_specs/now/001_now.md` dice explícitamente “sustituir la pieza PDF como salida principal”.
  - `landing_web_v1/` aparece después de varias iteraciones del one pager, no antes.

- Tensión entre artefacto PDF y landing.
  - El repo invierte esfuerzo real en A4 HTML/PDF v1-v3.
  - Después decide que la pieza con más valor operativo es la landing.
  - Esa tensión es aprendizaje central: no siempre la primera forma de artefacto es la mejor forma operativa.

- Restricciones de cumplimiento que condicionaron copy/oferta.
  - La prudencia en claims no se añadió al final.
  - Está incrustada en FAQ, pricing, sesión, objeciones, one pager review y landing spec.

## 8. Qué es específico de Pyme Digital 2026

- La estructura `Fase I -> PPI -> Fase II -> DECA -> justificación`.
- La Cámara de Comercio de Santa Cruz de Tenerife como actor validante.
- Los requisitos exactos de beneficiario y exclusiones.
- La regla de minimis aplicada a este marco.
- La fricción con `Kit Digital`.
- Las categorías textuales del `Anexo II`.
- Los límites económicos concretos: `7.000 €`, `7%` indirectos, `85%` de ayuda.
- La prefinanciación total por parte de la pyme.
- La publicidad `FEDER`, el rol del `DECA` y la lógica probatoria de cobro.
- La demarcación territorial y la ventana temporal de la convocatoria.

## 9. Qué es reusable en otros proyectos

- Empezar por intake bruto y destilación, no por artefacto final.
- Separar `facts`, `constraints`, `unknowns` e `interpretación`.
- Convertir la fuente externa en varios outputs de conocimiento por función.
- Traducir restricciones en arquitectura de oferta, no solo en disclaimers.
- Diseñar una capa de cualificación antes del funnel.
- Construir primero un funnel mínimo ejecutable.
- Crear artefactos por etapas: función -> copy -> review -> brief -> build.
- Dejar que una pieza inicial pierda prioridad si otra demuestra más utilidad.
- Tratar QA/compliance como capa transversal.
- Mantener checkpoints humanos entre estrategia, oferta, ICP, funnel y builders.
- Separar sistema base reusable de adaptadores de marca, canal o diseño.

## 10. Separación elegibilidad vs ICP comercial

### Qué fue elegibilidad en este caso

Fue la comprobación de si la empresa y el proyecto podían entrar en la convocatoria:

- ser pyme;
- facturación mínima;
- IAE y actividad;
- demarcación;
- no ser proveedor TIC excluido;
- no duplicar `Kit Digital`;
- poder prefinanciar;
- no caer en no-go jurídicos o económicos.

Eso quedó formalizado sobre todo en:

- `checklist_elegibilidad_v1.md`;
- `master_brief`;
- `matriz_riesgos_cumplimiento_v1.md`.

### Qué fue cualificación comercial en este caso

Fue decidir si merece la pena invertir tiempo comercial y de diseño en ese lead:

- si el dolor es real;
- si el cliente colabora;
- si hay urgencia;
- si el proyecto cabe limpio en un pack;
- si la narrativa puede defenderse;
- si la relación comercial merece avanzar.

Eso quedó repartido entre:

- `sesion_prediagnostico_comercial_v1.md`;
- `objeciones_respuestas_v1.md`;
- sectores prioritarios del catálogo;
- `No-go / Go con cautelas / Go preliminar`.

### Qué faltó como ICP explícito

- un artefacto separado que diga:
  - qué segmento comercial priorizar;
  - qué señales indican mejor fit;
  - quién compra;
  - qué trigger hace “buen momento”;
  - qué segmento es elegible pero no merece foco.

En otras palabras:

- el repo sabe filtrar elegibilidad;
- sabe manejar cualificación comercial;
- pero no termina de explicitar el `beachhead ICP`.

### Cómo debería resolverlo el sistema reusable

Con tres capas separadas:

1. `Eligibility gate`
   - ¿Puede entrar este caso en el marco/opción/oportunidad?

2. `Commercial qualification`
   - ¿Tiene dolor, urgencia, colaboración y viabilidad de venta?

3. `ICP segmentation`
   - ¿Es este tipo de empresa una prioridad comercial repetible para escalar el sistema?

La tercera capa no debe quedar absorbida por la primera.

## 11. Patrones reutilizables extraídos

```text
Patrón: Intake bruto + memo estratégico
Cuándo aplica: cuando la oportunidad viene en documentos largos o desordenados
Inputs necesarios: docs fuente, notas del usuario, restricciones iniciales
Output esperado: brief bruto + tesis inicial + preguntas abiertas
Checkpoint de usuario: validar objetivo real del caso
Riesgos: saltar a oferta sin haber fijado la tesis
```

```text
Patrón: Distilación a contexto operativo
Cuándo aplica: después del intake, antes de planificar
Inputs necesarios: inbox completo
Output esperado: BRIEF, FACTS, CONSTRAINTS, GLOSSARY, LINKS
Checkpoint de usuario: validar unknowns críticos y no negociables
Riesgos: mezclar facts con interpretación o copiar el inbox
```

```text
Patrón: Knowledge pack por función
Cuándo aplica: cuando la fuente externa es compleja o regulada
Inputs necesarios: contexto destilado + fuentes primarias
Output esperado: master brief, FAQ, checklist, matriz de riesgos
Checkpoint de usuario: validar que el pack responde preguntas reales de operación/venta
Riesgos: hacer un solo resumen bonito y poco accionable
```

```text
Patrón: Oferta bajo restricciones
Cuándo aplica: cuando la oportunidad impone límites legales, económicos o de claim
Inputs necesarios: knowledge pack + tesis estratégica
Output esperado: catálogo, packs, pricing, guardrails
Checkpoint de usuario: validar hero offer, packs visibles y no-go duros
Riesgos: vender algo que luego no cabe en cumplimiento o delivery
```

```text
Patrón: Elegibilidad separada de cualificación
Cuándo aplica: cuando un caso puede ser apto en teoría pero malo en práctica
Inputs necesarios: knowledge pack + oferta + dolor del caso
Output esperado: gate de elegibilidad + decisión comercial preliminar
Checkpoint de usuario: validar lógica go/no-go y riesgos
Riesgos: confundir aptitud normativa con buen ICP
```

```text
Patrón: Funnel skeleton first
Cuándo aplica: antes de construir piezas finales
Inputs necesarios: oferta validada + CTA principal
Output esperado: secuencia de conversión mínima
Checkpoint de usuario: validar CTA y handoff principal
Riesgos: diseñar assets sin haber fijado el flujo
```

```text
Patrón: Artifact iteration loop
Cuándo aplica: al construir piezas puente o de conversión
Inputs necesarios: funnel + oferta + constraints + marca opcional
Output esperado: función de la pieza, draft, review, brief, build
Checkpoint de usuario: validar función de la pieza antes de maquetar
Riesgos: usar builders que inventen posicionamiento
```

```text
Patrón: Promote winning artifact
Cuándo aplica: cuando una pieza pensada como intermedia demuestra más valor que la prevista
Inputs necesarios: outputs previos + feedback + spec actualizada
Output esperado: nueva pieza prioritaria
Checkpoint de usuario: confirmar cambio de prioridad
Riesgos: seguir iterando el artefacto equivocado por inercia
```

```text
Patrón: Compliance transversal
Cuándo aplica: en cualquier oportunidad con riesgo legal, reputacional o comercial
Inputs necesarios: facts, constraints, oferta, funnel, copy
Output esperado: reglas de claim, riesgos, bloqueos y criterios de escalado
Checkpoint de usuario: validar líneas rojas
Riesgos: dejar QA para el final
```

## 12. Candidatos a templates

- `opportunity_intake.md`
- `strategic_opportunity_memo.md`
- `master_brief.md`
- `facts_register.md`
- `constraints_matrix.md`
- `faq_operativa.md`
- `eligibility_checklist.md`
- `compliance_risk_matrix.md`
- `offer_architecture.md`
- `offer_pack_catalog.md`
- `offer_risk_mapping.md`
- `prediagnostic_session_guide.md`
- `commercial_objections_matrix.md`
- `funnel_skeleton.md`
- `one_pager_function_brief.md`
- `one_pager_copy_review.md`
- `landing_brief.md`
- `project_ficha_preliminar.md`
- `qa_claims_review.md`

## 13. Candidatos a skills

### `project-opportunity-intake`

Objetivo: convertir documentación bruta y notas dispersas en una primera lectura del caso.

Inputs: `00_inbox/`, notas del usuario, links y docs externos cargados.

Output: intake estructurado con objetivos, unknowns y preguntas mínimas.

Qué parte del caso SC Pyme Digital la justifica: `00_inbox/What is this repo about.md` + convocatoria + anexos + memo estratégico.

Checkpoint de usuario: validar qué oportunidad estamos intentando explotar realmente.

Anti-patterns: saltar a oferta; asumir ICP; resumir docs sin extraer tensión comercial.

### `strategic-opportunity-mapper`

Objetivo: convertir la oportunidad en tesis estratégica, restricciones, ángulos y riesgos.

Inputs: intake estructurado, `FACTS`, `CONSTRAINTS`, memo estratégico.

Output: memo estratégico accionable y decisiones abiertas.

Qué parte del caso SC Pyme Digital la justifica: `ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md` y el `master brief`.

Checkpoint de usuario: validar postura, actor principal y no negociables.

Anti-patterns: proponer packs sin tesis; tratar restricciones como anexo secundario.

### `regulatory-knowledge-pack-builder`

Objetivo: producir master brief, FAQ, checklist y matriz de riesgos desde fuentes reguladas.

Inputs: docs primarios + contexto destilado.

Output: knowledge pack funcional por rol.

Qué parte del caso SC Pyme Digital la justifica: `04_outputs/01_knowledge_base/`.

Checkpoint de usuario: validar si el pack responde dudas reales de negocio y operación.

Anti-patterns: un solo resumen largo; pérdida de trazabilidad; esconder unknowns.

### `offer-architect`

Objetivo: convertir tesis + constraints en servicios, packs, pricing y guardrails.

Inputs: knowledge pack, estrategia validada, objetivos de negocio.

Output: catálogo, packs, pricing, límites y no-go.

Qué parte del caso SC Pyme Digital la justifica: `04_outputs/02_offers/`.

Checkpoint de usuario: validar hero offer, catálogo visible y framing comercial.

Anti-patterns: vender bespoke como núcleo; pricing sin scoping; catálogo infinito.

### `eligibility-and-commercial-qualifier`

Objetivo: separar filtro duro de caso, viabilidad comercial y siguiente paso.

Inputs: knowledge pack, oferta, datos del lead/caso.

Output: `No-go / Go con cautelas / Go preliminar` con razones.

Qué parte del caso SC Pyme Digital la justifica: checklist, sesión de prediagnóstico y objeciones.

Checkpoint de usuario: validar umbrales de avance y red flags.

Anti-patterns: confundir elegibilidad con ICP; avanzar con unknowns críticos.

### `icp-and-segmentation`

Objetivo: formalizar segmentos prioritarios, señales, beachhead y anti-ICP.

Inputs: oferta validada, resultados de cualificación, señales de mercado.

Output: ICP explícito separado de elegibilidad.

Qué parte del caso SC Pyme Digital la justifica: el hueco detectado entre screening y targeting, más `shared/skills/icp-definer/`.

Checkpoint de usuario: validar beachhead antes de funnel y copy.

Anti-patterns: describir segmentos vagos; absorber ICP dentro del checklist legal.

### `funnel-strategist`

Objetivo: diseñar secuencia de conversión, piezas y handoffs sin maquetar.

Inputs: oferta, ICP/cualificación, CTA principal.

Output: funnel skeleton y función de cada pieza.

Qué parte del caso SC Pyme Digital la justifica: `basic_funnel_diagram_v1.md` y el salto posterior a piezas intermedias.

Checkpoint de usuario: validar CTA y orden de piezas.

Anti-patterns: empezar por landing; meter automatización antes de secuencia clara.

### `artifact-brief-builder`

Objetivo: producir briefs de one pager, landing u otras piezas desde estrategia ya validada.

Inputs: funnel, oferta, ICP, constraints, adaptador de marca opcional.

Output: brief funcional y de copy/diseño, listo para builder.

Qué parte del caso SC Pyme Digital la justifica: `one_pager_structure`, `one_pager_copy_design_review`, `one_pager_html_brief`.

Checkpoint de usuario: validar función y mensaje antes de construir.

Anti-patterns: maquetar sin brief; usar el builder para reposicionar.

### `compliance-qa-reviewer`

Objetivo: revisar claims, riesgos, trazabilidad y coherencia de caso.

Inputs: outputs de conocimiento, oferta, funnel y artefactos.

Output: bloqueos, ajustes mínimos y líneas rojas.

Qué parte del caso SC Pyme Digital la justifica: matriz de riesgos, FAQ, pricing, one pager review y spec de landing.

Checkpoint de usuario: validar bloqueos y claims prohibidos.

Anti-patterns: revisar demasiado tarde; cambiar estrategia en silencio.

### `postmortem-inventory`

Objetivo: documentar un caso terminado y extraer patrones reutilizables.

Inputs: repo completo, outputs, specs, skills existentes, planning.

Output: post mortem operativo con separaciones `específico vs reusable`.

Qué parte del caso SC Pyme Digital la justifica: esta propia fase.

Checkpoint de usuario: validar qué parte sube a sistema y cuál queda como excepción.

Anti-patterns: inventario plano de carpetas; teoría genérica de agentes.

## 14. Candidatos a subagents

### `case-distiller`

Rol: orquestar intake y destilación inicial.

Cuándo se invoca: al empezar un caso con documentación bruta.

Qué skills coordina: `project-opportunity-intake`, `initial-context-building`, `distill-context`.

Límites: no diseña oferta ni funnel.

### `strategy-planner`

Rol: bajar contexto a tesis estratégica y spec de siguiente fase.

Cuándo se invoca: después de contexto validado.

Qué skills coordina: `strategic-opportunity-mapper`, `write-spec`.

Límites: no produce artefactos comerciales.

### `offer-designer`

Rol: convertir tesis validada en oferta y guardrails.

Cuándo se invoca: cuando ya existe knowledge pack.

Qué skills coordina: `offer-architect`, `compliance-qa-reviewer`.

Límites: no define ICP ni construye landing.

### `qualification-lead`

Rol: separar elegibilidad, cualificación e ICP.

Cuándo se invoca: cuando ya existe oferta base.

Qué skills coordina: `eligibility-and-commercial-qualifier`, `icp-and-segmentation`, `icp-definer`.

Límites: no redacta funnel final ni builders de artefacto.

### `funnel-orchestrator`

Rol: diseñar la secuencia de conversión y briefs de piezas.

Cuándo se invoca: tras validar oferta e ICP.

Qué skills coordina: `funnel-strategist`, `artifact-brief-builder`.

Límites: no reabre posicionamiento ni pricing.

### `artifact-maker`

Rol: producir piezas desde briefs ya validados.

Cuándo se invoca: solo cuando la fase anterior está cerrada.

Qué skills coordina: `ship-output`, futuros `landing-artifact-builder` y `one-pager-artifact-builder`.

Límites: no inventa estrategia, no hace QA legal profundo por su cuenta.

## 15. Priorización recomendada

### 1. Imprescindible

- `project-opportunity-intake`
- `strategic-opportunity-mapper`
- `regulatory-knowledge-pack-builder`
- `offer-architect`
- `eligibility-and-commercial-qualifier`
- `compliance-qa-reviewer`

Razón:

- son la columna vertebral upstream;
- reducen el riesgo de one-shot;
- fijan estrategia, oferta y criterios antes de funnel y artifacts;
- capturan la parte más reusable del caso.

### 2. Importante

- `icp-and-segmentation`
- `funnel-strategist`
- `artifact-brief-builder`
- `postmortem-inventory`

Razón:

- resuelven el hueco más evidente del caso, que es la separación `elegibilidad vs ICP`;
- ordenan la transición a funnel y piezas;
- convierten el aprendizaje del caso en proceso repetible.

### 3. Más adelante

- `landing-artifact-builder`
- `one-pager-artifact-builder`
- `commercial-copy-adapter`
- `skill-creator-from-case-study`
- helpers de deploy/publicación

Razón:

- los builders downstream valen menos si el upstream sigue borroso;
- primero hay que estabilizar la lógica de decisión, luego acelerar la producción.

Recomendación razonada:

- construir primero lo que evita malas decisiones;
- construir después lo que acelera salida de artefactos;
- dejar para el final lo que solo aumenta velocidad de renderizado o publicación.

## 16. Riesgos al convertir este caso en sistema reusable

- abstraer demasiado y perder la secuencia real de decisiones;
- quedarse demasiado pegado a Pyme Digital y no servir para otros casos;
- convertir el sistema en one-shot;
- mezclar estrategia con artifact-building;
- no separar `ICP` de `elegibilidad`;
- usar la marca `Skilland` como parte obligatoria del core;
- olvidar que los repos externos son adaptadores y no dependencias duras;
- construir builders que inventen posicionamiento;
- forzar funnel y landing antes de fijar oferta y filtros;
- perder checkpoints humanos entre fases;
- asumir que el mejor artefacto final siempre será el mismo tipo de pieza.

## 17. Próximo paso recomendado

No ejecutarlo todavía en esta tarea.

```md
Diseña la primera tanda de skills reutilizables a partir del post mortem operativo del caso SC Pyme Digital.

Trabaja desde:
- `01_planning/2026-05-19_reusable_system_alignment_v1.md`
- `01_planning/2026-05-19_operational_postmortem_v1.md`
- `shared/skills/`
- `shared/agents/`

Objetivo:
proponer y especificar la primera tanda mínima de skills del sistema reusable, priorizando upstream:
- intake;
- strategy mapping;
- knowledge pack;
- offer architecture;
- eligibility vs ICP;
- compliance QA.

No construyas todavía builders de landing ni one pager salvo brief level.

Para cada skill:
- define objetivo;
- trigger;
- inputs;
- outputs;
- procedure;
- anti-patterns;
- checkpoint de usuario;
- relación con otras skills.

Entrega un documento en:
`01_planning/2026-05-19_skill_system_design_v1.md`
```
