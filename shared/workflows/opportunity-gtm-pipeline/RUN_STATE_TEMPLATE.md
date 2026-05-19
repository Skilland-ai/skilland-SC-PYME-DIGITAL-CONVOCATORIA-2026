# Run State

## Run metadata

- run_id:
- case_slug:
- started_at:
- current_stage:
- current_status:
- owner/user:
- last_updated:

## Stage status table

| Stage | Status | Output path | Handoff path | User checkpoint | Notes |
|---|---|---|---|---|---|
| `01_intake` | `not_started` | | | `optional_if_blocked` | |
| `02_strategy_mapping` | `not_started` | | | `required` | |
| `03_qa_gate_1_strategy` | `not_started` | | | `conditional` | |
| `04_context_pack` | `not_started` | | | `optional_if_critical_unknowns` | |
| `05_offer_architecture` | `not_started` | | | `required` | |
| `06_qa_gate_2_offer` | `not_started` | | | `conditional` | |
| `07_qualification` | `not_started` | | | `required` | |
| `08_icp_segmentation` | `not_started` | | | `required` | |
| `09_qa_gate_3_readiness` | `not_started` | | | `required` | |
| `10_funnel_readiness` | `not_started` | | | `inherited` | |

Suggested stage status values:

- `not_started`
- `in_progress`
- `completed`
- `needs_user_checkpoint`
- `blocked`
- `needs_revision`

## Decisions log

| Date | Stage | Decision | Source / user input | Impact |
|---|---|---|---|---|
| | | | | |

## Open questions

| Question | Stage | Blocking? | Owner | Status |
|---|---|---|---|---|
| | | | | |

## Risks

| Risk | Stage | Severity | Mitigation | Status |
|---|---|---|---|---|
| | | | | |

## Next action

- 
