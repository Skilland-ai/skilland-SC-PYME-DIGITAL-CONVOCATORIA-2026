---
name: icp-and-segmentation
description: Implement Stage 08 of the `opportunity-gtm-pipeline` workflow. Use when a run already has a qualification matrix plus `Qualification -> ICP` handoff and needs to convert offer logic and case-level qualification signals into reusable market segmentation: segment candidates, prioritization criteria, recommended beachhead, anti-ICP, observable good-fit and bad-fit signals, and a validation backlog for `QA Gate 3`. Also use when a run folder exists and `current_stage` is `08_icp_segmentation`, especially when the team must keep ICP separate from case eligibility.
---

# icp-and-segmentation

## Goal

Convertir oferta + qualification heredada en una segmentacion comercial reusable, dejando claro que ICP no es elegibilidad del caso ni routing individual de leads.

## Stage integration

- Workflow: `shared/workflows/opportunity-gtm-pipeline/`
- Stage id: `08_icp_segmentation`
- Reads:
  - `shared/workflows/opportunity-gtm-pipeline/README.md`
  - `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
  - `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_run_state.md`
  - `{run_folder}/07_qualification/eligibility_commercial_qualification_matrix.md`
  - `{run_folder}/07_qualification/handoff_to_icp.md`
  - `{run_folder}/05_offer/offer_architecture_brief.md`
  - opcionalmente:
    - `{run_folder}/04_context_pack/context_master_brief.md`
    - `{run_folder}/04_context_pack/constraints_matrix.md`
    - `{run_folder}/06_qa_gate_2/qa_offer_report.md`
    - `shared/skills/icp-definer/SKILL.md` como referencia parcial de mercado si hace falta
- Writes:
  - `{run_folder}/08_icp/icp_segmentation_brief.md`
  - `{run_folder}/08_icp/handoff_to_qa_gate_3.md`
  - opcionalmente:
    - `{run_folder}/08_icp/segment_priority_matrix.md`
    - `{run_folder}/08_icp/anti_icp_notes.md`
    - `{run_folder}/08_icp/market_signals_backlog.md`
- Handoff: `ICP -> QA Gate 3`
- Updates run state:
  - si existe `{run_folder}/00_run_state.md`, actualizalo
  - si faltan qualification u offer minimos, deja instruccion explicita y detente
- Next stage: `09_qa_gate_3_readiness`

## When to use this skill

Usa esta skill cuando:

- el run ya paso por `07_qualification`;
- existe un handoff `Qualification -> ICP` en estado utilizable;
- hace falta decidir a quien atraer de forma repetible, no como evaluar un caso individual;
- `current_stage` es `08_icp_segmentation`.

No la uses cuando:

- el trabajo real es construir o revisar qualification;
- el usuario pide ya QA Gate 3 o readiness;
- todavia faltan outputs minimos de `07_qualification` o `05_offer`;
- la conversacion sigue siendo sobre gates de caso y no sobre mercado objetivo.

## Inputs

### Required inputs

- `{run_folder}/00_run_state.md`
- `{run_folder}/07_qualification/eligibility_commercial_qualification_matrix.md`
- `{run_folder}/07_qualification/handoff_to_icp.md`
- `{run_folder}/05_offer/offer_architecture_brief.md`

### Optional inputs

- `{run_folder}/04_context_pack/context_master_brief.md`
- `{run_folder}/04_context_pack/constraints_matrix.md`
- `{run_folder}/06_qa_gate_2/qa_offer_report.md`
- notas del usuario sobre segmentos ya sospechados
- referencias de `shared/skills/icp-definer/` solo como apoyo de criterio de mercado

## Outputs

- `{run_folder}/08_icp/icp_segmentation_brief.md`
- `{run_folder}/08_icp/handoff_to_qa_gate_3.md`
- annexes opcionales solo si reducen ambiguedad real en priorizacion o validacion
- actualizacion de `{run_folder}/00_run_state.md`, o instrucciones explicitas para actualizarlo si hay bloqueo

## Procedure

### 1. Locate run context

1. Lee `{run_folder}/00_run_state.md` primero.
2. Confirma que:
   - `current_stage` es `08_icp_segmentation`, o
   - `07_qualification` figura como completado y el handoff a ICP esta en `ready_for_next_stage`.
3. Si falta run state o el run context no es usable, detente con `blocked_missing_input`.

### 2. Read qualification outputs

Lee completos:

- `{run_folder}/07_qualification/eligibility_commercial_qualification_matrix.md`
- `{run_folder}/07_qualification/handoff_to_icp.md`

Extrae de ahi como minimo:

- hard gates del caso;
- soft gates del caso;
- logica `No-go / Go con cautelas / Go preliminar`;
- senales de cualificacion comercial;
- screening questions relevantes;
- que ICP debe heredar;
- que ICP no debe asumir.

### 3. Read offer architecture

Lee `{run_folder}/05_offer/offer_architecture_brief.md` y, si hace falta, tambien:

- `{run_folder}/04_context_pack/context_master_brief.md`
- `{run_folder}/04_context_pack/constraints_matrix.md`
- `{run_folder}/06_qa_gate_2/qa_offer_report.md`

Usalos para recuperar:

- tipo de oferta;
- hero offer;
- outcome perseguido;
- claims y guardrails relevantes;
- limites de delivery o riesgo que afectan a la segmentacion.

### 4. Preserve qualification gates without turning them into ICP

Haz explicito desde el principio:

- qualification responde si un caso concreto puede o no avanzar;
- ICP responde que tipo de cuenta o comprador queremos atraer repetiblemente.

Los hard gates y soft gates pueden informar el ICP, pero no deben redefinirse como segmento por si mismos.

### 5. Identify segment candidates

Formula segmentos candidatos razonables a partir de:

- fit con la oferta;
- problemas o triggers recurrentes;
- viabilidad comercial repetible;
- posibilidad real de alcanzar y servir el segmento.

No inventes segmentos solo porque un caso concreto pase qualification.

### 6. Define prioritization criteria

Explicita criterios de priorizacion como:

- urgencia del problema;
- intensidad del dolor;
- capacidad de compra;
- alcanzabilidad;
- encaje con delivery;
- riesgo;
- evidencia disponible.

Si un criterio no influye realmente en la decision, no lo añadas por decoracion.

### 7. Score or rank segments

Ordena los segmentos candidatos usando la matriz de prioridad o una justificacion equivalente.

No hace falta precision numerica falsa. Lo importante es dejar clara la logica comparativa entre segmentos.

### 8. Recommend beachhead

Propone un `beachhead` recomendado:

- un segmento prioritario inicial;
- por que deberia ir primero;
- que tradeoff implica frente a segmentos secundarios.

Si el beachhead depende de una decision de mercado sensible no validada, usa `needs_user_checkpoint`.

### 9. Define anti-ICP

Explicita:

- perfiles o cuentas que no deberian priorizarse;
- por que son riesgosos o poco eficientes;
- falsos positivos habituales.

Anti-ICP no es lo mismo que `No-go` de qualification. Puede haber cuentas que pasen gates de caso y aun asi no sean buen ICP.

### 10. Define observable market signals

Convierte el ICP en senales observables:

- senales de buen fit;
- senales de mal fit;
- notas sobre buyer o stakeholder si ayudan a operativizar la segmentacion.

Prioriza senales que puedan validarse en la practica y no solo descripciones abstractas.

### 11. Identify assumptions and validation backlog

Documenta:

- assumptions de mercado;
- unknowns que cambian la priorizacion;
- backlog de validacion de senales;
- huecos que QA Gate 3 debera vigilar.

No presentes una hipotesis de mercado como si ya estuviera validada.

### 12. Produce ICP segmentation brief

Escribe `{run_folder}/08_icp/icp_segmentation_brief.md` usando `templates/icp_segmentation_brief_template.md`.

Debe dejar claro:

- la separacion entre qualification e ICP;
- segmentos candidatos;
- criterios de priorizacion;
- beachhead recomendado y por que;
- segmentos secundarios;
- anti-ICP;
- senales observables;
- assumptions, unknowns y backlog de validacion;
- que QA Gate 3 debe revisar;
- que funnel/artifacts no deben asumir todavia.

### 13. Create optional annexes only if useful

Solo crea `segment_priority_matrix.md`, `anti_icp_notes.md` o `market_signals_backlog.md` si reducen ambiguedad real o facilitan validacion downstream.

No los crees por completismo. Si el brief principal ya soporta bien QA Gate 3, omitelos.

### 14. Produce handoff to QA Gate 3

Escribe `{run_folder}/08_icp/handoff_to_qa_gate_3.md` usando `templates/handoff_to_qa_gate_3_template.md`.

El handoff debe cumplir `ICP -> QA Gate 3` e incluir:

- segmentos candidatos;
- beachhead recomendado;
- segmentos secundarios;
- anti-ICP;
- senales observables de buen y mal fit;
- relacion explicita con la oferta;
- separacion explicita respecto a qualification;
- facts, hypotheses y unknowns;
- riesgos;
- que QA Gate 3 debe revisar cuidadosamente;
- que funnel/artifacts no deben asumir todavia.

No metas:

- funnel;
- copy;
- landing brief;
- one pager brief;
- channel plan;
- campaign messages.

### 15. Update or instruct run state update

Si existe `{run_folder}/00_run_state.md`, actualizalo como minimo con:

- `08_icp_segmentation` en el estado correspondiente;
- output paths de los artifacts creados;
- handoff path de `handoff_to_qa_gate_3.md`;
- `current_status`;
- `current_stage`;
- riesgos, unknowns y decisiones abiertas si aplica.

Usa solo:

- `ready_for_next_stage`
- `needs_user_checkpoint`
- `blocked_missing_input`
- `needs_revision`
- `blocked_compliance_risk`

Guia de uso:

- `ready_for_next_stage`: el ICP es usable y el checkpoint ya esta resuelto.
- `needs_user_checkpoint`: beachhead, anti-ICP o criterio de priorizacion siguen sin validar.
- `blocked_missing_input`: faltan outputs o senales minimas para priorizar segmentos.
- `needs_revision`: qualification existe, pero no se traduce en una segmentacion usable sin revisar parte del upstream.
- `blocked_compliance_risk`: la priorizacion sugerida choca con riesgos graves ya visibles.

### 16. Stop before QA Gate 3 / funnel / artifacts

Detente siempre al cerrar ICP.

Nunca:

- ejecutes `09_qa_gate_3_readiness`;
- disenes funnel;
- escribas copy;
- construyas assets downstream;
- conviertas el ICP en plan de campana.

## Regla central

### Qualification heredada

Viene de Stage 07 y responde:

- ¿Puede avanzar este caso concreto?
- ¿Que hard gates debe pasar?
- ¿Que soft gates condicionan avance?
- ¿Cuando es `No-go / Go con cautelas / Go preliminar`?

### ICP / segmentacion

Esta skill responde:

- ¿Que tipo de empresa/persona queremos atraer de forma repetible?
- ¿Que segmento deberiamos priorizar primero?
- ¿Que senales observables indican buen fit?
- ¿Que tipo de cuenta/persona debemos evitar aunque pueda pasar qualification?
- ¿Que hipotesis de mercado hay que validar?

## Output format

Usa siempre:

- `templates/icp_segmentation_brief_template.md`
- `templates/handoff_to_qa_gate_3_template.md`

Y solo si hace falta:

- `templates/optional_segment_priority_matrix_template.md`
- `templates/optional_anti_icp_notes_template.md`
- `templates/optional_market_signals_backlog_template.md`

Si el ICP no esta listo, los outputs principales igual deben existir si el run folder existe, pero con:

- status adecuado;
- segmentos o prioridades pendientes;
- blocking questions;
- explicacion de por que QA Gate 3 no deberia correr todavia.

## Handoff contract

El handoff debe cumplir `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`, en concreto `ICP -> QA Gate 3`.

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

Y ademas debe incluir:

- segmentos candidatos;
- beachhead recomendado;
- senales observables;
- anti-ICP;
- relacion explicita con la oferta.

## User checkpoint

Este stage tiene checkpoint obligatorio.

El usuario debe validar, como minimo:

- segmento prioritario;
- anti-ICP;
- senales relevantes;
- nivel de confianza de la hipotesis.

Si cualquiera de esos puntos sigue abierto o depende de una decision sensible, usa `needs_user_checkpoint`.

## Quality criteria

- lee qualification y offer antes de segmentar;
- preserva gates heredados sin convertirlos en ICP;
- define segmentos candidatos y criterios de priorizacion;
- recomienda y justifica un beachhead;
- define anti-ICP y senales observables;
- deja visible el backlog de validacion;
- explica que funnel/artifacts no deben asumir todavia;
- produce outputs dentro de `08_icp/`;
- no invade QA Gate 3, funnel ni builders.

## Anti-patterns

- usar elegibilidad como si fuera mercado objetivo;
- convertir hard gates en segmento;
- elegir beachhead sin justificarlo;
- confundir anti-ICP con `No-go` legal u operativo;
- bajar a copy, canales o campanas desde esta stage;
- esconder unknowns de mercado.

## Stop conditions

Para cuando ocurra cualquiera de estas condiciones:

- existe un ICP segmentation brief validable y un handoff claro para QA Gate 3;
- faltan inputs minimos y corresponde `blocked_missing_input`;
- la segmentacion depende de correcciones upstream y corresponde `needs_revision`;
- persiste un riesgo grave y corresponde `blocked_compliance_risk`;
- hace falta validacion humana sobre beachhead o anti-ICP y corresponde `needs_user_checkpoint`.

## Handoff to next skill

Si el stage queda utilizable, el siguiente paso recomendado es `compliance-qa-reviewer` en modo `09_qa_gate_3_readiness`.

El handoff debe dejar claro que Gate 3:

- revisa coherencia upstream completa;
- no debe rediseñar la segmentacion por detras;
- debe vigilar claims, riesgos y supuestos antes de habilitar funnel/artifacts.
