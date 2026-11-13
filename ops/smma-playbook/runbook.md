# Development and Deployment Runbook

## Local
1. Use Node.js 20.9+ (Node 22 LTS recommended).
2. Copy .env.example to .env.local.
3. Run npm install, then npm run dev.
4. Check /, /growth, /demo/remodeling-quote, /dashboard and /api/health.
5. With no DATABASE_URL, local submissions append to logs/leads/*.jsonl.

## Production persistence
1. Provision Neon Postgres.
2. Apply schema.sql from this folder.
3. Set DATABASE_URL in Vercel Production, Preview and Development as needed.
4. Deploy and check /api/health.
5. Submit test records and verify database consent flags.
Never add secrets to Git.

## GoHighLevel
Set GHL_WEBHOOK_URL to the private HTTPS webhook owned by the operator. The app posts minimal lead details, consent flags and source metadata. The route has a 4-second timeout. A failed forward currently does not retry; build a durable outbox before treating CRM sync as mission-critical.

## Before paid acquisition
- Replace starter privacy notice with a reviewed, jurisdiction-specific notice.
- Configure WAF/rate limiting, bot monitoring and retention schedule.
- Implement authenticated operator access before storing/viewing client data.
- Verify form, database and CRM delivery end-to-end.
- Obtain written approval for creative, audience, geo, spend cap and launch window.
- Confirm client's sales follow-up capacity and response SLA.
- Keep ad spend separate from Imago service fees.

## MVP limits
No auth, roles, tenant isolation, live CRM dashboard, ad platform integration, outbound messaging, payment execution or agent runner. Dashboard is a demo UI; do not put confidential data there.
