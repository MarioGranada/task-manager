# Project Constitution — Task Manager — Projects and Tasks

This document defines the non-negotiable foundations for this repository. Read it before adding or changing features.

## Guiding Principles

- **Simplicity first** — prefer the smallest solution that solves the problem. If a change needs a long explanation, it is probably over-engineered.
- **No hardcoded secrets or endpoints** — configuration belongs in environment variables; visual design tokens belong in styles, not in `.env` files.
- **Traceability** — every value, dependency, and route should make its origin and purpose obvious.
- **Debuggability** — fail loudly and visibly; avoid silent fallbacks that hide broken data.
- **Official patterns** — use the documented API of each framework and library before inventing a workaround.
- **Portfolio clarity** — this repository is part of a public portfolio. Code should read as clean, intentional, and easy for a reviewer to follow. As a follow-along project, its purpose is to demonstrate the concepts practised in the course, not to imitate production scale.

## Technology Stack Foundations

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | React 18 + Vite | Minimal setup for a refs/portals exercise. |
| Styling | Tailwind CSS 3 + PostCSS + Autoprefixer | Utility classes keep the focus on component behaviour. |
| State | React `useState` | One state object holds projects, tasks, and the selection. |
| DOM | Refs + portals | Uncontrolled form inputs and a native `<dialog>` modal. |

**Rule of thumb:** a new dependency must solve a concrete problem that the current stack cannot solve cleanly. Justify it in the change that introduces it.

## Core Premises

### 1. Scope

A course project for refs, portals, and state derivation. It is intentionally session-only; persistence, authentication, and collaboration are out of scope.

### 2. Environment Isolation

- This project has no runtime secrets. Do not introduce `.env` files unless a real secret or environment-specific URL appears.
- If configuration is added, use environment variables and document them in the README.
- Never commit keys, tokens, database URLs, or credentials.

### 3. Architecture

- `App.jsx` owns shared project/task state; child components receive data and callbacks.
- Refs are for uncontrolled inputs and imperative modal control, not for derived data.
- Keep the portal target (`#modal-root`) in `index.html`.

### 4. Data and State

- All state is in memory and resets on reload.
- `selectedProjectId` uses `undefined`, `null`, and a number to represent three UI modes.
- Tasks are derived by filtering the flat task array by `projectId`.

### 5. Styling and UX

- Tailwind utility classes are the styling system; shared tokens live in `tailwind.config.js`.
- Keep the stone palette and the sidebar/content split.
- Do not mix in a component library.

### 6. Quality Gates

- `npm run lint` and `npm run build` are the gates.
- Manually test create project, invalid project form, select project, add task, clear task, delete project, empty states, and reload.
- Confirm the modal opens and closes through the imperative handle.

### 7. Deployment

- Build with Vite and publish `dist/` through GitHub Actions.
- Configure the base path for GitHub Pages.
- No server runtime is required.

## What to Avoid

- Adding a backend or state library to a refs/portals exercise.
- Storing derived task lists in state.
- Replacing the sentinel selection values with ambiguous booleans.
- Removing `#modal-root` from `index.html`.
- Using controlled inputs where the exercise is specifically about refs.

## Checklist Before Adding Anything New

- Does this solve a real problem for this project, or am I adding scope for its own sake?
- Is every new value configuration-driven rather than hardcoded?
- Does the change follow the existing folder and naming patterns?
- Is there a clear failure path when data, the network, or the environment is unavailable?
- Have I run the available lint/build/test command and fixed what it reports?
- Did I update `README.md` and `MEMORY.md` if behaviour or setup changed?

## Philosophy Statement

This repository exists to show thoughtful front-end engineering: clear structure, readable code, and deliberate trade-offs. The goal is not to use every tool available, but to make every file explain itself. Simplicity is the feature.
