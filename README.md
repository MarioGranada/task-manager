# Task Manager — Projects and Tasks

A project and task manager built to practise refs, portals, and derived UI state. Projects can be created, selected, and deleted; each project keeps its own task list.

All data lives in React state for the session. The project intentionally avoids a backend and a state library so the component and state patterns stay visible.

> **Follow-along project.** This app was built while following **React — The Complete Guide (Academind / Maximilian Schwarzmüller)**. It is included in the portfolio as a learning exercise, not as a production product. The implementation is my own work based on the course material.

## Live demo

| | |
| --- | --- |
| **Live site** | https://mariogranada.github.io/task-manager/ |
| **Repository** | https://github.com/MarioGranada/task-manager |
| **Portfolio summary** | Projects-and-tasks manager in React + Tailwind built around refs, portals and an imperative native-dialog modal, with per-project task lists and derived UI state. |

## Features

- Sidebar with project creation and selection.
- Project detail view with title, description, and due date.
- Per-project task list with add and clear actions.
- Form validation through refs and an imperative modal.
- Modal rendered with `createPortal` into `#modal-root`.
- Delete-project flow with a confirmation-free immediate action.
- Tailwind CSS layout and utility styling.
- Empty-state views for no project and no tasks.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 + Vite |
| Styling | Tailwind CSS 3 + PostCSS + Autoprefixer |
| State | React `useState` |
| DOM | Refs + portals |

## Project structure

```text
task-manager/
├── src/
│   ├── components/
│   │   ├── ProjectsSidebar.jsx
│   │   ├── NewProject.jsx        # Ref-based form + validation modal
│   │   ├── NoProjectSelected.jsx
│   │   ├── SelectedProject.jsx   # Project header + tasks
│   │   ├── NewTasks.jsx
│   │   ├── Tasks.jsx
│   │   ├── Modal.jsx             # forwardRef + useImperativeHandle + portal
│   │   ├── Input.jsx
│   │   └── Button.jsx
│   ├── App.jsx                   # All state and handlers
│   ├── main.jsx
│   └── index.css
├── index.html                    # Contains #modal-root
├── tailwind.config.js
└── postcss.config.js
```

## Getting started

### Requirements

- Node.js 18+.
- npm (a `package-lock.json` is committed).

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

**Start the development server**

```bash
npm run dev
```

Open http://localhost:5173.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite on port 5173. |
| `npm run build` | Build the app into `dist/`. |
| `npm run preview` | Preview the production build. |
| `npm run lint` | Run ESLint over JS/JSX files. |

## How it works

`App.jsx` owns one state object: `{ selectedProjectId, projects, tasks }`. The sentinel values matter: `undefined` means no project is selected, `null` means the new-project form is open, and a number means a project is selected.

Project and task ids come from `Math.random()`. Tasks store a `projectId`, and the selected project’s tasks are filtered on every render rather than stored separately.

`NewProject` reads title, description, and due date through refs. If any field is empty it opens the modal imperatively; otherwise it calls `onAddProject`.

`Modal` is a `forwardRef` component that exposes `open()` through `useImperativeHandle`. It renders a native `<dialog>` with `createPortal` into `#modal-root`.

`ProjectsSidebar`, `SelectedProject`, and `Tasks` are presentational; they receive data and callbacks from `App`.

## Deployment

- **Live:** `.github/workflows/deploy.yml` builds the app on every push to the default branch and publishes `dist/` (plus a `404.html` SPA fallback) to the `gh-pages` branch, which GitHub Pages serves at https://mariogranada.github.io/task-manager/.
- Target: GitHub Actions can build the Vite app and publish `dist/` to GitHub Pages.
- Set the Vite `base` option to the repository path for a project Pages site.
- No backend, routing, or database is required.

## Notes and limitations

- Projects and tasks are in memory only and reset on reload.
- Ids are random numbers, not stable identifiers; they are fine for a session-only demo.
- Deleting a project does not ask for confirmation.
- The empty-project message contains a typo (“forgot eo enter a value”).
- There are no tests.

---

**Author:** Mario Granada
