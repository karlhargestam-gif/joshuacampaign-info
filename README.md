# joshuacampaign.com — Joshua Campaign English site

Live at https://joshuacampaign.com (apex and www serve directly).

## What this is

The public English website for Joshua Campaign — begun in Ethiopia in 1998 by Karl and Jennifer Härgestam, with Abbi and Per Åkvist leading the Ethiopia work and the Sweden office. Static HTML, CSS and images. The Swedish site remains https://joshuacampaign.se/.

## Pages

- `/` — homepage summary, with real links to each section
- `/mission/` — mass evangelism, church planting, pioneer mission and roots
- `/history/` — founding story and the photograph archive
- `/leadership/` — Abbi and Per Åkvist, and founder Karl Härgestam
- `/give/` — Swedish account details, support amounts and PayPal
- `/links/` — Joshua Campaign link tree

`sitemap.xml` lists each of these URLs. Do not fold the section pages back into a single URL.

## Images

Photographs and logos live in `/assets/` as AVIF and WebP, with a JPEG or PNG fallback. Pages use `<picture>` and width/height. Do not inline images as base64 in HTML. The homepage document should stay well under 200 KB.

## Public wording

Published figures include 3.37 billion people still unreached, 4.2 million decisions, and Joshua Campaign began in Ethiopia in 1998, together with the earlier public lines restored on 27 Oct 2026: 5.2 million salvation books given away, an earlier milestone of more than 3.8 million salvation books, 25 years of ministry (1998 start; 2023 was the 25th year), tens of thousands responding, Ethiopia’s evangelical share from about 2% around 1992 to about 20%, and campaign meetings reaching hundreds of thousands in a year. The conviction line is “give every person one chance to hear the Gospel.” Do not write “finish the Great Commission.” Do not add worker names, locations, teams or photos for creative-access fields. The Ethiopia planting names already on `/mission/` stay.

## How it deploys

- Source of truth for this repository is `main`. Vercel project `joshuacampaign-info` deploys from this repo.
- Pull requests get a Vercel preview. Do not promote a preview or change DNS from a content edit.
- A pull request runs `.github/scripts/site_check.py`, which checks page weight, canonical URLs, JSON-LD, internal links, image markup, robots and the sitemap.

## Domains & DNS

- `joshuacampaign.com` — DNS at Network Solutions (account "Joshua Campaign"): A `@` → Vercel, CNAME `www` → Vercel. Google Workspace mail records must be preserved.
- `joshuacampaign.info` — Network Solutions (account "joshua campaign intl"): Domain Forwarding 301 → https://joshuacampaign.com (apex + www).
- `joshuacampaign.org` — IONOS: redirect → https://joshuacampaign.com.

Do not change DNS records from this repository.

## Maintenance

- Daily automated watch covers uptime, redirects, TLS, and a homepage content hash for all Karl's domains (IONOS + Network Solutions). It alerts Karl on failure only.
- Content updates: edit the page that owns the section, keep images as files in `/assets/`, and keep the homepage as a summary with links. Karl gives one tap to publish.
- Owners: Karl (final approval) · Cass (updates, deploys, verifies) · coding team (repo / Vercel / DNS layer — no infra changes without Karl).
