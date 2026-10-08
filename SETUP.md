# Local Development Setup

How to get the TechSquarers website running on your machine. Read the [README](README.md) first for contribution rules.

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Backend / framework | [Django 6.1](https://docs.djangoproject.com/en/6.1/) | Server-rendered templates |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/docs) | Built with the official CLI via npm |
| Interactivity | [Alpine.js 3](https://alpinejs.dev/) | Vendored in `static/vendor/` |
| Partial page updates | [htmx 2](https://htmx.org/) | Vendored in `static/vendor/` |

---

## Prerequisites

- **Python 3.13+** — `python --version`
- **Node.js 22+** and npm — `node --version` (only needed to build CSS)
- **Git**

---

## 1. Get the code

Fork the repository on GitHub, then clone **your fork**:

```bash
git clone https://github.com/<your-username>/tech-squarers-website.git
cd tech-squarers-website
```

Add the main repository as `upstream` so you can keep your branches up to date:

```bash
git remote add upstream https://github.com/techsquarers/tech-squarers-website.git
```

---

## 2. Python environment

Create and activate a virtual environment:

```bash
python -m venv .venv
```

| OS / shell | Activate command |
|---|---|
| Windows (PowerShell) | `.venv\Scripts\Activate.ps1` |
| Windows (Git Bash) | `source .venv/Scripts/activate` |
| macOS / Linux | `source .venv/bin/activate` |

Install the pinned Python dependencies:

```bash
pip install -r requirements.txt
```

---

## 3. Frontend dependencies

```bash
npm ci
```

`npm ci` installs the exact versions recorded in `package-lock.json`. Use `npm install <package>` only when intentionally adding or upgrading a dependency.

---

## 4. Environment variables

Copy the example file and fill it in:

```bash
cp .env.example .env
```

Generate a `SECRET_KEY` and paste it into `.env`:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

`.env` is gitignored — **never commit it**. The server refuses to start if `SECRET_KEY` is missing.

---

## 5. Database

```bash
python manage.py migrate
python manage.py createsuperuser   # optional: access /admin to edit site content
```

---

## 6. Run the project

Run these in **two separate terminals** (with the virtual environment active in the Django one):

```bash
npm run dev                      # terminal 1: rebuilds Tailwind CSS when templates change
python manage.py runserver       # terminal 2: Django dev server
```

Open <http://127.0.0.1:8000>.

If the page has no styling, the CSS has not been built — make sure `npm run dev` is running (or run `npm run build` once).

---

## 7. Run the tests

```bash
python manage.py test
```

---

## Project Structure

```
config/              Django project settings and root URLs
core/                Main app — views, URLs, models (site content), tests
templates/
  base.html          Base layout every page extends
  pages/             Full page templates
  partials/          Shared page regions, e.g. navbar, footer (created as sections are built)
  sections/<page>/   One page's sections, included in order by pages/<page>.html (e.g. sections/home/hero.html)
  components/        Small reusable UI pieces used with {% include %} (created as needed)
static/
  src/input.css      Tailwind entry point and brand palette (edit this)
  css/output.css     Compiled CSS — generated, gitignored (never edit)
  js/                Our own small Alpine components (e.g. nav-pill.js, typewriter.js), loaded in base.html
  fonts/             Self-hosted brand fonts (Inter, Space Grotesk) as woff2, wired up with @font-face in input.css
  images/            Logo, favicon and page images (WebP for photos)
  vendor/            Pinned third-party JS (Alpine.js, htmx)
```

---

## Working With Styles

### Brand palette

Colours are defined once in `static/src/input.css` inside `@theme`. Tailwind's default colours are **disabled**, so only brand colours exist:

| Token | Hex | Example classes |
|---|---|---|
| `vibrant-blue` | `#0056FF` | `bg-vibrant-blue`, `text-vibrant-blue` |
| `black` | `#000000` | `text-black` |
| `ice-blue` | `#E3E7FC` | `bg-ice-blue` |
| `white` | `#FFFFFF` | `bg-white` |
| `deep-navy` | `#0D284B` | `text-deep-navy` |
| `spring-green` | `#13F8C0` | `text-spring-green`, `bg-spring-green` |
| `sunrise-orange` | `#FDBA74` | `text-sunrise-orange`, `bg-sunrise-orange` |

`spring-green` and `sunrise-orange` are the **brand accents and action palette**. Both are light, so they work as a background (with `deep-navy` text) or as text on a dark background, never as text on a light one. `spring-green` is used on the hero's rotating word and the arrow circle inside the pill button, and marks success (htmx swap complete, positive actions); `sunrise-orange` marks warnings and destructive actions (not used on the site yet).

Gradients: `bg-futurewave` and `bg-midnight-surge`.

To add or change a colour, edit `@theme` in `static/src/input.css` — never hardcode hex values in templates.

### Contrast (WCAG AA)

- White text on `vibrant-blue` — OK for all text sizes.
- `bg-futurewave` fades from `vibrant-blue` into a light `vibrant-blue`/white mix — keep white text on the `vibrant-blue` end only; use `deep-navy` text over the light end.
- `vibrant-blue` text on `ice-blue` — borderline; verify before using for small text.
- `spring-green` needs `deep-navy` text and icons on it (10.7:1); white fails badly (1.38:1). As text it only works on dark backgrounds: on white it is 1.38:1. On the hero it passes, over the photo and its fade (measured in `templates/sections/home/hero.html`).
- `sunrise-orange` needs `deep-navy` text on it; on `deep-navy` it is 8.8:1 as text. On white it is only 1.8:1, so never use it as text on a light background.

---

## Working With Alpine.js and htmx

Both are loaded in `templates/base.html` from `static/vendor/`, with the version in the filename.

- **CSRF:** `<body>` sends Django's CSRF token on every htmx request via `hx-headers`, so htmx `POST`/`PUT`/`DELETE` requests work without extra setup.

### Upgrading a vendored library

1. Download the new minified build from npm, e.g. `npm pack htmx.org@<version>` and extract `dist/htmx.min.js` (for Alpine: `dist/cdn.min.js` from `alpinejs`).
2. Save it to `static/vendor/` with the new version in the filename, and delete the old file.
3. Update the `<script>` path in `templates/base.html`.
4. Test the pages that use the library before opening a PR.

---

## Keeping Your Branch Up to Date

Before opening a pull request:

```bash
git fetch upstream
git rebase upstream/main
```

---

## Preparing for Deployment

```bash
npm run build                        # minified CSS
python manage.py collectstatic       # gathers static files into staticfiles/
```

In production, set `DEBUG=False` and list the real domain(s) in `ALLOWED_HOSTS`.
