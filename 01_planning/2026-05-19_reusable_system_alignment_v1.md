# Alineamiento — De caso SC Pyme Digital a sistema reutilizable

## 1. Qué es realmente este repo

Este repo es un caso real de transformación de una oportunidad externa en un sistema comercial y operativo usable por `Skilland/Reboot/EduKami` como proveedor TIC externo.

No contiene solo conocimiento sobre una convocatoria. Contiene evidencia de un recorrido real ya ejecutado, con varias capas:

- lectura normativa y estratégica de la oportunidad;
- destilación de contexto;
- definición de postura comercial;
- diseño de oferta y packs;
- diseño de cualificación;
- construcción de funnel;
- iteración de artefactos comerciales;
- aterrizaje de una landing operativa;
- incorporación de cautelas de cumplimiento y justificación.

La prueba de que es un caso completo no está solo en `00_inbox/`, sino en la cadena material ya creada en `04_outputs/`:

- `04_outputs/01_knowledge_base/` convierte la convocatoria en conocimiento accionable;
- `04_outputs/02_offers/` convierte ese conocimiento en oferta, packs, pricing, screening y objeciones;
- `04_outputs/03_funnel/` convierte la oferta en funnel, one pagers, briefs, iteraciones y una landing HTML final.

La lectura correcta es: este repo ya contiene un pipeline real de `oportunidad -> interpretación -> oferta -> funnel -> artefactos -> uso comercial`.

## 2. Qué NO es este repo

Este repo no debe tratarse como:

- un simple repositorio de documentación de una subvención;
- un árbol de archivos que haya que describir carpeta por carpeta;
- un repo de landing con contexto legal alrededor;
- una librería de skills ya cerrada;
- un post mortem ya hecho;
- un template genérico listo para cualquier caso;
- una demo de prompt one-shot que devuelva estrategia, oferta y landing de golpe.

Tampoco debe confundirse con una fuente legal autosuficiente. La capa normativa viene de los documentos cargados y de su destilación, pero el valor del repo está en cómo esa base se convirtió en decisiones operativas y comerciales.

## 3. Qué quiere conseguir el usuario

El usuario quiere usar este caso como semilla para extraer un sistema reutilizable de trabajo.

Ese sistema futuro deberá permitir que, a partir de una oportunidad o documentación bruta, se pueda avanzar de forma iterativa hacia:

- estrategia global;
- estrategia comercial;
- producto/oferta aterrizada;
- ICP y cualificación;
- funnel;
- landing y one pager;
- artefactos comerciales;
- QA de coherencia y cumplimiento.

La intención no es automatizar un resultado final único. La intención es capturar un proceso reusable con checkpoints y control de calidad.

El resultado buscado no es “otro repo bonito”, sino una forma repetible de pasar de documento bruto a `GTM operativo con trazabilidad`.

## 4. Lectura del caso SC Pyme Digital como pipeline

La lectura más fiel del caso hoy es esta:

```text
documentación bruta de convocatoria y anexos
-> contexto destilado y restricciones
-> lectura estratégica de la oportunidad
-> traducción a oferta comercial vendible
-> filtros de elegibilidad y cualificación
-> mapeo proyecto <-> categoría subvencionable <-> riesgo
-> diseño de funnel
-> iteración de one pager y narrativa
-> implementación de landing operativa
-> preparación para ejecución y justificación
```

Este pipeline ya está insinuado o materializado en el repo:

- `00_inbox/What is this repo about.md` define explícitamente la ambición de pasar de convocatoria a funnel, generadores y ejecución.
- `02_context/` compacta la base factual y los no negociables.
- `04_outputs/01_knowledge_base/` convierte el caso en base consultable.
- `04_outputs/02_offers/` convierte el caso en arquitectura de oferta.
- `04_outputs/03_funnel/` muestra varias iteraciones entre funnel conceptual, one pager, revisión de copy/diseño y landing web.
- `03_specs/now/001_now.md` confirma que el caso ya llegó a una pieza de implementación real: `landing_web_v1/index.html`.

La conclusión importante para el siguiente paso es esta: el repo no es solo un conjunto de outputs. Es una secuencia de transformaciones con decisiones, iteraciones y criterios implícitos que luego habrá que extraer y formalizar.

## 5. Capas del trabajo realizado

### 5.1 Inputs brutos

La capa de entrada está clara y bien delimitada:

- convocatoria oficial;
- Anexos I, II y III;
- documento `ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md`;
- `00_inbox/What is this repo about.md`;
- README y harness del repo.

Esta capa representa el punto de partida del futuro sistema reusable: documentación externa, notas estratégicas y restricciones del caso.

### 5.2 Destilación de contexto

La capa de destilación ya existe en `02_context/`:

- `BRIEF.md`;
- `FACTS.md`;
- `CONSTRAINTS.md`.

Aquí ya aparece un patrón reusable importante:

- separar hechos verificados de interpretación;
- registrar unknowns;
- compactar el contexto para lectura rápida;
- fijar no negociables antes de construir oferta o artefactos.

### 5.3 Estrategia

La tesis estratégica del caso no es “entender la ayuda”, sino esta:

- la pyme no debe llegar en blanco a Cámara;
- la oportunidad comercial está en preparar prioridad, categoría, proyecto y proveedor propuesto antes de Fase I;
- el rol correcto es `proveedor TIC externo`, no gestor oficial ni beneficiario;
- la categoría textual del `Anexo II` reduce fricción comercial y operativa.

Esa capa aparece repartida entre:

- `00_inbox/What is this repo about.md`;
- `02_context/*`;
- `04_outputs/01_knowledge_base/2026-05-14_convocatoria_master_brief_v1.md`;
- `03_specs/decisions.md`.

### 5.4 Oferta

La oferta ya no está en modo abstracto. Está aterrizada en activos concretos:

- `2026-05-14_catalogo_servicios_v1.md`;
- `2026-05-14_packs_pyme_digital_v1.md`;
- `2026-05-14_pricing_y_alcances_v1.md`;
- `2026-05-14_matriz_anexo_ii_packs_riesgo_v1.md`;
- `2026-05-14_sesion_prediagnostico_comercial_v1.md`;
- `2026-05-14_objeciones_respuestas_v1.md`.

Esto demuestra que el repo ya hizo un trabajo real de:

- elegir un hero offer;
- limitar el catálogo visible;
- traducir categorías legales a packs vendibles;
- convertir cumplimiento en guardrails de pricing y alcance;
- diseñar una primera conversación comercial.

### 5.5 ICP / cualificación

Esta capa existe, pero está parcialmente explícita y parcialmente implícita.

Lo que sí existe:

- checklist de elegibilidad de menos de `10` minutos;
- sectores prioritarios y no priorizados en el catálogo;
- lógica `No-go / Go con cautelas / Go preliminar`;
- sesión de prediagnóstico;
- matriz de objeciones y respuestas.

Lo que todavía no está formalizado como artefacto reusable del caso:

- un `ICP` separado de la elegibilidad subvención;
- una segmentación clara entre “empresa que puede ser beneficiaria” y “empresa que merece ser ICP comercial prioritario”;
- un output estándar de ICP comparable entre casos.

Dato relevante para el futuro sistema:

- ya existe un precedente técnico en `shared/skills/icp-definer/` y `shared/agents/prospector/`, pero no es todavía la extracción explícita de este caso Pyme Digital.

### 5.6 Funnel

La capa de funnel está materializada e iterada:

- `2026-05-14_basic_funnel_diagram_v1.md`;
- `2026-05-14_one_pager_structure_v1.md`;
- `2026-05-14_one_pager_content_draft_v1.md`;
- `2026-05-14_one_pager_content_draft_v2.md`;
- `2026-05-14_one_pager_copy_design_review_v1.md`;
- `2026-05-14_one_pager_html_brief_v1.md`;
- `2026-05-14_one_pager_html_brief_v2.md`.

Esto ya muestra un patrón reusable muy valioso:

- primero se define la función de la pieza dentro del funnel;
- luego se define la narrativa;
- luego se revisa lo que no funciona;
- luego se baja a brief de implementación;
- solo después se materializa el artefacto.

### 5.7 Artefactos comerciales

La capa de artefactos no es hipotética. Ya existe:

- one pagers en HTML y PDF (`v1`, `v2`, `v3`);
- borradores de contenido;
- briefs visuales;
- landing final en `04_outputs/03_funnel/landing_web_v1/index.html`;
- assets de confianza en `04_outputs/03_funnel/assets/trust-logos/`.

Aquí el aprendizaje reusable no es “cómo hacer una landing bonita”, sino:

- cuándo una pieza puente tiene sentido;
- cómo cambia el mensaje entre one pager y landing;
- cómo se introducen disclaimers sin romper el pitch;
- cómo la narrativa comercial evoluciona antes de maquetar.

### 5.8 QA / restricciones / cumplimiento

La capa de QA y cumplimiento está muy presente y debe tratarse como parte del sistema, no como revisión final decorativa.

Activos clave:

- `2026-05-14_matriz_riesgos_cumplimiento_v1.md`;
- `2026-05-14_faq_pyme_digital_v1.md`;
- `2026-05-14_checklist_elegibilidad_v1.md`;
- `02_context/CONSTRAINTS.md`.

Patrón reusable ya visible:

- el cumplimiento condiciona estrategia, oferta, pricing, copy y artefactos;
- no es una capa posterior, sino un filtro transversal;
- conviene separar `confirmado`, `interpretación` y `pregunta abierta`.

### 5.9 Deploy / uso operativo

La capa operativa existe, aunque no esté cerrada del todo:

- la spec activa llevó a una landing HTML real;
- el funnel se apoya en `Cal.com` como punto de conversión previsto;
- el seguimiento posterior sigue siendo manual;
- la lógica de preacuerdo, ejecución Fase II y justificación ya aparece en varios outputs.

Lectura correcta:

- el caso ya salió de la fase puramente documental;
- todavía no es un sistema totalmente automatizado;
- pero sí es suficientemente real como para extraer un método reusable de trabajo.

## 6. Qué debe hacer después el post mortem

El post mortem debe reconstruir el recorrido real de este caso de punta a punta.

Debe hacerlo con estas obligaciones:

- inventariar inputs, transformaciones, decisiones, outputs e iteraciones;
- distinguir claramente entre `hecho confirmado`, `decisión estratégica`, `heurística comercial` y `pregunta abierta`;
- explicar no solo qué existe, sino por qué apareció en ese orden;
- capturar cambios de dirección visibles, por ejemplo:
  - paso de funnel mínimo a one pager;
  - iteración de copy y dirección visual;
  - paso de PDF/one pager a landing HTML como pieza prioritaria;
- separar con rigor:
  - lo específico de Pyme Digital 2026;
  - lo reutilizable en otras oportunidades;
  - lo que debería vivir como template;
  - lo que debería vivir como checklist;
  - lo que debería vivir como skill o subagent;
  - lo que debe seguir siendo decisión humana;
- dejar trazabilidad entre outputs del repo y patrones extraídos;
- identificar los huecos actuales del caso, especialmente donde el pipeline quedó implícito y no explícito.

El post mortem no debe limitarse a “qué archivos hay”. Debe convertir el repo en un mapa de aprendizaje reusable.

## 7. Qué NO debe hacer después el post mortem

El post mortem no debe:

- resumir el repo como inventario plano de carpetas;
- escribir una narrativa genérica sobre agentes sin anclaje en el caso;
- fingir una linealidad perfecta si hubo iteraciones o cambios de dirección;
- tratar todos los outputs actuales como si fueran la versión final ideal;
- crear ya las skills definitivas;
- rediseñar el repo;
- generar nuevos assets comerciales por inercia;
- confundir elegibilidad de beneficiario con ICP comercial;
- confundir conocimientos normativos del caso con patrones universales;
- abstraer tanto el caso que desaparezcan las decisiones concretas que lo hicieron funcionar.

## 8. Principios para futuras skills/subagents

Las futuras skills/subagents deberían nacer con los mismos límites que el repo ya insinúa:

- una skill por fase, no una skill que lo haga todo;
- lectura obligatoria de inputs antes de preguntar;
- output concreto y acotado;
- criterios de calidad verificables;
- límites explícitos de alcance;
- separación clara entre estrategia, oferta, ICP, funnel y artifact-building;
- checkpoint obligatorio con el usuario antes de pasar a la siguiente capa;
- trazabilidad entre afirmaciones y fuentes;
- parada explícita cuando falta validación o input crítico;
- recomendación explícita del siguiente paso.

Además, conviene alinear la forma de estas skills con la convención ya existente en el repo:

- `shared/skills/*/SKILL.md` como contenedor de `Goal`, `Inputs`, `Output`, `Procedure` y `Anti-patterns`;
- `shared/agents/*/AGENT.md` como orquestadores ligeros, no como inteligencias omnipotentes.

Principio central:

- las skills de artefacto no deben inventar estrategia;
- las skills de estrategia no deben maquetar;
- las skills de QA no deben reescribir el trabajo upstream en silencio.

## 9. Hipótesis inicial de skills/subagents reutilizables

Hipótesis inicial, todavía sin implementar:

- `project-opportunity-intake`
  - convierte documentación bruta en intake estructurado;
  - identifica unknowns y primeras preguntas;
  - no baja todavía a oferta.

- `strategic-opportunity-mapper`
  - formula la tesis estratégica del caso;
  - identifica riesgos, restricciones, ventanas y ángulos de juego;
  - pide validación antes de tocar packs.

- `offer-architect`
  - convierte tesis estratégica en servicios, packs, claims, pricing y guardrails;
  - no diseña aún funnel ni artefactos.

- `icp-and-segmentation`
  - separa elegibilidad, prioridad comercial e ICP real;
  - define segmentos, dolores, objeciones, filtros y señales;
  - valida beachhead antes de pasar a mensajes.

- `funnel-strategist`
  - define secuencia de conversión, CTAs, piezas, etapas y handoffs;
  - no maqueta todavía.

- `landing-artifact-builder`
  - construye la landing desde estrategia, oferta e ICP ya validados;
  - no debe reabrir posicionamiento.

- `one-pager-artifact-builder`
  - construye la pieza puente o comercial según función definida;
  - no debe ser un clon comprimido de la landing.

- `commercial-copy-adapter`
  - adapta la narrativa a email, WhatsApp, LinkedIn, call script y seguimiento;
  - hereda límites de claims y cumplimiento.

- `compliance-qa-reviewer`
  - revisa claims, trazabilidad, riesgos de encaje, promesas y coherencia;
  - no reescribe oferta sin explicitarlo.

- `postmortem-inventory`
  - documenta recorrido, decisiones, cambios, outputs y patrones;
  - separa específico vs reusable.

- `skill-creator-from-case-study`
  - convierte aprendizajes ya validados en skills reales;
  - usa eval loop y criterios de parada.

Nota importante:

- el repo ya contiene un precedente parcial para la capa `ICP` (`icp-definer` + `prospector`);
- el sistema futuro debería aprovechar ese precedente, pero no dar por hecho que ya resuelve el patrón completo extraído de este caso.

## 10. Checkpoints obligatorios con el usuario

El sistema futuro debería incorporar, como mínimo, estos checkpoints:

- `Checkpoint 1 — Intake`
  - validar qué oportunidad estamos interpretando y qué outputs persigue el caso.

- `Checkpoint 2 — Tesis estratégica`
  - validar lectura de oportunidad, restricciones, postura competitiva y no negociables.

- `Checkpoint 3 — Oferta`
  - validar packs, alcance, pricing y claims permitidos.

- `Checkpoint 4 — ICP / cualificación`
  - validar a quién se prioriza, a quién se descarta y cómo se detecta encaje.

- `Checkpoint 5 — Funnel`
  - validar etapas, CTA principal, piezas y secuencia de conversión.

- `Checkpoint 6 — Brief de artefactos`
  - validar qué debe hacer cada pieza antes de diseñarla o maquetarla.

- `Checkpoint 7 — QA / compliance`
  - validar riesgos, promesas, coherencia y readiness operativa.

- `Checkpoint 8 — Post mortem / extracción reusable`
  - validar qué aprendizajes suben a skill, template, checklist o playbook.

## 11. Riesgos de hacerlo mal

Los fallos más probables son:

- tratar el repo como archivo muerto y no como caso vivo;
- confundir el output visible final con el proceso que lo produjo;
- intentar diseñar skills one-shot que colapsen estrategia, oferta, ICP, funnel y landing;
- convertir elegibilidad de subvención en sustituto de ICP comercial;
- perder la diferencia entre `confirmado`, `interpretación` y `hipótesis`;
- crear builders de landing/one pager que inventen posicionamiento sin validación previa;
- extraer patrones demasiado pegados a Pyme Digital y poco útiles fuera de este caso;
- extraer patrones demasiado abstractos y desligados del caso real;
- ignorar iteraciones y cambios de dirección, que son precisamente parte del aprendizaje reusable;
- hacer el post mortem como resumen elegante en lugar de como inventario operativo de decisiones.

## 12. Preguntas que necesito hacer al usuario antes de pasar al post mortem

- ¿El sistema reusable que quieres extraer debe servir solo para oportunidades parecidas a subvenciones/convocatorias o también para oportunidades B2B generales con documentación bruta?
- ¿Quieres que el post mortem reconstruya primero la cronología real de lo que pasó y después la versión idealizada del pipeline, o solo una de las dos?
- ¿La separación futura entre `elegibilidad del caso` e `ICP comercial` es un requisito explícito que quieres forzar en el sistema?
- ¿Qué te interesa priorizar al convertir el aprendizaje en reutilizable: estrategia, oferta, ICP, funnel, artefactos o QA/compliance?
- ¿Hasta qué punto quieres que las futuras skills dependan de repos externos de referencia como `Hormozi-Team-Project-v2`, `funnel-and-offer-academy` o `CONTENEDOR-LANDINGS`?
- ¿Quieres que la capa de marca/voice de `Skilland` quede como adaptador opcional separado del sistema base reusable?
- ¿Debemos tratar las iteraciones de one pager y el giro hacia la landing como parte central del aprendizaje, o como detalle secundario dentro del post mortem?
- ¿Quieres que el futuro sistema obligue a parar en cada checkpoint hasta validación explícita del usuario, o prefieres un modo “propón y avanza salvo bloqueo”?
- ¿El post mortem debe terminar ya con una priorización de qué skills construir primero, o solo con inventario y recomendación?

## 13. Siguiente prompt recomendado

Usar solo después de validar este alineamiento y responder las preguntas de la sección 12.

```md
Ejecuta el post mortem operativo del proyecto SC Pyme Digital como caso base reusable.

Trabaja desde la raíz del repo y usa como fuentes principales:
- `01_planning/2026-05-19_reusable_system_alignment_v1.md`
- `00_inbox/`
- `02_context/`
- `03_specs/`
- `04_outputs/`
- `shared/skills/`
- `shared/agents/`

Objetivo:
documentar el recorrido completo de principio a fin y separar con rigor:
- inputs brutos;
- destilación;
- decisiones estratégicas;
- decisiones comerciales;
- diseño de oferta;
- cualificación / ICP;
- funnel;
- artefactos comerciales;
- QA / restricciones / cumplimiento;
- iteraciones y cambios de dirección;
- outputs generados;
- partes específicas de Pyme Digital;
- partes reutilizables;
- candidatos a skill;
- candidatos a subagent;
- candidatos a template;
- candidatos a checklist;
- pasos que deben seguir siendo interactivos con el usuario.

No crees todavía las skills.
No rediseñes todavía el repo.
No produzcas nuevos artefactos comerciales.
No hagas teoría genérica sobre agentes.

Crea un documento de post mortem en:
`01_planning/2026-05-19_operational_postmortem_v1.md`
```
