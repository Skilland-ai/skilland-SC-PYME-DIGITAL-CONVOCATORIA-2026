# Eval checklist — compliance-qa-reviewer

## Structure

- [ ] Existe QA report del gate correspondiente.
- [ ] Existe handoff correspondiente.
- [ ] Ambos viven dentro de la carpeta correcta del gate.
- [ ] El handoff usa status válido del workflow.
- [ ] El report usa verdict válido.

## Gate detection

- [ ] Detecta correctamente gate mode.
- [ ] Lee los inputs esperados para ese gate.
- [ ] Bloquea si faltan inputs mínimos.
- [ ] No mezcla outputs de gates distintos.

## QA quality

- [ ] Revisa coherencia contra facts/constraints.
- [ ] Detecta claims sensibles.
- [ ] Detecta assumptions peligrosas.
- [ ] Distingue pass, caution, revision y stop.
- [ ] Clasifica riesgos por severidad.
- [ ] Identifica user decisions needed.

## Scope control

- [ ] No reescribe estrategia/oferta/ICP en silencio.
- [ ] No crea context pack.
- [ ] No crea offer.
- [ ] No crea qualification.
- [ ] No define ICP.
- [ ] No diseña funnel.
- [ ] No crea artefactos comerciales.
- [ ] No ejecuta la siguiente stage.

## Handoff quality

- [ ] El siguiente stage puede usar el handoff.
- [ ] Indica qué debe preservar downstream.
- [ ] Indica qué downstream no debe asumir.
- [ ] Recomienda acción siguiente clara.
- [ ] Actualiza o instruye actualización del run state.
