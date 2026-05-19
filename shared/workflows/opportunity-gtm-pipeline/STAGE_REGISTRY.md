# Stage Registry

| Stage | Skill | Status | Required input | Main output | Gate | Next | Notes |
|---|---|---|---|---|---|---|---|
| `01_intake` | `project-opportunity-intake` | `implemented` | raw docs / user idea | `01_intake/intake_brief.md` | minimal only if blocked | `02_strategy_mapping` | skill creada; untested, run/eval todavia pendientes |
| `02_strategy_mapping` | `strategic-opportunity-mapper` | `implemented` | intake brief + sources | `02_strategy/strategic_opportunity_brief.md` | user validation required | `03_qa_gate_1_strategy` | skill creada; untested, run/eval todavia pendientes |
| `03_qa_gate_1_strategy` | `compliance-qa-reviewer` | `planned` | strategic brief | `03_qa_gate_1/qa_strategy_report.md` | gate 1 | `04_context_pack` | revisa postura y claims |
| `04_context_pack` | `context-knowledge-pack-builder` | `planned` | validated strategy + sources | `04_context_pack/context_master_brief.md` | optional if critical unknowns | `05_offer_architecture` | produce facts/constraints pack |
| `05_offer_architecture` | `offer-architect` | `planned` | context pack + strategy | `05_offer/offer_architecture_brief.md` | user validation required | `06_qa_gate_2_offer` | define oferta y guardrails |
| `06_qa_gate_2_offer` | `compliance-qa-reviewer` | `planned` | offer brief + constraints | `06_qa_gate_2/qa_offer_report.md` | gate 2 | `07_qualification` | claims y riesgo de oferta |
| `07_qualification` | `eligibility-and-commercial-qualifier` | `planned` | offer brief + context pack | `07_qualification/eligibility_commercial_qualification_matrix.md` | user validation required | `08_icp_segmentation` | lógica de caso, no ICP |
| `08_icp_segmentation` | `icp-and-segmentation` | `planned` | qualification matrix + offer | `08_icp/icp_segmentation_brief.md` | user validation required | `09_qa_gate_3_readiness` | define beachhead y anti-ICP |
| `09_qa_gate_3_readiness` | `compliance-qa-reviewer` | `planned` | ICP brief + offer + constraints | `09_qa_gate_3/qa_readiness_report.md` | gate 3 | `10_funnel_readiness` | habilita downstream |
| `10_funnel_readiness` | `N/A` | `planned` | gate 3 report + handoff | readiness state | inherited from gate 3 | downstream stages | estado de workflow, no skill |
