# One Pager Copy + Design Review — Pyme Digital 2026 / Skilland

Fecha: `2026-05-14`  
Estado: `v1`  
Uso: revisar el `v1`, fijar criterios `v2` y dejar clara la dirección de copy y diseño antes del HTML.

## 1. Diagnóstico del v1

### Lo que sí funciona

- la estructura base aguanta;
- el flujo del funnel está bien respetado;
- la prudencia legal está presente;
- ya existe una separación razonable entre oportunidad, proceso, proyectos, confianza y CTA;
- el brief visual ya apunta a `A4`, grid, tarjetas y una conversión futura a HTML/PDF.

### Lo que se queda corto

- el hero depende demasiado de `hasta 7.000 €`;
- el tono suena correcto, pero todavía demasiado administrativo;
- el bloque de proceso parece checklist y no sistema;
- el catálogo se lee como lista plana, no como capacidad real para negocio;
- la confianza todavía suena genérica;
- el brief visual nombra colores, pero no aterriza un lenguaje visual reconocible de Skilland.

## 2. Qué se mantiene

- la lógica de `one pager` como pieza puente entre mensaje inicial y landing;
- la estructura general de `hero -> oportunidad -> proceso -> proyectos -> encaje -> confianza -> CTA`;
- la cautela con la convocatoria;
- el foco en `diagnóstico gratuito`;
- la idea de que Skilland no vende “pedir una ayuda”, sino convertirla en proyecto digital defendible.

## 3. Qué cambia en la v2

- el hero deja de abrir solo con el dato económico;
- `hasta 7.000 €` pasa a `badge`, dato visual o módulo de apoyo;
- el proceso se formula como `sistema de acompañamiento`;
- los packs se escriben por problema y resultado práctico;
- la autoridad se aterriza con narrativa Skilland, no con bio;
- el brief visual pasa de `paleta + grid` a `lenguaje visual de sistema`.

## 4. Nuevas reglas de copy

### Regla 1 — vender criterio, no subvención

El mensaje base debe ser:

> No vendemos pedir una ayuda. Ayudamos a convertir una oportunidad pública en un proyecto digital con sentido de negocio.

### Regla 2 — abrir con negocio

La primera idea debe hablar de:

- proyecto real;
- digitalización útil;
- proceso, ventas, datos o productividad;
- capacidad de ejecución.

No abrir con lenguaje de convocatoria salvo en la etiqueta o módulo de contexto.

### Regla 3 — la ayuda acelera, no protagoniza

`7.000 €` funciona como:

- badge;
- cifra de contexto;
- dato destacado.

No como única promesa principal.

### Regla 4 — menos explicación, más tensión

El copy debe crear una tensión clara:

- hoy: caos, Excel, WhatsApp, tareas manuales, poca visibilidad, poco seguimiento;
- mañana: sistema, trazabilidad, automatización, control, ejecución real.

### Regla 5 — frases cortas, verbos concretos

Preferir:

- convertir;
- ordenar;
- automatizar;
- definir;
- implantar;
- justificar.

Evitar:

- explicar demasiado;
- jerga de convocatoria;
- claims abstractos de transformación.

## 5. Nuevas reglas visuales

## Dirección base

La pieza debe sentirse:

- sobria;
- premium;
- clara;
- más sistema que folleto;
- más Skilland que “subvención”.

## Lenguaje visual recomendado

- fondo `Warm Ivory` como base de página;
- superficies blancas;
- hero `Deep Navy`;
- `Soft Coral` como acento controlado;
- títulos fuertes en `Sora`;
- tarjetas blancas con sombra leve;
- líneas finas y nodos para expresar flujo;
- números grandes para etapas;
- microdiagramas simples;
- chips para confianza;
- mucho aire, poca ornamentación.

## Motivo visual central

La narrativa visual debe responder a esta lógica:

```text
Ayuda pública -> criterio -> proyecto -> implantación -> justificación
```

No como burocracia, sino como sistema.

## 6. Qué aprendimos de la landing actual de Skilland

Ruta inspeccionada:

- `/home/reboot/Escritorio/Skilland.ai/CONTENEDOR-LANDINGS/skilland-landing`

### Foto técnica

- stack actual: `Astro 5` + `Tailwind CSS v4` + `React 19` islands;
- hay componentes reales reutilizables como referencia: `Button.astro`, `SectionLabel.astro`, `ProcessTimeline.tsx`, `HomeSolutions.astro`, `HomeTrust.astro`;
- existe asset de marca en `public/skilland.svg` y versión animada en `AnimatedLogo.tsx`.

### Patrones visuales que sí conviene heredar

- hero oscuro con tipografía grande y CTA pill;
- labels en mayúsculas con acento visual;
- tarjetas blancas redondeadas;
- bloques con alternancia claro/oscuro;
- timelines conectados;
- chips o strips de confianza;
- sensación de “sistema organizado”, no de catálogo caótico.

### Patrones que no conviene trasladar tal cual al one pager

- `WebGL`, fondos 3D o animaciones ricas;
- marquee de logos;
- interacciones dependientes de scroll;
- glow excesivo;
- cualquier recurso que funcione en web pero rompa en A4.

### Observación crítica sobre color

La landing actual todavía implementa una paleta operativa más antigua:

- `#111D35`
- `#20478C`
- `#548CBB`
- `#F4A261`

Pero la guía formal de marca de Skilland confirma otra fuente de verdad para esta iteración:

- `Deep Navy` `#0E1B4D`
- `Midnight Blue` `#142A6B`
- `Soft Coral` `#F28B82`
- `Warm Ivory` `#F6F1E9`
- `Charcoal` `#2E3A55`

Decisión para este one pager:

- usar la guía formal como base de tokens;
- reutilizar de la landing su gramática compositiva y sus componentes;
- no inventar una tercera paleta.

## 7. Cómo aplican aquí las Brand Guidelines

Fuentes leídas:

- `/home/reboot/Escritorio/Skilland.ai/Skilland.ai-BRANDING-MASTER/figma-mcp-101/skilland-brand-guidelines.md`
- `/home/reboot/Escritorio/Skilland.ai/Skilland.ai-BRANDING-MASTER/what-is-this-repo-about.md`
- `/home/reboot/Escritorio/Skilland.ai/Skilland.ai-BRANDING-MASTER/skilland.ai-branding/CLAUDE.md`

### Aplicación práctica

- `Deep Navy` para hero y cierres oscuros;
- `Midnight Blue` para líneas, bordes, conectores y profundidad;
- `Soft Coral` para CTA, badge, acento y paso activo;
- `Warm Ivory` para el fondo general;
- `Charcoal` para el cuerpo;
- `Sora` como tipografía principal también en labels, salvo que luego se justifique una secundaria.

### Traducción de la narrativa de marca al one pager

El one pager debe transmitir:

- criterio;
- capacidad real;
- acción;
- impacto medible;
- tecnología aplicada con propósito;
- acompañamiento humano.

## 8. Reglas operativas para la futura v2

- no tocar `v1`;
- no producir todavía `HTML` final;
- no convertir esto en una mini landing;
- no meter logos de terceros si no hay permiso confirmado;
- no convertir el bloque de confianza en una biografía;
- no dejar el dato económico sin disclaimer de prefinanciación y validación.

## 9. Conclusión

La `v2` no necesita otra estructura.
Necesita otra intensidad:

- más tensión problema -> solución;
- más Skilland;
- más sistema;
- más criterio visual;
- menos “documento correcto”.

