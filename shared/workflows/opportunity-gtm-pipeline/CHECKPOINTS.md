# Checkpoints

## Regla general

El sistema no debe avanzar automáticamente en decisiones de:

- estrategia;
- oferta;
- ICP;
- claims sensibles;
- readiness para funnel/artifacts;

sin validación del usuario o supuestos explícitos ya aprobados.

## Checkpoint 01 — Strategic Thesis Validation

- Cuándo ocurre:
  - al cerrar `02_strategy_mapping`
- Qué debe validar el usuario:
  - rol correcto;
  - objetivo real;
  - postura estratégica;
  - no negociables;
  - criterio de éxito.
- Qué preguntas mínimas se hacen:
  - ¿Esta es la jugada correcta?
  - ¿Hay algún actor, límite o outcome mal planteado?
- Qué pasa si el usuario no responde:
  - el run pasa a `needs_user_checkpoint`
  - no se ejecuta `04_context_pack`
- Qué puede inferirse y qué no:
  - se pueden inferir matices de framing si son de bajo riesgo
  - no se puede inferir una postura estratégica alternativa

## Checkpoint 02 — Offer Validation

- Cuándo ocurre:
  - al cerrar `05_offer_architecture`
- Qué debe validar el usuario:
  - hero offer;
  - alcance visible;
  - claims permitidos;
  - no-go comerciales;
  - framing económico si aplica.
- Qué preguntas mínimas se hacen:
  - ¿Esta es la oferta que quieres poner en juego?
  - ¿Hay claims o límites que quieras endurecer o relajar?
- Qué pasa si el usuario no responde:
  - el run pasa a `needs_user_checkpoint`
  - no se ejecuta `07_qualification`
- Qué puede inferirse y qué no:
  - se pueden inferir defaults de formato
  - no se puede inferir hero offer ni claim sensible

## Checkpoint 03 — Qualification Logic Validation

- Cuándo ocurre:
  - al cerrar `07_qualification`
- Qué debe validar el usuario:
  - hard gates;
  - soft gates;
  - estados de avance;
  - nivel de tolerancia a casos dudosos.
- Qué preguntas mínimas se hacen:
  - ¿Qué casos deben bloquearse sí o sí?
  - ¿Qué casos merecen `Go con cautelas` en lugar de `No-go`?
- Qué pasa si el usuario no responde:
  - el run pasa a `needs_user_checkpoint`
  - no se ejecuta `08_icp`
- Qué puede inferirse y qué no:
  - se puede inferir orden y estructura
  - no se pueden inferir umbrales de negocio sensibles

## Checkpoint 04 — ICP / Beachhead Validation

- Cuándo ocurre:
  - al cerrar `08_icp`
- Qué debe validar el usuario:
  - segmento prioritario;
  - anti-ICP;
  - señales relevantes;
  - nivel de confianza de la hipótesis.
- Qué preguntas mínimas se hacen:
  - ¿Este es el beachhead correcto?
  - ¿Qué segmento no quieres perseguir aunque pueda comprar?
- Qué pasa si el usuario no responde:
  - el run pasa a `needs_user_checkpoint`
  - no se ejecuta `09_qa_gate_3`
- Qué puede inferirse y qué no:
  - se pueden agrupar señales parecidas
  - no se puede elegir beachhead sin validación

## Checkpoint 05 — Readiness Approval

- Cuándo ocurre:
  - al cerrar `09_qa_gate_3`
- Qué debe validar el usuario:
  - que upstream está suficientemente cerrado;
  - que se acepta pasar a funnel/artifacts;
  - que los riesgos vivos son aceptables.
- Qué preguntas mínimas se hacen:
  - ¿Autorizas bajar a funnel y artifacts con estos riesgos?
  - ¿Hay alguna línea roja nueva antes de seguir?
- Qué pasa si el usuario no responde:
  - el run queda en `needs_user_checkpoint`
  - no se marca downstream como habilitado
- Qué puede inferirse y qué no:
  - se puede mantener readiness parcial como nota
  - no se puede habilitar downstream sin aprobación

## Si el usuario no responde

Regla de workflow:

- mantener el run en estado visible de espera;
- actualizar `00_run_state.md`;
- no saltar el checkpoint por conveniencia;
- permitir avanzar solo si ya existe un supuesto explícito validado en planning o por el propio usuario.

## Qué se puede inferir y qué no

### Sí puede inferirse

- nomenclatura interna;
- organización de bullets y tablas;
- defaults de estructura documental;
- deduplicación de hechos equivalentes;
- agrupación de riesgos ya aceptados.

### No puede inferirse

- postura estratégica alternativa;
- hero offer definitiva;
- claims sensibles;
- beachhead ICP;
- autorización de readiness downstream.
