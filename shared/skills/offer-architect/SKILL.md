---
name: offer-architect
description: Implement Stage 05 of the `opportunity-gtm-pipeline` workflow. Use when a run already has a usable context pack plus `Context Pack -> Offer` handoff and needs to convert strategy, facts, constraints, and guardrails into a commercial offer architecture with hero offer, service/pack structure, claims boundaries, scope, and pricing logic for `QA Gate 2`. Also use when a run folder exists and `current_stage` is `05_offer_architecture`, even if the user does not explicitly ask for “offer architecture”.
---

# offer-architect

## Goal

Convertir estrategia heredada y context pack consolidado en una arquitectura de oferta comercial usable y validable, sin bajar todavía a qualification, ICP, funnel, copy final ni artefactos.

## Stage integration

- Workflow: `shared/workflows/opportunity-gtm-pipeline/`
- Stage id: `05_offer_architecture`
- Reads:
  - `shared/workflows/opportunity-gtm-pipeline/README.md`
  - `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
  - `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_run_state.md`
  - `{run_folder}/04_context_pack/context_master_brief.md`
  - `{run_folder}/04_context_pack/facts_register.md`
  - `{run_folder}/04_context_pack/constraints_matrix.md`
  - `{run_folder}/04_context_pack/handoff_to_offer.md`
  - opcionalmente:
    - `{run_folder}/02_strategy/strategic_opportunity_brief.md`
    - `{run_folder}/03_qa_gate_1/qa_strategy_report.md`
- Writes:
  - `{run_folder}/05_offer/offer_architecture_brief.md`
  - `{run_folder}/05_offer/handoff_to_qa_gate_2.md`
  - opcionalmente:
    - `{run_folder}/05_offer/service_pack_matrix.md`
    - `{run_folder}/05_offer/claims_guardrails.md`
    - `{run_folder}/05_offer/pricing_scope_guardrails.md`
- Handoff: `Offer -> QA Gate 2`
- Updates run state:
  - si existe `{run_folder}/00_run_state.md`, actualízalo
  - si faltan context pack, constraints o soporte factual mínimo, deja instrucción explícita y detente
- Next stage: `06_qa_gate_2_offer`

## When to use this skill

Usa esta skill cuando:

- el run ya pasó por `04_context_pack`;
- existe un handoff `Context Pack -> Offer` en estado utilizable;
- hace falta convertir contexto consolidado en oferta, alcance y guardrails;
- `current_stage` es `05_offer_architecture`.

No la uses cuando:

- el context pack no existe o no es usable;
- el trabajo real es revisar oferta en QA Gate 2;
- el usuario pide ya qualification, ICP, funnel o builders downstream;
- la conversación todavía está en framing estratégico y no en arquitectura de oferta.

## Inputs

### Required inputs

- `{run_folder}/00_run_state.md`
- `{run_folder}/04_context_pack/context_master_brief.md`
- `{run_folder}/04_context_pack/facts_register.md`
- `{run_folder}/04_context_pack/constraints_matrix.md`
- `{run_folder}/04_context_pack/handoff_to_offer.md`

### Optional inputs

- `{run_folder}/02_strategy/strategic_opportunity_brief.md`
- `{run_folder}/03_qa_gate_1/qa_strategy_report.md`
- notas del usuario sobre posicionamiento comercial ya decidido
- decisiones previas de pricing o scope si existen y están validadas

## Outputs

- `{run_folder}/05_offer/offer_architecture_brief.md`
- `{run_folder}/05_offer/handoff_to_qa_gate_2.md`
- annexes opcionales solo si clarifican arquitectura, claims o guardrails
- actualización de `{run_folder}/00_run_state.md`, o instrucciones explícitas para actualizarlo si hay bloqueo

## Procedure

### 1. Locate run context

1. Lee `{run_folder}/00_run_state.md` primero.
2. Confirma que:
   - `current_stage` es `05_offer_architecture`, o
   - `04_context_pack` figura como completado y el handoff a oferta está en `ready_for_next_stage`.
3. Si falta run state o el run context no es usable, detente con `blocked_missing_input`.

### 2. Read context pack outputs

Lee completos:

- `{run_folder}/04_context_pack/context_master_brief.md`
- `{run_folder}/04_context_pack/facts_register.md`
- `{run_folder}/04_context_pack/constraints_matrix.md`
- `{run_folder}/04_context_pack/handoff_to_offer.md`

Lee `{run_folder}/02_strategy/strategic_opportunity_brief.md` y `{run_folder}/03_qa_gate_1/qa_strategy_report.md` solo si necesitas aclarar el marco o el origen de una línea roja.

### 3. Validate context readiness

Comprueba que el context pack deja, como mínimo:

- facts consolidados utilizables;
- constraints con severidad e implicación downstream;
- unknowns vivos explícitos;
- límites sobre lo que oferta no debe inventar.

Si faltan outputs del context pack o la trazabilidad mínima no existe:

- usa `blocked_missing_input` si faltan archivos o facts clave;
- usa `needs_revision` si existen archivos, pero el pack no sostiene una oferta defendible.

### 4. Extract opportunity-to-offer implications

Convierte el pack en implicaciones comerciales concretas:

- qué problema merece empaquetarse;
- qué outcome de negocio puede prometerse con soporte suficiente;
- qué restricciones obligan a modular la oferta;
- qué riesgos deben alterar framing, alcance o delivery.

No inventes demanda, pricing ni claims fuera de la base factual.

### 5. Define offer framing

Fija el framing de la oferta:

- qué tipo de oferta es;
- para quién sirve dentro del caso;
- qué resultado visible persigue;
- qué posición ocupa respecto al contexto heredado.

El framing debe ser comercialmente usable, pero todavía no copy final.

### 6. Define hero offer

Formula la `hero offer` del caso:

- propuesta principal;
- por qué es la pieza central;
- qué problema resuelve;
- qué outcome persigue;
- qué no debe interpretarse como promesa absoluta.

Si la hero offer depende de una decisión sensible no validada, marca `needs_user_checkpoint`.

### 7. Define service / pack architecture

Diseña una arquitectura finita y utilizable:

- núcleo de la oferta;
- módulos opcionales;
- fuera de alcance;
- servicios o packs solo si tienen soporte factual y sentido comercial.

No conviertas esta stage en un catálogo infinito.

### 8. Define scope boundaries

Explicita:

- qué incluye la oferta;
- qué excluye;
- qué depende de inputs del cliente, timing, terceros o validación adicional;
- qué no puede venderse como entregable seguro.

Scope ambiguity no es aceptable en esta stage.

### 9. Define claims allowed, conditional and forbidden

Separa:

- `claims allowed`
- `conditional claims`
- `claims to avoid`

Cada claim debe tener base en facts, constraints o decisiones heredadas. Si no puede sostenerse, no lo promociones a `allowed`.

### 10. Define pricing and delivery guardrails

Define solo la lógica y los guardrails, no el pricing final obligatorio si no está soportado.

Incluye:

- supuestos económicos;
- límites de scope que afectan pricing;
- dependencias operativas o de delivery;
- condiciones que endurecen o relajan la oferta.

### 11. Identify offer risks and open decisions

Documenta:

- riesgos comerciales;
- riesgos de cumplimiento;
- riesgos de alcance;
- riesgos de entrega;
- decisiones del usuario todavía necesarias.

No escondas under-specification detrás de wording comercial.

### 12. Produce offer architecture brief

Escribe `{run_folder}/05_offer/offer_architecture_brief.md` usando `templates/offer_architecture_brief_template.md`.

Debe dejar claro:

- framing de la oferta;
- hero offer;
- promesa y lo que no significa;
- arquitectura de servicios o packs;
- claims y guardrails;
- riesgos;
- qué QA Gate 2 debe revisar;
- qué qualification no debe asumir todavía.

### 13. Create optional annexes only if useful

Solo crea `service_pack_matrix.md`, `claims_guardrails.md` o `pricing_scope_guardrails.md` si eliminan ambigüedad real o reducen riesgo downstream.

No los crees por completar checklist. Si el brief principal ya soporta bien QA Gate 2, omítelos.

### 14. Produce handoff to QA Gate 2

Escribe `{run_folder}/05_offer/handoff_to_qa_gate_2.md` usando `templates/handoff_to_qa_gate_2_template.md`.

El handoff debe cumplir `Offer -> QA Gate 2` e incluir:

- hero offer;
- arquitectura de servicios/packs;
- claims permitidos;
- claims condicionados;
- claims a evitar;
- no-go comerciales;
- supuestos de pricing y alcance;
- supuestos de delivery;
- facts, hypotheses y unknowns;
- qué QA Gate 2 debe revisar cuidadosamente.

No metas:

- qualification matrix;
- ICP;
- funnel;
- copy final;
- landing brief;
- one pager brief.

### 15. Update or instruct run state update

Si existe `{run_folder}/00_run_state.md`, actualízalo como mínimo con:

- `05_offer_architecture` en el estado correspondiente;
- output paths de los artifacts creados;
- handoff path de `handoff_to_qa_gate_2.md`;
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

- `ready_for_next_stage`: la arquitectura es usable y el checkpoint ya está resuelto por validación explícita.
- `needs_user_checkpoint`: hero offer, claims, pricing logic, no-go o scope siguen sin validar.
- `blocked_missing_input`: faltan outputs o soporte factual mínimo.
- `needs_revision`: el context pack existe, pero no permite cerrar una oferta defendible sin rehacer parte del upstream.
- `blocked_compliance_risk`: la única oferta plausible choca con constraints o riesgos graves ya visibles.

### 16. Stop before QA Gate 2 / qualification / ICP / funnel

Detente siempre al cerrar oferta.

Nunca:

- ejecutes `06_qa_gate_2_offer`;
- construyas qualification;
- definas ICP;
- diseñes funnel;
- redactes copy final;
- construyas assets downstream.

## Output format

Usa siempre:

- `templates/offer_architecture_brief_template.md`
- `templates/handoff_to_qa_gate_2_template.md`

Y solo si hace falta:

- `templates/optional_service_pack_matrix_template.md`
- `templates/optional_claims_guardrails_template.md`
- `templates/optional_pricing_scope_guardrails_template.md`

Si la oferta no está lista, los outputs principales igual deben existir si el run folder existe, pero con:

- status adecuado;
- claims o supuestos pendientes;
- blocking questions;
- explicación de por qué QA Gate 2 no debería correr todavía.

## Handoff contract

El handoff debe cumplir `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`, en concreto `Offer -> QA Gate 2`.

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

- hero offer;
- arquitectura de servicios/packs;
- claims permitidos y a evitar;
- no-go comerciales;
- supuestos económicos o de alcance.

## User checkpoint

Este stage tiene checkpoint obligatorio.

El usuario debe validar, como mínimo:

- hero offer;
- alcance visible;
- claims permitidos;
- no-go comerciales;
- framing económico si aplica.

Si cualquiera de esos puntos sigue abierto o depende de una decisión sensible, usa `needs_user_checkpoint`.

## Quality criteria

- lee y usa realmente el context pack completo;
- preserva facts, constraints, risks y unknowns heredados;
- define framing de oferta, hero offer y target business outcome;
- diferencia core offer, módulos opcionales y fuera de alcance;
- distingue claims allowed, conditional y claims to avoid;
- define pricing/scope/delivery guardrails;
- deja explícitos riesgos y decisiones pendientes;
- produce outputs dentro de `05_offer/`;
- no invade QA Gate 2, qualification, ICP, funnel ni builders.

## Anti-patterns

- convertir facts débiles en claims fuertes;
- usar la oferta para reabrir estrategia sin decirlo;
- esconder líneas rojas dentro de notas menores;
- producir un catálogo amplio sin tesis comercial;
- confundir guardrails con pricing definitivo no soportado;
- meter qualification, ICP o funnel en el handoff de oferta.

## Stop conditions

Para cuando ocurra cualquiera de estas condiciones:

- existe una arquitectura de oferta validable y lista para QA Gate 2;
- faltan inputs mínimos y corresponde `blocked_missing_input`;
- la oferta requiere corrección upstream y corresponde `needs_revision`;
- hay riesgo grave de compliance o alcance y corresponde `blocked_compliance_risk`;
- hace falta validación del usuario sobre hero offer, claims, scope o pricing logic y corresponde `needs_user_checkpoint`.

## Handoff to next skill

Si el stage queda utilizable, el siguiente paso recomendado es `compliance-qa-reviewer` en modo `06_qa_gate_2_offer`.

El handoff debe dejar claro que QA Gate 2:

- revisa claims, riesgos y coherencia;
- no debe diseñar una nueva oferta por detrás;
- debe trasladar downstream solo claims y guardrails revisados.
