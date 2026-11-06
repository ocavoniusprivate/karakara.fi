# karakara.fi

Static site for Karakara, hosted on GitHub Pages. No build step.

## Editing content
Everything lives in `index.html` (it can be edited in the GitHub web editor):
- **Next event:** change the `data-countdown="..."` value (Finnish time: `+02:00` in winter, `+03:00` in summer) and the date text below it.
- **Commandments:** edit the `commandment__title` and `commandment__text` lines.

Commit to `main` and the site updates within about a minute.

## Hosting setup (one-time)
1. GitHub repo → Settings → Pages → Source: *Deploy from a branch*, `main` / root.
2. Custom domain: `karakara.fi` (already set by the `CNAME` file). Once DNS works, tick **Enforce HTTPS**.
3. At Domainkeskus → DNS records for karakara.fi:
   - `A` records for `@` (root): `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `ocavoniusprivate.github.io`
   - Remove any other existing `A`/`AAAA` records for `@` (e.g. Domainkeskus parking page).
