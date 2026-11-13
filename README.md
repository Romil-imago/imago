# Imago Growth OS

Imago's first BMAD-guided growth operations release. The original static site assets remain in the repository; the Next.js App Router now serves the application.

## Local setup
- Node.js 20.9+ (Node 22 LTS recommended)
- Copy `.env.example` to `.env.local`
- Run `npm install`
- Run `npm run dev` and open http://localhost:3000

## First-release routes
- `/` — Imago growth positioning
- `/growth` — agency prospect growth-audit intake
- `/demo/remodeling-quote` — sample homeowner funnel
- `/dashboard` — illustrative operations workspace and lead-economics scenario model
- `/privacy` — starter privacy notice (must be reviewed and completed before public launch)
- `/api/health` — non-sensitive integration readiness
- `/api/leads/webhook` — validated lead capture endpoint

## Persistent data
Development mode writes JSONL leads to `logs/leads/` if `DATABASE_URL` is absent. Production fails closed without a persistent database. Provision Neon Postgres and apply `ops/smma-playbook/schema.sql`, then configure `DATABASE_URL`.

## Optional CRM
Set `GHL_WEBHOOK_URL` to a private HTTPS webhook. Forwarding is best-effort and currently has no durable retry queue; do not make it the sole system of record.

## Safety / launch checklist
This release does not send SMS/email, launch advertising, alter ad budgets, collect payments or execute AI agents. The dashboard is demo-only and has no customer data or authentication. Before paid traffic, add managed rate limiting, secure operator auth/RBAC, tenant isolation, retention/opt-out workflows, and a legally reviewed privacy notice.

## BMAD artefacts
Product strategy, PRD, architecture, backlog, schema and runbook live in `ops/smma-playbook/`; working role definitions live in `.bmad/roles/`.
