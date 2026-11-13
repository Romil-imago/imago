CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_type TEXT NOT NULL CHECK (lead_type IN ('agency_prospect', 'homeowner_quote')),
  lead_score SMALLINT NOT NULL CHECK (lead_score BETWEEN 0 AND 100),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  city TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  scope TEXT,
  timeline TEXT,
  zip_code TEXT,
  trade TEXT,
  privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
  sms_consent BOOLEAN NOT NULL DEFAULT FALSE,
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new','reviewing','qualified','contacted','booked','won','lost','invalid')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CHECK (privacy_consent = TRUE),
  CHECK (email IS NOT NULL OR phone IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status, created_at DESC);
CREATE INDEX IF NOT EXISTS leads_type_score_idx ON leads (lead_type, lead_score DESC);
