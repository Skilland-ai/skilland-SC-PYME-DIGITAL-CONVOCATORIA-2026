---
name: project-opportunity-intake
description: Implement Stage 01 of the `opportunity-gtm-pipeline` workflow. Use when a case starts from raw opportunity documents, a vague user idea, inbox files, notes, links, or mixed business/regulatory material and needs to be converted into a structured intake brief plus `Intake -> Strategy` handoff. Also use when a run folder exists and `current_stage` is `01_intake`, even if the user does not mention the word intake explicitly.
---

# project-opportunity-intake

## Goal

Convertir material bruto de oportunidad en un intake estructurado suficiente para que `strategic-opportunity-mapper` pueda trabajar sin inventar estrategia, oferta, ICP, funnel ni artefactos.

## Stage integration

- Workflow: `shared/workflows/opportunity-gtm-pipeline/`
- Stage id: `01_intake`
- Reads:
  - `shared/workflows/opportunity-gtm-pipeline/README.md`
  - `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
  - `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`
  - `shared/workflows/opportunity-gtm-pipeline/MANUAL_RUNNER_PROMPT.md`
  - `00_inbox/` o fuentes brutas equivalentes
  - `{run_folder}/00_run_state.md` si existe
- Writes:
  - `{run_folder}/01_intake/intake_brief.md`
  - `{run_folder}/01_intake/handoff_to_strategy.md`
- Handoff: `Intake -> Strategy`
- Updates run state:
  - si existe `{run_folder}/00_run_state.md`, actualízalo
  - si no existe run folder, detente e indica al runner que lo cree usando `RUN_FOLDER_TEMPLATE.md`
- Next stage: `02_strategy_mapping`

## When to use this skill

Usa esta skill cuando:

- el caso arranca con material bruto o idea difusa;
- existe un run folder y `current_stage` es `01_intake`;
- hace falta convertir `00_inbox/`, notas o links en un encuadre inicial del caso;
- todavía no es legítimo bajar a estrategia;
- el usuario quiere iniciar una oportunidad nueva dentro del harness.

No la uses cuando:

- ya existe un intake brief válido y toca mapear estrategia;
- el trabajo real es destilar facts/constraints a un context pack;
- el usuario pide oferta, ICP, funnel o builders downstream.

## Inputs

### Required inputs

- una oportunidad identificable, aunque esté mal definida;
- al menos una fuente bruta o una idea inicial del usuario;
- un run folder existente con `00_run_state.md`, o instrucción explícita de que el runner debe crearlo.

### Optional inputs

- `00_inbox/` completo;
- links;
- notas sueltas;
- documentación B2B o de convocatoria;
- contexto previo del repo;
- restricciones conocidas;
- planning existente.

## Outputs

- `{run_folder}/01_intake/intake_brief.md`
- `{run_folder}/01_intake/handoff_to_strategy.md`
- actualización de `{run_folder}/00_run_state.md`, o instrucciones explícitas para actualizarlo si no es seguro editarlo todavía

## Procedure

### 1. Locate or initialize the run context

1. Busca el run folder concreto del caso.
2. Si existe `{run_folder}/00_run_state.md`, léelo primero.
3. Si no existe run folder:
   - no escribas outputs en otra ubicación;
   - no inventes una run fuera del harness;
   - detente con instrucción explícita de crear la run usando `shared/workflows/opportunity-gtm-pipeline/RUN_FOLDER_TEMPLATE.md`.
4. Confirma que `current_stage` es `01_intake` o que la run todavía no ha empezado.

### 2. Read raw opportunity material

Lee el material bruto disponible:

- `00_inbox/` si existe y aplica;
- notas del usuario;
- links;
- archivos ya mencionados por el usuario;
- cualquier contexto mínimo del repo que sea necesario para entender el caso.

No resuelvas todavía la estrategia. Limítate a entender de qué oportunidad se trata.

### 3. Build source inventory

Construye un inventario de fuentes con:

- nombre/path o ubicación;
- tipo;
- papel en el caso;
- nivel de confianza o limitación;
- si es fuente primaria, secundaria o nota del usuario.

No copies el bruto. Resume función y fiabilidad.

### 4. Identify preliminary opportunity frame

Formula un framing preliminar del caso:

- título de trabajo;
- resumen en una línea;
- qué parece ser la oportunidad;
- qué outcome parece buscar el usuario.

Este framing es preliminar. No lo conviertas en tesis estratégica cerrada.

### 5. Map actors and stakeholders

Identifica actores y stakeholders tempranos:

- usuario o sponsor;
- cliente objetivo si aplica;
- actor externo relevante;
- beneficiario, buyer, ejecutor o decisor si ya aparecen;
- cualquier actor cuyo rol pueda cambiar la lectura posterior.

Si un actor es incierto, déjalo como `Unknown` o hipótesis.

### 6. Separate facts, hypotheses and unknowns

Separa explícitamente:

- `facts`: solo lo que sale del input;
- `hypotheses`: inferencias razonables pero no confirmadas;
- `unknowns`: huecos que pueden cambiar la lectura estratégica.

Si dos fuentes chocan, no arbitres por intuición. Refleja el conflicto en `unknowns` o `risks`.

### 7. Detect initial constraints and risks

Anota restricciones y riesgos iniciales visibles:

- límites temporales;
- límites normativos;
- límites de actor o rol;
- dependencia de información faltante;
- riesgos obvios de framing incorrecto.

No conviertas esta sección en un QA gate completo. Solo captura lo que strategy no debe ignorar.

### 8. Define user-stated or inferred objective

Documenta:

- el objetivo dicho por el usuario si existe;
- el objetivo inferido si no está explícito;
- la diferencia entre ambos, si la hay.

Si el objetivo es demasiado ambiguo para seguir, formula solo preguntas bloqueantes.

### 9. Produce intake brief

Escribe `{run_folder}/01_intake/intake_brief.md` usando `templates/intake_brief_template.md`.

Debe dejar claro:

- qué caso tenemos delante;
- con qué fuentes contamos;
- qué sabemos;
- qué no sabemos;
- por qué strategy sí o no puede arrancar.

### 10. Produce handoff to strategy

Escribe `{run_folder}/01_intake/handoff_to_strategy.md` usando `templates/handoff_to_strategy_template.md`.

El handoff debe seguir el contrato `Intake -> Strategy` y debe incluir:

- framing preliminar;
- inventario resumido de fuentes;
- objetivo del caso;
- actores preliminares;
- unknowns que pueden cambiar la lectura;
- `What strategy should NOT assume yet`.

No metas:

- oferta validada;
- ICP;
- funnel;
- claims finales;
- pricing;
- artefactos.

### 11. Update or instruct run state update

Si existe `{run_folder}/00_run_state.md`, actualízalo como mínimo con:

- `01_intake` en estado correspondiente;
- output path de `intake_brief.md`;
- handoff path de `handoff_to_strategy.md`;
- `current_status`;
- `current_stage` siguiente si el handoff queda listo;
- preguntas abiertas y riesgos si aplica.

Usa uno de estos status:

- `ready_for_next_stage`
- `needs_user_checkpoint`
- `blocked_missing_input`
- `needs_revision`

Usa `blocked_compliance_risk` solo si el intake detecta un riesgo grave obvio ya en la entrada.

Si no existe run folder, no finjas actualización. Deja instrucción explícita para inicializarlo primero.

### 12. Stop before strategy

Detente siempre al cerrar intake.

Nunca:

- ejecutes `02_strategy_mapping`;
- redactes tesis estratégica completa;
- conviertas el intake en oferta o ICP;
- empieces a decidir funnel o artifact-building.

## Output format

Usa siempre:

- `templates/intake_brief_template.md` para `intake_brief.md`
- `templates/handoff_to_strategy_template.md` para `handoff_to_strategy.md`

Si el intake no está listo, el output igual debe existir si el run folder existe, pero con:

- status adecuado;
- blocking questions claras;
- explicación de por qué strategy no puede arrancar todavía.

## Handoff contract

El handoff debe cumplir `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`, en concreto `Intake -> Strategy`.

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

Checkpoint en intake: mínimo y solo si es bloqueante.

Haz preguntas solo cuando no puedas identificar:

- qué oportunidad es;
- qué outcome persigue el caso;
- qué fuente mínima sostiene el framing;
- qué actor principal cambia la lectura.

Las preguntas deben ser bloqueantes, no decorativas.

## Quality criteria

- entiende el caso como oportunidad/proyecto, no como archivo;
- resume la oportunidad en una línea;
- inventaría fuentes sin copiar bruto;
- distingue fuentes primarias, secundarias y notas del usuario;
- separa facts, hypotheses y unknowns;
- identifica actores principales;
- detecta constraints y riesgos iniciales;
- deja claro qué strategy no debe asumir todavía;
- produce outputs dentro de `01_intake/`;
- no invade stages posteriores.

## Anti-patterns

- resumir el inbox sin framing de oportunidad;
- inventar estrategia;
- saltar a oferta;
- definir ICP;
- diseñar funnel o copy;
- dejar questions vagas tipo “cuéntame más”;
- escribir outputs fuera del run folder;
- avanzar a `02_strategy_mapping`;
- ocultar unknowns críticos.

## Stop conditions

Detente cuando se cumpla una de estas condiciones:

- `ready_for_next_stage`
  - existe intake suficiente y el handoff permite strategy
- `needs_user_checkpoint`
  - falta una respuesta bloqueante del usuario
- `blocked_missing_input`
  - falta input mínimo o run folder inicializado
- `needs_revision`
  - el intake existe, pero no está limpio o trazable
- `blocked_compliance_risk`
  - solo si la entrada ya expone un riesgo grave y obvio que impide seguir con legitimidad

## Handoff to next skill

La siguiente skill esperada es:

- `strategic-opportunity-mapper`

Pero esta skill no debe ejecutarla ni iniciarla.

Su única responsabilidad es dejar listo:

- `01_intake/intake_brief.md`
- `01_intake/handoff_to_strategy.md`
- el estado de run actualizado o la instrucción precisa para actualizarlo
