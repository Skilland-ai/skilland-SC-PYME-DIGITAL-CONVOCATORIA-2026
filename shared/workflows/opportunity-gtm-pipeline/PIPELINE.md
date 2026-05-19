# Opportunity → GTM Pipeline

## Stage 01 — Intake

- Stage id: `01_intake`
- Skill: `project-opportunity-intake`
- Goal: convertir material bruto en un intake brief estructurado.
- Reads:
  - `00_inbox/` o fuentes brutas equivalentes
  - idea inicial del usuario
  - restricciones explícitas conocidas
- Writes:
  - `01_intake/intake_brief.md`
  - `01_intake/handoff_to_strategy.md`
- Handoff produced: `intake -> strategy`
- User checkpoint: opcional y mínimo, solo si falta dato bloqueante para entender la oportunidad.
- Advance condition:
  - existe intake brief;
  - están separadas fuentes, hipótesis y unknowns;
  - el objetivo del caso es entendible.
- Block condition:
  - oportunidad no identificable;
  - faltan fuentes mínimas;
  - conflicto no resoluble sobre el objetivo del caso.
- Next stage: `02_strategy_mapping`

## Stage 02 — Strategic Mapping

- Stage id: `02_strategy_mapping`
- Skill: `strategic-opportunity-mapper`
- Goal: formular la tesis estratégica del caso.
- Reads:
  - `01_intake/intake_brief.md`
  - `01_intake/handoff_to_strategy.md`
  - fuentes primarias clave
- Writes:
  - `02_strategy/strategic_opportunity_brief.md`
  - `02_strategy/handoff_to_qa_gate_1.md`
- Handoff produced: `strategy -> qa_gate_1`
- User checkpoint: obligatorio para validar postura, actor, no negociables y criterio de éxito.
- Advance condition:
  - existe tesis estratégica clara;
  - se distinguen oportunidad, riesgo y no-go;
  - el usuario valida o deja supuestos explícitos.
- Block condition:
  - postura estratégica no validada;
  - contradicción fuerte en actor/objetivo;
  - claims sensibles sin decisión.
- Next stage: `03_qa_gate_1_strategy`

## Stage 03 — QA Gate 1: Strategy

- Stage id: `03_qa_gate_1_strategy`
- Skill: `compliance-qa-reviewer`
- Goal: revisar coherencia y riesgo de la tesis estratégica antes de bajar a context pack.
- Reads:
  - `02_strategy/strategic_opportunity_brief.md`
  - `02_strategy/handoff_to_qa_gate_1.md`
  - facts/constraints disponibles
- Writes:
  - `03_qa_gate_1/qa_strategy_report.md`
  - `03_qa_gate_1/handoff_to_context_pack.md`
- Handoff produced: `qa_gate_1 -> context_pack`
- User checkpoint: obligatorio si el gate devuelve `caution`, `stop` o decisiones sensibles pendientes.
- Advance condition:
  - reporte QA en `pass` o `pass_with_cautions`;
  - riesgos vivos documentados;
  - condiciones de lectura downstream claras.
- Block condition:
  - riesgo de compliance alto;
  - estrategia incoherente;
  - claims o rol incorrectos.
- Next stage: `04_context_pack`

## Stage 04 — Context Pack

- Stage id: `04_context_pack`
- Skill: `context-knowledge-pack-builder`
- Goal: producir el pack factual y operativo para downstream.
- Reads:
  - `02_strategy/strategic_opportunity_brief.md`
  - `03_qa_gate_1/qa_strategy_report.md`
  - fuentes primarias
- Writes:
  - `04_context_pack/context_master_brief.md`
  - `04_context_pack/facts_register.md`
  - `04_context_pack/constraints_matrix.md`
  - `04_context_pack/handoff_to_offer.md`
- Handoff produced: `context_pack -> offer`
- User checkpoint: opcional; se usa si hay unknowns críticos que cambian la utilidad del pack.
- Advance condition:
  - existe pack usable para oferta;
  - facts y constraints están separados;
  - unknowns críticos están explícitos.
- Block condition:
  - el pack no responde preguntas downstream;
  - facts sin trazabilidad suficiente;
  - constraints demasiado ambiguos.
- Next stage: `05_offer_architecture`

## Stage 05 — Offer Architecture

- Stage id: `05_offer_architecture`
- Skill: `offer-architect`
- Goal: traducir estrategia y context pack a oferta, alcance y guardrails.
- Reads:
  - `04_context_pack/context_master_brief.md`
  - `04_context_pack/facts_register.md`
  - `04_context_pack/constraints_matrix.md`
  - `04_context_pack/handoff_to_offer.md`
- Writes:
  - `05_offer/offer_architecture_brief.md`
  - `05_offer/handoff_to_qa_gate_2.md`
- Handoff produced: `offer -> qa_gate_2`
- User checkpoint: obligatorio para validar hero offer, framing, claims y no-go comerciales.
- Advance condition:
  - oferta validable;
  - guardrails claros;
  - núcleo vs auxiliares vs fuera de alcance diferenciados.
- Block condition:
  - oferta sin framing claro;
  - claims incompatibles con constraints;
  - el usuario no valida la arquitectura.
- Next stage: `06_qa_gate_2_offer`

## Stage 06 — QA Gate 2: Offer

- Stage id: `06_qa_gate_2_offer`
- Skill: `compliance-qa-reviewer`
- Goal: revisar claims, riesgos y coherencia de la oferta antes de qualificación e ICP.
- Reads:
  - `05_offer/offer_architecture_brief.md`
  - `05_offer/handoff_to_qa_gate_2.md`
  - `04_context_pack/constraints_matrix.md`
- Writes:
  - `06_qa_gate_2/qa_offer_report.md`
  - `06_qa_gate_2/handoff_to_qualification.md`
- Handoff produced: `qa_gate_2 -> qualification`
- User checkpoint: obligatorio si el gate cambia claims, alcance o niveles de riesgo aceptables.
- Advance condition:
  - oferta en estado `usable`;
  - claims permitidos definidos;
  - no-go confirmados.
- Block condition:
  - oferta peligrosa o incoherente;
  - pricing o alcance sin soporte;
  - riesgos no aceptados por el usuario.
- Next stage: `07_qualification`

## Stage 07 — Qualification

- Stage id: `07_qualification`
- Skill: `eligibility-and-commercial-qualifier`
- Goal: diseñar la lógica de filtro de caso y de avance comercial.
- Reads:
  - `05_offer/offer_architecture_brief.md`
  - `06_qa_gate_2/qa_offer_report.md`
  - `04_context_pack/*`
- Writes:
  - `07_qualification/eligibility_commercial_qualification_matrix.md`
  - `07_qualification/handoff_to_icp.md`
- Handoff produced: `qualification -> icp`
- User checkpoint: obligatorio para validar gates duros, gates blandos y estados `No-go / Go con cautelas / Go preliminar`.
- Advance condition:
  - la lógica de filtro de caso está cerrada;
  - no se confunde elegibilidad con ICP;
  - preguntas de screening están listas.
- Block condition:
  - gates ambiguos;
  - falta criterio de avance;
  - sigue mezclado caso individual con segmento de mercado.
- Next stage: `08_icp_segmentation`

## Stage 08 — ICP Segmentation

- Stage id: `08_icp_segmentation`
- Skill: `icp-and-segmentation`
- Goal: definir segmentos prioritarios, beachhead y anti-ICP.
- Reads:
  - `07_qualification/eligibility_commercial_qualification_matrix.md`
  - `07_qualification/handoff_to_icp.md`
  - `05_offer/offer_architecture_brief.md`
- Writes:
  - `08_icp/icp_segmentation_brief.md`
  - `08_icp/handoff_to_qa_gate_3.md`
- Handoff produced: `icp -> qa_gate_3`
- User checkpoint: obligatorio para validar beachhead y criterios de exclusión.
- Advance condition:
  - hay segmento prioritario explícito;
  - la diferencia entre ICP y elegibilidad es clara;
  - señales y anti-ICP están definidos.
- Block condition:
  - varios segmentos sin priorización;
  - ICP absorbido por la lógica legal;
  - falta validación de beachhead.
- Next stage: `09_qa_gate_3_readiness`

## Stage 09 — QA Gate 3: Readiness

- Stage id: `09_qa_gate_3_readiness`
- Skill: `compliance-qa-reviewer`
- Goal: revisar readiness upstream antes de permitir funnel/artifacts.
- Reads:
  - `08_icp/icp_segmentation_brief.md`
  - `08_icp/handoff_to_qa_gate_3.md`
  - `05_offer/offer_architecture_brief.md`
  - `04_context_pack/constraints_matrix.md`
- Writes:
  - `09_qa_gate_3/qa_readiness_report.md`
  - `09_qa_gate_3/handoff_to_funnel.md`
- Handoff produced: `qa_gate_3 -> funnel_readiness`
- User checkpoint: obligatorio si hay claims sensibles, huecos estratégicos o readiness parcial.
- Advance condition:
  - upstream coherente;
  - riesgos asumidos y documentados;
  - existe permiso explícito para bajar a funnel/artifacts.
- Block condition:
  - oferta, ICP o claims siguen abiertos;
  - QA detecta huecos de sistema;
  - el usuario no valida readiness.
- Next stage: `10_funnel_readiness`

## Stage 10 — Readiness for Funnel/Artifacts

- Stage id: `10_funnel_readiness`
- Skill: `N/A todavía`
- Goal: consolidar el estado final upstream y habilitar el pipeline downstream.
- Reads:
  - `09_qa_gate_3/qa_readiness_report.md`
  - `09_qa_gate_3/handoff_to_funnel.md`
  - `00_run_state.md`
- Writes:
  - actualización de `00_run_state.md`
  - marca de readiness para stages downstream futuros
- Handoff produced: `upstream_complete -> downstream_enabled`
- User checkpoint: no nuevo; depende de la aprobación explícita previa del Gate 3.
- Advance condition:
  - estado upstream completo;
  - siguiente fase habilitada por el usuario.
- Block condition:
  - readiness parcial o condicionada;
  - falta de decisión del usuario.
- Next stage: downstream future stages
