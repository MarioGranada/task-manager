# AGENTS.md — Task Manager — Projects and Tasks

Compact guide for future OpenCode sessions. It records only the facts an agent is likely to miss or get wrong.

## Quickstart

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies. |
| `npm run dev` | Start Vite at http://localhost:5173. |
| `npm run build` | Verify the production bundle. |
| `npm run lint` | Run ESLint. |

## Requirements

- Node.js 18+.
- npm (a `package-lock.json` is committed).

## Environment

- No environment variables are used.
- `#modal-root` must exist in `index.html` for the modal portal.

## Architecture

- `src/App.jsx` — all project/task state and handlers.
- `src/components/NewProject.jsx` — ref-based form and validation.
- `src/components/Modal.jsx` — imperative dialog portal.
- `src/components/SelectedProject.jsx` — project header and task section.
- `src/components/Tasks.jsx` / `NewTasks.jsx` — task list and input.
- `tailwind.config.js` / `postcss.config.js` — Tailwind setup.

## Commands and build order

- Use `npm run dev` for iteration and `npm run build` before finishing.
- `npm run lint` is the only static check; there are no tests.

## Conventions and gotchas

- The `selectedProjectId` sentinels are meaningful; do not replace `undefined` and `null` with a single falsy check.
- The modal is uncontrolled; it is opened through a ref, not through an `open` prop.
- Tailwind classes only apply to files included in the `content` globs.
- Tasks are filtered by `projectId`; deleting a project leaves its tasks in state.
- Portal content is outside `#root`; global styles must still reach it.

## Memory

- Read `MEMORY.md` first to understand the current status and decisions.
- Before changing behaviour, read `constitution.md` and keep the change aligned with it.
- After a task, update `MEMORY.md` with status, decisions, and mistakes to avoid. Keep it short.
- If a rule becomes permanent, move it into this file instead of leaving it in memory.
- Never store secrets, tokens, or personal data in `MEMORY.md`.
