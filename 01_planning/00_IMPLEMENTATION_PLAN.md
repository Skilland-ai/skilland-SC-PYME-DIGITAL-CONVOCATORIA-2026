# Plan de Implementación — Pyme Digital 2026

Fecha: `2026-05-14`
Estado: `v1`

## Leyenda de lectura

- `Confirmado`: sale de convocatoria, anexos o archivos fuente del repo.
- `Interpretación`: lectura estratégica apoyada en las fuentes, pero no texto normativo.
- `Recomendación`: decisión operativa propuesta para el repo.
- `Pregunta abierta`: falta dato o validación en las fuentes disponibles.

## 1. Estado actual del repo

- `Confirmado`: el repo está en fase de arranque y sigue un scaffold `docs-first` con `00_inbox/`, `01_harness/`, `02_context/`, `03_specs/`, `04_outputs/` y `05_scratch/`.
- `Confirmado`: `02_context/` existía solo con stubs.
- `Confirmado`: `03_specs/now/001_now.md` era un template vacío; `backlog.md` y `decisions.md` estaban prácticamente inicializados.
- `Confirmado`: toda la documentación sustantiva está hoy concentrada en `00_inbox/`.
- `Recomendación`: no abrir todavía líneas de implementación final; primero consolidar contexto, criterios de elegibilidad y arquitectura de trabajo.

## 2. Documentos fuente encontrados

- `Confirmado`: `[README.md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/README.md)` define el uso básico del harness.
- `Confirmado`: `[AGENTS.md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/AGENTS.md)` y `[CLAUDE.md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/CLAUDE.md)` reiteran el orden de lectura y el flujo de trabajo.
- `Confirmado`: `[00_inbox/What is this repo about.md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/00_inbox/What%20is%20this%20repo%20about.md)` define el propósito del repo, las líneas de trabajo y el entregable inicial esperado.
- `Confirmado`: `[00_inbox/ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/00_inbox/ENFOQUE_ESTRATEGICO_PYME_DIGITAL_2026.md)` es la capa principal de interpretación estratégica.
- `Confirmado`: `[00_inbox/2026_Convocatoria_Pyme Digital CCSCTF (1).md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/00_inbox/2026_Convocatoria_Pyme%20Digital%20CCSCTF%20(1).md)` contiene requisitos, presupuesto, procedimiento, obligaciones y compatibilidades.
- `Confirmado`: `[00_inbox/2026_Anexo I. Descripción del programa Pyme Digital.md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/00_inbox/2026_Anexo%20I.%20Descripci%C3%B3n%20del%20programa%20Pyme%20Digital.md)` describe oficialmente las dos fases.
- `Confirmado`: `[00_inbox/2026_Anexo II. Tipología y Justificación de Gastos elegibles Fase de Ayudas (1).md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/00_inbox/2026_Anexo%20II.%20Tipolog%C3%ADa%20y%20Justificaci%C3%B3n%20de%20Gastos%20elegibles%20Fase%20de%20Ayudas%20(1).md)` es la pieza crítica para mapear proyectos, gastos y justificación.
- `Confirmado`: `[00_inbox/2026_Anexo III Declaración responsable empresa Pyme Digital (2).md](/home/reboot/Escritorio/Skilland.ai/skilland-SC-PYME-DIGITAL-CONVOCATORIA-2026/00_inbox/2026_Anexo%20III%20Declaraci%C3%B3n%20responsable%20empresa%20Pyme%20Digital%20(2).md)` fija minimis, pyme y otras declaraciones.

## 3. Lectura estratégica de la convocatoria

- `Confirmado`: la Cámara hace el diagnóstico oficial en Fase I; la implantación en Fase II la ejecutan proveedores externos seleccionados libremente por la empresa, con control de elegibilidad y precios de mercado.
- `Confirmado`: la ayuda no descuenta el pago inicial; la pyme prefinancia, ejecuta, justifica y luego cobra.
- `Confirmado`: el procedimiento va por estricto orden de entrada y la ventana puede cerrarse antes por agotamiento presupuestario.
- `Confirmado`: el Anexo II exige ajustar el proyecto a tipologías subvencionables, controlar gastos elegibles/no elegibles y justificar pagos/evidencias con mucha disciplina.
- `Interpretación`: el principal riesgo comercial no es la inadmisión formal, sino llegar al diagnóstico de Cámara sin una prioridad TIC clara y quedar desligados del proyecto final.
- `Interpretación`: la mejor defensa comercial es que el cliente llegue con una `ficha preliminar de necesidad TIC y propuesta de implantación` que ayude a orientar el diagnóstico sin pretender sustituirlo.
- `Interpretación`: cuanto más literal sea el encaje con categorías del Anexo II, menor fricción habrá en Cámara y en la justificación.
- `Recomendación`: el repo debe priorizar tres piezas antes de cualquier funnel final: base de conocimiento de convocatoria, sistema de elegibilidad y matriz Anexo II -> packs -> riesgos.

## 4. Estructura recomendada del repo

- `Recomendación`: mantener el scaffold actual como columna vertebral y evitar abrir ahora carpetas temáticas paralelas que dupliquen la lógica del harness.
- `Recomendación`: usar `01_planning/` para planes vivos y de gobierno transversal.
- `Recomendación`: usar `02_context/` como pack de contexto de 5 minutos y reservar ampliaciones temáticas solo cuando aporten valor real.
- `Recomendación`: mantener una única spec activa en `03_specs/now/`.
- `Recomendación`: organizar los entregables finales por familia bajo `04_outputs/`:
  - `04_outputs/01_knowledge_base/`
  - `04_outputs/02_offers/`
  - `04_outputs/03_funnel/`
  - `04_outputs/04_templates/`
  - `04_outputs/05_ops/`
- `Recomendación`: usar `05_scratch/` para gap reports, tablas intermedias, mapeos provisionales y notas de lectura.

## 5. Líneas de trabajo

- `Línea 1 — Convocatoria`: requisitos, exclusiones, Fase I vs Fase II, plazos, orden de entrada, compatibilidades, justificación, publicidad FEDER, riesgos.
- `Línea 2 — Oferta`: sesión de prediagnóstico, filtro de elegibilidad, ficha preliminar, packs de proyecto, narrativa comercial y de cumplimiento.
- `Línea 2.1 — Packs`: CRM, RPA, Business Analytics, chatbot, ecommerce, marketing digital, con mapeo textual al Anexo II.
- `Línea 3 — Funnel`: estrategia de captación, landing, one-pager, formulario, reserva, cualificación y preparación documental.
- `Línea 4 — Generadores y templates`: checklist de elegibilidad, ficha previa, guion Cámara, propuesta/presupuesto y checklist de justificación.

## 6. Entregables por fase

- `Fase 0 — Construcción de contexto`
  - `02_context/BRIEF.md`
  - `02_context/FACTS.md`
  - `02_context/CONSTRAINTS.md`
  - `02_context/GLOSSARY.md`
  - `02_context/LINKS.md`
  - `01_planning/00_IMPLEMENTATION_PLAN.md`

- `Fase 1 — Base de conocimiento de convocatoria`
  - `04_outputs/01_knowledge_base/..._convocatoria_master_brief_v1.md`
  - `04_outputs/01_knowledge_base/..._checklist_elegibilidad_v1.md`
  - `04_outputs/01_knowledge_base/..._faq_pyme_digital_v1.md`
  - `04_outputs/01_knowledge_base/..._matriz_riesgos_cumplimiento_v1.md`

- `Fase 2 — Arquitectura de oferta`
  - `04_outputs/02_offers/..._catalogo_servicios_v1.md`
  - `04_outputs/02_offers/..._packs_pyme_digital_v1.md`
  - `04_outputs/02_offers/..._matriz_proyectos_verde_amarillo_rojo_v1.md`
  - `04_outputs/02_offers/..._pricing_y_alcances_v1.md`

- `Fase 3 — Diseño de funnel`
  - `04_outputs/03_funnel/..._funnel_strategy_v1.md`
  - `04_outputs/03_funnel/..._excalidraw_brief_v1.md`
  - `04_outputs/03_funnel/..._landing_brief_v1.md`
  - `04_outputs/03_funnel/..._one_pager_brief_v1.md`
  - `04_outputs/03_funnel/..._qual_form_questions_v1.md`

- `Fase 4 — Generadores y plantillas`
  - `04_outputs/04_templates/..._ficha_previa_necesidad_tic_v1.md`
  - `04_outputs/04_templates/..._ficha_proyecto_pyme_digital_v1.md`
  - `04_outputs/04_templates/..._checklist_kit_digital_v1.md`
  - `04_outputs/04_templates/..._guion_diagnostico_camara_v1.md`
  - `04_outputs/04_templates/..._checklist_justificacion_v1.md`

- `Fase 5 — Assets de implementación`
  - landing
  - one-pager
  - formulario
  - workflow CRM
  - scripts comerciales
  - secuencias email/WhatsApp

## 7. Orden sugerido de ejecución

1. Cerrar la base de conocimiento de convocatoria y elegibilidad.
2. Construir la matriz de riesgos de cumplimiento.
3. Mapear Anexo II a familias de servicio y packs potenciales.
4. Definir la sesión de prediagnóstico y la ficha preliminar.
5. Diseñar el catálogo comercial y el rango de alcances/presupuestos.
6. Diseñar el funnel y los briefs de assets sin implementarlos aún.
7. Preparar templates y generadores documentales.
8. Solo entonces producir landing, one-pager, formulario y automatizaciones.

## 8. Archivos a crear después

- `04_outputs/01_knowledge_base/2026-05-14_convocatoria_master_brief_v1.md`
- `04_outputs/01_knowledge_base/2026-05-14_checklist_elegibilidad_v1.md`
- `04_outputs/01_knowledge_base/2026-05-14_faq_pyme_digital_v1.md`
- `04_outputs/01_knowledge_base/2026-05-14_matriz_riesgos_cumplimiento_v1.md`
- `04_outputs/02_offers/2026-05-14_catalogo_servicios_v1.md`
- `04_outputs/02_offers/2026-05-14_packs_pyme_digital_v1.md`
- `04_outputs/02_offers/2026-05-14_matriz_proyectos_verde_amarillo_rojo_v1.md`
- `04_outputs/03_funnel/2026-05-14_funnel_strategy_v1.md`
- `04_outputs/03_funnel/2026-05-14_landing_brief_v1.md`
- `04_outputs/04_templates/2026-05-14_ficha_previa_necesidad_tic_v1.md`
- `04_outputs/04_templates/2026-05-14_guion_diagnostico_camara_v1.md`
- `04_outputs/04_templates/2026-05-14_checklist_justificacion_v1.md`

## 9. Workflows, agentes y skills necesarios

- `Distill`: skill local `shared/skills/initial-context-building/SKILL.md` para bootstrap completo y `shared/skills/distill-context/SKILL.md` para mantener `02_context/` legible.
- `Plan`: agent `planner` y skill `shared/skills/write-spec/SKILL.md` para convertir contexto en una spec activa verificable.
- `Ship`: agent `maker` y skill `shared/skills/ship-output/SKILL.md` cuando exista una spec ya validada y se vayan a producir outputs finales.
- `QA`: agent `reviewer` y skill `shared/skills/qa-review/SKILL.md` antes de cerrar cada fase.
- `Distill support`: agent `distiller` para comprimir documentos largos y detectar conflictos/unknowns.
- `Pregunta abierta`: no hay necesidad actual de usar `prospector`; será útil si más adelante se trabaja el ICP o segmentación de pymes objetivo.

## 10. Repos y paths externos a utilizar más adelante

- `Confirmado`: `/home/reboot/Escritorio/agentic-business-skill-development/learning-path/01-foundations/mini-projects/Hormozi-Team-Project-v2`
  - Uso futuro: diseñar lógica de oferta y paquetización comercial.
- `Confirmado`: `/home/reboot/Escritorio/funnel-and-offer-academy`
  - Uso futuro: diseñar la estrategia y secuencia del funnel.
- `Confirmado`: `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS`
  - Uso futuro: adaptar una landing sin partir de cero.
- `Recomendación`: usar Excalidraw MCP más adelante para representar el mapa del funnel cuando la arquitectura ya esté cerrada.

## 11. Preguntas abiertas y decisiones pendientes

- `Pregunta abierta`: fecha exacta de publicación del extracto en el BOP y fecha exacta de apertura efectiva de solicitudes.
- `Pregunta abierta`: listado exacto de municipios cubiertos por la demarcación cameral.
- `Pregunta abierta`: si la Sede permite adjuntar `otros documentos` durante la solicitud.
- `Pregunta abierta`: cuál será la marca comercial principal de cara al cliente: `Skilland`, `Reboot`, `EduKami` o una combinación.
- `Pregunta abierta`: qué 4-6 packs se consideran núcleo comercial y cuáles quedan como secundarios.
- `Pregunta abierta`: política interna de pricing, señal, reserva de diagnóstico y criterio de `go / no-go`.
- `Decisión pendiente`: si se construirá una sola ficha preliminar genérica o varias por familia de proyecto.

## 12. Riesgos y cautelas de cumplimiento

- `Riesgo`: vender el prediagnóstico como sustituto del diagnóstico oficial de Cámara.
- `Riesgo`: presentarse como gestor oficial, partner de Cámara o garante de concesión.
- `Riesgo`: formular la oferta como `software a medida` sin categoría textual sólida del Anexo II.
- `Riesgo`: proponer soluciones ya financiadas por Kit Digital.
- `Riesgo`: proponer proyectos coincidentes con la actividad principal de la pyme.
- `Riesgo`: trabajar con proveedor vinculado o con precios fuera de mercado.
- `Riesgo`: olvidar que `IVA/IGIC` no es subvencionable y que la pyme prefinancia el 100%.
- `Riesgo`: planificar gastos, pagos o facturas fuera de las fechas del `DECA`.
- `Riesgo`: diseñar proyectos sin pensar desde el día uno en evidencias, publicidad FEDER y trazabilidad de pagos.
- `Riesgo`: apoyarse en actuaciones no listadas expresamente o en desarrollo a medida sin asumir revisión más profunda.

## 13. Primer backlog de ejecución

1. Ejecutar la spec activa de base de conocimiento y elegibilidad.
2. Redactar la matriz de riesgos de cumplimiento con criterios verde/amarillo/rojo.
3. Construir la FAQ interna/cliente de la convocatoria.
4. Mapear categorías del Anexo II a servicios y packs potenciales.
5. Definir la plantilla de ficha preliminar de necesidad TIC.
6. Definir el guion de prediagnóstico comercial y de preparación para Cámara.
7. Diseñar el catálogo de packs y su lógica de alcance/precio/evidencias.
8. Diseñar el funnel y el brief de landing sin implementarla todavía.

## Próximo prompt recomendado

`Ejecuta la Fase 1 del plan: crea la base de conocimiento de convocatoria en 04_outputs/01_knowledge_base con master brief, checklist de elegibilidad, FAQ y matriz de riesgos, usando 02_context y 00_inbox como únicas fuentes.`
