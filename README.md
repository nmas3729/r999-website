# SihleB Digital Studio — Festive Website Special

Next.js App Router landing page for the R999.99 Festive Website Special.

## Local development

Use the pinned pnpm version in `package.json`:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Offer terms

The campaign promotes a professional 5-page website for **R999.99 once-off
website development**. Hosting and domain registration are separate services;
their costs must be quoted and explained before a customer accepts a quotation.
The advertised offer ends **15 December 2026**.

Do not promise a free homepage preview or publish hosting/domain rates unless
those details are confirmed in the current campaign terms. No such confirmation
is present in this repository.

## WhatsApp configuration

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the approved WhatsApp destination in
international format using digits only, without a leading `+`. The current
campaign destination is `27714664935`.

This variable is public by design and Next.js embeds it in the generated site at
build time. Set it in the deployment environment before building. Changing it
requires a new build. The page fails its build if the destination is missing,
so it cannot silently generate broken WhatsApp links.

## Coolify deployment

Create a **new, separate application** for this repository. Do not reuse or
change the Coolify application serving `sihleb.co.za`.

- Use the repository root as the application root and a Node/Nixpacks buildpack.
- Use Node.js **20.9 or newer**. The project pins pnpm through its
  `packageManager` field.
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Start command: `pnpm start`
- Expose application port `3000`.
- Add `NEXT_PUBLIC_WHATSAPP_NUMBER` to the new application's build environment
  before the first build. Use the approved campaign destination above.
- Set the new application's domain to `r999.sihleb.co.za`.
- At the DNS provider, point that hostname to the destination shown for this
  Coolify application. Wait for DNS to resolve, then enable HTTPS/Let's Encrypt
  in Coolify and verify the site at `https://r999.sihleb.co.za`.

This repository contains no Dockerfile or Coolify-specific deployment
configuration; the commands above use the existing Next.js production start
script. Configure DNS and deployment only for the new application. No deployment
or DNS changes are performed by this project.
