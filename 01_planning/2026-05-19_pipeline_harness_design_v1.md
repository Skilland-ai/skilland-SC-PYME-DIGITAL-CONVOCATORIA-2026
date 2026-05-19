# Diseño del harness — Opportunity → GTM Pipeline

Fecha: `2026-05-19`
Estado: `v1`

## 1. Por qué creamos el harness antes que las skills

Porque el problema ya no es solo “qué skill crear”, sino “cómo se conectan varias skills sin caer en un megaproceso one-shot”.

Si se crean skills upstream sin harness:

- no habrá orden fuerte de ejecución;
- no habrá contrato de handoff;
- no habrá estado de run;
- no habrá checkpoints obligatorios claros;
- la primera skill real nacerá aislada.

El harness fija primero:

- stages;
- gates;
- handoffs;
- estado de ejecución;
- carpeta de run;
- runner manual;
- condiciones de avance y bloqueo.

## 2. Archivos creados

En `shared/workflows/opportunity-gtm-pipeline/`:

- `README.md`
- `PIPELINE.md`
- `STAGE_REGISTRY.md`
- `HANDOFF_CONTRACTS.md`
- `CHECKPOINTS.md`
- `RUN_STATE_TEMPLATE.md`
- `RUN_FOLDER_TEMPLATE.md`
- `MANUAL_RUNNER_PROMPT.md`

Y este documento:

- `01_planning/2026-05-19_pipeline_harness_design_v1.md`

## 3. Cómo se usará

El workflow se usará así:

1. se abre una run concreta en `04_outputs/00_runs/...`;
2. se copia o adapta `RUN_STATE_TEMPLATE.md` como `00_run_state.md`;
3. el runner manual o una skill futura lee el estado actual;
4. ejecuta solo la stage activa;
5. escribe output y handoff;
6. actualiza estado;
7. se para si hay checkpoint;
8. solo entonces se habilita la siguiente stage.

## 4. Cómo se conecta con la futura `project-opportunity-intake`

La primera skill real ya no será una skill suelta.

Tendrá que:

- leer el stage `01_intake` definido en `PIPELINE.md`;
- escribir `01_intake/intake_brief.md`;
- escribir `01_intake/handoff_to_strategy.md`;
- usar el contrato `intake -> strategy` de `HANDOFF_CONTRACTS.md`;
- actualizar `00_run_state.md`;
- parar si el caso queda en `needs_user_checkpoint` o `blocked`.

Eso fuerza a que la skill nazca integrada con el sistema.

## 5. Qué queda fuera

Queda fuera en esta fase:

- crear skills reales;
- crear subagents;
- ejecutar una run;
- montar funnel downstream;
- builders de copy, one pager o landing;
- tocar outputs comerciales existentes.

## 6. Decisión arquitectónica principal

El sistema reusable se tratará como:

- un workflow por stages;
- con skills como estaciones implementadas;
- con QA/compliance como gates laterales recurrentes;
- con estado de run explícito;
- con handoffs normalizados;
- con checkpoints humanos obligatorios en decisiones sensibles.

## 7. Próximo paso recomendado

Crear la primera skill real:

- `shared/skills/project-opportunity-intake/`

pero haciéndola nacer ya integrada con este harness:

- output de stage `01_intake`;
- handoff `intake -> strategy`;
- actualización de `00_run_state.md`;
- respeto estricto a `MANUAL_RUNNER_PROMPT.md` y `CHECKPOINTS.md`.
