# Run Folder Template

Cada ejecución real del pipeline debe vivir en su propia carpeta de run.

Esa carpeta representa un caso concreto.
No representa la definición global del workflow.

## Estructura propuesta

```text
04_outputs/00_runs/{YYYY-MM-DD}_{case_slug}/
  00_run_state.md
  01_intake/
    intake_brief.md
    handoff_to_strategy.md
  02_strategy/
    strategic_opportunity_brief.md
    handoff_to_qa_gate_1.md
  03_qa_gate_1/
    qa_strategy_report.md
    handoff_to_context_pack.md
  04_context_pack/
    context_master_brief.md
    facts_register.md
    constraints_matrix.md
    handoff_to_offer.md
  05_offer/
    offer_architecture_brief.md
    handoff_to_qa_gate_2.md
  06_qa_gate_2/
    qa_offer_report.md
    handoff_to_qualification.md
  07_qualification/
    eligibility_commercial_qualification_matrix.md
    handoff_to_icp.md
  08_icp/
    icp_segmentation_brief.md
    handoff_to_qa_gate_3.md
  09_qa_gate_3/
    qa_readiness_report.md
    handoff_to_funnel.md
```

## Reglas de uso

- `00_run_state.md` es la fuente de verdad del estado.
- Cada stage escribe solo en su carpeta.
- Cada stage deja un único handoff oficial hacia la siguiente estación.
- No se sobrescriben outputs anteriores sin dejar trazabilidad de revisión.
- Si un stage necesita revisión, se actualiza su carpeta y se refleja en `00_run_state.md`.

## Compatibilidad con el repo actual

- usa `04_outputs/` como ubicación de deliverables reales;
- no invade `shared/skills/` ni `shared/agents/`;
- permite convivir con outputs comerciales finales y con futuras runs.

## Extensión downstream futura

Cuando exista la fase downstream, la carpeta podrá extenderse con:

```text
  10_funnel/
  11_copy/
  12_one_pager/
  13_landing/
  14_final_qa/
```

## Qué no hacer

- no mezclar varias runs en la misma carpeta;
- no guardar outputs intermedios del stage en ubicaciones ad hoc fuera del run folder;
- no usar la carpeta de run como definición global del workflow.
