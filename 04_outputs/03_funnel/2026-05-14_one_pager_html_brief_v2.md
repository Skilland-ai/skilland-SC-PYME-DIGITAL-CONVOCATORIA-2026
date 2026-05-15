# One Pager HTML Brief — Pyme Digital 2026 / Skilland

Fecha: `2026-05-14`  
Estado: `v2`  
Uso: brief de implementación futura para convertir el one pager en una pieza HTML A4 imprimible y exportable a PDF.

## 1. Referencia inspeccionada

Proyecto revisado:

- `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS/skilland-landing`

### Stack detectado

- `Astro 5`
- `Tailwind CSS v4`
- `React 19` para islands
- `Framer Motion`
- `GSAP`
- `Lenis`

### Archivos clave inspeccionados

- `src/styles/global.css`
- `src/styles/typography.css`
- `src/components/layout/BaseLayout.astro`
- `src/components/ui/Button.astro`
- `src/components/ui/SectionLabel.astro`
- `src/components/layout/HeaderIsland.tsx`
- `src/components/sections/home/HomeHero.astro`
- `src/components/sections/home/HomeProblem.astro`
- `src/components/sections/home/HomeSolutions.astro`
- `src/components/sections/home/HomeTrust.astro`
- `src/components/sections/solutions/SolutionHero.astro`
- `src/components/sections/solutions/SolutionProcess.astro`
- `src/components/ui/AnimatedLogo.tsx`
- `public/skilland.svg`

## 2. Qué reutilizar de la landing actual

### Patrones compositivos

- hero oscuro con tipografía grande;
- CTA pill redondeado;
- labels en mayúsculas con acento visual;
- cards blancas con radio amable;
- alternancia claro / oscuro por bloques;
- timeline con nodos conectados;
- bloque de confianza con piezas pequeñas y repetibles.

### Componentes conceptuales a heredar

- `Button.astro` -> CTA pill principal y secundario;
- `SectionLabel.astro` -> etiqueta de sección con acento;
- `ProcessTimeline.tsx` -> sistema visual del proceso;
- `HomeSolutions.astro` -> gramática de cards;
- `HomeTrust.astro` -> patrón de confianza comprimido;
- `AnimatedLogo.tsx` / `public/skilland.svg` -> marca visual.

### Qué no trasladar tal cual

- `HeroScene.tsx` o cualquier fondo 3D;
- animaciones dependientes del scroll;
- marquee de logos;
- blur, glow y motion que no imprimen bien;
- efectos que solo funcionan en navegador interactivo.

## 3. Fuente de verdad visual

## Reglas de reconciliación

- la landing actual usa una paleta operativa antigua;
- la guía formal de marca de Skilland debe mandar en esta pieza;
- la landing sirve como referencia de sistema visual y componentes, no de color exacto.

## Tokens a usar en el one pager

```css
:root {
  --color-background: #F6F1E9;
  --color-surface: #FFFFFF;
  --color-text: #2E3A55;
  --color-text-muted: #566A8F;
  --color-primary: #0E1B4D;
  --color-secondary: #142A6B;
  --color-accent: #F28B82;
  --color-accent-warm: #F4A261;
  --color-warning: #F2C879;
  --color-success: #7ED1B2;
  --color-border-soft: rgba(14, 27, 77, 0.10);
  --shadow-sm: 0 1px 3px rgba(14, 27, 77, 0.08);
  --shadow-md: 0 4px 12px rgba(14, 27, 77, 0.10);
  --radius-card: 16px;
  --radius-pill: 999px;
  --font-sans: "Sora", sans-serif;
}
```

## Nota importante

La paleta implementada hoy en la landing inspeccionada es otra:

- `#111D35`
- `#20478C`
- `#548CBB`
- `#F4A261`

No usarla como identidad principal del one pager `v2`.
Solo tomar de ahí la lógica de:

- contraste claro / oscuro;
- CTA pill;
- labels;
- timelines;
- cards.

## 4. Dirección visual Skilland para el one pager

### Look & feel

- página base en `Warm Ivory`;
- una gran superficie principal blanca o hero oscuro con bloque blanco combinado;
- `Deep Navy` para hero y cierre;
- `Midnight Blue` para líneas, divisores y profundidad;
- `Soft Coral` para el badge económico, CTA y acentos;
- tarjetas blancas con sombra suave;
- títulos con mucho peso;
- copy compacto;
- estética de sistema, no de folleto.

### Motivos visuales

- nodos;
- líneas finas;
- arcos o tracks de conexión;
- números grandes;
- microdiagramas;
- chips de confianza;
- logo facetado como símbolo de estructura y conexión.

### Lo que debe transmitir visualmente

```text
capacidad real -> criterio -> acción -> ejecución
```

## 5. Tipografía recomendada

### Principal

- `Sora` en toda la pieza.

### Escala sugerida para A4

- `H1`: `40px - 46px`, `700`, `1.05`
- `H2`: `24px - 28px`, `600`, `1.15`
- `H3`: `18px - 20px`, `600`, `1.25`
- `Body`: `13.5px - 14.5px`, `400`, `1.5`
- `Small`: `11px - 12px`, `400`, `1.4`
- `Label`: `10px - 11px`, `600`, `uppercase`, tracking alto

### Criterio

La landing actual usa `Space Mono` en labels, pero la guía formal de marca no la fija como tipografía principal.

Para este one pager:

- mantener `Sora` como dominante total;
- si luego se quiere una secundaria para labels, validarlo en la iteración HTML, no aquí.

## 6. Layout A4 recomendado

### Formato

- `A4 vertical`
- exportable a `PDF`
- pensado para lectura en pantalla y también impreso
- objetivo: `1 página`

### Caja de página

- `@page size: A4`
- márgenes externos a cero
- padding interno del lienzo: `14mm - 16mm`

### Grid

- grid base de `12 columnas`
- gutters moderados
- ritmo vertical compacto

### Distribución recomendada

#### Banda 1 — Hero

- `12 cols`
- ocupa aprox. `30% - 35%` del alto útil

#### Banda 2 — Oportunidad

- `8 + 4`
- texto corto a la izquierda;
- badge económico / tarjeta de claves a la derecha

#### Banda 3 — Proceso

- `12 cols`
- timeline horizontal si cabe;
- vertical compactado si la densidad lo exige

#### Banda 4 — Proyectos

- `2 x 3`
- cards homogéneas

#### Banda 5 — Encaje + no promesas

- `7 + 5` o `6 + 6`

#### Banda 6 — Confianza + CTA

- bloque final fuerte, preferentemente oscuro

## 7. Componentes sugeridos para la futura implementación

- `PageShell`
- `OnePagerHero`
- `FundingBadge`
- `OpportunityKeys`
- `DisclaimerStrip`
- `ProcessTimelineStatic`
- `ProjectCard`
- `BeforeAfterBlock`
- `NoPromiseBox`
- `TrustChipRow`
- `FinalCTA`
- `CalComPlaceholder`

## 8. Estructura HTML futura sugerida

```html
<main class="onepager">
  <section class="hero">...</section>
  <section class="opportunity">...</section>
  <section class="process">...</section>
  <section class="projects">...</section>
  <section class="fit">...</section>
  <section class="trust">...</section>
  <section class="cta">...</section>
</main>
```

### Reglas estructurales

- no usar wrappers innecesarios;
- cada sección debe tener una función clara;
- cada card debe soportar impresión sin romperse;
- evitar alturas dependientes de viewport al imprimir.

## 9. Assets detectados que podrían usarse

### Marca

- `public/skilland.svg`
- `src/assets/icons/skilland.svg`

### Referencia conceptual

- `AnimatedLogo.tsx`
- `ProcessTimeline.tsx`

### Confianza

Existen logos en:

- `public/images/companies/originals/*`

Pero solo deberían usarse si:

- hay permiso claro;
- caben sin ensuciar la pieza;
- aportan más que unos chips bien escritos.

### Recomendación

Para el one pager `v2` y su futura primera versión HTML:

- usar marca propia;
- usar `chips` de confianza;
- reservar logos de terceros para una validación posterior.

## 10. Reglas de impresión y densidad

- usar `-webkit-print-color-adjust: exact`;
- bloquear `page-break-inside` en cards críticas;
- no usar sombras pesadas en exceso;
- asegurar contraste suficiente en `Deep Navy`;
- limitar el hero para no comerse la página;
- mantener cada bloque de texto en `2-4` líneas como máximo;
- evitar que el grid de `6` cards fuerce una segunda página.

## 11. Qué NO hacer

- no convertir el one pager en una landing larga;
- no usar `WebGL`, `canvas` o animación como dependencia de sentido;
- no usar fotos de stock;
- no copiar la paleta vieja de la landing por inercia;
- no meter demasiado texto por “miedo a quedarse corto”;
- no poner demasiados logos de terceros;
- no hacer una pieza que parezca convocatoria administrativa;
- no usar mockups falsos de software si no aportan.

## 12. Pendiente para la futura implementación HTML

- decidir si el hero usa fondo navy completo o card blanca sobre fondo ivory;
- decidir si el logo será solo símbolo o símbolo + wordmark;
- fijar si habrá `QR` visible hacia `Cal.com`;
- aterrizar una versión estática del `ProcessTimeline`;
- ajustar densidad real con contenido final para asegurar `1 página`.

## 13. Nota de alcance

Este brief deja preparado el salto a:

```text
Primera versión HTML A4 imprimible/exportable a PDF del one pager
```

No autoriza todavía a producir:

- HTML final de producción;
- PDF final;
- landing;
- emails;
- automatizaciones;
- formulario completo.
