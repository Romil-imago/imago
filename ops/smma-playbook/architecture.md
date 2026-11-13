# Architecture — Release 0.1

## Context
The repository began as a static HTML site. The product needs a deployable web runtime and lead-intake API while preserving the original index.html and avoiding premature distributed complexity.

## Decisions
- Framework: Next.js App Router, React and TypeScript.
- Hosting target: Vercel-compatible Node.js functions.
- API: Next.js Route Handlers.
- Persistent lead data: Neon Postgres via @neondatabase/serverless.
- Development fallback: append-only JSONL under logs/leads; forbidden as production storage.
- CRM integration: optional outbound HTTPS webhook to GoHighLevel.
- UI: server pages with a focused client-side lead form.
- Styling: CSS tokens and responsive layouts; no UI framework dependency in this first slice.

## Lead data flow
Browser form → API route → parse/validate/sanitize → deterministic score → persist → optional CRM webhook → response. SMS preview is display-only.

## Security boundaries
- Never commit .env.local, database URLs or API tokens.
- Privacy acknowledgement required; SMS consent separate and optional.
- Cap request size and bound free text.
- Honeypot is only a basic bot deterrent. Add managed rate limiting/WAF before paid campaigns.
- Production must use persistent DB; do not use function filesystem for customer data.
- Webhook must be HTTPS and has a hard timeout.
- No outbound SMS/email or ad spend actions.
- Dashboard contains sample values only, has no customer data and is not an authenticated operator app.

## Trade-off
One Next.js app keeps cost and operations simple while validating the offer. Introduce durable queues/workflows, tenant isolation and agent tools only after the actual client workflow has been proven.
