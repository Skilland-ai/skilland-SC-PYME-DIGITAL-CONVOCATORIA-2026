# Skilland Landing Fast Lane

## Stage 01 - Landing Structure

- Stage id: `01_landing_structure`
- Skill: `landing-strategy-structure`
- Goal: fijar objetivo, audiencia, oferta, CTA, narrativa y bloques de la landing antes de escribir copy o HTML.
- Input:
  - `00_landing_run_state.md`
  - contexto del caso disponible
  - outputs upstream existentes si los hay
  - notas del usuario sobre oferta, audiencia y CTA
- Output:
  - `01_structure/landing_structure_brief.md`
- Advance condition:
  - existe brief de estructura;
  - estan definidos objetivo, audiencia, oferta y CTA principal;
  - hay secciones recomendadas y limites de claim;
  - queda claro que copy no debe inventar.
- Block condition:
  - oferta o audiencia siguen ambiguas;
  - no hay CTA usable;
  - faltan limites minimos sobre claims o promesa.
- Next stage: `02_landing_copy`

## Stage 02 - Landing Copy

- Stage id: `02_landing_copy`
- Skill: `skilland-landing-copy`
- Goal: convertir la estructura aprobada en copy comercial Skilland, sin entrar en HTML ni redisenar la estrategia.
- Input:
  - `00_landing_run_state.md`
  - `01_structure/landing_structure_brief.md`
  - referencias de oferta o tono si existen
- Output:
  - `02_copy/landing_copy_doc.md`
- Advance condition:
  - existe doc de copy completo;
  - incluye hero, subheadline, CTAs, copy por seccion, microcopy y disclaimers si aplican;
  - respeta la estructura salvo problema grave explicitado;
  - no inventa claims fuera del brief.
- Block condition:
  - falta `landing_structure_brief.md`;
  - el brief deja huecos criticos sobre oferta, audiencia o CTA;
  - el copy dependeria de promesas no soportadas.
- Next stage: `03_html_build`

## Stage 03 - HTML Build

- Stage id: `03_html_build`
- Skill: `skilland-html-landing-builder`
- Goal: maquetar una landing estatica HTML/CSS responsive, visualmente solida y fiel al brief y al copy ya cerrados.
- Input:
  - `00_landing_run_state.md`
  - `01_structure/landing_structure_brief.md`
  - `02_copy/landing_copy_doc.md`
  - opcionalmente:
    - `04_outputs/03_funnel/landing_web_v1/index.html`
    - `04_outputs/03_funnel/landing_web_v1/assets/skilland.svg`
    - `04_outputs/03_funnel/assets/trust-logos/`
- Output:
  - `03_html/landing_web_v1/index.html`
  - opcionalmente:
    - `03_html/landing_web_v1/assets/`
- Advance condition:
  - existe `index.html`;
  - la landing abre en navegador sin build externo;
  - es responsive basica;
  - los assets usados son locales o copiados a la carpeta de la landing;
  - no inventa estrategia ni copy.
- Block condition:
  - falta structure brief o copy doc;
  - el copy tiene huecos que impiden maquetar CTA o bloques clave;
  - los assets imprescindibles estan rotos o no son usables.
- Next stage: `04_landing_qa`

## Stage 04 - Landing QA

- Stage id: `04_landing_qa`
- Skill: `landing-qa-review`
- Goal: revisar coherencia entre estrategia, copy y HTML, con foco en CTA, claims, claridad, legibilidad y riesgos de promesa.
- Input:
  - `00_landing_run_state.md`
  - `01_structure/landing_structure_brief.md`
  - `02_copy/landing_copy_doc.md`
  - `03_html/landing_web_v1/index.html`
  - opcionalmente:
    - `03_html/landing_web_v1/assets/`
- Output:
  - `04_qa/landing_qa_report.md`
- Advance condition:
  - existe QA report;
  - deja claro si la landing esta lista, lista con fixes o necesita rehacerse;
  - identifica riesgos de claim, CTA, exceso de texto, jerarquia visual y assets.
- Block condition:
  - faltan outputs previos esenciales;
  - no existe HTML final que revisar;
  - el report no deja decision operativa clara.
- Next stage: `done`
