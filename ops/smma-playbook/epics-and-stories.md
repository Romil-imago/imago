# Delivery Backlog

## Epic 1 — Acquisition and lead intake
- [x] Growth audit landing page.
- [x] Capture prospect and service-area details.
- [x] Validate and score inbound submissions.
- [x] Record privacy and optional SMS consent separately.
- [x] Homeowner quote funnel demonstration.
- [ ] Add automated API and scoring tests.
- [ ] Add edge/WAF rate limits and abuse monitoring.

## Epic 2 — CRM and data operations
- [x] Define Postgres schema.
- [x] Persist to Neon when DATABASE_URL is present.
- [x] Optional HTTPS GoHighLevel webhook forward.
- [ ] Provision database and apply schema in deployment.
- [ ] Add idempotency, durable outbox and retry.
- [ ] Add CRM sync status and reconciliation.

## Epic 3 — Agency operations
- [x] Illustrative operations dashboard.
- [ ] Authenticated operator access and RBAC.
- [ ] Client/campaign CRUD with tenant isolation.
- [ ] Client onboarding, asset collection and approvals.
- [ ] Task owners, audit log and service delivery tracking.

## Epic 4 — Campaign and reporting
- [ ] Authorized Meta Marketing API integration.
- [ ] Import spend, impressions, clicks and lead events.
- [ ] Track contact, appointment, show and closed-won stages.
- [ ] Calculate client CAC/ROAS with defined source data.
- [ ] Approval-gated campaign publishing and budget controls.

## Epic 5 — AI-assisted operations
- [ ] AI campaign brief assistant with structured outputs.
- [ ] Human-reviewed ad and landing copy.
- [ ] Consent-aware follow-up drafting.
- [ ] Reports grounded in connected source data.
- [ ] Agent scopes, audit trail, budget limits and kill switch.
