# Eval checklist - skilland-html-landing-builder

## Structure

- [ ] Existe `landing_web_v1/index.html`.
- [ ] Vive dentro de `03_html/`.
- [ ] Usa stage `03_html_build`.

## Input handling

- [ ] Lee `landing_structure_brief.md`.
- [ ] Lee `landing_copy_doc.md`.
- [ ] Respeta secciones, CTA y claim boundaries.
- [ ] Usa referencias existentes solo como referencia.

## Build quality

- [ ] El HTML abre en navegador sin build externo.
- [ ] Usa HTML/CSS estatico.
- [ ] Tiene responsive basica.
- [ ] La jerarquia visual es clara.
- [ ] Los CTAs son visibles y editables.
- [ ] Los assets usados son locales o tienen rutas relativas claras.
- [ ] Si usa assets, viven en `landing_web_v1/assets/` o tienen una justificacion explicita.

## Scope control

- [ ] No inventa estrategia.
- [ ] No inventa copy.
- [ ] No introduce React, Astro o bundlers.
- [ ] No sobrescribe `04_outputs/03_funnel/landing_web_v1/`.

## Handoff readiness

- [ ] La QA puede revisar la landing sin ambiguedad.
- [ ] Los placeholders editables estan claros.
- [ ] Los assets rotos o faltantes estan senalados.
- [ ] Actualiza o instruye actualizacion de run state.
