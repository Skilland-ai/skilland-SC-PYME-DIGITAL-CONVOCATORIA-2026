---
name: landing-strategy-structure
description: Implement Stage 01 of the `skilland-landing-fast-lane` workflow. Use when there is enough commercial context to define a Skilland landing quickly but not enough time to wait for the full upstream pipeline. This skill turns partial offer/context inputs into `landing_structure_brief.md` with objective, audience, CTA, section logic, claim boundaries, and explicit instructions about what downstream copy must not invent. Also use when a run folder exists and `current_stage` is `01_landing_structure`.
---

# landing-strategy-structure

## Goal

Bloquear la estrategia minima de la landing antes de escribir copy o HTML.

## Stage integration

- Workflow: `shared/workflows/skilland-landing-fast-lane/`
- Stage id: `01_landing_structure`
- Reads:
  - `shared/workflows/skilland-landing-fast-lane/README.md`
  - `shared/workflows/skilland-landing-fast-lane/PIPELINE.md`
  - `shared/workflows/skilland-landing-fast-lane/RUN_FOLDER_TEMPLATE.md`
  - `{run_folder}/00_landing_run_state.md`
  - contexto del caso ya disponible, por ejemplo:
    - notas del usuario
    - `02_context/*`
    - `04_outputs/01_knowledge_base/*`
    - `04_outputs/02_offers/*`
    - outputs upstream parciales si existen
- Writes:
  - `{run_folder}/01_structure/landing_structure_brief.md`
- Next stage: `02_landing_copy`

## When to use this skill

Usa esta skill cuando:

- hay prisa por bajar a landing;
- existe suficiente claridad para fijar oferta, CTA y audiencia;
- aun no conviene esperar a cerrar todo el pipeline upstream;
- `current_stage` es `01_landing_structure`.

No la uses cuando:

- el trabajo real es ICP, qualification o QA Gate 3;
- todavia no se sabe que se ofrece;
- no existe CTA principal entendible;
- el usuario ya pide copy o HTML sin brief estructural previo.

## Required outputs

- `{run_folder}/01_structure/landing_structure_brief.md`

## Procedure

### 1. Confirm minimal landing readiness

Comprueba que existe, como minimo:

- objetivo de la landing;
- audiencia o buyer principal;
- oferta principal entendible;
- CTA principal;
- limites minimos de claim.

Si falta cualquiera de esos puntos y no puede inferirse con base suficiente, detente con `blocked_missing_input`.

### 2. Read only the context that matters

Lee el contexto necesario para responder:

- que se vende;
- para quien;
- por que ahora;
- que accion debe provocar la landing;
- que promesas no pueden hacerse.

No conviertas esta skill en una investigacion upstream completa.

### 3. Define commercial objective

Formula el objetivo de la landing de forma concreta:

- captar reuniones;
- filtrar interes;
- activar diagnostico;
- validar interes en un servicio concreto.

Debe quedar claro que conversion persigue la pagina.

### 4. Define audience and fit boundary

Deja explicitado:

- audiencia principal;
- audiencia secundaria si aporta;
- para quien no tiene sentido;
- senales minimas de encaje.

### 5. Lock offer and CTA logic

Fija:

- oferta principal;
- CTA principal;
- CTA secundario;
- promesa central;
- promesa que no debe sobreinterpretarse.

Si el CTA depende de un enlace final no confirmado, dejalo como placeholder editable.

### 6. Design the section structure

Usa por defecto esta estructura, ajustandola solo si el caso lo necesita:

1. Hero
2. Problema / oportunidad
3. Propuesta Skilland
4. Que construimos / que incluye
5. Proceso
6. Para quien tiene sentido
7. Prueba / confianza
8. FAQ o aclaraciones
9. CTA final
10. Disclaimer prudente si aplica

Para cada seccion, deja claro:

- objetivo narrativo;
- mensaje clave;
- bloque imprescindible;
- cosas que copy no debe insinuar.

### 7. Separate must-have vs optional blocks

Identifica:

- bloques imprescindibles;
- bloques opcionales;
- bloques que deben omitirse si solo meten ruido.

La velocidad manda, pero no a costa de romper la narrativa.

### 8. Identify claim risks and do-not-invent rules

Haz explicito:

- claims sensibles;
- promesas condicionales;
- hechos aun no verificados;
- que copy no debe inventar.

Esto es obligatorio. Si no queda claro aqui, se degrada toda la cadena downstream.

### 9. Write the structure brief

Escribe `{run_folder}/01_structure/landing_structure_brief.md` usando `templates/landing_structure_brief_template.md`.

El resultado debe ser lo bastante concreto como para que:

- la skill de copy pueda escribir sin rehacer estrategia;
- la skill HTML pueda maquetar sin inventar narrativa.

### 10. Update run state

Si existe `{run_folder}/00_landing_run_state.md`, actualizalo con:

- status de `01_landing_structure`;
- output path;
- riesgos de claim que deben preservarse;
- siguiente stage recomendada.

Si no lo actualizas directamente, deja instrucciones explicitas.

## Quality bar

- Espanol-first.
- Marca Skilland por defecto.
- Tono comercial, claro y sin humo.
- No escribir copy final.
- No escribir HTML.
