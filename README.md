# joshuacampaign.com — Joshua Campaign English site

Live at https://joshuacampaign.com (apex and www serve directly).

## What this is
The public English website for Joshua Campaign — founded by Karl Hargestam, Per Akvist featured evangelist — aligned with One Chance.

Karl approved the 27 October 2026 SEO structure. The site is static HTML, not one file:

- `/` homepage summary
- `/mission/`, `/history/`, `/leadership/`, `/give/` crawlable sections
- `/links/` link tree
- Photographs in `/assets/` as WebP and AVIF (with width, height, and `loading="lazy"` except the hero). Do not re-embed them as base64.

Passages held for Karl (unapproved figures, prices, and creative-access identifiers) are in `archive/moved-content.md`. They are not linked from the site.

## How it deploys
- Source of truth: this repository, after Karl's 27 October 2026 approval of the page split and extracted images. A future artifact export must write the same pages and file images, not a single base64 `index.html`.
- Publish flow: merge to `main` → Vercel project `joshuacampaign-info` auto-deploys from main.
- Do not merge or deploy to production without Karl. No DNS changes from a content PR.

## Domains & DNS
- `joshuacampaign.com` — DNS at Network Solutions (account "Joshua Campaign"): A `@` → Vercel, CNAME `www` → Vercel. Google Workspace mail records must be preserved.
- `joshuacampaign.info` — Network Solutions (account "joshua campaign intl"): Domain Forwarding 301 → https://joshuacampaign.com (apex + www).
- `joshuacampaign.org` — IONOS: redirect → https://joshuacampaign.com.

## Maintenance
- Daily automated watch covers uptime, redirects, TLS, and a homepage content hash for all Karl's domains (IONOS + Network Solutions). It alerts Karl on failure only.
- Content updates (stories, photos): Karl sends material → Cass updates the artifact → static export → `index.html` on main → Vercel redeploys → verified live. Karl gives one tap to publish.
- Owners: Karl (final approval) · Cass (updates, deploys, verifies) · coding team (repo / Vercel / DNS layer — no infra changes without Karl).
