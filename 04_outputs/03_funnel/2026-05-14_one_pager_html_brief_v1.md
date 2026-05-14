# One Pager HTML Brief — Pyme Digital 2026 / Skilland

Fecha: `2026-05-14`
Estado: `v1`
Uso: brief de maquetación para futura conversión del one pager a HTML imprimible y exportable a PDF.

## 1. Formato recomendado

- `A4 vertical`
- pensado para impresión limpia y exportación a PDF
- prioridad: una lectura rápida, sobria y visualmente ordenada
- objetivo ideal: `1 página`

## 2. Enfoque visual

Inspiración combinada:

- `EdvancePro`: claridad operativa, bloques cortos, cards numeradas, CTA consultiva
- `SkillRadar`: sobriedad, tono institucional, estructura problema → solución → confianza
- `Skilland`: estética moderna, limpia y seria, sin exageración visual

## 3. Layout sugerido

### Banda 1 — Hero

- bloque full width
- titular, subtítulo, frase de criterio y CTA

### Banda 2 — Convocatoria

- bloque compacto
- texto corto + disclaimer destacado

### Banda 3 — Flujo Skilland

- grid de `7` cards numeradas
- visualmente secuencial

### Banda 4 — Proyectos posibles

- grid `2 x 3`
- seis cards homogéneas

### Banda 5 — Fit + no fit

- dos columnas:
  - `Tiene sentido si...`
  - `Qué no hacemos`

### Banda 6 — Confianza + CTA

- bloque de autoridad corto
- chips de credenciales
- CTA final

## 4. Grid sugerido

- canvas principal con ancho centrado
- grid base de `12 columnas`
- gutters amplios
- cards con padding generoso
- ritmo vertical corto

### Reparto orientativo

- Hero: `12 cols`
- Convocatoria: `12 cols`
- Flujo Skilland: `12 cols`
- Proyectos: `6 cards` repartidas en `2 filas x 3 columnas`
- Fit / no fit: `6 + 6`
- Confianza / CTA: `7 + 5` o `12` apilado según densidad final

## 5. Paleta Skilland

- `Warm Ivory` `#F6F1E9` fondo principal
- `Deep Navy` `#0E1B4D` color principal
- `Midnight Blue` `#142A6B` color secundario
- `Soft Coral` `#F28B82` color de acento
- `Charcoal` `#2E3A55` para texto
- tarjetas en blanco

## 6. Tipografía

- familia: `Sora`
- titular principal: alto contraste, peso fuerte
- subtítulos: semibold
- cuerpo: limpio, compacto y muy legible
- evitar bloques largos y tamaños pequeños

## 7. Componentes visuales

- hero block
- CTA button o CTA pill
- strip de disclaimer
- cards numeradas para flujo
- cards de proyectos
- lista con check bullets
- bloque `qué no hacemos`
- chips de credenciales

## 8. Jerarquía de secciones

Orden de lectura recomendado:

1. oportunidad
2. contexto breve
3. cómo funciona Skilland
4. qué proyectos se pueden plantear
5. para quién tiene sentido
6. qué no prometemos
7. autoridad
8. CTA

## 9. Reglas responsive

Aunque la prioridad es A4 y PDF, si se renderiza en navegador:

- en desktop mantener grid y cards en varias columnas
- en tablet reducir a `2 columnas`
- en móvil apilar todo a `1 columna`
- mantener CTA visible sin depender de hover
- conservar contraste y respiración

## 10. Instrucciones para futura implementación HTML/CSS

- usar `CSS custom properties` para la paleta
- preparar `@media print`
- definir tamaño y márgenes de `A4`
- evitar imágenes pesadas si no aportan
- evitar iconografía excesiva
- usar cards y separadores finos en vez de ornamento
- mantener densidad suficiente para una sola hoja
- dejar preparado export a PDF sin roturas raras

## 11. Qué no hacer en la futura implementación

- no convertirlo en landing larga
- no meter animaciones
- no usar estética neon o futurista
- no abusar de gradientes
- no meter fotos de stock genéricas
- no comprimir tanto el contenido que se vuelva ilegible

## 12. Nota de alcance

Este documento prepara la futura implementación HTML/CSS.
No autoriza todavía a producir el HTML final en esta tarea.
