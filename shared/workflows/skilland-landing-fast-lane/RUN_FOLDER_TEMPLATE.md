# Run Folder Template

Cada ejecucion real del fast lane debe vivir en su propia carpeta de run.

## Estructura propuesta

```text
04_outputs/00_landing_runs/{YYYY-MM-DD}_{case_slug}/
  00_landing_run_state.md
  01_structure/
    landing_structure_brief.md
  02_copy/
    landing_copy_doc.md
  03_html/
    landing_web_v1/
      index.html
      assets/
  04_qa/
    landing_qa_report.md
```

## Estado recomendado

`00_landing_run_state.md` es la fuente de verdad de la run.

Plantilla recomendada:

```md
# Landing Run State

- run_id:
- case_slug:
- workflow: skilland-landing-fast-lane
- current_stage:
- current_status:
- updated_at:

## Inputs summary

## Brand defaults

- brand: Skilland
- language: es

## Approved references

- visual_reference:
- logo_reference:
- trust_assets_reference:

## Stage status

| Stage | Status | Main output | Notes |
|---|---|---|---|
| 01_landing_structure | not_started | | |
| 02_landing_copy | not_started | | |
| 03_html_build | not_started | | |
| 04_landing_qa | not_started | | |

## Claim risks to preserve

## Next action

## Open unknowns
```

## Valores utiles para `current_status`

- `not_started`
- `in_progress`
- `blocked_missing_input`
- `needs_revision`
- `ready_for_next_stage`
- `completed`

## Reglas de uso

- cada stage escribe solo en su carpeta;
- no se sobreescriben landings o assets de otras runs;
- si el builder usa logos o imagenes reales, copialos a `03_html/landing_web_v1/assets/` o deja rutas locales estables y revisables;
- el QA final no reescribe estrategia, copy o HTML en silencio: reporta fixes.

## Que no hacer

- no mezclar varias landings en la misma run;
- no usar `04_outputs/03_funnel/landing_web_v1/` como carpeta de salida de una run nueva;
- no saltar directamente a HTML si aun no existe `landing_structure_brief.md`;
- no tratar este folder template como sustituto del pipeline principal.
