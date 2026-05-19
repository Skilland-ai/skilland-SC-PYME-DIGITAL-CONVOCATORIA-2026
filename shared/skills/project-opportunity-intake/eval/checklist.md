# Eval checklist — project-opportunity-intake

## Structure

- [ ] Existe intake brief.
- [ ] Existe handoff to strategy.
- [ ] Ambos viven dentro de `01_intake/`.
- [ ] El handoff usa status válido del workflow.

## Source handling

- [ ] Inventaría fuentes sin copiar bruto.
- [ ] Distingue fuentes primarias, secundarias y notas del usuario.
- [ ] Marca confidence o limitaciones.

## Opportunity framing

- [ ] Entiende el caso como oportunidad/proyecto, no solo como archivo.
- [ ] Resume la oportunidad en una línea.
- [ ] Identifica objetivo preliminar del usuario.
- [ ] Identifica actores principales.

## Reasoning hygiene

- [ ] Separa facts, hypotheses y unknowns.
- [ ] No inventa datos.
- [ ] No oculta unknowns críticos.
- [ ] Las preguntas son bloqueantes, no decorativas.

## Scope control

- [ ] No diseña estrategia.
- [ ] No crea oferta.
- [ ] No define ICP.
- [ ] No diseña funnel.
- [ ] No crea artefactos comerciales.
- [ ] No salta al siguiente stage.

## Handoff quality

- [ ] El siguiente stage puede usar el handoff.
- [ ] Indica qué strategy no debe asumir todavía.
- [ ] Recomienda una acción siguiente clara.
- [ ] Actualiza o instruye actualización de run state.

## Harness integration

- [ ] Lee `00_run_state.md` si existe antes de escribir.
- [ ] Si no existe run folder, no improvisa outputs fuera del harness.
- [ ] Usa solo `ready_for_next_stage`, `needs_user_checkpoint`, `blocked_missing_input`, `needs_revision` o `blocked_compliance_risk` cuando aplica de forma obvia.
