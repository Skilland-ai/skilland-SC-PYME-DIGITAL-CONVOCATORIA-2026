# Standard Handoff Contract

## Required fields

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

## Status values

- `ready_for_next_stage`
- `needs_user_checkpoint`
- `blocked_missing_input`
- `blocked_compliance_risk`
- `needs_revision`

## Handoff file conventions

- Nombre: `handoff_to_{target_stage_short}.md`
- Ubicación: carpeta del stage origen dentro del run folder
- Formato: markdown corto, orientado a lectura por humano o por runner

## Base template

```md
# Handoff

## Metadata
- source_stage:
- target_stage:
- run_id:
- case_slug:
- created_at:
- status:

## Inputs used
- ...

## Outputs created
- ...

## Facts
- ...

## Hypotheses
- ...

## Unknowns
- ...

## Blocking questions
- ...

## User decisions needed
- ...

## Risks
- ...

## Recommended next action
- ...
```

## Stage-specific contracts

### Intake → Strategy

Debe incluir, además del contrato estándar:

- framing preliminar de la oportunidad;
- inventario de fuentes leídas;
- objetivo perseguido por el caso;
- actores preliminares;
- unknowns que podrían cambiar la lectura estratégica.

No debe incluir:

- oferta;
- ICP;
- funnel;
- claims finales.

### Strategy → QA Gate 1

Debe incluir:

- tesis estratégica;
- rol del actor principal;
- no-go estratégicos;
- riesgos estructurales;
- decisiones del usuario ya fijadas;
- claims sensibles detectados.

No debe incluir:

- facts register completo;
- arquitectura de oferta.

### QA Gate 1 → Context Pack

Debe incluir:

- veredicto del gate;
- riesgos aceptados;
- riesgos no aceptados;
- condiciones de lectura para el context pack;
- restricciones que deben aparecer sí o sí downstream.

No debe incluir:

- rediseño silencioso de la estrategia.

### Context Pack → Offer

Debe incluir:

- facts consolidados;
- constraints consolidados;
- unknowns vivos;
- preguntas de negocio que el pack ya responde;
- puntos donde la oferta no debe inventar.

No debe incluir:

- tesis estratégica reabierta.

### Offer → QA Gate 2

Debe incluir:

- hero offer;
- arquitectura de servicios/packs;
- claims permitidos y claims a evitar;
- no-go comerciales;
- supuestos económicos o de alcance.

No debe incluir:

- funnel;
- assets;
- segmentación ICP final.

### QA Gate 2 → Qualification

Debe incluir:

- veredicto del gate de oferta;
- claims aprobados;
- claims condicionados;
- riesgos de oferta;
- restricciones que deben trasladarse a la matriz de cualificación.

No debe incluir:

- segmentación de mercado.

### Qualification → ICP

Debe incluir:

- hard gates del caso;
- soft gates del caso;
- lógica `No-go / Go con cautelas / Go preliminar`;
- señales de escalado interno;
- separación explícita entre elegibilidad y cualificación comercial.

No debe incluir:

- beachhead;
- anti-ICP final;
- priorización de segmentos.

### ICP → QA Gate 3

Debe incluir:

- segmentos candidatos;
- beachhead recomendado;
- señales observables;
- anti-ICP;
- hipótesis que requieren validación;
- relación explícita con la oferta.

No debe incluir:

- funnel;
- copy;
- builders downstream.

### QA Gate 3 → Funnel Readiness

Debe incluir:

- veredicto de readiness upstream;
- riesgos que sobreviven a downstream;
- claims sensibles que deberán vigilarse más adelante;
- autorización o bloqueo para iniciar funnel/artifacts.

No debe incluir:

- diseño de funnel;
- briefs de piezas.
