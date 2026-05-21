# Manual Runner Prompt

Usa este prompt para ejecutar manualmente una run del fast lane en Codex o Claude.

```md
# Manual Runner - Skilland Landing Fast Lane

Estamos en un repo que usa el workflow:
`shared/workflows/skilland-landing-fast-lane/`

Tu tarea es ejecutar la stage actual de una run concreta y mantener separados estrategia, copy, HTML y QA.

## Fuentes obligatorias

Lee antes de hacer nada:

- `shared/workflows/skilland-landing-fast-lane/README.md`
- `shared/workflows/skilland-landing-fast-lane/PIPELINE.md`
- `shared/workflows/skilland-landing-fast-lane/RUN_FOLDER_TEMPLATE.md`
- `RUN_FOLDER_PATH/00_landing_run_state.md`

Lee tambien los outputs previos ya existentes dentro de `RUN_FOLDER_PATH/`.

## Modo de trabajo por defecto

1. Lee `00_landing_run_state.md`.
2. Identifica `current_stage` y `current_status`.
3. Ejecuta solo esa stage.
4. Lee los outputs previos necesarios.
5. Escribe el output principal en la carpeta correcta.
6. Actualiza `00_landing_run_state.md`:
   - status de la stage actual;
   - output path;
   - riesgos o unknowns;
   - siguiente stage sugerida.
7. Si la stage queda bloqueada, para.
8. No inventes estrategia en copy ni inventes copy en HTML.

## Modo sprint controlado

Si el usuario pide explicitamente ejecutar la cadena completa en una misma sesion:

1. ejecuta stage por stage en orden;
2. escribe el artefacto de cada stage antes de pasar a la siguiente;
3. actualiza `00_landing_run_state.md` en cada salto;
4. para si aparece un bloqueo de claim, CTA, oferta o contexto.

Rapido no significa one-shot desordenado.

## Reglas anti-mezcla

- No saltar `01_landing_structure`.
- No dejar que `skilland-landing-copy` cambie la estrategia salvo riesgo grave explicitado.
- No dejar que `skilland-html-landing-builder` invente titulares, promesas o posicionamiento.
- No usar QA para reescribir en silencio la landing.
- No sobrescribir referencias en `04_outputs/03_funnel/`.

## Resultado esperado

- estructura clara;
- copy usable;
- `landing_web_v1/index.html` listo para abrir en navegador;
- QA final con decision operativa.
```

## Placeholder a sustituir

- `RUN_FOLDER_PATH` debe reemplazarse por la ruta real de la run.
