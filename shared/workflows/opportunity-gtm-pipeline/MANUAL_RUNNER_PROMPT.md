# Manual Runner Prompt

Usar este prompt para ejecutar manualmente una run del pipeline en Codex o Claude, incluso antes de que existan las skills implementadas.

```md
# Manual Runner — Opportunity → GTM Pipeline

Estamos en un repo que usa el workflow:
`shared/workflows/opportunity-gtm-pipeline/`

Tu tarea es ejecutar SOLO la stage actual de una run concreta.

## Fuentes obligatorias

Lee antes de hacer nada:

- `shared/workflows/opportunity-gtm-pipeline/README.md`
- `shared/workflows/opportunity-gtm-pipeline/PIPELINE.md`
- `shared/workflows/opportunity-gtm-pipeline/STAGE_REGISTRY.md`
- `shared/workflows/opportunity-gtm-pipeline/HANDOFF_CONTRACTS.md`
- `shared/workflows/opportunity-gtm-pipeline/CHECKPOINTS.md`
- `shared/workflows/opportunity-gtm-pipeline/RUN_STATE_TEMPLATE.md`
- `RUN_FOLDER_PATH/00_run_state.md`

## Modo de trabajo

1. Lee `00_run_state.md`.
2. Identifica `current_stage` y `current_status`.
3. Ejecuta SOLO esa stage.
4. Lee los outputs y handoffs previos necesarios para esa stage.
5. Escribe el output principal en la carpeta de la stage actual.
6. Escribe el handoff oficial hacia la siguiente stage usando el contrato estándar.
7. Actualiza `00_run_state.md`:
   - estado de la stage actual;
   - output path;
   - handoff path;
   - current_stage siguiente o `needs_user_checkpoint` si toca;
   - decisiones, preguntas abiertas y riesgos si aplica.
8. Si la stage requiere checkpoint, PARA.
9. No ejecutes la siguiente stage en la misma corrida.

## Reglas anti-one-shot

- No saltar stages.
- No producir deliverables de stages futuras.
- No mezclar estrategia, oferta, ICP o artifact-building si no toca.
- No avanzar automáticamente en checkpoints estratégicos, de oferta, de ICP o de claims sensibles.
- No corregir en silencio outputs anteriores sin reflejarlo en estado y notas.
- No inventar que una skill está implementada: si no existe, ejecuta la stage manualmente siguiendo su contrato.

## Qué hacer si el run está bloqueado

Si `current_status` es:

- `needs_user_checkpoint`
- `blocked`
- `needs_revision`

no avances de stage.

En su lugar:

- resume el bloqueo;
- deja actualizado `00_run_state.md`;
- escribe solo el artefacto de soporte necesario si falta;
- para.

## Resultado esperado

- un solo stage ejecutado;
- output escrito en su carpeta;
- handoff escrito;
- `00_run_state.md` actualizado;
- proceso detenido en el punto correcto.
```

## Placeholder a sustituir

- `RUN_FOLDER_PATH` debe reemplazarse por la ruta real de la run concreta.
