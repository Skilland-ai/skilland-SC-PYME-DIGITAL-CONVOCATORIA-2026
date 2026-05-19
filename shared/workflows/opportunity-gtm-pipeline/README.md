# Workflow — Opportunity → GTM Pipeline

## Qué es

Este workflow define la cadena de montaje reusable para transformar una oportunidad bruta en `readiness for funnel/artifacts` sin recurrir a un proceso one-shot.

No es una skill individual.
Es la capa de orquestación documental que dice:

- qué stages existen;
- en qué orden se ejecutan;
- qué lee y qué escribe cada stage;
- qué handoff deja;
- cuándo debe pararse para checkpoint de usuario;
- cómo se marca el estado de una ejecución real.

## Cuándo usarlo

Usarlo cuando el caso arranca con:

- documentación bruta;
- una idea de oportunidad;
- notas dispersas;
- una mezcla de fuentes normativas, comerciales o estratégicas;
- necesidad de pasar por varias decisiones antes de construir funnel o artefactos.

## Qué problema resuelve

Evita cuatro fallos:

- saltar de documentación bruta a artefacto final;
- mezclar estrategia, oferta, ICP y QA en la misma ejecución;
- perder trazabilidad entre stages;
- avanzar sin checkpoint del usuario en decisiones sensibles.

## Por qué existe antes de crear skills

Las skills upstream todavía no existen.

Si se crean sin harness, nacerán como piezas sueltas. Este workflow fija primero:

- contratos de input/output;
- handoffs;
- estados de run;
- gates de QA/compliance;
- checkpoints obligatorios.

Así, la primera skill real ya nace conectada a un sistema y no como función aislada.

## Cómo se conecta con `shared/skills/*`

Cada stage del pipeline espera una skill principal, pero el workflow no depende todavía de que esa skill exista.

La relación correcta es:

- el workflow define la estación;
- la skill implementa el comportamiento de la estación;
- el run state controla qué estación está activa;
- el handoff normaliza el paso a la siguiente estación.

## En qué se diferencia de una skill individual

Una skill individual resuelve una fase concreta.

Este workflow:

- coordina varias fases;
- fija el orden;
- define contratos entre fases;
- gestiona estado;
- impide saltos ilegales;
- obliga a checkpoints donde toca.

## Por qué evita el one-shot

Porque obliga a:

- ejecutar un solo stage cada vez;
- leer outputs previos antes de escribir;
- producir handoff explícito;
- actualizar estado;
- parar si hay checkpoint;
- no habilitar el siguiente stage hasta que el actual quede en estado válido.

## Archivos del workflow

- `PIPELINE.md`
- `STAGE_REGISTRY.md`
- `HANDOFF_CONTRACTS.md`
- `CHECKPOINTS.md`
- `RUN_STATE_TEMPLATE.md`
- `RUN_FOLDER_TEMPLATE.md`
- `MANUAL_RUNNER_PROMPT.md`

## Estado actual

Workflow definido.

Skills upstream todavía en `planned`.
