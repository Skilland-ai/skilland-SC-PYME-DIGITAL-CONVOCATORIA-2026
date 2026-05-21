# AfricanTech / Skilland landing v2 overhaul notes

## References inspected

- `04_outputs/03_funnel/landing_web_v1/index.html`
- `04_outputs/00_landing_runs/2026-05-21_africantech_mauritania_knowledge_transfer/03_html/landing_web_v1/index.html`
- `00_inbox/landing_mauritania/01_CONTENT_SOURCE_EXACT.md`
- `00_inbox/landing_mauritania/02_VISUAL_BRIEF_FROM_SLIDES.md`
- `00_inbox/landing_mauritania/03_SKILLAND_DESIGN_REFERENCES.md`
- `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS/landing-agencias-marketing/index.html`
- `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS/landing-agencias-marketing/css/styles.css`
- `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS/skilland-landing/src/styles/global.css`
- `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS/skilland-landing/src/styles/typography.css`
- `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS/skilland-landing/src/styles/animations.css`

## What changed from v1

- Rebuilt the landing as a more premium SaaS / institutional innovation page with a navy hero, grid texture, glass surfaces, stronger hierarchy and larger visual rhythm.
- Reworked the hero visual into a product-style knowledge-transfer system map with inputs, central engine, outputs and supporting metrics.
- Rebuilt the knowledge transfer engine section with a central glowing hub, input/output rails, orbit chips and reusable training-system framing.
- Rebuilt the four-step process into a dark process board with connected steps and supporting capability labels.
- Rebuilt the ecosystem section into an orbital network diagram with a mobile grid fallback.
- Condensed repetitive card-heavy sections into clearer narrative blocks: problem / opportunity, system, anti-LMS, consortia, activation cards, process, ecosystem, proof, FAQ and CTA.
- Kept EN/ES support with vanilla JS and flexible wrapping for Spanish strings.

## Assets

- Copied `skilland.svg` into `landing_web_v2/assets/`.
- No absolute local paths are used in the final HTML.
- No external images are required.

## Placeholders and limitations

- CTA links intentionally point to `#contact`.
- The HTML includes `<!-- TODO: replace CTA href with final booking/contact URL -->` near CTA areas.
- Google Fonts is referenced for Sora because the local references also use it; browser fallbacks are included.
