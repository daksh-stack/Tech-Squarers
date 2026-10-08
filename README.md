# TechSquarers — Official Website

The official website for **TechSquarers**, a company offering tech education and software development services. This site serves students, clients, and the broader tech community.

---

## Table of Contents

- [About TechSquarers](#about-techsquarers)
- [Project Goals](#project-goals)
- [Getting Started](#getting-started)
- [Non-Negotiable Requirements](#non-negotiable-requirements)
- [Contributing](#contributing)
- [Branch & Commit Conventions](#branch--commit-conventions)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [PR Review & Approval](#pr-review--approval)
- [Reporting Issues](#reporting-issues)
- [Contact](#contact)

---

## About TechSquarers

TechSquarers is a tech company at the intersection of education and software development. We train individuals to build careers in tech, and we build software solutions for businesses. Our website is the primary touchpoint for:

- Prospective students exploring our courses and programmes
- Businesses looking for software development services
- The general public learning about who we are and what we stand for
- The developer community interested in contributing to our open platform

---

## Project Goals

The TechSquarers website should:

- Clearly communicate what we do and who we serve
- Be fast, accessible, and easy to navigate
- Work seamlessly on every screen size — from mobile to desktop
- Represent the TechSquarers brand professionally
- Be maintainable and easy for future contributors to work on

---

## Getting Started

> The tech stack for this project is chosen by the developer. However, all contributions must meet the [requirements](#non-negotiable-requirements) below before they will be approved.

### General Setup Steps

1. **Fork** this repository to your GitHub account
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/techsquarers/tech-squarers-website.git
   cd website
   ```
3. **Install dependencies** using whatever package manager your stack requires
4. **Create a `.env` file** for any environment variables — never hardcode secrets
5. **Run the project locally** and confirm everything works before making changes
6. Add `.env` and any build output folders to `.gitignore`

If you are setting up the project for the first time, document your setup steps clearly in a `SETUP.md` file so future contributors can follow them.

---

## Non-Negotiable Requirements

All contributions to this project **must** meet these standards before they will be reviewed or approved:

### Responsiveness
- The site must work correctly on **mobile, tablet, and desktop** screen sizes
- Test on at least a 375px (mobile), 768px (tablet), and 1280px (desktop) viewport
- No horizontal scrolling on any screen size
- Touch targets (buttons, links) must be large enough for mobile users

### Code Quality
- Code must be clean, readable, and well-commented where necessary
- No commented-out blocks of dead code in submitted PRs
- Reuse existing components/styles rather than duplicating them
- No hardcoded content that should come from a CMS or config file

### Performance
- Images must be optimised before committing (use WebP where possible)
- No unnecessary third-party libraries — justify every new dependency
- Pages should load in under 3 seconds on a standard mobile connection

### Accessibility
- All images must have descriptive `alt` text
- Sufficient colour contrast (WCAG AA as a minimum)
- The site must be navigable by keyboard

### Security
- Never commit API keys, passwords, or secrets — use environment variables
- No user input should be rendered without sanitisation

---

## Contributing

Contributions are welcome! Here is what you can help with:

- **UI/UX** — improving the look, feel, and usability of the site
- **New pages or sections** — adding content areas discussed and approved in issues
- **Bug fixes** — fixing broken layouts, links, or functionality
- **Performance** — improving page speed and load times
- **Accessibility** — making the site more inclusive
- **Documentation** — improving setup guides and inline comments

### Before You Start

- Check the [open issues](../../issues) to see if your idea is already being discussed
- For new features or significant changes, **open an issue first** and wait for approval before writing code — this saves everyone time
- Small fixes (typos, broken links, minor layout issues) can be submitted directly as a PR

---

## Branch & Commit Conventions

### Branch Names

```
feat/short-description       # new feature or page
fix/short-description        # bug fix
style/short-description      # visual or CSS changes
docs/short-description       # documentation updates
refactor/short-description   # code restructuring, no behaviour change
```

### Commit Messages

Write commit messages that explain **what** and **why**, not just what file you changed:

```
# Good
feat: add services section to homepage
fix: resolve nav menu overlap on mobile
style: update hero section font size for small screens

# Bad
update index.html
fixed stuff
changes
```

---

## Submitting a Pull Request

1. Make sure your branch is up to date with `main`:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. Test your changes thoroughly on **mobile and desktop** before submitting

3. Push your branch to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```

4. Open a Pull Request against the `main` branch of this repository

5. Fill in the PR description with:
   - **What** you changed
   - **Why** you made the change
   - **Screenshots** of the result on both mobile and desktop
   - Any **known limitations** or follow-up work needed

> PRs submitted without screenshots or a description will be returned without review.

---

## PR Review & Approval

All pull requests are reviewed and approved by the project owner before merging. Here is what to expect:

- **Response time:** PRs are typically reviewed within 3–5 business days
- **Feedback:** You may receive requests for changes — this is normal and part of the process
- **Approval:** Once all requirements are met and feedback is addressed, the PR will be merged
- **Rejection:** PRs that do not meet the requirements or were not discussed in an issue first may be closed

Please be patient and respectful during the review process.

---

## Reporting Issues

Found a bug, a broken layout, or something that doesn't look right? [Open an issue](../../issues/new) and include:

- A clear title describing the problem
- Steps to reproduce it
- The device and browser you were using
- Screenshots or a screen recording if possible

Feature requests are also welcome — label them as `enhancement` when opening.

---

## Contact

**TechSquarers**
- Website: [techsquarers.com](https://techsquarers.com)
- Email: @techsquarers@gmail.com
- GitHub: [@techsquarers](https://github.com/techsquarers)

For contribution-related questions, open an issue rather than emailing directly so the discussion is visible to all contributors.

---

> TechSquarers — Empowering people through technology.
