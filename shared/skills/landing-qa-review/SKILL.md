---
name: landing-qa-review
description: Implement Stage 04 of the `skilland-landing-fast-lane` workflow. Use when a run already has `landing_structure_brief.md`, `landing_copy_doc.md`, and `landing_web_v1/index.html` and needs a final review focused on strategy/copy/HTML coherence, CTA clarity, responsive basics, claim risk, readability, visual hierarchy, brand consistency, link health, and promise discipline. This skill writes `landing_qa_report.md` and does not silently rewrite upstream artifacts. Also use when a run folder exists and `current_stage` is `04_landing_qa`.
---

# landing-qa-review

## Goal

Hacer el control final de la landing sin remezclar la cadena ni corregir en silencio lo anterior.

## Stage integration

- Workflow: `shared/workflows/skilland-landing-fast-lane/`
- Stage id: `04_landing_qa`
- Reads:
  - `shared/workflows/skilland-landing-fast-lane/README.md`
  - `shared/workflows/skilland-landing-fast-lane/PIPELINE.md`
  - `shared/workflows/skilland-landing-fast-lane/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_landing_run_state.md`
  - `{run_folder}/01_structure/landing_structure_brief.md`
  - `{run_folder}/02_copy/landing_copy_doc.md`
  - `{run_folder}/03_html/landing_web_v1/index.html`
  - opcionalmente:
    - `{run_folder}/03_html/landing_web_v1/assets/`
- Writes:
  - `{run_folder}/04_qa/landing_qa_report.md`
- Next stage: `done`

## When to use this skill

Usa esta skill cuando:

- la landing ya esta maquetada;
- hace falta una decision operativa final;
- el equipo necesita saber si publicar, retocar o rehacer;
- `current_stage` es `04_landing_qa`.

No la uses cuando:

- falta algun output previo esencial;
- el trabajo real es escribir copy o HTML desde cero;
- se espera que QA arregle silenciosamente problemas de estrategia.

## Required outputs

- `{run_folder}/04_qa/landing_qa_report.md`

## Procedure

### 1. Read the whole chain

Lee:

- `{run_folder}/01_structure/landing_structure_brief.md`
- `{run_folder}/02_copy/landing_copy_doc.md`
- `{run_folder}/03_html/landing_web_v1/index.html`

La QA debe juzgar la landing contra la cadena completa, no solo contra el HTML.

### 2. Check strategy -> copy coherence

Revisa:

- si el HTML sigue la estructura pactada;
- si el copy respeta oferta, audiencia y CTA;
- si se han colado claims no permitidos;
- si se ha perdido algun bloque imprescindible.

### 3. Check CTA and conversion clarity

Valida:

- visibilidad del CTA principal;
- claridad del CTA secundario;
- coherencia entre CTA del hero y CTA final;
- placeholders editables bien marcados.

### 4. Check readability and visual hierarchy

Revisa:

- exceso de texto;
- bloques demasiado densos;
- falta de contraste o escaneo;
- jerarquia debil entre secciones.

### 5. Check technical basics

Comprueba:

- assets rotos;
- links o anchors inconsistentes;
- estructura responsive basica;
- si la pagina sigue siendo HTML/CSS estatico listo para abrir.

### 6. Check claim and promise discipline

Marca:

- claims peligrosos;
- promesas sobredimensionadas;
- disclaimers ausentes;
- frases que convierten condicionantes en certezas.

### 7. Write decision-oriented QA

Escribe `{run_folder}/04_qa/landing_qa_report.md` usando `templates/landing_qa_report_template.md`.

El report debe terminar con una decision clara:

- `pass`
- `pass_with_fixes`
- `needs_rework`

### 8. Update run state

Si existe `{run_folder}/00_landing_run_state.md`, actualizalo con:

- status de `04_landing_qa`;
- path del report;
- decision final;
- fixes obligatorios si los hay.

Si no lo actualizas directamente, deja instrucciones explicitas.

## Quality bar

- Revisar, no reescribir.
- Ser concreto, no teorico.
- Priorizar riesgos reales y fixes accionables.
