# Product Requirements Document — Imago Growth OS

**Version:** 0.1 · **Status:** MVP baseline

## Problem
Imago needs a repeatable way to capture and qualify prospects, demonstrate client conversion systems and eventually operate multiple campaigns without fragmented spreadsheets and untracked handoffs.

## Users
- Agency prospect: contractor evaluating Imago.
- Homeowner lead: visitor using a client quote-funnel demo.
- Operator: Imago team member reviewing leads and work.
- Client stakeholder: contractor reviewing outcomes (future release).

## MVP journeys

### Agency prospect
1. Understands Imago's growth offer.
2. Opens the growth-audit form.
3. Enters contact, company, trade, service and budget data.
4. Accepts the privacy acknowledgement; SMS consent is separate and optional.
5. Submits and receives confirmation plus internal lead score.
6. Lead is written locally in development or to Postgres when configured; optional HTTPS GHL forwarding is attempted.

### Homeowner demo
1. Opens the sample remodeling quote funnel.
2. Enters contact and project details.
3. Accepts the privacy acknowledgement; SMS consent remains optional.
4. Receives confirmation. SMS is not sent in MVP.

### Operator
1. Opens the Growth OS dashboard.
2. Sees explicitly illustrative sample metrics and integration states.
3. Opens agency intake, demo funnel, privacy notice or health route.

## Functional requirements
- FR-01 Validate lead type, required fields, email, phone length and US ZIP.
- FR-02 Bound and sanitize user text server-side; reject malformed/oversized JSON.
- FR-03 Record privacy and optional SMS consent separately.
- FR-04 Calculate deterministic 0–100 qualification score.
- FR-05 Persist to Neon/Postgres when DATABASE_URL exists.
- FR-06 Use JSONL local fallback only in development; fail closed in production without DB.
- FR-07 Forward to an optional HTTPS GoHighLevel webhook with timeout.
- FR-08 Never send SMS or email in MVP; generate a preview only after optional SMS consent.
- FR-09 Clearly label dashboard demo values.
- FR-10 Expose non-sensitive API health status.

## Non-functional requirements
Strict TypeScript, accessible labels and focus states, no secrets in source, Node 20.9+, webhook timeout, bounded input, explicit consent and no customer PII in console logs. Before paid traffic, production must have persistent storage, edge/WAF rate limiting, retention policy and authenticated operator access.

## Acceptance criteria
- AC-01 Valid agency lead returns 201, ID and score.
- AC-02 Valid homeowner request returns 201, ID and score.
- AC-03 Invalid email/phone/ZIP or missing privacy acknowledgement returns 400.
- AC-04 Malformed or oversized request returns 400/413.
- AC-05 Honeypot submissions are discarded.
- AC-06 Development mode appends a JSONL record with restrictive file permissions.
- AC-07 Production without DATABASE_URL returns actionable 503.
- AC-08 GHL forwarding only runs when configured with HTTPS.
- AC-09 No SMS/email is sent in this release.
- AC-10 Demo dashboard explicitly identifies sample metrics.

## Out of scope
Authentication/RBAC, multi-tenant client workspaces, live reporting, ad account access, lead enrichment, automated outreach, payment execution, billing and agent orchestration.
