---
name: compliance-qa-reviewer
description: Implement the transversal QA gates of the `opportunity-gtm-pipeline` workflow. Use when a run reaches `03_qa_gate_1_strategy`, `06_qa_gate_2_offer`, or `09_qa_gate_3_readiness` and needs a gate review on coherence, claims, assumptions, risks, traceability, and readiness before advancing. Also use when the user asks to review whether strategy, offer, or readiness can safely move to the next stage without silently rewriting upstream work.
---

# compliance-qa-reviewer

## Goal

Actuar como gate transversal de coherencia, claims, riesgos, trazabilidad y readiness dentro del pipeline, emitiendo un veredicto claro y dejando el handoff correcto sin reescribir en silencio el trabajo upstream.

## Stage integration

- Workflow: `shared/workflows/opportunity-gtm-pipeline/`
- Supported stage ids:
  - `03_qa_gate_1_strategy`
  - `06_qa_gate_2_offer`
  - `09_qa_gate_3_readiness`
- Gate modes:
  - `strategy`
  - `offer`
  - `readiness`
- Reads:
  - `shared/workflows/opportunity-gtm-pipeline/README.md`
  - `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
  - `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_run_state.md`
  - gate-specific upstream artifacts
- Writes:
  - Gate 1:
    - `{run_folder}/03_qa_gate_1/qa_strategy_report.md`
    - `{run_folder}/03_qa_gate_1/handoff_to_context_pack.md`
  - Gate 2:
    - `{run_folder}/06_qa_gate_2/qa_offer_report.md`
    - `{run_folder}/06_qa_gate_2/handoff_to_qualification.md`
  - Gate 3:
    - `{run_folder}/09_qa_gate_3/qa_readiness_report.md`
    - `{run_folder}/09_qa_gate_3/handoff_to_funnel.md`
- Handoffs:
  - `QA Gate 1 -> Context Pack`
  - `QA Gate 2 -> Qualification`
  - `QA Gate 3 -> Funnel Readiness`
- Updates run state:
  - si existe `{run_folder}/00_run_state.md`, actualízalo
  - si falta run context o faltan inputs mínimos, deja instrucción explícita y detente
- Next stages:
  - Gate 1: `04_context_pack`
  - Gate 2: `07_qualification`
  - Gate 3: `10_funnel_readiness`

## When to use this skill

Usa esta skill cuando:

- el run está en uno de los stages QA del workflow;
- hace falta decidir si strategy, offer o readiness pueden avanzar;
- hay que clasificar riesgos, claims sensibles o assumptions peligrosas;
- se necesita un veredicto explícito `pass / pass_with_cautions / needs_revision / stop`.

No la uses cuando:

- el trabajo real es crear strategy, context pack, offer o ICP;
- el usuario quiere que QA reescriba upstream por detrás;
- el run todavía no tiene outputs mínimos del stage anterior;
- toca ejecutar la siguiente fase en vez de evaluar la actual.

## Inputs

### Required inputs

- `{run_folder}/00_run_state.md`
- gate-specific upstream artifacts mínimos

### Optional inputs

- constraints adicionales ya confirmados por el usuario;
- fuentes primarias si el artifact revisado las referencia y hace falta contrastar una afirmación crítica;
- planning y decisiones existentes del caso.

## Outputs

- un QA report del gate correspondiente;
- un handoff del gate correspondiente;
- actualización de `{run_folder}/00_run_state.md`, o instrucciones explícitas para actualizarlo si hay bloqueo

## Procedure

### 1. Locate run context

1. Lee `{run_folder}/00_run_state.md` primero.
2. Confirma que el run context existe y es coherente.
3. Si no existe run state o no es usable, detente con `blocked_missing_input`.

### 2. Detect gate mode

Determina el gate mode por:

- `current_stage` en `00_run_state.md`, o
- instrucción explícita del usuario/runner.

Mapeo válido:

- `03_qa_gate_1_strategy` -> `strategy`
- `06_qa_gate_2_offer` -> `offer`
- `09_qa_gate_3_readiness` -> `readiness`

Si el gate mode no puede determinarse con seguridad, detente con `blocked_missing_input`.

### 3. Read required upstream artifacts

Lee solo los inputs mínimos del gate detectado.

Gate 1:

- `02_strategy/strategic_opportunity_brief.md`
- `02_strategy/handoff_to_qa_gate_1.md`

Gate 2:

- `05_offer/offer_architecture_brief.md`
- `05_offer/handoff_to_qa_gate_2.md`
- `04_context_pack/constraints_matrix.md`

Gate 3:

- `08_icp/icp_segmentation_brief.md`
- `08_icp/handoff_to_qa_gate_3.md`
- `05_offer/offer_architecture_brief.md`
- `04_context_pack/constraints_matrix.md`

### 4. Validate upstream readiness

Comprueba:

- que existen los archivos mínimos;
- que el stage anterior dejó un artifact utilizable;
- que el handoff upstream no está ya en estado de bloqueo incompatible.

Si falta input mínimo:

- usa `blocked_missing_input`;
- no improvises el contenido que falta;
- no construyas el siguiente stage.

### 5. Extract claims, assumptions and decisions

Extrae del artifact revisado:

- claims explícitos;
- claims implícitos;
- assumptions sensibles;
- decisiones ya tomadas por el usuario;
- decisiones que el upstream parece haber tomado sin permiso.

### 6. Check coherence against facts and constraints

Contrasta el artifact con:

- facts disponibles;
- constraints vigentes;
- no-go ya definidos;
- límites del workflow.

Busca incoherencias, silencios peligrosos y afirmaciones que downstream podría malinterpretar.

### 7. Identify compliance, commercial and strategic risks

Clasifica riesgos del gate actual:

- riesgo de compliance;
- riesgo comercial;
- riesgo estratégico;
- riesgo de trazabilidad;
- riesgo de readiness.

### 8. Classify findings by severity

Clasifica findings como:

- pass finding;
- caution;
- required revision;
- stop/blocking issue.

Mantén evidencia breve y accionable. No conviertas QA en ensayo.

### 9. Emit QA verdict

Usa solo estos veredictos:

- `pass`
- `pass_with_cautions`
- `needs_revision`
- `stop`

Mapeo orientativo a status:

- `pass` -> `ready_for_next_stage`
- `pass_with_cautions` -> `ready_for_next_stage` o `needs_user_checkpoint`
- `needs_revision` -> `needs_revision`
- `stop` -> `blocked_compliance_risk` o `needs_user_checkpoint`

Si el gate exige decisión del usuario sobre claims, postura o readiness, usa `needs_user_checkpoint`.

### 10. Produce gate-specific QA report

Escribe el reporte que corresponda:

- Gate 1: `templates/qa_strategy_report_template.md`
- Gate 2: `templates/qa_offer_report_template.md`
- Gate 3: `templates/qa_readiness_report_template.md`

El reporte debe dejar claro:

- veredicto;
- status de workflow;
- por qué puede o no avanzar;
- qué debe preservarse downstream;
- qué no debe asumirse.

### 11. Produce gate-specific handoff

Escribe el handoff que corresponda:

- Gate 1: `templates/handoff_to_context_pack_template.md`
- Gate 2: `templates/handoff_to_qualification_template.md`
- Gate 3: `templates/handoff_to_funnel_template.md`

El handoff debe cumplir `HANDOFF_CONTRACTS.md`.

No rediseñes en silencio el artifact revisado.

### 12. Update or instruct run state update

Si existe `{run_folder}/00_run_state.md`, actualízalo como mínimo con:

- stage QA actual en el estado correspondiente;
- output path del QA report;
- handoff path del gate;
- `current_status`;
- `current_stage`;
- riesgos, decisiones y bloqueos si aplica.

Si el verdict exige usuario:

- deja `needs_user_checkpoint`;
- no habilites la siguiente stage.

### 13. Stop before next stage

Detente siempre al cerrar el gate.

Nunca:

- ejecutes el siguiente stage;
- reescribas strategy, offer o ICP como si fueras builder;
- construyas context pack, qualification o funnel.

## Gate modes

### Gate 1 — Strategy

- Stage id: `03_qa_gate_1_strategy`
- Reads:
  - `02_strategy/strategic_opportunity_brief.md`
  - `02_strategy/handoff_to_qa_gate_1.md`
- Writes:
  - `03_qa_gate_1/qa_strategy_report.md`
  - `03_qa_gate_1/handoff_to_context_pack.md`
- Focus:
  - coherencia de la tesis;
  - claridad del rol del actor principal;
  - no-go zones;
  - claims sensibles;
  - unknowns que impiden avanzar;
  - contaminación con oferta, ICP o funnel.

### Gate 2 — Offer

- Stage id: `06_qa_gate_2_offer`
- Reads:
  - `05_offer/offer_architecture_brief.md`
  - `05_offer/handoff_to_qa_gate_2.md`
  - `04_context_pack/constraints_matrix.md`
- Writes:
  - `06_qa_gate_2/qa_offer_report.md`
  - `06_qa_gate_2/handoff_to_qualification.md`
- Focus:
  - claims aprobados, condicionados y prohibidos;
  - alcance;
  - pricing/framing;
  - no-go comerciales;
  - coherencia con constraints;
  - riesgos a trasladar a qualification.

### Gate 3 — Readiness

- Stage id: `09_qa_gate_3_readiness`
- Reads:
  - `08_icp/icp_segmentation_brief.md`
  - `08_icp/handoff_to_qa_gate_3.md`
  - `05_offer/offer_architecture_brief.md`
  - `04_context_pack/constraints_matrix.md`
- Writes:
  - `09_qa_gate_3/qa_readiness_report.md`
  - `09_qa_gate_3/handoff_to_funnel.md`
- Focus:
  - coherencia upstream completa;
  - offer vs ICP;
  - claims sensibles;
  - riesgos vivos;
  - readiness para funnel;
  - lo que downstream no debe asumir.

## Output format

Usa siempre el template del gate detectado.

Cada reporte debe incluir:

- metadata;
- summary reviewed;
- verdict;
- findings;
- risks;
- user decisions needed;
- `What downstream must NOT assume`;
- recommended next action.

Cada handoff debe dejar el gate en términos legibles por la siguiente estación.

## Handoff contracts

Respeta `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`.

En especial:

- `QA Gate 1 -> Context Pack`
- `QA Gate 2 -> Qualification`
- `QA Gate 3 -> Funnel Readiness`

## User checkpoint

La skill debe activar checkpoint cuando:

- el verdict sea `pass_with_cautions` y las cautelas afecten claims o readiness;
- el verdict sea `stop` pero el bloqueo dependa de decisión del usuario;
- haya líneas rojas, claims sensibles o riesgos que no puedan aceptarse automáticamente.

No debe tomar por el usuario decisiones sensibles de claims, postura o autorización de readiness.

## Quality criteria

- detecta correctamente el gate mode;
- lee solo los inputs correctos del gate;
- contrasta coherencia contra facts/constraints;
- identifica claims y assumptions sensibles;
- emite veredicto claro;
- mapea bien verdict a workflow status;
- no reescribe upstream en silencio;
- produce report y handoff en la carpeta correcta;
- deja claro qué downstream debe preservar;
- no ejecuta la siguiente stage.

## Anti-patterns

- convertir QA en builder;
- reescribir strategy, offer o ICP sin decirlo;
- mezclar modos de gate;
- emitir veredictos vagos;
- ocultar riesgos vivos;
- permitir avanzar por comodidad;
- crear context pack, qualification o funnel;
- usar facts no soportados como si fueran concluyentes.

## Stop conditions

Detente cuando se cumpla una de estas condiciones:

- `ready_for_next_stage`
  - verdict `pass` o `pass_with_cautions` ya aceptado y sin checkpoint pendiente
- `needs_user_checkpoint`
  - falta validación del usuario sobre claims, postura o readiness
- `blocked_missing_input`
  - faltan artifacts mínimos del gate
- `blocked_compliance_risk`
  - hay riesgo grave que impide seguir
- `needs_revision`
  - el upstream debe corregirse antes de pasar de gate

## Handoff to next skill

La skill no ejecuta nunca la siguiente estación.

Solo deja listo:

- Gate 1 -> `context-knowledge-pack-builder`
- Gate 2 -> `eligibility-and-commercial-qualifier`
- Gate 3 -> `funnel readiness`
