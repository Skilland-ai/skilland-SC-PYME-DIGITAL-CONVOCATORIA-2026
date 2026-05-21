---
name: skilland-html-landing-builder
description: Implement Stage 03 of the `skilland-landing-fast-lane` workflow. Use when both `landing_structure_brief.md` and `landing_copy_doc.md` already exist and the team needs a responsive static Skilland landing in plain HTML/CSS, ready to open in a browser without Astro, React, build tooling, or deployment. This skill must preserve strategy and copy, optionally use the existing Pyme Digital landing and trust-logo assets as references, and write `landing_web_v1/index.html`. Also use when a run folder exists and `current_stage` is `03_html_build`.
---

# skilland-html-landing-builder

## Goal

Convertir estructura + copy aprobados en una landing estatica, visualmente fuerte y lista para abrir en navegador, sin inventar estrategia ni copy.

## Stage integration

- Workflow: `shared/workflows/skilland-landing-fast-lane/`
- Stage id: `03_html_build`
- Reads:
  - `shared/workflows/skilland-landing-fast-lane/README.md`
  - `shared/workflows/skilland-landing-fast-lane/PIPELINE.md`
  - `shared/workflows/skilland-landing-fast-lane/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_landing_run_state.md`
  - `{run_folder}/01_structure/landing_structure_brief.md`
  - `{run_folder}/02_copy/landing_copy_doc.md`
  - opcionalmente:
    - `04_outputs/03_funnel/landing_web_v1/index.html`
    - `04_outputs/03_funnel/landing_web_v1/assets/skilland.svg`
    - `04_outputs/03_funnel/assets/trust-logos/`
    - `templates/html_build_brief_template.md` como working aid interno
- Writes:
  - `{run_folder}/03_html/landing_web_v1/index.html`
  - opcionalmente:
    - `{run_folder}/03_html/landing_web_v1/assets/`
- Next stage: `04_landing_qa`

## When to use this skill

Usa esta skill cuando:

- ya existen estructura y copy cerrados;
- hace falta una landing estatica inmediata;
- el caso requiere inspirarse en la landing de Pyme Digital sin rehacerla;
- `current_stage` es `03_html_build`.

No la uses cuando:

- falta `landing_structure_brief.md` o `landing_copy_doc.md`;
- el trabajo real es definir posicionamiento;
- el usuario quiere un proyecto React, Astro o despliegue;
- haria falta inventar copy para rellenar la pagina.

## Required outputs

- `{run_folder}/03_html/landing_web_v1/index.html`

## Procedure

### 1. Read structure and copy before touching markup

Lee completos:

- `{run_folder}/01_structure/landing_structure_brief.md`
- `{run_folder}/02_copy/landing_copy_doc.md`

Extrae:

- orden de secciones;
- CTA principal y secundario;
- copy que debe preservarse;
- disclaimers y claim protections;
- notas sobre assets o prueba social.

### 2. Decide visual direction without changing strategy

Usa Skilland como default:

- look premium y claro;
- HTML/CSS estatico;
- responsive;
- foco en jerarquia visual y conversion;
- CTAs editables;
- dependencias minimas.

Inspirate en `04_outputs/03_funnel/landing_web_v1/index.html` si ayuda, pero no lo reescribas ni lo tomes como output.

### 3. Localize assets deliberately

Si usas:

- logo Skilland;
- trust logos;
- imagenes de apoyo;

haz una de estas dos cosas:

- copialos a `{run_folder}/03_html/landing_web_v1/assets/`, o
- deja rutas locales relativas claras y estables.

Para una landing portable, la preferencia es copiar a la carpeta local de la run.

### 4. Build static HTML/CSS

La pagina debe:

- abrirse directamente en navegador;
- no depender de Astro, React, bundlers ni build;
- no depender de JS para lo basico;
- mantener una jerarquia clara de Hero -> prueba -> CTA;
- ser escaneable tanto en desktop como en movil.

### 5. Preserve copy and CTA integrity

No inventes:

- titulares;
- claims;
- secciones nuevas de posicionamiento;
- FAQs no aprobadas;
- promesas comerciales no escritas en el copy doc.

Si hace falta resumir por legibilidad, no cambies la intencion ni el claim.

### 6. Keep edit points obvious

Deja claramente localizables:

- CTA links;
- telefonos / emails / calendarios si son placeholders;
- logos opcionales;
- bloques que dependen de assets aun no confirmados.

### 7. Write the HTML

Escribe `{run_folder}/03_html/landing_web_v1/index.html`.

Solo crea `{run_folder}/03_html/landing_web_v1/assets/` si realmente necesitas alojar ahi los recursos usados.

### 8. Update run state

Si existe `{run_folder}/00_landing_run_state.md`, actualizalo con:

- status de `03_html_build`;
- output path;
- assets usados;
- placeholders editables;
- siguiente stage recomendada.

Si no lo actualizas directamente, deja instrucciones explicitas.

## Quality bar

- Espanol-first.
- Skilland by default.
- Visual fuerte pero sobrio.
- Sin dependencias pesadas.
- Sin estrategia inventada.
- Sin copy inventado.
