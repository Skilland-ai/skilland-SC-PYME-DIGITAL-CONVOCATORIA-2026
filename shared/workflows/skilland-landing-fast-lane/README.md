# Workflow - Skilland Landing Fast Lane

## Que es

Este workflow define una via rapida downstream para construir una landing comercial Skilland sin esperar a cerrar todo el upstream del pipeline principal.

No sustituye `shared/workflows/opportunity-gtm-pipeline/`.
Es un sprint pragmatico para cuando ya existe suficiente contexto de oferta, audiencia y CTA como para bajar a landing.

## Cadena minima

```text
landing-strategy-structure
-> skilland-landing-copy
-> skilland-html-landing-builder
-> landing-qa-review
```

## Cuando usarlo

Usalo cuando:

- ya hay claridad suficiente sobre problema, oferta y siguiente paso comercial;
- hace falta producir una landing Skilland rapido;
- el equipo necesita separar estrategia, copy y HTML aunque vaya con prisa;
- conviene reaprovechar referencias ya existentes en `04_outputs/03_funnel/landing_web_v1/` y assets reales en `04_outputs/03_funnel/assets/trust-logos/`.

## Cuando NO usarlo

No lo uses cuando:

- el caso sigue sin framing de oferta;
- faltan decisiones basicas de audiencia o CTA;
- el trabajo real sigue siendo upstream: intake, estrategia, context pack, offer, qualification o ICP;
- el objetivo es rehacer o sobrescribir landings ya existentes.

## Que resuelve

Evita cuatro fallos frecuentes:

- bajar directo de notas sueltas a HTML;
- dejar que el builder invente posicionamiento o claims;
- mezclar copy, estructura y maquetacion en un solo paso;
- retrasar una landing util esperando el pipeline perfecto.

## Relacion con el pipeline principal

- El pipeline principal sigue siendo el sistema canonico para upstream.
- Este fast lane vive downstream y solo cubre la bajada a landing.
- Si luego se completa `icp-and-segmentation`, `QA Gate 3` y funnel formal, esos outputs pueden alimentar o revisar futuras landings.
- Nada de este workflow invalida el pipeline grande.

## Minimo contexto necesario

Para arrancar bien, hace falta como minimo:

- una oferta principal entendible;
- una audiencia o buyer claro;
- un CTA principal;
- limites de claim que no deben cruzarse.

Si eso no existe, la stage `01_landing_structure` debe bloquear y pedir aclaracion.

## Referencias utiles

- Referencia visual opcional:
  - `04_outputs/03_funnel/landing_web_v1/index.html`
- Marca base opcional:
  - `04_outputs/03_funnel/landing_web_v1/assets/skilland.svg`
- Prueba / logos reales opcionales:
  - `04_outputs/03_funnel/assets/trust-logos/`

Estas rutas son referencias.
No deben sobrescribirse durante una run nueva.

## Archivos del workflow

- `PIPELINE.md`
- `RUN_FOLDER_TEMPLATE.md`
- `MANUAL_RUNNER_PROMPT.md`

## Resultado esperado

Una run correcta deja:

- brief de estructura;
- documento de copy;
- `landing_web_v1/index.html` listo para abrir en navegador;
- QA final con riesgos, fixes y readiness.
