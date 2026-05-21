---
name: eligibility-and-commercial-qualifier
description: Implement Stage 07 of the `opportunity-gtm-pipeline` workflow. Use when a run already has an offer reviewed by `QA Gate 2` and needs to convert approved claims, offer guardrails, context constraints, and case facts into a qualification system for concrete cases: hard gates, soft gates, commercial qualification criteria, screening questions, go/caution/no-go logic, and escalation signals. Also use when a run folder exists and `current_stage` is `07_qualification`, especially when the team must separate case eligibility from ICP segmentation.
---

# eligibility-and-commercial-qualifier

## Goal

Diseñar la lógica de filtro de casos concretos para que el sistema pueda decidir si un caso debe avanzar, avanzar con cautelas o bloquearse, sin confundir esa lógica con ICP o segmentación de mercado.

## Stage integration

- Workflow: `shared/workflows/opportunity-gtm-pipeline/`
- Stage id: `07_qualification`
- Reads:
  - `shared/workflows/opportunity-gtm-pipeline/README.md`
  - `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
  - `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_run_state.md`
  - `{run_folder}/05_offer/offer_architecture_brief.md`
  - `{run_folder}/06_qa_gate_2/qa_offer_report.md`
  - `{run_folder}/06_qa_gate_2/handoff_to_qualification.md`
  - `{run_folder}/04_context_pack/context_master_brief.md`
  - `{run_folder}/04_context_pack/facts_register.md`
  - `{run_folder}/04_context_pack/constraints_matrix.md`
- Writes:
  - `{run_folder}/07_qualification/eligibility_commercial_qualification_matrix.md`
  - `{run_folder}/07_qualification/handoff_to_icp.md`
  - opcionalmente:
    - `{run_folder}/07_qualification/screening_questions.md`
    - `{run_folder}/07_qualification/go_no_go_routing_table.md`
- Handoff: `Qualification -> ICP`
- Updates run state:
  - si existe `{run_folder}/00_run_state.md`, actualízalo
  - si faltan offer, QA Gate 2 o constraints mínimos, deja instrucción explícita y detente
- Next stage: `08_icp_segmentation`

## When to use this skill

Usa esta skill cuando:

- el run ya pasó por `06_qa_gate_2_offer`;
- existe un handoff `QA Gate 2 -> Qualification` en estado utilizable;
- hace falta decidir cómo filtrar casos concretos antes de hablar de mercado o segmentos;
- `current_stage` es `07_qualification`.

No la uses cuando:

- el trabajo real es construir o revisar oferta;
- el usuario pide ya ICP, beachhead o anti-ICP;
- el run todavía no tiene outputs mínimos de `05_offer` y `06_qa_gate_2`;
- lo que falta es un gate QA, no una lógica de cualificación.

## Inputs

### Required inputs

- `{run_folder}/00_run_state.md`
- `{run_folder}/05_offer/offer_architecture_brief.md`
- `{run_folder}/06_qa_gate_2/qa_offer_report.md`
- `{run_folder}/06_qa_gate_2/handoff_to_qualification.md`
- `{run_folder}/04_context_pack/context_master_brief.md`
- `{run_folder}/04_context_pack/facts_register.md`
- `{run_folder}/04_context_pack/constraints_matrix.md`

### Optional inputs

- decisiones previas del usuario sobre tolerancia a casos dudosos
- notas del equipo sobre señales de escalado interno
- fuentes primarias adicionales solo si aclaran una condición de avance crítica

## Outputs

- `{run_folder}/07_qualification/eligibility_commercial_qualification_matrix.md`
- `{run_folder}/07_qualification/handoff_to_icp.md`
- annexes opcionales solo si reducen ambigüedad real en screening o routing
- actualización de `{run_folder}/00_run_state.md`, o instrucciones explícitas para actualizarlo si hay bloqueo

## Procedure

### 1. Locate run context

1. Lee `{run_folder}/00_run_state.md` primero.
2. Confirma que:
   - `current_stage` es `07_qualification`, o
   - `06_qa_gate_2_offer` figura como completado y el handoff a qualification está en `ready_for_next_stage`.
3. Si falta run state o el run context no es usable, detente con `blocked_missing_input`.

### 2. Read QA Gate 2 and offer outputs

Lee completos:

- `{run_folder}/05_offer/offer_architecture_brief.md`
- `{run_folder}/06_qa_gate_2/qa_offer_report.md`
- `{run_folder}/06_qa_gate_2/handoff_to_qualification.md`

Extrae de ahí como mínimo:

- claims aprobados y condicionados;
- restricciones que deben preservarse;
- riesgos de oferta;
- no-go comerciales;
- decisiones pendientes que afectan el avance del caso.

No reabras la oferta ni reescribas claims ya revisados por QA Gate 2.

### 3. Read context pack constraints

Lee:

- `{run_folder}/04_context_pack/context_master_brief.md`
- `{run_folder}/04_context_pack/facts_register.md`
- `{run_folder}/04_context_pack/constraints_matrix.md`

Úsalos para recuperar:

- facts relevantes para viabilidad del caso;
- constraints duras y blandas;
- unknowns que siguen vivos;
- límites operativos o normativos que qualification debe respetar.

### 4. Extract eligibility / viability criteria

Identifica criterios de elegibilidad o viabilidad del caso concreto, por ejemplo:

- cumplimiento de requisitos duros;
- ausencia de bloqueos normativos;
- viabilidad operativa mínima;
- compatibilidad económica mínima;
- posibilidad real de ejecutar la oferta dentro del marco actual.

Estos criterios responden a: `¿Puede este caso avanzar dentro del marco actual?`

### 5. Extract commercial qualification criteria

Identifica criterios de cualificación comercial del caso concreto, por ejemplo:

- dolor o necesidad real;
- urgencia;
- capacidad de decisión;
- capacidad de pago o anticipo;
- sponsor interno;
- riesgo de desgaste comercial.

Estos criterios responden a: `¿Merece la pena dedicar esfuerzo comercial a este lead concreto?`

### 6. Separate hard gates from soft gates

Separa explícitamente:

- `hard gates`: si fallan, el caso no debe avanzar;
- `soft gates`: si fallan, el caso puede ir a cautela, seguimiento o más validación.

No mezcles ambos tipos en una lista única. La lógica downstream debe poder distinguir bloqueo duro de señal débil.

### 7. Define go / caution / no-go logic

Construye una lógica clara de routing del caso:

- `No-go`
- `Go with cautions`
- `Preliminary go`

Usa `Needs more information` solo como estado operativo auxiliar si aporta claridad en un anexo opcional, no como sustituto de la lógica principal.

### 8. Define screening questions

Convierte gates y criterios en preguntas de screening accionables:

- preguntas de hard gate;
- preguntas de soft gate;
- preguntas de cualificación comercial.

Cada pregunta debe revelar algo útil para decidir el avance del caso. Evita preguntas decorativas.

### 9. Define escalation signals

Define señales que obligan a escalar internamente el caso, por ejemplo:

- conflicto entre elegibilidad y viabilidad comercial;
- sponsor débil con caso complejo;
- dependencia de interpretación sensible;
- necesidad de validación superior sobre riesgo, alcance o timing.

### 10. Identify qualification risks and unknowns

Documenta:

- riesgos que pueden sesgar la cualificación;
- unknowns que cambian el routing;
- supuestos que todavía no están confirmados;
- huecos de evidencia o documentación.

No escondas incertidumbre bajo una recomendación optimista.

### 11. Produce qualification matrix

Escribe `{run_folder}/07_qualification/eligibility_commercial_qualification_matrix.md` usando `templates/eligibility_commercial_qualification_matrix_template.md`.

Debe dejar claro:

- propósito de la matriz;
- base de oferta y QA;
- hard gates;
- soft gates;
- criterios de cualificación comercial;
- lógica `No-go / Go con cautelas / Go preliminar`;
- preguntas de screening;
- evidencias requeridas;
- señales de escalado;
- qué ICP debe heredar y qué no debe asumir.

### 12. Create optional routing/screening annexes only if useful

Solo crea `screening_questions.md` o `go_no_go_routing_table.md` si reducen ambigüedad real o facilitan operación downstream.

No los crees por completismo. Si la matriz principal ya soporta bien el siguiente stage, omítelos.

### 13. Produce handoff to ICP

Escribe `{run_folder}/07_qualification/handoff_to_icp.md` usando `templates/handoff_to_icp_template.md`.

El handoff debe cumplir `Qualification -> ICP` e incluir:

- hard gates;
- soft gates;
- lógica `go / caution / no-go`;
- señales de cualificación comercial;
- resumen de screening questions;
- señales de escalado;
- separación explícita entre elegibilidad y cualificación comercial;
- qué ICP debe heredar;
- qué ICP no debe asumir.

No metas:

- beachhead final;
- segmentos prioritarios finales;
- anti-ICP final;
- funnel;
- copy;
- artifact briefs.

### 14. Update or instruct run state update

Si existe `{run_folder}/00_run_state.md`, actualízalo como mínimo con:

- `07_qualification` en el estado correspondiente;
- output paths de los artifacts creados;
- handoff path de `handoff_to_icp.md`;
- `current_status`;
- `current_stage`;
- riesgos, unknowns y decisiones abiertas si aplica.

Usa solo:

- `ready_for_next_stage`
- `needs_user_checkpoint`
- `blocked_missing_input`
- `needs_revision`
- `blocked_compliance_risk`

Guía de uso:

- `ready_for_next_stage`: la lógica de filtro de caso está clara y el checkpoint ya está resuelto.
- `needs_user_checkpoint`: hard gates, soft gates o estados de avance requieren validación humana.
- `blocked_missing_input`: faltan outputs o criterios mínimos.
- `needs_revision`: offer/QA existen, pero no sostienen una lógica de cualificación usable sin corregir upstream.
- `blocked_compliance_risk`: persiste un riesgo grave que impide definir un routing responsable del caso.

### 15. Stop before ICP

Detente siempre al cerrar qualification.

Nunca:

- ejecutes `08_icp_segmentation`;
- definas beachhead;
- elijas segmentos prioritarios;
- definas anti-ICP;
- diseñes funnel o builders downstream.

## Regla central

### Elegibilidad / viabilidad del caso

Responde a preguntas como:

- ¿Puede este caso avanzar dentro del marco actual?
- ¿Cumple requisitos duros?
- ¿Hay bloqueos normativos, operativos o económicos?
- ¿Existen condiciones mínimas para que la oferta sea viable?

### Cualificación comercial del caso

Responde a preguntas como:

- ¿Merece la pena dedicar esfuerzo comercial a este lead concreto?
- ¿Tiene dolor real?
- ¿Tiene urgencia?
- ¿Tiene capacidad de decisión?
- ¿Tiene capacidad de pago o avance?
- ¿Existe sponsor?
- ¿Hay alto riesgo de perder tiempo?

### ICP / segmentación

Queda fuera de esta skill.

Esta skill puede preparar señales para ICP, pero no debe decidir:

- segmentos prioritarios;
- beachhead;
- anti-ICP;
- mercado objetivo;
- estrategia de prospección.

## Output format

Usa siempre:

- `templates/eligibility_commercial_qualification_matrix_template.md`
- `templates/handoff_to_icp_template.md`

Y solo si hace falta:

- `templates/optional_screening_questions_template.md`
- `templates/optional_go_no_go_routing_table_template.md`

Si qualification no está lista, los outputs principales igual deben existir si el run folder existe, pero con:

- status adecuado;
- gates o criterios pendientes;
- blocking questions;
- explicación de por qué ICP no debería arrancar todavía.

## Handoff contract

El handoff debe cumplir `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`, en concreto `Qualification -> ICP`.

Campos obligatorios:

- `source_stage`
- `target_stage`
- `run_id`
- `case_slug`
- `created_at`
- `status`
- `inputs_used`
- `outputs_created`
- `facts`
- `hypotheses`
- `unknowns`
- `blocking_questions`
- `user_decisions_needed`
- `risks`
- `recommended_next_action`

Y además debe incluir:

- hard gates del caso;
- soft gates del caso;
- lógica `No-go / Go con cautelas / Go preliminar`;
- señales de escalado interno;
- separación explícita entre elegibilidad y cualificación comercial.

## User checkpoint

Este stage tiene checkpoint obligatorio.

El usuario debe validar, como mínimo:

- hard gates;
- soft gates;
- estados de avance;
- nivel de tolerancia a casos dudosos.

Si cualquiera de esos puntos sigue abierto o depende de una decisión sensible, usa `needs_user_checkpoint`.

## Quality criteria

- lee offer, QA Gate 2 y context pack antes de definir la lógica;
- preserva claims, constraints y riesgos heredados;
- separa hard gates, soft gates y criterios de cualificación comercial;
- define preguntas de screening útiles;
- define señales de escalado;
- diferencia con rigor elegibilidad, cualificación comercial e ICP;
- produce outputs dentro de `07_qualification/`;
- no invade ICP, funnel ni builders.

## Anti-patterns

- usar qualification como ICP encubierto;
- reabrir oferta o claims ya revisados;
- mezclar gates duros y blandos en la misma lógica;
- convertir señales débiles en bloqueos absolutos sin base;
- ocultar unknowns que cambian el routing;
- diseñar segmentos o beachheads desde esta stage.

## Stop conditions

Para cuando ocurra cualquiera de estas condiciones:

- existe una matriz clara de cualificación y un handoff usable para ICP;
- faltan inputs mínimos y corresponde `blocked_missing_input`;
- la lógica depende de correcciones upstream y corresponde `needs_revision`;
- persiste un riesgo grave y corresponde `blocked_compliance_risk`;
- hace falta validación humana sobre gates o tolerancia a casos dudosos y corresponde `needs_user_checkpoint`.

## Handoff to next skill

Si el stage queda utilizable, el siguiente paso recomendado es `icp-and-segmentation`.

El handoff debe dejar claro que Stage 08:

- hereda señales del caso, no la decisión final de mercado;
- puede usar qualification como filtro previo;
- no debe absorber la lógica legal u operativa de elegibilidad como si fuera ICP.
