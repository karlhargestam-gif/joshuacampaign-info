# joshuacampaign.com — Joshua Campaign English site

Live at https://joshuacampaign.com (apex and www serve directly).

## What this is
The public English website for Joshua Campaign — founded by Karl Hargestam, Per Akvist featured evangelist — aligned with One Chance. Static single-file site.

## How it deploys
- Source of truth: the "Joshua Campaign Website" web artifact (built and edited with Cass).
- Publish flow: artifact → static export → `index.html` replaced on `main` → Vercel project `joshuacampaign-info` auto-deploys from main.
- Do not hand-edit `index.html` for content changes; the next export overwrites it.

## Domains & DNS
- `joshuacampaign.com` — DNS at Network Solutions (account "Joshua Campaign"): A `@` → Vercel, CNAME `www` → Vercel. Google Workspace mail records must be preserved.
- `joshuacampaign.info` — Network Solutions (account "joshua campaign intl"): Domain Forwarding 301 → https://joshuacampaign.com (apex + www).
- `joshuacampaign.org` — IONOS: redirect → https://joshuacampaign.com.

## Maintenance
- Daily automated watch covers uptime, redirects, TLS, and a homepage content hash for all Karl's domains (IONOS + Network Solutions). It alerts Karl on failure only.
- Content updates (stories, photos): Karl sends material → Cass updates the artifact → static export → `index.html` on main → Vercel redeploys → verified live. Karl gives one tap to publish.
- Owners: Karl (final approval) · Cass (updates, deploys, verifies) · coding team (repo / Vercel / DNS layer — no infra changes without Karl).
