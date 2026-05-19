---
name: strategic-opportunity-mapper
description: Implement Stage 02 of the `opportunity-gtm-pipeline` workflow. Use when a run already has `01_intake/intake_brief.md` plus `01_intake/handoff_to_strategy.md` and needs to convert that intake into a strategic thesis, actor/role map, opportunity angles, no-go zones, and a `Strategy -> QA Gate 1` handoff. Also use when a run folder exists and `current_stage` is `02_strategy_mapping`, even if the user does not ask for “strategy mapping” explicitly.
---

# strategic-opportunity-mapper

## Goal

Convertir el output de intake en una tesis estratégica accionable y validable por el usuario, sin bajar todavía a context pack, oferta, ICP, funnel ni artefactos.

## Stage integration

- Workflow: `shared/workflows/opportunity-gtm-pipeline/`
- Stage id: `02_strategy_mapping`
- Reads:
  - `shared/workflows/opportunity-gtm-pipeline/README.md`
  - `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
  - `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_run_state.md`
  - `{run_folder}/01_intake/intake_brief.md`
  - `{run_folder}/01_intake/handoff_to_strategy.md`
- Writes:
  - `{run_folder}/02_strategy/strategic_opportunity_brief.md`
  - `{run_folder}/02_strategy/handoff_to_qa_gate_1.md`
- Handoff: `Strategy -> QA Gate 1`
- Updates run state:
  - si existe `{run_folder}/00_run_state.md`, actualízalo
  - si falta run context o intake no está listo, deja instrucción explícita y detente
- Next stage: `03_qa_gate_1_strategy`

## When to use this skill

Usa esta skill cuando:

- el run ya pasó por `01_intake`;
- existe un handoff `Intake -> Strategy` en estado utilizable;
- hace falta fijar la tesis estratégica antes de bajar a facts pack, oferta o QA;
- `current_stage` es `02_strategy_mapping`.

No la uses cuando:

- intake no existe o no está listo;
- el trabajo real es construir el context pack;
- el usuario pide oferta, pricing, ICP, funnel o builders downstream;
- toca ejecutar QA Gate 1 y no la estrategia.

## Inputs

### Required inputs

- `{run_folder}/00_run_state.md`
- `{run_folder}/01_intake/intake_brief.md`
- `{run_folder}/01_intake/handoff_to_strategy.md`

### Optional inputs

- fuentes primarias referenciadas por intake;
- planning relevante;
- restricciones adicionales aportadas por el usuario;
- contexto parcial del repo que afecte a la lectura estratégica.

## Outputs

- `{run_folder}/02_strategy/strategic_opportunity_brief.md`
- `{run_folder}/02_strategy/handoff_to_qa_gate_1.md`
- actualización de `{run_folder}/00_run_state.md`, o instrucciones explícitas para actualizarlo si hay bloqueo

## Procedure

### 1. Locate run context

1. Lee `{run_folder}/00_run_state.md` primero.
2. Confirma que:
   - `current_stage` es `02_strategy_mapping`, o
   - el stage de intake figura como completado y el handoff `Intake -> Strategy` está en `ready_for_next_stage`.
3. Si falta run state o el run context no es usable, detente con `blocked_missing_input`.

### 2. Read intake outputs

Lee completos:

- `{run_folder}/01_intake/intake_brief.md`
- `{run_folder}/01_intake/handoff_to_strategy.md`

Usa también fuentes primarias adicionales solo si intake las señala como relevantes para entender la jugada.

### 3. Validate intake readiness

Comprueba que intake dejó, como mínimo:

- framing preliminar de la oportunidad;
- objetivo del caso;
- fuentes inventariadas;
- actores preliminares;
- facts, hypotheses y unknowns separados.

Si intake no dejó base suficiente, detente con:

- `blocked_missing_input` si faltan archivos o datos mínimos;
- `needs_revision` si existen archivos, pero el framing no es utilizable.

### 4. Identify strategic frame

Formula la lectura estratégica de alto nivel:

- qué oportunidad es realmente;
- qué outcome merece la pena perseguir;
- desde qué posición conviene jugar;
- qué no debe confundirse con el objetivo real.

No conviertas esto en context pack ni en oferta.

### 5. Map actors, incentives and roles

Identifica y limpia el mapa de actores:

- actor principal;
- actor objetivo;
- actor validador o condicionante;
- decisor o sponsor si aplica;
- actor que puede bloquear el éxito.

Para cada uno, explicita:

- rol;
- incentivo;
- relevancia estratégica;
- unknowns que todavía pueden cambiar la lectura.

### 6. Define strategic thesis

Produce una tesis clara y breve:

- qué juego se está jugando;
- qué posición queremos ocupar;
- por qué esa posición tiene sentido;
- qué condición debe cumplirse para que la estrategia merezca bajar a la siguiente fase.

La tesis debe ser validable por el usuario, no una verdad implícita.

### 7. Identify opportunity angles

Lista los ángulos de oportunidad más relevantes:

- angle principal;
- angles secundarios si existen;
- por qué uno debe priorizarse sobre los demás;
- qué angle parece atractivo pero no debería liderar todavía.

### 8. Identify strategic risks and no-go zones

Captura:

- riesgos estratégicos;
- confusiones de rol;
- supuestos peligrosos;
- zonas `no-go`.

Usa `blocked_compliance_risk` solo si intake ya conduce a una lectura estratégicamente ilegítima o claramente peligrosa.

### 9. Separate facts, hypotheses, assumptions and unknowns

Mantén cuatro categorías separadas:

- `facts`
- `hypotheses`
- `assumptions`
- `unknowns`

No conviertas hipótesis o assumptions en hechos.

### 10. Define success criteria

Explicita cómo se reconocería una buena estrategia en esta fase:

- criterio de éxito del caso;
- criterio de éxito del stage;
- señal de que ya se puede pasar a QA Gate 1;
- señal de que todavía no.

### 11. Produce strategic opportunity brief

Escribe `{run_folder}/02_strategy/strategic_opportunity_brief.md` usando `templates/strategic_opportunity_brief_template.md`.

Debe dejar claro:

- la tesis;
- el juego que se está jugando;
- actores e incentivos;
- riesgos y no-go zones;
- decisiones que todavía necesita el usuario;
- lo que downstream no debe asumir aún.

### 12. Produce handoff to QA Gate 1

Escribe `{run_folder}/02_strategy/handoff_to_qa_gate_1.md` usando `templates/handoff_to_qa_gate_1_template.md`.

El handoff debe cumplir el contrato `Strategy -> QA Gate 1` y debe incluir:

- tesis estratégica;
- actor principal / rol pretendido;
- criterios de éxito;
- no-go estratégicos;
- claims o assumptions sensibles detectados;
- facts, hypotheses y unknowns;
- qué QA debe revisar con más cuidado.

No metas:

- oferta;
- packs;
- pricing;
- ICP;
- funnel;
- copy final;
- briefs de artefactos.

### 13. Update or instruct run state update

Si existe `{run_folder}/00_run_state.md`, actualízalo como mínimo con:

- `02_strategy_mapping` en el estado correspondiente;
- output path de `strategic_opportunity_brief.md`;
- handoff path de `handoff_to_qa_gate_1.md`;
- `current_status`;
- `current_stage`;
- decisiones abiertas, riesgos y preguntas bloqueantes si aplica.

Usa uno de estos status:

- `ready_for_next_stage`
- `needs_user_checkpoint`
- `blocked_missing_input`
- `needs_revision`
- `blocked_compliance_risk`

Como esta stage exige validación estratégica:

- si la postura, actor, no-go o criterio de éxito siguen sin validar, deja el run en `needs_user_checkpoint`;
- no lo marques como listo por conveniencia.

### 14. Stop before QA/context/offer

Detente siempre al cerrar strategy.

Nunca:

- ejecutes `03_qa_gate_1_strategy`;
- construyas context pack;
- diseñes oferta;
- bajes a ICP o funnel;
- produzcas assets downstream.

## Output format

Usa siempre:

- `templates/strategic_opportunity_brief_template.md` para `strategic_opportunity_brief.md`
- `templates/handoff_to_qa_gate_1_template.md` para `handoff_to_qa_gate_1.md`

Si strategy no está lista, los outputs igual deben existir si el run folder existe, pero con:

- status adecuado;
- blocking questions;
- decisiones del usuario pendientes;
- explicación de por qué QA Gate 1 todavía no debería correr.

## Handoff contract

El handoff debe cumplir `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`, en concreto `Strategy -> QA Gate 1`.

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

## User checkpoint

Este stage tiene checkpoint obligatorio.

El usuario debe validar, como mínimo:

- postura estratégica;
- actor principal / rol pretendido;
- no negociables;
- criterio de éxito.

Si alguno de esos puntos no está validado o solo puede sostenerse con assumptions sensibles, deja `needs_user_checkpoint`.

## Quality criteria

- lee y usa realmente intake brief + handoff;
- formula una tesis estratégica clara;
- define qué juego se está jugando;
- identifica actores, incentivos y roles;
- identifica ángulos, riesgos y no-go zones;
- separa facts, hypotheses, assumptions y unknowns;
- explicita criterios de éxito;
- señala qué downstream no debe asumir aún;
- produce outputs dentro de `02_strategy/`;
- no invade QA, context pack, oferta, ICP ni funnel.

## Anti-patterns

- resumir documentos sin formular tesis;
- ignorar unknowns de intake;
- convertir assumptions en hechos;
- bajar a packs u oferta;
- colar hero offer, pricing o ICP;
- escribir copy comercial;
- ejecutar QA Gate 1;
- avanzar a `03_qa_gate_1_strategy`;
- esconder decisiones del usuario pendientes.

## Stop conditions

Detente cuando se cumpla una de estas condiciones:

- `ready_for_next_stage`
  - existe tesis estratégica clara y el usuario ya dejó validación o supuestos explícitos suficientes para pasar a QA Gate 1
- `needs_user_checkpoint`
  - falta validar postura, actor, no-go o criterio de éxito
- `blocked_missing_input`
  - falta intake, handoff de intake o run context mínimo
- `needs_revision`
  - intake existe, pero la estrategia producida no es trazable o no separa bien hechos e hipótesis
- `blocked_compliance_risk`
  - ya en strategy aparece una posición, claim o rol estratégicamente inaceptable

## Handoff to next skill

La siguiente skill esperada es:

- `compliance-qa-reviewer` en modo `03_qa_gate_1_strategy`

Pero esta skill no debe ejecutarla ni iniciarla.

Su única responsabilidad es dejar listo:

- `02_strategy/strategic_opportunity_brief.md`
- `02_strategy/handoff_to_qa_gate_1.md`
- el estado de run actualizado o la instrucción precisa para actualizarlo
