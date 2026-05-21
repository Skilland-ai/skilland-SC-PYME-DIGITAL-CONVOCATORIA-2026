---
name: skilland-landing-copy
description: Implement Stage 02 of the `skilland-landing-fast-lane` workflow. Use when `landing_structure_brief.md` already exists and the team needs Skilland landing copy that is premium, clear, direct, B2B, and grounded in the structure brief. This skill writes `landing_copy_doc.md` with headlines, section copy, bullets, microcopy, FAQ, disclaimers, and title alternatives, while preserving structure and claim boundaries. Also use when a run folder exists and `current_stage` is `02_landing_copy`.
---

# skilland-landing-copy

## Goal

Convertir la estructura cerrada en copy comercial Skilland, sin meterse en HTML ni rehacer la estrategia.

## Stage integration

- Workflow: `shared/workflows/skilland-landing-fast-lane/`
- Stage id: `02_landing_copy`
- Reads:
  - `shared/workflows/skilland-landing-fast-lane/README.md`
  - `shared/workflows/skilland-landing-fast-lane/PIPELINE.md`
  - `shared/workflows/skilland-landing-fast-lane/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_landing_run_state.md`
  - `{run_folder}/01_structure/landing_structure_brief.md`
  - opcionalmente:
    - notas adicionales del usuario
    - contexto comercial que aclare terminos o claims
- Writes:
  - `{run_folder}/02_copy/landing_copy_doc.md`
- Next stage: `03_html_build`

## When to use this skill

Usa esta skill cuando:

- la estructura ya esta fijada;
- hace falta bajar a copy rapido sin perder senal;
- el caso necesita tono Skilland: premium, claro, directo, B2B, tech/IA/producto;
- `current_stage` es `02_landing_copy`.

No la uses cuando:

- falta `landing_structure_brief.md`;
- el trabajo real es maquetar HTML;
- el problema es estrategico y no de copy;
- haria falta inventar claims para llenar huecos.

## Required outputs

- `{run_folder}/02_copy/landing_copy_doc.md`

## Procedure

### 1. Read the structure brief fully

Lee `{run_folder}/01_structure/landing_structure_brief.md` completo.

Extrae como minimo:

- objetivo;
- audiencia;
- oferta;
- CTA principal y secundario;
- secciones aprobadas;
- claim risks;
- que copy no debe inventar.

### 2. Respect structure unless there is a serious issue

No cambies la estructura por gusto.

Solo propone un ajuste si detectas:

- una seccion redundante que rompe claridad;
- una ausencia que impide conversion;
- un riesgo serio de claim o de comprension.

Si propones cambio, documentalo de forma explicita dentro del output.

### 3. Write hero options first

Genera:

- headline principal recomendado;
- subheadline recomendado;
- alternativas de titulares;
- CTA principal;
- CTA secundario si aplica.

El hero debe dejar claro:

- para quien es;
- que consigue;
- por que Skilland;
- que accion tomar.

### 4. Write section-by-section copy

Para cada seccion aprobada, escribe:

- objetivo de la seccion;
- copy principal;
- bullets si ayudan a escaneo;
- microcopy o notas de apoyo;
- disclaimers o matices si tocan.

Prioriza alta senal y poco ruido.

### 5. Keep tone consistent

El tono debe ser:

- Skilland;
- premium pero claro;
- directo;
- B2B;
- sin humo;
- orientado a tech, IA y producto;
- con promesa prudente.

### 6. Protect claims

No escribas como hecho lo que el brief marco como:

- hypothesis;
- conditional claim;
- unknown;
- promesa no validada.

Si hay que dejar placeholder, dejalo.

### 7. Add FAQ, disclaimers and CTA microcopy

Incluye FAQ o aclaraciones si reducen friccion.

Incluye disclaimers cuando:

- hay riesgo de sobrerrepresentar resultados;
- hay dependencia de terceros;
- el CTA aun no esta final;
- hace falta matizar alcance.

### 8. Write the copy document

Escribe `{run_folder}/02_copy/landing_copy_doc.md` usando `templates/landing_copy_doc_template.md`.

El documento debe dejar la landing practicamente lista para maquetar.

### 9. Update run state

Si existe `{run_folder}/00_landing_run_state.md`, actualizalo con:

- status de `02_landing_copy`;
- output path;
- riesgos o placeholders que el builder debe respetar;
- siguiente stage recomendada.

Si no lo actualizas directamente, deja instrucciones explicitas.

## Quality bar

- No escribir HTML.
- No cambiar posicionamiento salvo problema grave explicitado.
- No degradar claridad por sonar grandilocuente.
- No convertir FAQ en vertedero de objeciones irrelevantes.
