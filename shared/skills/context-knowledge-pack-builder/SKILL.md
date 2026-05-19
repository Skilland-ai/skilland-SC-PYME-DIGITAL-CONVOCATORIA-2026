---
name: context-knowledge-pack-builder
description: Implement Stage 04 of the `opportunity-gtm-pipeline` workflow. Use when a run already has a validated strategic brief plus `QA Gate 1 -> Context Pack` handoff and needs to convert strategy, QA conditions, and primary-source material into a factual, traceable, operational context pack for downstream offer work. Also use when a run folder exists and `current_stage` is `04_context_pack`, even if the user does not ask for a “context pack” explicitly.
---

# context-knowledge-pack-builder

## Goal

Convertir estrategia validada, QA Gate 1 y fuentes primarias en un `context pack` factual y operativo que permita a `offer-architect` trabajar sin inventar facts, constraints, riesgos ni unknowns críticos.

## Stage integration

- Workflow: `shared/workflows/opportunity-gtm-pipeline/`
- Stage id: `04_context_pack`
- Reads:
  - `shared/workflows/opportunity-gtm-pipeline/README.md`
  - `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
  - `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_run_state.md`
  - `{run_folder}/02_strategy/strategic_opportunity_brief.md`
  - `{run_folder}/03_qa_gate_1/qa_strategy_report.md`
  - `{run_folder}/03_qa_gate_1/handoff_to_context_pack.md`
  - fuentes primarias indicadas por intake, strategy, QA o run context
- Writes:
  - `{run_folder}/04_context_pack/context_master_brief.md`
  - `{run_folder}/04_context_pack/facts_register.md`
  - `{run_folder}/04_context_pack/constraints_matrix.md`
  - `{run_folder}/04_context_pack/handoff_to_offer.md`
  - opcionalmente:
    - `{run_folder}/04_context_pack/glossary.md`
    - `{run_folder}/04_context_pack/links_register.md`
    - `{run_folder}/04_context_pack/faq_or_risk_annex.md`
- Handoff: `Context Pack -> Offer`
- Updates run state:
  - si existe `{run_folder}/00_run_state.md`, actualízalo
  - si faltan strategy, QA Gate 1 o fuentes críticas, deja instrucción explícita y detente
- Next stage: `05_offer_architecture`

## When to use this skill

Usa esta skill cuando:

- el run ya pasó por `02_strategy_mapping` y `03_qa_gate_1_strategy`;
- existe un handoff `QA Gate 1 -> Context Pack` en estado utilizable;
- hace falta consolidar facts, constraints, riesgos y unknowns para downstream;
- `current_stage` es `04_context_pack`.

No la uses cuando:

- strategy o QA Gate 1 todavía no existen o no son usables;
- el trabajo real es discutir la tesis estratégica;
- el usuario pide ya hero offer, pricing, ICP, funnel o builders;
- lo que falta es un QA gate, no un pack factual.

## Inputs

### Required inputs

- `{run_folder}/00_run_state.md`
- `{run_folder}/02_strategy/strategic_opportunity_brief.md`
- `{run_folder}/03_qa_gate_1/qa_strategy_report.md`
- `{run_folder}/03_qa_gate_1/handoff_to_context_pack.md`
- acceso a las fuentes primarias mínimas que sostienen los facts y constraints relevantes

### Optional inputs

- `00_inbox/`
- `02_context/`
- otros paths citados por intake, strategy o QA
- planning útil para aclarar términos o límites ya fijados
- notas del usuario que aclaren huecos críticos

## Outputs

- `{run_folder}/04_context_pack/context_master_brief.md`
- `{run_folder}/04_context_pack/facts_register.md`
- `{run_folder}/04_context_pack/constraints_matrix.md`
- `{run_folder}/04_context_pack/handoff_to_offer.md`
- annexes opcionales solo si eliminan fricción real downstream
- actualización de `{run_folder}/00_run_state.md`, o instrucciones explícitas para actualizarlo si hay bloqueo

## Procedure

### 1. Locate run context

1. Lee `{run_folder}/00_run_state.md` primero.
2. Confirma que:
   - `current_stage` es `04_context_pack`, o
   - `03_qa_gate_1_strategy` figura como completado y el handoff a context pack está en `ready_for_next_stage`.
3. Si falta run state o el run context no es usable, detente con `blocked_missing_input`.

### 2. Read QA Gate 1 outputs

Lee completos:

- `{run_folder}/03_qa_gate_1/qa_strategy_report.md`
- `{run_folder}/03_qa_gate_1/handoff_to_context_pack.md`

Extrae de ahí como mínimo:

- veredicto QA;
- riesgos aceptados y no aceptados;
- constraints que deben aparecer downstream;
- unknowns vivos;
- condiciones de lectura del pack.

### 3. Read strategic brief and source inventory

Lee `{run_folder}/02_strategy/strategic_opportunity_brief.md` para heredar:

- contexto estratégico;
- actor/rol;
- success criteria;
- facts, hypotheses y unknowns relevantes;
- lo que downstream no debe asumir todavía.

No reabras la postura estratégica. Úsala como marco de lectura, no como objeto a rediseñar.

### 4. Identify required source material

Construye una lista de fuentes necesarias para sostener downstream:

- fuentes primarias del caso;
- fuentes secundarias solo si aclaran contexto o términos;
- notas del usuario solo como apoyo, no como sustituto de facts verificables.

Usa `00_inbox/`, `02_context/` y otros paths citados por intake/strategy/handoff. No leas por volumen; lee por necesidad de trazabilidad.

### 5. Extract facts

Extrae solo facts útiles para downstream y con trazabilidad suficiente:

- dato o afirmación;
- fuente;
- tipo de fuente;
- confidence;
- por qué importa para oferta, qualification o QA.

No conviertas el facts register en un dump narrativo. El criterio es utilidad operativa.

### 6. Extract constraints

Separa constraints de facts. Clasifica al menos:

- hard constraints;
- soft constraints;
- commercial constraints;
- operational constraints;
- compliance / legal / policy constraints;
- unknown constraints.

Para cada constraint, explica a qué afecta downstream y qué no debe violar oferta.

### 7. Preserve risks and unknowns from QA Gate 1

Arrastra explícitamente:

- riesgos aceptados;
- riesgos no aceptados si siguen vivos;
- unknowns que cambian el valor del caso;
- preguntas bloqueantes todavía abiertas;
- líneas rojas que el gate haya marcado.

No borres incertidumbre para “limpiar” el pack.

### 8. Build context master brief

Escribe `{run_folder}/04_context_pack/context_master_brief.md` usando `templates/context_master_brief_template.md`.

Debe responder, como mínimo:

- qué pack es este y para qué sirve;
- qué base de fuentes sostiene el trabajo;
- qué facts y constraints gobiernan downstream;
- qué debe preservar `offer-architect`;
- qué no puede inventarse.

### 9. Build facts register

Escribe `{run_folder}/04_context_pack/facts_register.md` usando `templates/facts_register_template.md`.

Incluye:

- facts críticos para oferta;
- facts críticos para qualification;
- facts críticos para compliance/QA;
- facts que aún necesitan confirmación.

### 10. Build constraints matrix

Escribe `{run_folder}/04_context_pack/constraints_matrix.md` usando `templates/constraints_matrix_template.md`.

La matriz debe servir para que downstream vea rápido:

- qué constraint existe;
- de qué tipo es;
- cuán severa es;
- a qué aplica;
- qué implicación tiene.

### 11. Create optional annexes only if useful

Solo crea `glossary.md`, `links_register.md` o `faq_or_risk_annex.md` si reducen ambigüedad real o ahorran errores downstream.

No los crees por completismo. Si el context pack ya es claro sin ellos, omítelos.

### 12. Produce handoff to offer

Escribe `{run_folder}/04_context_pack/handoff_to_offer.md` usando `templates/handoff_to_offer_template.md`.

El handoff debe cumplir `Context Pack -> Offer` e incluir:

- facts consolidados;
- constraints consolidados;
- unknowns vivos;
- riesgos heredados de QA Gate 1;
- preguntas de negocio que el pack ya responde;
- zonas donde oferta no debe inventar.

No metas:

- hero offer final;
- packs;
- pricing;
- ICP;
- funnel;
- copy;
- artifact briefs.

### 13. Update or instruct run state update

Si existe `{run_folder}/00_run_state.md`, actualízalo como mínimo con:

- `04_context_pack` en el estado correspondiente;
- output paths de los artifacts creados;
- handoff path de `handoff_to_offer.md`;
- `current_status`;
- `current_stage`;
- riesgos, unknowns y preguntas abiertas si aplica.

Usa solo:

- `ready_for_next_stage`
- `needs_user_checkpoint`
- `blocked_missing_input`
- `needs_revision`
- `blocked_compliance_risk`

Guía de uso:

- `ready_for_next_stage`: el pack responde preguntas downstream clave y deja trazabilidad suficiente.
- `needs_user_checkpoint`: hay unknowns críticos o decisiones del usuario que cambian el uso del pack.
- `blocked_missing_input`: faltan fuentes, strategy o QA mínimos.
- `needs_revision`: upstream existe, pero su trazabilidad o consistencia hace inviable consolidar el pack sin corregir algo.
- `blocked_compliance_risk`: QA dejó un riesgo grave vivo que impide bajar a oferta.

### 14. Stop before offer

Detente siempre al cerrar context pack.

Nunca:

- ejecutes `05_offer_architecture`;
- rediseñes estrategia;
- propongas hero offer, packs o pricing;
- bajes a ICP, funnel o builders;
- escondas gaps de fuente detrás de redacción elegante.

## Output format

Usa siempre:

- `templates/context_master_brief_template.md`
- `templates/facts_register_template.md`
- `templates/constraints_matrix_template.md`
- `templates/handoff_to_offer_template.md`

Y solo si hace falta:

- `templates/optional_glossary_template.md`
- `templates/optional_links_register_template.md`
- `templates/optional_faq_or_risk_annex_template.md`

Si el pack no está listo, los outputs principales igual deben existir si el run folder existe, pero con:

- status adecuado;
- límites de la base factual;
- blocking questions;
- explicación de por qué oferta no debería arrancar todavía.

## Handoff contract

El handoff debe cumplir `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`, en concreto `Context Pack -> Offer`.

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

- facts consolidados;
- constraints consolidados;
- preguntas de negocio ya respondidas;
- puntos donde oferta no debe inventar.

## User checkpoint

Este stage no tiene checkpoint obligatorio por defecto, pero sí puede exigirlo.

Usa `needs_user_checkpoint` cuando:

- hay unknowns críticos que cambian la utilidad del pack;
- faltan decisiones del usuario sobre fuentes, interpretación factual o constraint relevante;
- existe una duda que `offer-architect` no debería resolver por su cuenta.

No abras checkpoint si el hueco puede marcarse como `Unknown` sin comprometer downstream.

## Quality criteria

- lee strategy + QA Gate 1 antes de consolidar nada;
- preserva condiciones, riesgos y límites heredados del gate;
- separa facts, constraints, risks y unknowns;
- marca fuentes y confidence;
- produce un pack útil para oferta, no un resumen largo sin función;
- explicita qué debe preservar downstream;
- explicita qué downstream no debe inventar;
- escribe solo dentro de `04_context_pack/`;
- no invade estrategia, oferta, ICP, funnel ni builders.

## Anti-patterns

- reabrir la tesis estratégica desde Stage 04;
- usar facts sin fuente o con trazabilidad débil sin marcarlo;
- mezclar facts y constraints en una lista única;
- esconder unknowns para que el pack “parezca más sólido”;
- crear anexos opcionales por completismo;
- convertir el pack en un pseudo-offer o en una FAQ comercial.

## Stop conditions

Para cuando ocurra cualquiera de estas condiciones:

- el pack factual y operativo ya es suficiente para `offer-architect`;
- faltan fuentes o outputs mínimos y corresponde `blocked_missing_input`;
- hay contradicción o hueco upstream que exige `needs_revision`;
- persiste un riesgo grave que exige `blocked_compliance_risk`;
- hace falta una decisión del usuario que cambia el valor del pack y corresponde `needs_user_checkpoint`.

## Handoff to next skill

Si el stage queda utilizable, el siguiente paso recomendado es `offer-architect`.

El handoff debe dejar claro que `offer-architect`:

- puede diseñar oferta solo sobre facts y constraints trazables;
- debe preservar riesgos, unknowns y líneas rojas ya heredadas;
- no debe convertir unknowns en claims ni cerrar por intuición preguntas de negocio abiertas.
